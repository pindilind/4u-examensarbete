import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: '60%',
  //bgcolor: 'background.paper',
  bgcolor: 'grey',
  color: 'white',
  border: 'none',
  p: 2,
  px: 4,
  pb: 3,
};

export default function ModalAboutUs() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <p type="button" onClick={handleOpen}>
        Om Oss
      </p>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h5 id="unstyled-modal-title">Event4U - välj din upplevelse</h5>
          <p id="unstyled-modal-description">
            I dessa tider när vi lever i efterdyningarna av en Corona epidemin med restriktionskrav
            som nu blivit vår vardag, vill vi nu hitta en möjlighet att erbjuda den breda publiken
            möjlighet att ta del av utbudet som erbjuds när det gäller underhållning, utbildning,
            utveckling och att umgås.
            Vi vill därför skapa ett projekt i React med det primära syftet att erbjuda möjligheten
            att boka biljetter till föreläsningar och event som sänder digitalt, live eller inspelat
            (play-tjänst). Detta gör det möjligt för den bredare publiken att uppleva och delta i dessa
            aktiviteter oavsett var och när de äger rum eller oberoende på vart de bor. Genom att samla
            intressanta och aktuella föreläsningar och event till ett projekt, erbjuder vi en tjänst som
            överskådligt presenterar aktuellt utbud i olika kategorier och som enkelt kan bokas och betalas
            via ett konto, en varukorg och en betaltjänst. I kontot som skapas kommer sedan länken till live
            eventet eller till inspelat event finnas tillgängligt.

            Målet är att kunna erbjuda en bredare publik möjligheten att lätt tillgängligt kunna deltaga
            och uppleva olika typer av föreläsningar och events, oavsett var man bor och/eller när och var
            arrangemanget äger rum.
          </p>
        </Box>
      </StyledModal>
    </>
  );
}
