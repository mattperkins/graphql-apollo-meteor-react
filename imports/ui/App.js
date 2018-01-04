/* eslint-disable */
import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const App = ({ data }) => <h1>{data.yo}</h1>;

const yoQuery = gql`
  {
    yo
  }
`;

export default graphql(yoQuery)(App);
