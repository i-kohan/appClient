import React from 'react'
import { Query } from 'react-apollo'
import { withStyles } from '@material-ui/core'
import { Message, Loading } from '../../components'

const styles = () => ({
  progress: {
    position: 'absolute',
    top: 70,
    width: '100%',
  },
})

const withQuery = ({ query }) => WrappedComponent => props => (
  <Query query={query}>
    {({ loading, error, data = {} }) => (
      <>
        {loading && (
          <Loading
            type="linear"
            variant="query"
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
          {...props}
        />
      </>
    )}
  </Query>
)

export default ({ query }) => component => withStyles(styles)(withQuery({ query })(component))
