import React from 'react'
import PropTypes from 'prop-types'
import {
  Paper,
  Tabs,
  Tab,
  withStyles,
  Button,
} from '@material-ui/core'
import { Table, Card, Dialog, Stepper } from '../../components'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  tabsContainer: {
    width: 400,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  cardList: {
    display: 'flex',
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  execiseHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

const ExercisesPage = ({
  isDialogOpened,
  toggleDialog,
  getPageData,
  viewMode,
  handleViewModeChange,
  handleCreateExercise,
  data,
  metadata,
  loading,
  classes,
}) => (
  <div className={classes.root}>
    <Dialog
      isDialogOpened={isDialogOpened}
      toggleDialog={toggleDialog}
      renderContent={() => ( // TODO no render prop
        <Stepper />
      )}
    />
    <h1>Exercisess</h1>
    <div className={classes.execiseHeader}>
      <Paper square className={classes.tabsContainer}>
        <Tabs
          className={classes.tabs}
          variant="fullWidth"
          value={viewMode}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleViewModeChange}
        >
          <Tab label="Table mode" value="table" />
          <Tab label="List Mode" value="list" />
        </Tabs>
      </Paper>
      <Button onClick={() => toggleDialog(true)}>
          Create Exercise
      </Button>
      <Button onClick={() => handleCreateExercise('Ad', 'hello')}>
        Cr
      </Button>
    </div>

    {viewMode === 'table' ? (
      <Table
        loading={loading}
        getPageData={getPageData}
        rows={data}
        rowsToShow={metadata.rowsToShow}
        count={metadata.count}
        page={0}
        rowsPerPage={5}
      />
    ) : (
      <div className={classes.cardList}>
        {data.map(i => (
          <Card entity={i} />
        ))}
      </div>
    )}
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
  classes: PropTypes.object.isRequired, // eslint-disable-line
}

export default withStyles(styles)(ExercisesPage)
