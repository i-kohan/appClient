import gql from 'graphql-tag'

export default gql`
{
  menuItems {
    id
    title
    path
    iconName
    isPublic
  }
}
`
