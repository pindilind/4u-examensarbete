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
    height: '100%',
    //bgcolor: 'background.paper',
    bgcolor: 'grey',
    color: 'white',
    border: '2px solid #000',
    
    overflowY: 'hidden',
    overflow: 'auto',
    
    p: 2,
    px: 4,
    pb: 3,

    '@media (max-width: 480px)': {
        maxWidth: 300,

       
      }

    
};

export default function ModalVillkor() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div type="button" onClick={handleOpen}>
                Användarvillkor
            </div>
            <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
            >
                <Box sx={style}>
                    <h5 id="unstyled-modal-title">Event4U - Användarvillkor</h5>
                    <p id="unstyled-modal-description">
                        Nedan följer användarvillkor för Event4U, ett examensarbete för Medieinstitutets utbildning Webbutvecklare för e-handel.
                        Event4U erbjuder digitala events inom olika kategorier för att Underhålla, Utbilda, Utvecklas och Umgås live i realtid eller som play-tjänst.

                        Dessa Användarvillkor reglerar din användning av vår tjänst. I dessa användarvillkor avser Event4U en tjänst att boka biljett/biljetter till events, inklusive alla egenskaper och funktioner, webbplatser och användargränssnitt, liksom allt innehåll och alla programvaror som är kopplade till vår tjänst. Genom att skapa ett användarkonto hos Event4U godkänner du och förbinder du dig att följa dessa villkor.

                        <b>Ditt konto hos Event4U</b>

                        Du samtycker till att ge korrekta uppgifter (såsom ditt riktiga namn, en giltig email-adress och ett telefonnummer som tillhör dig) när du registrerar ett konto hos Event4U. Ditt konto är personligt och kan inte överlåtas till annan part. Vid eventuell otillåten användning av ditt konto samtycker du till att meddela detta till Event4U.

                        Du måste vara 18 år för att skapa ett konto hos Event4U.

                        <b>Ångerrätt</b>

                        I enlighet med distans- och hemförsäljningslagen (2005:59) har du rätt att ångra ditt köp hos Event4U, för att erhålla full återbetalning kräver vi att detta görs senast 5 arbetsdagar före ett liveevent genomförs. För play-tjänsten gäller att den är obrukad vid ångrandet för att återbetalning ska ske.
                        Om du vill nyttja din ångerrätt ombeds du att meddela Event4U att du önskar ångra ditt köp genom att kontakta Event4U’s kundtjänst via mail order@event4u.online. Kontaktinformation finns på https://event4u.online .

                        <b>Betalningsmetoder</b>

                        Event4U använder direktbetalning betaltjänst och det innebär att betalning sker direkt i anslutning till beställning och kravet är endast ett giltigt betalkort.

                        <b>Avslutande</b>

                        Du kan avsluta ditt användarkonto hos Event4U när som helst. Ett avslut görs via ett mail till order@event4u.online där du anger kundnummer och namn. Event4U skickar därefter en bekräftelse via mail, på att ditt konto är avslutat.

                        <b>Pris- och datumändringar</b>

                        Prisändringar kan ske och detta meddelas via vår webbsida https://event4u.online minst 30 dagar innan det träder i kraft. Redan köpta biljetter påverkas inte av eventuella prisjusteringar.

                        <b>Bokningar hos Event4U</b>

                        Tjänsten och allt innehåll som visas via ditt personliga konto är endast för din personliga och icke-kommersiella användning. När du skapar ditt användarkonto hos Event4U beviljar vi dig en begränsad, icke-exklusiv och icke-överlåtbar licens att ta del av vårt utbud. Du samtycker till att inte använda tjänsten för att förmedla biljetter vidare, såväl kommersiellt eller som privat.

                        <b>Bokningsbekräftelser</b>

                        När du bokar biljett hos Event4U får du i direkt anslutning till bokningen en skärmbekräftelse och en bokningsbekräftelse via e-post. Om du inte får en bekräftelse (i form av en bekräftelseskärm eller via e-post) efter det att du gått igenom boknings- och betalningsstegen (eller om du får ett felmeddelande eller avbrott efter betalningsinformation lämnats in) är det ditt ansvar att höra av dig till Event4U via mail order@event4u.online eller försöka igen. Event4U ansvarar inte för förluster (monetära eller på annat sätt) som uppstått efter en misslyckad bokning/betalning - oavsett vad som föranlett den misslyckade bokningen.

                        <b>Avbokningar</b>

                        Du har rätt att ångra ditt köp hos Event4U, för att erhålla full återbetalning kräver vi att detta görs senast 5 arbetsdagar före ett liveevent genomförs. För play-tjänsten gäller att event-länken är obrukad vid ångrandet för att återbetalning ska ske.

                        <b>Inställda och uppskjutna evenemang</b>

                        Ibland avbryts evenemang, och ibland skjuts evenemangen på, av skäl som ligger utanför Event4U’s kontroll. Vid händelse av inställt eller uppskjutet event du bokat biljett till via Event4U kommer vi kontakta dig för att informera om ändringen. Event4U återbetalar för biljett som inte kan nyttjas endast vi de tillfällen eventet ej genomförs.

                        <b>Ansvarsbegränsning</b>

                        Genom att använda Event4U-tjänsten accepterar du alla risker som är förknippade med de evenemang som erbjuds i tjänsten, innan, under och efter det att evenemangen i fråga ägt rum.
                        Det digitala innehållets karaktär gör att störningar, t.ex. på grund av överbelastning, nätverks- och/eller andra kommunikationsfel och/eller problem, kan förekomma som kan innebära att du inte kan ta del av det digitala innehållet. Du är även medveten om och godkänner att tjänsten, och det digitala material som ingår i tjänsten, kan vara otillgängligt under avbrott för underhåll.
                        Det digitala innehållet har producerats vid olika tidpunkter och med olika tekniska förutsättningar. I och med dessa villkor accepterar du därför att det digitala innehållet kan vara av skiftande uppspelningskvalitet, exempelvis beträffande ljud och bild, och att det tillhandahålls i “befintligt skick”.
                        Utöver vad som anges ovan är Event4U ansvar begränsat till att endast omfatta fel i tjänsten som beror på Event4U eller sådan tredje part som Event4U anlitar. Event4U ansvarar t.ex. inte för fel som beror på din utrustning (såsom t.ex. att den inte uppfyller de tekniska förutsättningarna) eller annan utrustning som inte tillhör Event4U eller sådan tredje part som Event4U anlitar.

                        <b>Lösenord och kontoåtkomst</b>

                        Den som skapat konto hos Event4U har tillgång till och kontroll över sitt Event4U-konto. För att behålla kontrollen över kontot och för att förhindra att någon annan får tillgång till kontot (vilket kan inbegripa information om senaste aktivitet på kontot) bör Kontoägaren inte avslöja lösenordet. Du är ansvarig för att uppdatera och upprätthålla riktigheten i den information som du ger oss och som rör ditt konto.

                        <b>Tillämplig lag</b>

                        Dessa Användarvillkor ska regleras av och tolkas i enlighet med lagarna i Sverige. Dessa villkor begränsar inte de konsumentskyddsrättigheter som du kan omfattas av i enlighet med gällande och tvingande lagstiftning i det land där du är bosatt.

                        <b>Kundtjänst</b>

                        Du får kontakt med Event4U lämpligast genom att skicka ett mail till order@event4u.online och vi strävar efter att ge svar inom 24 timmar.

                        <b>Personlig information och samtycke</b>

                        Du kan läsa mer om detta i Event4U’s Data- och Integritetspolicy, som du hittar på vår webbsida https://event4u.online.

                        <b>Immateriella rättigheter</b>

                        Allt material inom Event4U är skyddat av upphovsrättslagen. Upphovsrätt och andra immateriella rättigheter till innehåll och formgivning inom Tjänsten (inklusive text, elektroniska dokument, grafik, bilder och ljud, fotografier, databaser, programvara, programprodukter och tjänster) ägs av Event4U eller en tredje part. Bilder, text eller annat material får inte kopieras utan tillstånd från Event4U. Event4U eller dess samarbetspartners förbehåller sig alla rättigheter till innehåll och programvara på https://event4u.online.

                        Event4U förbehåller sig även rätten att i övrigt stänga av dig från all användning av tjänsten vid brott mot detta avtal.

                        <b>Frågor och Kontaktuppgifter</b>

                        Vänligen maila oss på order@event4u.online om du har några frågor om våra villkor.


                        Senast ändrad: 2 februari 2022
                    </p>
                </Box>
            </StyledModal>
        </>
    );
}
