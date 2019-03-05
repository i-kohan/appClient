import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import {
  withStyles,
  Paper,
  Table as TableMaterial,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
} from '@material-ui/core'
import TablePaginationContainer from './TablePaginationContainer'
import { withLoading } from '../hocs'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
})

const buildRows = (rowsToShow, rows) => rows.map(row => (
  <TableRow key={row._id}>
    {rowsToShow.map(rts => (
      <TableCell>
        {row[rts]}
      </TableCell>
    ))}
  </TableRow>
))

const Table = ({
  classes,
  rows,
  page,
  rowsPerPage,
  rowsToShow,
  count,
  emptyRows,
  handleChangePage,
  handleChangeRowsPerPage,
}) => (
  <Paper className={classes.root}>
    <div className={classes.tableWrapper}>
      <TableMaterial className={classes.table}>
        <TableBody>
          {buildRows(rowsToShow, rows)}
          {emptyRows > 0 && (
            <TableRow style={{ height: 48 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={3}
              count={count}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationContainer}
            />
          </TableRow>
        </TableFooter>
      </TableMaterial>
    </div>
  </Paper>
)

Table.defaultProps = {
  rows: [],
  rowsToShow: [],
}

Table.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  rows: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  rowsToShow: PropTypes.arrayOf(PropTypes.string),
  emptyRows: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
}

export default compose(
  withStyles(styles),
  withLoading,
)(Table)
