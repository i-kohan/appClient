import gql from 'graphql-tag'

export default gql`
{
  exercises {
    name
    description
    id
  }
}
`
