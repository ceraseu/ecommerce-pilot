# Ecommerce Pilot

Een Codex-skill om een niche te kiezen waarin je meerdere producten voor dezelfde doelgroep kunt testen. De skill vergelijkt niches en helpt daarna per product met Spocket, marge, Shopify en het vastleggen van de testresultaten.

## Een proef starten of hervatten

- Start met `Gebruik $ecommerce-pilot. Ik wil een nieuwe niche beginnen in Nederland waarin ik meerdere producten kan testen.` Voeg een doelgroep, productidee of prijsgrens toe als je die al hebt.
- Ga verder met `Gebruik $ecommerce-pilot en hervat mijn niche vanuit work/<niche-id>/dossier.md.` Codex pakt de eerstvolgende actie op en werkt het dossier bij.

Het [nichedossier](.agents/skills/ecommerce-pilot/assets/niche.md) bevat de zoekrondes, de afweging tussen niches en de volgorde van de proeven. Het [productdossier](.agents/skills/ecommerce-pilot/assets/dossier.md) bevat leveranciersopties, kosten, Shopify-instellingen en resultaten per product.

Codex doet openbaar onderzoek, legt zoekopdrachten vast en rekent met gecontroleerde invoer. Als browserbediening beschikbaar is, kan Codex de vastgelegde filters in een ingelogde Spocket-sessie toepassen. Jij logt zo nodig zelf in. Bij een ontbrekende sessie zet de skill de concrete zoekopdracht en de benodigde productgegevens in het dossier. Zie de [Spocket- en Shopify-handleiding](.agents/skills/ecommerce-pilot/references/spocket-shopify.md) voor de import en controles.

## Op een andere computer

1. Clone deze repo en open de repo als project in Codex.
2. Gebruik Node.js 24. Het script draait zonder npm-installatie.
3. Neem voor een lopende proef de bijbehorende map uit `work/` mee via een privéopslaglocatie. Richt waar nodig op die pc de browsersessie en toegang tot de winkel in.
4. Start of hervat met `$ecommerce-pilot`.

## De margeberekening los draaien

Een snelle proef zonder accounts of sleutels, vanaf de hoofdmap van de repo.

```shell
node .agents/skills/ecommerce-pilot/scripts/prepare.ts examples/candidate.json
```

Dit toont de berekening op basis van fictieve invoer. Voor een echt product kopieer je het voorbeeld naar `work/<niche-id>/producten/<product-id>/candidate.json`, zet je `synthetic` op `false` en vervang je de gegevens door gecontroleerde waarden en bronlinks. Geldbedragen staan in gehele eurocenten. De consumentenprijs is inclusief btw. De orderkosten voer je in op dezelfde basis als de omzet exclusief btw. De retourreserve is het verwachte verlies per bestelling, inclusief eventuele terugbetaling en retourkosten voor zover die elders nog niet zijn verwerkt.

Voor een zelfstandig Shopify-concept kun je een tweede argument met het pad naar de gewenste CSV meegeven. Het script overschrijft geen bestaand bestand. Importeer als nieuw product met een ongebruikte handle en laat de optie om bestaande producten te overschrijven uit. Controleer de SKU, verzendinstellingen en voorraad in Shopify vóór publicatie. Gebruik voor een gekoppeld Spocket-product de Import List van Spocket.

Git bewaart de skill, de handleidingen, de lege dossiersjablonen en een fictief voorbeeld. `work/` wordt door Git genegeerd. Bewaar echte dossiers, exports en leveranciersgegevens in de privéopslag die je ook voor overdracht gebruikt. Houd inloggegevens en API-sleutels apart.

[Bronnen en koppelingen](.agents/skills/ecommerce-pilot/references/integraties.md)
