import React from 'react'
import PropTypes from 'prop-types'
import { Table } from '../../components'

const ExercisesPage = ({
  getPageData,
  data,
  metadata,
  loading,
}) => (
  <div>
    <h1>Exercises</h1>
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

ExercisesPage.defaultProps = {
  data: [],
  metadata: {},
}

ExercisesPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({ })),
  getPageData: PropTypes.func.isRequired,
  metadata: PropTypes.shape({
    rowsToShow: PropTypes.arrayOf(PropTypes.string),
    accessor: PropTypes.string,
    count: PropTypes.number,
  }),
}

export default ExercisesPage
