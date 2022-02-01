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
  width: 400,
  //bgcolor: 'background.paper',
  bgcolor: 'black',
  color: 'white',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

export default function DataIntegritetsPolicy() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <p type="button" onClick={handleOpen}>
        Data- och Integritetspolicy

      </p>

      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h5 id="unstyled-modal-title">Event4U - DATA- OCH INTEGRITETSPOLICY </h5>
          <p id="unstyled-modal-description">
            Giltig från och med 2018-05-22 (senast uppdaterad 2020-01-26)

            Event4U har erfarenhet av att lagra och hantera data samt information om våra användare/medlemmar
            och kunder. Det är naturligtvis viktigt för oss att du känner förtroende för att dessa uppgifter
            hanteras på ett tryggt och bra sätt.

            Event4U kommer att inhämta ditt samtycke innan vi påbörjar behandling av dina personuppgifter som enligt lagstiftningen kräver ditt samtycke. Du måste vara över 18 år för att lämna personuppgifter till oss. Om det kommer till vår kännedom att vi samlat in personuppgifter om en person under 18 år vidtar vi åtgärder för att ta bort informationen så snart som möjligt. De personuppgifter som registreras via hemsidan, eller på annat sätt förmedlas till Event4U, säljs aldrig till tredje part i kommersiellt syfte.

            Ansvarig för behandlingen av dina personuppgifter är Event4U. Behandling av personuppgifter sker i enlighet med bestämmelserna i den svenska integritetsskyddslagstiftningen och dataskyddsreformen (GDPR) som träder i kraft inom EU den 25 maj 2018. Läs igenom denna integritetspolicy noggrant och om du har några frågor kan du mejla till oss på Event4U på order@event4u.online

            Nedan kan du läsa mer om hur vi hanterar dina personuppgifter och du är hjärtligt välkommen att
            maila oss på order@event4u.online om du har frågor, vill veta mer om hur vi hanterar dina uppgifter, uppdatera dina uppgifter eller avsluta ditt medlemskonto.

            Varför ber vi om dina personuppgifter?
            Syftet med att du ger oss mer information om dig själv är att Event4U vill ge dig som
            användare största möjliga nytta och bästa upplevelse när du använder våra digitala tjänster.
            Vi behöver dessutom dina uppgifter för att kunna tillhandahålla våra digitala tjänster på det sätt vi utlovar.

            Vilka uppgifter samlar vi in?
            När du besöker/använder våra digitala tjänster så kan vi komma att samla in uppgifter om dig som t ex.
            namn, e-postadress, telefonnummer, information om din användning och köphistorik etc. Dessa
            uppgifter lämnas i samband med att du skapar ett användarkonto eller använder våra digitala tjänster.

            När det gäller tekniska data om de enheter du använder för att få tillgång till Event4U’s
            digitala tjänster, däribland IP-adress, unikt enhets-ID, typ av webbläsare och cookieinformation etc.
            så används informationen endast i analytiskt syfte och aldrig på individnivå. Informationen används
            heller aldrig tillsammans med andra data och kan därför inte kopplas till en unik person.

            Vi använder dina personuppgifter för följande ändamål:
            1. För att vi ska kunna tillhandahålla den/de individanpassade digitala tjänster vi erbjuder.
            2. För att kunna kommunicera med dig.
            3. För utskick som görs via nyhetsbrev, mejl och sms, där du kan välja att avsluta fler utskick via en länk
            som finns i varje utskick som görs.
            5. För att kunna analysera och få mer kunskap om användandet av våra digitala tjänster och därmed
            ges möjlighet att vidareutveckla och förbättra våra digitala tjänster och erbjudanden till dig och
            andra användare.

            Vem delar vi dina personuppgifter med?
            I huvudsak så kommer vi endast att utge delar av dina personuppgifter till eventarrangören, utöver detta så kommer vi generellt inte att utlämna dina personuppgifter till tredje part, men om så skulle ske så genomförs utlämnandet i enlighet med denna integritetspolicy. Om denna tredje part väljer att spara de uppgifter vi lämnar ut om dig så är det denna tredjeparts ansvar att hantera dina uppgifter enligt deras allmänna villkor och sekretesspolicy. Event4U’s villkor och integritetspolicy gäller endast för de användare/medlemmar som finns registrerade i Event4U’s digitala tjänster.

            Vi kan komma att lämna ut nödvändig information till myndigheter såsom polisen, skatteverket eller
            andra myndigheter som du godkänt att vi får lämna sådan information till, eller som vi enligt lag
            måste lämna ut information till.

            Hur lagras dina personuppgifter?
            Event4U värnar om en hög säkerhet för dina personuppgifter och vidtar lämpliga tekniska
            och organisatoriska säkerhetsåtgärder för att skydda dina personuppgifter ifrån obehörig åtkomst,
            ändring, spridning eller förstörelse.
            Som policy raderar vi alla personuppgifter 24 månader efter att du senast använt våra digitala
            tjänster. Användande av våra tjänster innefattar användandet av funktioner på webbplatsen samt ett
            aktivt klick i något av våra utskick via mejl eller sms.
            Event4U
          </p>
        </Box>
      </StyledModal>
    </div>
  );
}