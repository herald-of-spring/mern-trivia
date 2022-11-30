import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation loginUser($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!) {
  addUser(username: $username, password: $password) { 
    user {
      _id
      username
    }
    token
  }
}
`;

export const UPDATE_USER = gql`
mutation updateUser ($username: String!, $questionsAnswered: Int!, $questionsCorrect: Int!) {
  updateUser(username: $username, questionsAnswered: $questionsAnswered, questionsCorrect: $questionsCorrect) {
    _id
  }
}
`;

