# Black Elephant — contentoverdracht voor Claude

Momentopname: 20 november 2026. Bron: ontwikkelbranch black-elephant-homepage-refinement, commit 24ee6b5e8734101dde7b150c96f83c39b7fa35da. Pull request: https://github.com/197701010/black-elephant-site/pull/1.

## Wat dit pakket bevat
Alle 31 gewijzigde bestanden uit de ontwikkelbranch, in de oorspronkelijke mappenstructuur. Daarnaast de bestaande Prometheus-pagina en Over-pagina als inhoudelijke referentie. De HTML bevat de werkelijke teksten, bronverwijzingen, reflectievragen en de inline interactieve componenten; geen samenvattingen of nieuwe vervangende teksten. CSS, gedeelde JS, sitemap en QA-script zijn ondersteunend opgenomen. Het is een overdrachtspakket, geen volledig zelfstandig te hosten website: ongewijzigde bestanden en overige assets ontbreken.

## Opdracht aan Claude
Integreer deze inhoud in de bestaande Black Elephant website. Behoud de premium cinematografische identiteit en de bestaande inschrijf- en AI-checkroutes. Gebruik de teksten uit dit pakket als actuele redactionele basis; behoud commerciële afspraken en bestaande functionaliteit. Voer geen publicatie uit voordat de eigenaar akkoord geeft.

## Inhoud
- index.html: homepage en nieuwe positionering, drie werelden, introductie methode.
- methode/index.html: Narrative Diagnostics en interactief Narrative Prism (dilemma, verhaal, perspectief, lens).
- academy/index.html: Academy en propositie.
- academy/proefles/index.html: begeleide gratis proefles Inanna.
- academy/reis/index.html: negen modules, verdeeld over Ontwaken, Herinneren en Worden.
- academy/reis/*/index.html: negen conceptlessen met reflectie, tegenlezing, praktijkopdracht, groepsopdracht en export.
- library/index.html: verhalenoverzicht en zoekfilters.
- library/*/index.html: tien verhaalpagina's inclusief bestaande Prometheus.
- library/atlas/index.html: interactieve Story Atlas met vijf thema's en tien verhalen.
- practice/index.html, contact/index.html, over/index.html: aanbod, contact en context.
- assets/be/be.css, assets/be/site.js: gedeelde wijzigingen.
- qa/check_site.py, sitemap.xml: controle en indexering.

## Redactionele en technische status
De lessen zijn concepten, niet een definitief betaald product. Bronvermeldingen vereisen finale onafhankelijke controle, evenals de volledigheid van de verhalen. De huidige beelden zijn voorlopig; vervang met eigen cinematografisch beeldmateriaal waar nodig. Verhalende diagnostiek is een reflectiemethode, geen wetenschappelijk gevalideerde diagnose. Het verdienmodel, toegangsbeheer en betrouwbare live preview zijn nog niet afgerond. Test desktop, mobiel, keyboard, inschrijvingsroutes, formulieren en legacy redirects vóór lancering. Er is geen volledige browser- of end-to-end test afgerond. Nieuwe leerpagina's bevatten geen account of server-side reflectieopslag.

Kernzin: Oude wijsheid voor een wereld die nog niet bestaat.
The School for the Future. The future begins with remembering.
Methode: Verplaatsen, Doorzien, Terugkeren. Het verhaal staat centraal. Dezelfde werkelijkheid, andere ogen.

De volledige originele ontwikkelwebsite inclusief bestaande assets is afzonderlijk te downloaden via https://github.com/197701010/black-elephant-site/archive/24ee6b5e8734101dde7b150c96f83c39b7fa35da.zip.
