import gql from 'graphql-tag'

export default gql`
  query CurrentUser {
    currentUser {
      jwt
      username
      email
      id
    }
  }
`
