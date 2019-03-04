import React from 'react'
import PropTypes from 'prop-types'
import {
  withStyles,
  IconButton,
} from '@material-ui/core'
import {
  KeyboardArrowRight,
  KeyboardArrowLeft,
  LastPage as LastPageIcon,
  FirstPage as FirstPageIcon,
} from '@material-ui/icons'


const styles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
})

const TablePagination = ({
  classes,
  count,
  page,
  rowsPerPage,
  theme,
  handleFirstPageButtonClick,
  handleBackButtonClick,
  handleNextButtonClick,
  handleLastPageButtonClick,
}) => (
  <div className={classes.root}>
    <IconButton
      onClick={handleFirstPageButtonClick}
      disabled={page === 0}
      aria-label="First Page"
    >
      {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
    </IconButton>
    <IconButton
      onClick={handleBackButtonClick}
      disabled={page === 0}
      aria-label="Previous Page"
    >
      {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
    </IconButton>
    <IconButton
      onClick={handleNextButtonClick}
      disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      aria-label="Next Page"
    >
      {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
    </IconButton>
    <IconButton
      onClick={handleLastPageButtonClick}
      disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      aria-label="Last Page"
    >
      {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
    </IconButton>
  </div>
)

TablePagination.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  theme: PropTypes.object.isRequired, // eslint-disable-line
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleFirstPageButtonClick: PropTypes.func.isRequired,
  handleBackButtonClick: PropTypes.func.isRequired,
  handleNextButtonClick: PropTypes.func.isRequired,
  handleLastPageButtonClick: PropTypes.func.isRequired,
}

export default withStyles(styles, { withTheme: true })(TablePagination)
