import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

export default function AboutUs() {
    //const classes = useStyles()
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    
   
    return (
  
      <Card>
           {/* className={classes.cardStyling}> */}
          
        <Box> 
            {/* className={classes.boxStyle}> */}
  
          <CardContent>
               {/* className={classes.cardBoxStyle}> */}
  
            <Typography>
                {/* className={classes.typoStyle}  */}
  
              <Button onClick={handleOpen}>TEXT </Button>
              <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                  TEXT
                <Box>
                     {/* className={classes.boxStyle}> */}
                  
                  <Button onClick={handleClose} >Close</Button>
                </Box>
              </Modal>
  
  
            </Typography>
          {/*   <Typography>
              Datum: {product.price_data.product_data.date} ||
              Klockan: {product.price_data.product_data.time} ||
              Pris: {product.price_data.unit_amount / 100} kr
            </Typography> */}
  
          </CardContent>
  
        </Box>
  
      </Card >
    )
  
  
  }