import React from 'react';
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
        color: '#75A488',
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
      backgroundColor: '#75A488',

    },

    cardContentStyle: {
        height: 220,      
        textAlign: "center",
        // color: '#75A488',
        color: 'white',
    },

   

    buttonStyle: {
        height: 20,
        backgroundColor: '#75A488',
        color: 'white',
        margin: 4,
    },

    cardActionStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }
      
  });

export default function ProductCardLarge() {
    const classes = useStylesLarge()

  return (
    <Card className={classes.cardStylingLarge}>
      <CardActionArea className={classes.cardActionStyle}>
        <CardMedia className={classes.cardMediaStyle}
          component="img"
          image=""
          alt=""
        />
        <CardContent className={classes.cardContentStyle}>
         
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Title
          </Typography>
        
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            A longer description of the Event
          </Typography>
        </CardContent>
        <cardAction className={classes.buttonDiv}>
        <Button onClick={""} className={classes.buttonStyle} >Add to cart</Button>
        
        </cardAction>
       
      </CardActionArea>      
    </Card>
  );
}