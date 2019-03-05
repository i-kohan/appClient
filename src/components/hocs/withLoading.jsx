import React from 'react'
import PropTypes from 'prop-types'
import { Loading } from '../Loading'

const withLoading = (WrappedComponent) => {
  const SubComponentWithProps = ({ loading, ...rest }) => loading
    ? (<Loading />)
    : (<WrappedComponent {...rest} />)

  SubComponentWithProps.propTypes = {
    loading: PropTypes.bool.isRequired,
  }

  return SubComponentWithProps
}

export default withLoading
