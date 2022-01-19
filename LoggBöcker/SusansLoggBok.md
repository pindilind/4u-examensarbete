# SUSANS LOGGBOK  📒

### MÅNDAG | 2021-12-27
En ledig dag.

### TISDAG | 2021-12-28
Samlas i Teams kl 09. jag startar upp projektet som Linda startat upp, vi hjälps åt att lösa flertalet felmeddelanden för att till slut få mitt projekt att fungera (tog hela fm).

### ONSDAG | 2021-12-29
Samlas i Teams kl 09

### TORSDAG | 2021-12-30
Eget arbete. Jag fokuserar på backend server och uppdaterar mig på vad skall behövas för att välja...
### MÅNDAG | 2022-01-03
Morgonsamling kl 09 för genomgång och uppstart av veckan. Startade upp projektet i Visual Studio och fick lösa en hel del error, använde 'npm audit fix --force', och installationer av 'dependencies' som jag saknade. Började därefter med att skapa två componenter för vårt produktkort, ett litet och ett större. 

### TISDAG | 2022-01-04
Morgonsamling kl 09 med genomgång av gårdagens arbete och vad vi planerar att göra idag. Vi skickar upp färdig kod till GitHub.
Fm fortsatte jag med modalen för den större produktpresentationen och fick alla delar på plats. Därefter skapade jag ytterligare en component Modal för att få ihop båda produktkorten då genom ett klick på produkten i det mindre kortet skulle öppna det större kortet med mer information och möjlighet att lägga-till-i-varukorgen.  Efter lunch satt vi tillsammans med Startsidan och liveshare på Visual Studio och lade till en "list" med information. Vi gjorde även klart vår loggo 'Event4U' tillsammans i Figma. Sedan fortsatte vi på var sitt håll och mitt issue blev att skapa en json-fil med lite av våra event för att kunna testa produkter innan backend-delen när klar. Hade svårt att hitta rätt fetch-metod för att hämta in datan i json-filen. Får fortsätta imorgon.

### ONSDAG | 2022-01-05
Morgonsamling kl 09 med genomgång av gårdagens arbete och vad vi planerar att göra idag. Vi diskuterade lite om hur vår sida ska se ut och vad vi vill åstadkomma och hur vi ska göra det. Linda känner sig lite osäker med server-delen. Jag fortsatte att försöka hitta lösningen av renderingen av json-data, men kom inte i mål idag heller. På eftermiddagen satt jag med lite scrummaster-arbete och uppdaterade statistik med issues, poäng osv. Nästa steg blir diagrammet. 

### TORSDAG | 2022-01-06
Idag är det röd dag (Trettondagen) och vi tar en ledig dag. Jag satt dock och läste på lite om server-delen och tittade på en turtorial på YouTube för att friska upp minnet. Det känns som jag har lite koll :-o

### FREDAG | 2022-01-07
Morgonsamling kl 09 med genomgång av gårdagens arbete och vad vi planerar att göra idag. Vi skickar upp färdig kod till GitHub. Jag fortsatte att försöka lösa utmaningen att rendera produktlistan från json.filen. Jag lyckas komma nästa hela vägen, då jag får in datan på sidan men sedan tappar den i funktionen. Provade även 'map' på olika sidor och lyckades få in informationen men alla 'event' i samma 'kort'. Jag blir galen... men skam den som ger sig. 
Kl 13-ca 15 hade Henrik föreläsning om hosting som var bra och matnyttigt. Därefter tog jag och Linda ett kort möte och avslutade dagen och veckan. 

### SÖNDAG | 2022-01-09
Satt lite extra för att lösa renderingen av "produkterna" från json-filen. Lyckades lösa det genom att inte använda componenterna ProductCardSmall och ProductCardLarge utan istället skriva koden i UserHomePage - och då fick jag det att funka. Troligtvis har componenten trasslat till det och blivit för inkapslad. Skön känsla att lösa utmaningen.

### MÅNDAG | 2022-01-10
Linda hade ett LIA möte kl 09, så morgonmötet flyttades fram lite. Under tiden satte jag upp ett repository för vår server-del på GitHub, clonade till Fork och startade upp i VisualStudio - och bjöd in Linda. Behöver dock sätta reglerna för 'pullrequest/merge' - Linda får hjälpa mig. Därefter hade vi möte och bestämde då att inte använda mitt "nya" repository för backend utan skapa den i vårt projekt istället och startade upp det i projektet. Vi insåg att båda låg efter med att skriva i dagboken, så vi tog en timme att uppdatera och komma ikapp innan vi fortsätter denna veckan med "server"-delen. Jag skapade två json-filer för Product och för User, och lade till produkter i produkt-filen.

### TISDAG | 2022-01-11
Fm var jag ledig och vi flyttade "Morgonmötet" till kl 13.... Tillsammans lyckades vi lösa renderingen av produkter, då vi egentligen hade rätt kod men "makerequest" skull ha ett stort M. Lägger in datum, tid och pris på productCardSmall. 

### ONSDAG | 2022-01-12
Morgonmöte kl flyttades fram till kl 09.30. Vi livekodade tillsammans och dagens utmaning var att få ut bild i produktkortet, men img-taggen kräver något som vi missat. Lite frustrerande för vi har rätt kod, men vi missar något?!?!

### TORSDAG | 2022-01-13
Morgonmöte kl 09. Jag hade under kvällen igår noterat att vi missat viss data i backend och produkt-filen och vi lade till denna information; kategori, datum, tid och pris. Lade sedan till denna information i det lilla produktkortet. Därefter satte vi dagens mål att få igång en "counter" för funktionen onclick=addProduct där antalet visas i headern vid "varukorg"-iconen, och att valen sparas i localstorage för att senare gå vidare till nästa steg som är Stripe. Under förmiddagen live kodade vi för att hitta lösning, men då vi inte kom vidare fortsatte vi på egen hand fram till lunch. 

### FREDAG | 2022-01-14
Lite senare morgonmöte ... rendera ut produkter från localstorage i varukorgen... live share tillsammans...

### SÖNDAG | 2022-01-16
Satt nästan 6 timmar på söndag och försöka hitta lösningen på att rendera ut innehållet i varukorgen från localStorage. Känns som jag gör rätt men hittar inte rätt keys för att få ut rätt innehåll, är troligtvis innästat och jag hittar inte in till rätt värden. Till slut gav jag upp och la till innehåll i backend och productDB2 och "description" samt länk till youtube för 2 av våra 4 event. Tittade även igenom planeringen och uppdaterade på både Trello och GitHub.

### MÅNDAG | 2022-01-17
Linda skulle komma lite senare så jag börjar jobba med backend och databaserna och lägger till get-endpoint för produkterna, kategorier och user. När Linda ansluter bestämmer vi oss för att börja felsöka på userHomePage, productCardSmall och CartPage, lite rött i vår consol log, som egentligen inte stör outputen men inte ska vara där. Vi bokade även in en handledningstid på torsdag 20/1 kl 13.30 för att visa vår MVP. Vi gick igenom nästa Sprint(3) och satte upp mål för dagen och för veckan. Därefter började vi tillsammans med Stripe/betalfunktionen. Linda skapade vårt konto på Stripe och jag hade förberett backend. Vi jobbade på en lösning att komma vidare från Checkout-knappen till Stripe genom att titta på vårt tidigare Stripe-projekt. Men vi behöver göra om det för React och vi live sharade och kodade tillsammans. Vi fick inte ihop det riktigt och vi avslutade dagen med felsökning av backend då den crashade, till slut testade vi att "släcka" stripe-import/key överst i server.js i backend och då fick vi tillbaka backend. Imorgon fortsätter vi från denna punkt. 


### TISDAG | 2022-01-18
L

### ONSDAG | 2022-01-19
L

### TORSDAG | 2022-01-20
L

### FREDAG | 2022-01-21
L

 {cart.length === 0 && <p>Cart: (empty)</p>}
          {cart.length > 0 && <p>Cart: {cart.toString()}</p>}
          <Button
              onClick={() => {
                  setCart([...cart, ` item ${itemIndex}`]);
                  setItemIndex(itemIndex + 1);
              }}
              >
                  Add to Cart
          </Button>
                  