import React from "react";
import App from "next/app";
import withApollo from "../lib/withApollo";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

class ApolloApp extends App<{ apolloClient: ApolloClient<any> }> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
    )
  }
}

export default withApollo(ApolloApp);