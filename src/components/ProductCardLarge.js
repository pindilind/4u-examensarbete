import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStylesLarge = makeStyles({
    cardStylingLarge: {
        display: "flex",
        overfloWrap: "anywhere",
        minWidth: 500,
        maxWidth: 345,
        boxShadow: "none",
        backgroundColor: '#292B28',
        color: '#6AB547',
        marginTop: '1rem',
        padding: '1',
      
        '@media (max-width: 480px)' : {
            minWidth: 300,
        }
    },

    cardMediaStyle: {
        
        
       padding: 5,
       margin: 12,
        height: 220,
        width: 320,
   
        backgroundColor: 'green',

    },

    cardContentStyle: {
        height: 220,
        color: '#6AB547',
    },

    buttonStyle: {
        height: 20,
        display: 'flex',
        justifyContent: 'center',
 
        backgroundColor: '#6AB547',
        color: 'white',
        margin: 4,
    
    }
    
       
  });

export default function ProductCardLarge() {
    const classes = useStylesLarge()

  return (
    <Card className={classes.cardStylingLarge}>
      <CardActionArea>
        <CardMedia className={classes.cardMediaStyle}
          component="img"
          image=""
          alt=""
        />
        <CardContent className={classes.cardContentStyle}>
          <Typography gutterBottom variant="h5" component="div">
            Title
          </Typography>
          <Typography variant="body2">
            A longer description of the Event
          </Typography>
        </CardContent>
        <cardAction>
        <Button className={classes.buttonStyle} >Add to cart</Button>
        </cardAction>
       
      </CardActionArea>
      

       
      
    </Card>
  );
}