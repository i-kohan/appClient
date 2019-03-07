import React from 'react'
import PropTypes from 'prop-types'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Tabs,
  Tab,
  withStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core'
import { Table, List } from '../../components'

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
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
})

const ExercisesPage = ({
  getPageData,
  viewMode,
  handleViewModeChange,
  data,
  metadata,
  loading,
  classes,
}) => (
  <div className={classes.root}>
    <h1>Exercisess</h1>
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
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="iframe"
              alt="Contemplative Reptile"
              className={classes.media}
              height="140"
              src="https://www.youtube.com/embed/Nw5xaMknvBY?autoplay=1"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
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
