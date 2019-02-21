import gql from 'graphql-tag'

export default gql`
  mutation Login {
    login(input: {
      username: "1235"
      password: "123"
    }) {
      jwt,
      username
      email
      _id
    }
  }
`
