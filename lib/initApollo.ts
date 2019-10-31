import awsmobile from "../src/aws-exports";
import { NormalizedCacheObject } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import Amplify from "aws-amplify";
import {AUTH_TYPE} from 'aws-appsync';
import { createAuthLink } from "aws-appsync-auth-link";
import fetch from "isomorphic-unfetch";

Amplify.configure({
  ...awsmobile
});

let apolloClient: ApolloClient<any> | null = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  // @ts-ignore
  global.fetch = fetch;
}

function createApolloClient(initialState: NormalizedCacheObject) {
  const ssrMode = !process.browser;

  const url = awsmobile.aws_appsync_graphqlEndpoint;
  const region = awsmobile.aws_appsync_region;

  const auth: any = {
    type: AUTH_TYPE.API_KEY,
    apiKey: awsmobile.aws_appsync_apiKey
  };

  // const auth: any = {
  //   type: AUTH_TYPE.AWS_IAM,
  //   credentials: () => Auth.currentCredentials()
  // };

  const link = ApolloLink.from([
    createAuthLink({ url, region, auth }),
    createHttpLink({ uri: url })
  ]);

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache().restore(initialState || {}),
    ssrMode
  });

  // if (initialState) {
  //   client.cache.restore(initialState);
  // }

  return client;
}

export default function initApollo(initialState: any = {}) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return createApolloClient(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}
