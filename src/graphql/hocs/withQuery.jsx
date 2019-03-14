import React from 'react'
import { Query } from 'react-apollo'
import { withStyles } from '@material-ui/core'
import { compose } from 'recompose'
import PropTypes from 'prop-types'
import { Message } from '../../components'

const styles = () => ({
  progress: {
    position: 'absolute',
    top: 70,
    left: 'calc(50% - 40px)',
    width: '100%',
  },
})

// withQueryProps = {
//   query,
//   variables,
//   notifyOnNetworkStatusChange = false,
// }

const withQuery = queryProps => WrappedComponent => ({ accessor, ...props }) => (
  <Query {...queryProps}>
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
          data={accessor ? data[accessor] || {} : data}
        />
      </>
    )}
  </Query>
)

export default props => component => compose(
  withStyles(styles),
  withQuery(props),
)(component)
