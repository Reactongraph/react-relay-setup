import React from 'react';
import { commitMutation, graphql, createRefetchContainer } from 'react-relay';
import Environment from '../../../relayEnvironment';

const mutation = graphql`
  mutation homeMutation(
    $topic: String!
  ) {
    updateTopic(topic: $topic) {
      topic
    }
  }
`;

class Home extends React.Component {
  state = {
    keyword: '',
  }

  changeKeyword() {
    const variables = { topic: this.state.keyword }
    commitMutation(
      Environment,
      {
        mutation,
        variables,
        onCompleted: (response, errors) => {
          if(response) {
            const { topic } = response.updateTopic
            this.props.relay.refetch();
          } else {
            console.log("error", errors)
          }
        },
        onError: err => console.error(err),
      },
    );
  }

  render() {
    const { name, id, topic } = this.props.author;
    return (
      <div>
        <h2>Author</h2>
        <ul>
            <li>Global ID: {id}</li>
            <li>Email: {name}</li>
            <li>Topic: <b>{topic}</b></li>
            <br />
            <input
              onChange={(e) => this.setState({keyword: e.target.value})}
              value={this.state.keyword}
            />
            <button onClick={() => this.changeKeyword()}>Change Topic</button>
        </ul>
      </div>
    )
  }
}

export default createRefetchContainer(
  Home,
  {
    author: graphql`
      fragment home_author on Author {
        id
        name
        topic
      }
    `,
  },
  graphql`
    query homeRefetchQuery {
      author {
        ...home_author
      }
    }
  `,
);