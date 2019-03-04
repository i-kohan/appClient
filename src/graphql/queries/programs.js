import gql from 'graphql-tag'

export default gql`
  query GetPrograms {
    programs {
      _id
      name
      description
    }
  }
`
