import { withProps, withState, compose } from 'recompose'
import Table from './Table'

export default compose(
  withState('page', 'setPage', 0),
  withState('rowsPerPage', 'setRowsPerPage', 5),
  withProps(props => ({
    handleChangeRowsPerPage: ({ target: { value: rowsPerPage } }) => {
      props.getPageData(props.page, +rowsPerPage)
      props.setRowsPerPage(+rowsPerPage)
    },
    handleChangePage: (event, page) => {
      props.getPageData(page, props.rowsPerPage)
      props.setPage(page)
    },
    emptyRows: props.rowsPerPage - Math.min(props.rowsPerPage, props.rows.length),
  })),
)(Table)
