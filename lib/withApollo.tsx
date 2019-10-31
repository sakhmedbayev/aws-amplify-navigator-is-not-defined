import React from "react";
import initApollo from "./initApollo";
import Head from "next/head";
import { ApolloClient } from "apollo-boost";
import { getDataFromTree } from "@apollo/react-ssr";

export default (
  App: React.ComponentType<any> & { getInitialProps?: Function }
) => {
  return class Apollo extends React.Component {
    static displayName = "withApollo(App)";
    apolloClient: ApolloClient<any>;
    static async getInitialProps(ctx: any) {
      const {
        Component,
        router,
        ctx: { res }
      } = ctx;

      const apollo = initApollo();
      ctx.ctx.apolloClient = apollo;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      if (res && res.finished) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        return {};
      }

      if (!process.browser) {
        try {
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          // console.error("Error while running `getMarkupFromTree`", error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState
      };
    }

    constructor(props: any) {
      super(props);

      this.apolloClient = initApollo(props.apolloState);
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};
