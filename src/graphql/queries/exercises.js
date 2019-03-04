import gql from 'graphql-tag'

export default gql`
query GetExercises {
  exercises {
    name
    description
    _id
  }
}
`
