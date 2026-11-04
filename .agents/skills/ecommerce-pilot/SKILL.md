---
name: ecommerce-pilot
description: Vind en vergelijk e-commerceniches en test meerdere producten voor één doelgroep. Gebruik voor een nieuwe nichezoektocht, zoekwoordenonderzoek, Spocket, margeberekening, Shopify-import of het hervatten van een proef. Houd een nichedossier en een dossier per product bij.
---

# Ecommerce Pilot

## Starten of hervatten

Bij een verzoek om een nieuwe niche begin je met **Niche kiezen**. Als de gebruiker al een niche wil testen, gebruik je die als uitgangspunt en controleer je de onderbouwing. Maak `work/<niche-id>/dossier.md` op basis van het [nichedossier](assets/niche.md). Maak per uit te werken product `work/<niche-id>/producten/<product-id>/dossier.md` op basis van het [productdossier](assets/dossier.md). Bewaar de bijbehorende invoer en eventuele CSV in die productmap.

Heropen bij hervatten het bestaande dossier en begin bij de eerstvolgende actie. Hervat een bestaand los productdossier op zijn huidige locatie. Werk het relevante dossier na elke stap bij, ook als iets niet lukt. Noteer bron en datum bij cijfers, en schrijf bij ontbrekende toegang welke handeling of welk gegeven nodig is. Ga intussen door met het openbare onderzoek dat al kan. Houd geheimen, klantgegevens en sessiegegevens buiten de dossiers.

## Niche kiezen

1. Leg bezorgland, beschikbare tijd, eventuele budgetgrens en productvoorkeuren vast. Gebruik Nederland en kleine, stevige, betaalbare artikelen als uitgangspunt als er geen voorkeur is gegeven. Stel bij een open zoektocht standaard maximaal drie niches voor.
2. Onderzoek per niche koopgerichte zoektermen, concrete aanbiedingen, concurrenten en beschikbare leveranciers. Zoek naar twee of drie verschillende producten voor dezelfde doelgroep die in één geloofwaardig assortiment passen. Leg per product vast welk koopprobleem het oplost. Behandel maat-, kleur- en verpakkingsvarianten van hetzelfde artikel als varianten.
3. Vergelijk de niches op signalen van vraag, hoe je de doelgroep kunt bereiken, ruimte voor een gespecialiseerde shop en praktische haalbaarheid. Doe een eerste controle op prijsruimte, levering naar het doelgebied, voorraad, breuk- en retourrisico en beschikbare leveranciers. Leg zoekopdrachten, bronnen, ontbrekende gegevens en afgevallen niches vast.
4. Adviseer één niche met een eerste product en een voorlopige volgorde voor de andere producten. Als minder dan twee verschillende producten kansrijk lijken, zoek verder of zet de niche op *uitzoeken*. Deel het advies met de gebruiker en leg vast welke niche en producten die wil uitwerken.

## Producten testen

Begin met één product, tenzij de gebruiker een gezamenlijke proef wil. Leg vóór elke proef de hypothese, het kanaal, de looptijd, de uitgavenlimiet en het criterium voor doorgaan of stoppen vast. Gebruik bij vervolgproducten waar zinvol hetzelfde kanaal en dezelfde meetmethode. Noteer verschillen in prijs, looptijd of doelgroep bij de vergelijking. Gebruik *onbeslist* als er te weinig verkeer of orders zijn om het resultaat te beoordelen. Werk na elke proef de productvolgorde en volgende actie in het nichedossier bij.

1. **Zoekprofiel.** Leg doelgroep, koopprobleem, verpakkingsgrootte, bezorgland, gewenste herkomst en prijs- of levertijdgrenzen vast. Gebruik Nederland als standaard. Als de gebruiker nog geen product heeft, stel op basis van openbare koopvragen zoektermen voor kleine multipacks met weinig breukrisico op. Noteer voorlopige aannames.
2. **Vraag en concurrentie.** Zoek naar concrete aanbiedingen en koopgerichte zoektermen. Vergelijk waar mogelijk de prijs inclusief bezorging per stuk voor dezelfde verpakkingsgrootte. Noteer zoekvolume, trend, reviews en aantoonbare verkopen apart. Gebruik Keyword Planner alleen als die gegevens beschikbaar zijn. Schrijf op wat de eigen shop voor deze koper beter kan uitleggen of bundelen.
3. **Leveranciers zoeken.** Volg de [Spocket-handleiding](references/spocket-shopify.md). Leg zoektermen, filters, volgorde en peildatum vast zodat de zoekopdracht opnieuw uitvoerbaar is. Gebruik browserbediening als het portaal bereikbaar is. Laat de gebruiker zelf inloggen. Als de catalogus niet toegankelijk is, geef de concrete filterinstellingen en vraag om de productlinks of een beschikbare export. Vergelijk waar mogelijk met een Nederlandse of andere EU-aanbieder. Houd per product maximaal drie leveranciersopties over.
4. **Beslissen.** Controleer per serieuze leveranciersoptie SKU en variant, voorraad, totaalprijs en levertijd voor één en twee verpakkingen naar het gekozen bezorgland, retouradres, orderkoppeling en tracking. Gebruik het [invoervoorbeeld](../../../examples/candidate.json) voor de best onderbouwde optie. Bewaar het als `candidate.json` naast het productdossier en gebruik [prepare.ts](scripts/prepare.ts) voor marge en maximale acquisitiekosten. Leg invoer, uitkomst en herkomst vast. Kies *testen*, *uitzoeken* of *parkeren*. Voor *testen* zijn bekende kosten, een concreet koopargument en één haalbaar kanaal nodig.
5. **Shop voorbereiden.** Maak de producttekst, varianten, prijs en bezorginformatie klaar. Gebruik bij een Spocket-kandidaat de Import List en de productkoppeling uit de handleiding. Gebruik een Shopify-CSV alleen voor een zelfstandig concept zonder vereiste leverancierskoppeling. Controleer bij hervatten of het product al in Shopify staat om dubbele imports te voorkomen.
6. **Toevoegen en afronden.** Volg de importstappen en controleer daarna de Shopify-status, verkoopkanalen, product-ID of handle, varianten en leverancierskoppeling. Leg vast wat feitelijk is aangemaakt, welke controles openstaan en wie de volgende actie doet. Als een import automatisch openbaar kan worden, wacht op expliciete opdracht voor publicatie of gebruik een afgeschermde proefwinkel. Een proefbestelling of advertentie-uitgave vereist afzonderlijke opdracht.

Zie [bronnen en koppelingen](references/integraties.md) voor andere leveranciers, accounts, exports en API’s.
