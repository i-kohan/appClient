import React from 'react'
import { Query } from 'react-apollo'
import { Message } from '../../components/Message'

const withQuery = ({ query }) => WrappedComponent => props => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) {
        return <h1>Loading</h1>
      }
      if (error) {
        return (
          <Message
            isOpen
            message={error.message}
            variant="error"
          />
        )
      }
      return (
        <WrappedComponent data={data} {...props} />
      )
    }}
  </Query>
)

export default withQuery
