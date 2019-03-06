import React from 'react'
import PropTypes from 'prop-types'
import { Table } from '../../components'

const ProgramsPage = ({
  getPageData,
  data,
  metadata,
  loading,
}) => (
  <div>
    <h1>Programs Page</h1>
    <Table
      loading={loading}
      getPageData={getPageData}
      rows={data}
      rowsToShow={metadata.rowsToShow}
      count={metadata.count}
      page={0}
      rowsPerPage={5}
    />
  </div>
)

ProgramsPage.defaultProps = {
  data: [],
  metadata: {},
}

ProgramsPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({ })),
  getPageData: PropTypes.func.isRequired,
  metadata: PropTypes.shape({
    rowsToShow: PropTypes.arrayOf(PropTypes.string),
    accessor: PropTypes.string,
    count: PropTypes.number,
  }),
}

export default ProgramsPage
