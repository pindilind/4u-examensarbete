import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    cardStyling: {
        display: "flex",
        overfloWrap: "anywhere",
        minWidth: 500,
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
        display: 'flex',
        width: 100,
        height: 100,
        backgroundColor: 'green'
    },

    boxStyle: {
        display: 'flex',
        flexDirection: 'column',
    },

    cardBoxStyle: {
        height: 100,
        marginTop: 0,
    }
       
  });


export default function ProductCardSmall() {
    const classes = useStyles()

  return (
    
      <Card className={classes.cardStyling}>
        <CardMedia className={classes.cardMediaStyle} />

        <Box className={classes.boxStyle}>
       
            <CardContent className={classes.cardBoxStyle}>
                
                <Typography component="div" variant="h6" >
                    Title
                </Typography>
                <Typography component="div">
                    A summary description of the event...
                </Typography>
                
                
            </CardContent>

        </Box>
      </Card>
    
      
    
   
    
  );
}


