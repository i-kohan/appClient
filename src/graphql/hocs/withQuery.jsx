import React from 'react'
import { Query } from 'react-apollo'
import { withStyles } from '@material-ui/core'
import { compose } from 'recompose'
import { Message, Loading } from '../../components'

const styles = () => ({
  progress: {
    position: 'absolute',
    top: 70,
    left: 'calc(50% - 40px)',
    width: '100%',
  },
})

const withQuery = ({ query }) => WrappedComponent => props => (
  <Query query={query}>
    {({
      loading,
      error,
      client,
      data = {},
    }) => (
      <>
        {loading && (
          <Loading
            type="circular"
            className={props.classes.progress} // eslint-disable-line
          />
        )}
        {error && (
          <Message
            isOpen
            message={error.message}
            variant="error"
          />
        )}
        <WrappedComponent
          loading={loading}
          error={error}
          data={data}
          client={client}
          {...props}
        />
      </>
    )}
  </Query>
)

export default ({ query }) => component => compose(
  withStyles(styles),
  withQuery({ query }),
)(component)
