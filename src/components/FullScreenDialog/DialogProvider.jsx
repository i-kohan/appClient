import React from 'react'
import DialogContainer from './DialogContainer'

const DialogContext = React.createContext()

export class DialogProvider extends React.Component {
  
  state = {
    isOpen: false,
    title: '',
  }

  setQuery = (query) => {
    this.query = query
  }

  openDialog = () => {
    this.setState({ isOpen: true })
  }

  closeDialog = () => {
    this.setState({ isOpen: false })
  }
  
  render() {
    const { isOpen } = this.state
    const { children } = this.props
    return (
      <DialogContext.Provider
        value={{
          isOpen: isOpen,
          openDialog: this.openDialog,
          closeDialog: this.closeDialog,
          setQuery: this.setQuery,
        }}
      >
          <DialogContainer 
            query={this.query}
          />
        )}
        {children}
      </DialogContext.Provider>
    )
  }
}

export const DialogConsumer = DialogContext.Consumer
