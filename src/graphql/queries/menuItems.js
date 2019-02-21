import gql from 'graphql-tag'

export default gql`
{
  menuItems {
    _id
    title
    path
    iconName
    isPublic
  }
}
`
