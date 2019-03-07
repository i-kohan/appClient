import React from 'react'
import PropTypes from 'prop-types'
import {
  GridList,
  GridListTile,
  withStyles,
} from '@material-ui/core'

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'inherit',
  },
  gridList: {
    width: '100%',
  },
})

const List = ({ classes, children, cellHeight, cols, tileCols }) => (
  <div className={classes.root}>
    <GridList cellHeight={cellHeight} className={classes.gridList} cols={cols}>
      {React.Children.map(children, ch => (
        ch
      ))}
    </GridList>
  </div>
)

List.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
}

export default withStyles(styles)(List)
