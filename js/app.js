import 'todomvc-common';

import React from 'react';
import ReactDOM from 'react-dom';

import { QueryRenderer, graphql } from 'react-relay';
import Environment from '../relayEnvironment';

import Home from './components/home';

ReactDOM.render(
  <QueryRenderer
    environment={Environment}
    query={graphql`
      query appQuery {
        author {
          id
          name
          topic
        }
      }
    `}
    variables={{}}
    render={({error, props}) => {
      if (props) {
        const { author } = props
        return author ? <Home author={author} /> : <div>no data</div> ;
      } else {
        return <div>Loading</div>;
      }
    }}
  />,
  document.getElementById('root'),
);