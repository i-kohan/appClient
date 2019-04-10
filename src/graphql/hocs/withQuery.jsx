import React from 'react'
import { Query } from 'react-apollo'
import { Message } from '../../components'

const mapProps = (queryProps, props) => {
  const query = typeof queryProps.query === 'function' ? queryProps.query(props) : queryProps.query
  return {
    ...props,
    query,
    skip: !query,
  }
}

const withQuery = queryProps => WrappedComponent => (props = {}) => {
  const qProps = mapProps(queryProps, props)
  if (!qProps.query) {
    return null
  }
  return (
    <Query {...qProps}>
      {({
        loading,
        error,
        client,
        data = {},
        fetchMore,
        networkStatus,
      }) => (
        <>
          {error && (
            <Message
              isOpen
              message={error.message}
              variant="error"
            />
          )}
          <WrappedComponent
            {...props}
            loading={loading}
            client={client}
            fetchMore={fetchMore}
            networkStatus={networkStatus}
            data={props.accessor ? data[props.accessor] || {} : data}
          />
        </>
      )}
    </Query>
  )
}

export default withQuery
