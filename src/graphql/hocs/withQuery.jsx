import React from 'react'
import { Query } from 'react-apollo'
import { Message, Loading } from '../../components'

const withQuery = ({ query }) => WrappedComponent => props => (
  <Query query={query}>
    {({ loading, error, data = {} }) => {
      if (loading) {
        return (
          <Loading />
        )
      }
      return (
        <>
          {error && (
            <Message
              isOpen
              message={error.message}
              variant="error"
            />
          )}
          <WrappedComponent data={data} {...props} />
        </>
      )
    }}
  </Query>
)

export default withQuery
