import gql from 'graphql-tag'

export default gql`
  mutation Login($input: UserLoginInput!) {
    login(input: $input) {
      id
      username
      jwt
      email
    }
  }
`
