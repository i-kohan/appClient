import React from 'react'
import PropTypes from 'prop-types'
import Linear from './Linear'
import Circular from './Circular'

const LOADING_TYPES = {
  circular: Circular,
  linear: Linear,
}

const LoadingContainer = ({
  className,
  type,
  variant,
  ...props
}) => {
  const Component = LOADING_TYPES[type]
  return (
    <Component
      className={className}
      variant={variant}
      {...props}
    />
  )
}

LoadingContainer.defaultProps = {
  className: '',
  type: 'circular',
  variant: '',
}

LoadingContainer.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['circular', 'linear']),
  variant: PropTypes.oneOf(['determinate', 'query', 'indeterminate', '']),
}

export default LoadingContainer
