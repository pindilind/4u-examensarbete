import React from 'react';
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

export default function CookieInfo() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  
  const handleClose = () => setOpen(false);

  return (
    <>
      <p type="button" onClick={handleOpen}>
        Om Cookies
      </p>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h5 id="unstyled-modal-title">Event4U - Information om Cookies</h5>
          <p id="unstyled-modal-description">


            <h3>På vår webbsida används cookies </h3>

            <h3>Vad är en cookie? </h3>

            En cookie är en liten textfil som skickas från vår webbserver och som sparas av din webbläsare.

            <b>Syftet med cookies</b>

            Vi använder cookies för att:

            * Säkerhetsställa att den information då sparar på webbplatsen inte försvinner för varje gång du besöker den.
            * Hjälpa dig att hålla reda på vilka personligheter du lagt i favoriter.
            * Anpassa våra tjänster efter de användarpreferenser du angivit.
            * Räkna antalet användare och trafik. Genom att förstå hur webbplatsen används kan vi utveckla och förbättra den.
            * Anpassa våra tjänster så att du får reklam som är relevant för dig.

            <b>Så kan du undvika cookies</b>

            Vill du inte acceptera cookies kan du ställa in din webbläsare så att du automatiskt nekar till lagring av cookies eller informeras varje gång en webbplats begär att få lagra en cookie. I din webbläsare kan du också radera tidigare lagrade cookies. Se webbläsarens hjälpsidor för mer information.

            Väljer du att inte acceptera cookies kan vissa funktioner på webbplatsen få begränsad funktionalitet.

            För mer information om cookies se www.pts.se/cookies

            <b>Ansvarig utgivare </b>

            Linda Gustafsson & Susan Isaksson
            Event4U
          </p>
        </Box>
      </StyledModal>
    </>
  );
}