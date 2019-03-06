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

const withQuery = queryProps => WrappedComponent => props => (
  <Query {...queryProps}>
    {({
      loading,
      error,
      client,
      data = {},
      fetchMore,
      networkStatus,
    }) => {
      const SubComponent = ({ accessor, ...restProps }) => (
        <WrappedComponent
          networkStatus={networkStatus}
          loading={loading}
          fetchMore={fetchMore}
          error={error}
          data={accessor ? data[accessor] || {} : data}
          client={client}
          {...restProps}
        />
      )

      SubComponent.propTypes = {
        accessor: PropTypes.string,
      }

      SubComponent.defaultProps = {
        accessor: null,
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
          <SubComponent {...props} />
        </>
      )
    }
  }
  </Query>
)

export default props => component => compose(
  withStyles(styles),
  withQuery(props),
)(component)
