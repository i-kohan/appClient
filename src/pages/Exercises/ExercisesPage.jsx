import React from 'react'
import { Table } from '../../components'

const ExercisesPage = () => (
  <div>
    <h1>Exercises</h1>
    <Table
      rows={[
        {
          id: 1,
          name: 'Hello',
          calories: 12,
          fat: 32,
        },
        {
          id: 2,
          name: 'Hello',
          calories: 12,
          fat: 32,
        },
        {
          id: 3,
          name: 'Hello',
          calories: 12,
          fat: 32,
        },
        {
          id: 4,
          name: 'Hello',
          calories: 12,
          fat: 32,
        },
      ]}
      rowsPerPage={3}
      page={0}
    />
  </div>
)

export default ExercisesPage
