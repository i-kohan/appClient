import { withProps } from 'recompose'
import Table from './Table'

export default withProps(({ rowsPerPage, rows, page }) => ({
  handleChangeRowsPerPage: (event) => {
    console.log(event.target.value)
  },
  handleChangePage: (event, p) => {
    console.log(p)
  },
  emptyRows: rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage),
}))(Table)
