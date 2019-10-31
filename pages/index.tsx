import React from "react";
// import { gql } from "apollo-boost";
// import { useQuery } from "react-apollo-hooks";
import { useQuery } from "@apollo/react-hooks";

import { listPosts } from "../src/graphql/queries";
import { ListPostsQuery, ListPostsQueryVariables } from "../src/API";
import gql from "graphql-tag";
// import { useListPostsQuery } from "@teloscom/ecom-cntrls";

export default function Apollo() {
  const { loading, error, data } = useQuery<
    ListPostsQuery,
    ListPostsQueryVariables
  >(gql(listPosts));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <pre>
        <code>Got an error</code>
      </pre>
    );
  }

  if (data && data !== null) {
    return (
      <div>
        {data &&
          data.listPosts &&
          data.listPosts.items &&
          data.listPosts.items.map(post => (
            <div key={post ? post.id : 1}>{post && post.name}</div>
          ))}
      </div>
    );
  }
}
