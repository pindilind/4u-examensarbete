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
Jag och Linda fortsatte med att få ihop Stripe-kopplingen med LiveShare i Visual Studio Code. Känslan är att vi är nästan där men inte riktit framme... frustrerande. 

### ONSDAG | 2022-01-19
L

### TORSDAG | 2022-01-20
Morgonsamling kl 9 och jag presenterade mitt köp av domännamn och webbhotell MissHosting. Vi försökte även hitta sättet att deploya vår app. Jag blev lite frustrerad att "det ska vara så svårt..." och bad om att få titta på detta lite själv och försöka, ibland behöver jag lite mer lugn och ro och göra i min långsamma takt. Jag fixade det och vår app i vår första MVP ligger nu på https://event4u.online och jag meddelade HEnrik detta. Vi hade bokat handledartid med Henrik kl 13.30, tyvärr hade han missat detta och vi fick kontakt typ 13.40 och fick 5 minuter eftersom nästa grupp stod på tur kl 13.45. Vi hann visa sidan lite och nämna att vi hade lite problem att få till det sista i Stripe. Henrik ville då att vi skulle skicka vår kod till honom för lite hjälp. Linda lyckades fixa det sista efter mötet och jag meddelade Henric att vårt problem hade löst sig. 

### FREDAG | 2022-01-21
Samlades kl 9 och gick igenom vad vi gjort och pushade upp vår kod. Jag mådde inte så bra och kände vid kl 10 att jag behövde vila lite. Jag tittade lite på ... en liten stund. Vi återträffades kl 13 och då insåg jag att jag behövde vila lite mer och vi önskade varandra trevlig helg. Linda skulle fortsätta jobba och jag skulle ta igen denna dag under helgen. 


### LÖRDAG SÖNDAG | 2022-01-22+23
Jobbade med komponenterna i CartPage och OrderPage för att få in tabeller för datan. Jobbade med en test-komponent för att inte förstöra ursprungliga filen. Det flöt på bra och med hårdkodad data funkar dessa komponenter på resp sida. Hittade också lösning på favicon och ändrade filtyp och ändrade färg från vit till svart (för synlighet) på vår logo och lade den som en favicon i public. Linda och jag har ett samtal och Linda visar förslag på ny bakgrund på startsidan och hon pushar upp.
 
### MÅNDAG | 2022-01-24
Morgonmöte kl 09 och jag hämtar ner det som Linda pushade upp igår och pushar upp mitt arbete. Därefter tittar vi på Trello och avslutar Sprint 3 och ser över planen för Sprint 4. Vi fortsätter och titta på GitHub och avslutar även där Sprint 3, några issues är ej klara och flyttas över till Sprint 4. Känslan är trots allt att vi är ganska bra i fas och borde klara uppgifter med de 2 veckor som är kvar till presentation och inlämning. Vi fortsatte att jobba på var sitt håll med saker vi påbörjat och inte var klara med. Jag avslutade mina test-komponenter för OrderPage och CartPage och flyttade över koden till respektive fil och pushade upp på GitHub. Nästa issue är att skapa en funktion som visar våra kategorier i en dropdownlist i headern och som filtrerar produkt efter kategori. Kom på att jag tänkt lite fel, det räcker ju inte att filtrera kategorierna utan dessa måste ju även kopplas till produkterna då det är produkterna som skall visas beroende på vilken kategori som väljs och tillhörighet.Eftermiddagen...

### TISDAG | 2022-01-25
Samling och morgonmöte kl 09... Jag fick sluta kl 14 idag, men satt en stund på kvällen och letade text för data- och integritetspolicy, cookie-info. 

### ONSDAG | 2022-01-26
Morgonmöte kl 9 där vi gick igenom vad vi gjort och sedan pushade vi upp på gitHub. Vi diskuterade lite om att tänka om lite för att hinna och få ihop den app vi tänkt, det innebar att vi lägger både kalenderfunktionen och Nyhetsbrev som en framtida uppgradering. Vi tittade på våra issues/task på GitHub och tog beslutet att försöka göra klart sådant vi börjat med för att kunna bocka av färdiga saker. JAg tog tag i varukorgen som skall färdigställas med att få in valda produkter i tabellen samt en funktion som räknar ut totalsumman och anger hur mycket moms som ingår. Det tog fram till lunch och det var lite bökigt då jag inte fick tag på summan, men vi löste det tillsammans efter lunch med en setAmount. Ibland är det så frustrerande att inte komma i mål utan bara nästan vara i mål. Efter samlingen efter lunch så fortsatte vi att göra klart våra issues och jag tog på mig att fixa data- och integritetspolicy(GDPR), cookie-info och omOss. Vi avslutade dagen med en samling där vi visade vad vi gjort och pushade upp till gitHub. Imorgon ska vi titta på databasen för produkterna och hur vi ska få ihop data vi vill ha och som Stripe accepterar. 

### TORSDAG | 2022-01-27
Morgonmöte kl 09. Idag var vårt mission att titta på vår orderdatabas och uppgifterna vi ville ha in där som även påverkar Stripe. Vi började med Stripe, som egentligen fungerade, men att vi saknar vissa uppgifter som vi vill skicka med. Hela dagen gick till att försöka hitta lösningen, vi kom fram 99% och fick inte rikigt ihop det. Men vi avslutar dagen med att ta tillbaka fungerande kod och se efter en annan lösning. Känslan är att hela dagen är lite bortkastad då vi egentligen inte kommit framåt och fått klart det vi tänkt. Frustration och trötthet!

### FREDAG | 2022-01-28
 Morgonmöte kl 09. Linda hade återigen fått till en lösning på vårt Stripeproblem och vi kunde nu gå vidare. Nu kunde jag då fortsätta med vår OrderPage sida som skall ta in och presentera orderdata. Hela fm jobbade jag med att hämta in information, utmaningen är att uppdatera en "hämtad" komponent från UI och få in vår data på rätt ställen. Lyckades till 90% då vi paketerat ihop en cart som vi skickar upp till Stripe och nu har jag lite svårt att hitta rätt nycklar för att få ut rätt information. Efter lunch tittade jag och Linda tillsammans på detta för att se om vi kunde hitta lösningen, vi lyckaded få ut några data till men fortfarande problem med 'cart'-datan.  

 ### LÖRDAG-SÖNDAG | 2022-01-29 - 30
 Jobbade lite med rapporten och fyllde på där Linda redan börjat, slutförde Introduktion & Mål, Syfte och Målgrupp. Lade till tre utmaningar i Utvärdering & Sammanfattning som Linda och jag får diskutera. Och Lade även till två funktioner för vår fortsatta utveckling, även dessa för diskussion med Linda. Linda hade lagt en länk till Trello men jag la även dit vår GitHub länk till projektplaneringen eftersom vi även jobbat med denna mer på daglig basis. Sedan tog jag en stund och tittade vår vår varukorg igen och funktionen att lägga till och ta bort antalet per rad. Fick det till slut att funka och min ide var rätt, men små justeringar behövde göras - det ser nu ut som det räknar ihop och det blir rätt. Sedan provade jag att lägga till 2 olika produkter, och då blev det lite dubbelt med antalet :-( Tillbaka på ruta ett. 