import React from 'react'
import PropTypes from 'prop-types'
import {
  withStyles,
  Card as CardMaterialUI,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core'

const styles = () => ({
  card: {
    maxWidth: 345,
    marginLeft: 40,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
})

const Card = ({ classes, entity }) => (
  <CardMaterialUI className={classes.card}>
    <CardActionArea>
      <CardMedia
        component="iframe"
        alt="Contemplative Reptile"
        className={classes.media}
        height="140"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {entity.name}
        </Typography>
        <Typography component="p">
          {entity.description}
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
  </CardMaterialUI>
)

Card.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  entity: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    media: PropTypes.shape({
      src: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

export default withStyles(styles)(Card)
