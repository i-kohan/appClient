import React from 'react'
import PropTypes from 'prop-types'
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

const Table = ({
  classes,
  rows,
  page,
  rowsPerPage,
  emptyRows,
  handleChangePage,
  handleChangeRowsPerPage,
}) => (
  <Paper className={classes.root}>
    <div className={classes.tableWrapper}>
      <TableMaterial className={classes.table}>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
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
              count={rows.length}
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
  page: 0,
  rowsPerPage: 5,
  rows: [],
}

Table.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  rows: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  emptyRows: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
}

export default withStyles(styles)(Table)
