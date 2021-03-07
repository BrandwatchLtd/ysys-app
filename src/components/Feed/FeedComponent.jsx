import React, {useEffect} from 'react'
import './FeedComponent.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  
// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = (props) => {
  
  function renderList(){
    if (props.houses.length >0) {return props.houses.map(house =>{
      return <Card className={classes.root}>
      <CardActionArea>
          <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {house.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
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
    })}
    return null
  }

  

  
  const classes = useStyles();
console.log(props)

  return (
    
     <div>
        {renderList() }

    </div>
  );
};   

/*{ TODO - build up a list of results }*/
        /*{ TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards }*/