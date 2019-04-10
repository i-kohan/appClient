import React from 'react'
import { DialogConsumer } from './DialogProvider'
import { compose, withProps } from 'recompose'
import { withQuery } from '../../graphql/hocs'
import Dialog from './Dialog'

const DialogContainer = props => (
  <DialogConsumer>
    {({ isOpen, closeDialog }) => (
      <Dialog
        {...props}
        isOpen={isOpen}
        closeDialog={closeDialog}
      />
    )}
  </DialogConsumer>
)

export default compose(
  withProps({ accessor: 'exerciseCreationForm' }),
  withQuery({ query: props => props.query }),
)(DialogContainer)
