import React from 'react';
import { commitMutation, graphql } from 'react-relay';
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

export default class Home extends React.Component {
  state = {
    keyword: '',
    topic: '',
  }

  componentWillMount() {
    const { topic } = this.props.author
    this.setState({ topic })
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
            this.setState({ topic, keyword: '' });
          }
        },
        onError: err => console.error(err),
      },
    );
  }

  render() {
    const { name, id } = this.props.author;
    const { topic } = this.state;
    return (
      <div>
        <h2>Author</h2>
        <ul>
            <li>Global ID: {id}</li>
            <li>Name: {name}</li>
            <li>Topic: <b>{topic}</b></li>
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