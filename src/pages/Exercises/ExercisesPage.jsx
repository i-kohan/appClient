import React from 'react'
import PropTypes from 'prop-types'
import { Table } from '../../components'

const ExercisesPage = ({
  getPageData,
  exercises,
  metadata,
  count,
  loading,
}) => (
  <div>
    <h1>Exercises</h1>
    <Table
      loading={loading}
      getPageData={getPageData}
      rows={exercises}
      rowsPerPage={5}
      rowsToShow={metadata}
      count={count}
      page={0}
    />
  </div>
)

ExercisesPage.defaultProps = {
  exercises: [],
  metadata: [],
}

ExercisesPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  exercises: PropTypes.arrayOf(PropTypes.shape({ })),
  getPageData: PropTypes.func.isRequired,
  metadata: PropTypes.arrayOf(PropTypes.string),
}

export default ExercisesPage
