import gql from 'graphql-tag'

export default gql`
  mutation Login($input: UserLoginInput!) {
    login(input: $input) {
      _id
      username
      jwt
      email
    }
  }
`
