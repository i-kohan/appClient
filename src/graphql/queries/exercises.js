import gql from 'graphql-tag'

export default gql`
query GetExercises($page: Int, $rowsPerPage: Int) {
  exercises(page: $page, rowsPerPage :$rowsPerPage) {
    metadata
    count
    exercises {
      _id
      name
      description
      createdAt
    }
  }
}
`
