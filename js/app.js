import React from 'react';
import ReactDOM from 'react-dom';

import { QueryRenderer, graphql } from 'react-relay';
import Environment from '../relayEnvironment';

import Home from './components/home';

const query = graphql`
  query appQuery {
    author {
      ...home_author
    }
  }
`;

ReactDOM.render(
  <QueryRenderer
    environment={Environment}
    query={query}
    variables={{}}
    render={({error, props}) => {
      if (props) {
        const { author } = props;
        return author ? <Home author={author} /> : <div>No data</div>;
      } else {
        return <div>Loading</div>;
      }
    }}
  />,
  document.getElementById('root'),
);
