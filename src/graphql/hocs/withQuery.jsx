import React from 'react'
import { Query } from 'react-apollo'
import { withStyles } from '@material-ui/core'
import { compose } from 'recompose'
import { Message } from '../../components'

const styles = () => ({
  progress: {
    position: 'absolute',
    top: 70,
    left: 'calc(50% - 40px)',
    width: '100%',
  },
})

const withQuery = ({
  query,
  variables,
  notifyOnNetworkStatusChange = false,
}) => WrappedComponent => props => (
  <Query
    query={query}
    variables={variables}
    notifyOnNetworkStatusChange={notifyOnNetworkStatusChange}
  >
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
          networkStatus={networkStatus}
          loading={loading}
          fetchMore={fetchMore}
          error={error}
          data={data}
          client={client}
          {...props}
        />
      </>
    )
  }
  </Query>
)

export default props => component => compose(
  withStyles(styles),
  withQuery(props),
)(component)
