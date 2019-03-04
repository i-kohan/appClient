import { withProps } from 'recompose'
import TablePagination from './TablePagination'

export default withProps(props => ({
  handleFirstPageButtonClick: (event) => {
    props.onChangePage(event, 0)
  },
  handleBackButtonClick: (event) => {
    props.onChangePage(event, props.page - 1)
  },
  handleNextButtonClick: (event) => {
    props.onChangePage(event, props.page + 1)
  },
  handleLastPageButtonClick: (event) => {
    props.onChangePage(
      event,
      Math.max(0, Math.ceil(props.count / props.rowsPerPage) - 1),
    )
  },
}))(TablePagination)
