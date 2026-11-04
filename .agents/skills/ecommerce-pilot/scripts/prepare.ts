import { readFileSync, writeFileSync } from 'node:fs';

type Input = {
  synthetic: boolean;
  product: {
    handle: string;
    title: string;
    description: string;
    sku: string;
    priceInclVatCents: number;
    vatBasisPoints: number;
  };
  costs: {
    purchaseCents: number;
    shippingCents: number;
    paymentCents: number;
    returnReserveCents: number;
    desiredContributionCents: number;
  };
  sources: string[];
};

function requireCents(value: number, field: string) {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new Error(`${field} moet een geheel, niet-negatief getal zijn.`);
  }
}

function escapeHtml(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function csvRow(fields: string[]) {
  return fields.map(field => '"' + field.replaceAll('"', '""') + '"').join(',');
}

function run() {
  const [inputPath, outputPath, ...extraArgs] = process.argv.slice(2);
  if (!inputPath || extraArgs.length) {
    throw new Error('Gebruik: node prepare.ts kandidaat.json [shopify-draft.csv]');
  }
  const input: Input = JSON.parse(readFileSync(inputPath, 'utf8').replace(/^\uFEFF/, ''));
  const { product, costs, synthetic, sources } = input;
  if (typeof synthetic !== 'boolean' || !Array.isArray(sources)) {
    throw new Error('Vul synthetic en sources in volgens het voorbeeld.');
  }
  if (!synthetic && (!sources.length || sources.some(source => typeof source !== 'string' || !/^https?:\/\/\S+$/i.test(source)))) {
    throw new Error('Voeg voor een echte kandidaat openbare bronlinks toe.');
  }
  for (const [field, value] of Object.entries({
    priceInclVatCents: product.priceInclVatCents,
    vatBasisPoints: product.vatBasisPoints,
    purchaseCents: costs.purchaseCents,
    shippingCents: costs.shippingCents,
    paymentCents: costs.paymentCents,
    returnReserveCents: costs.returnReserveCents,
    desiredContributionCents: costs.desiredContributionCents
  })) {
    requireCents(value, field);
  }
  if (product.priceInclVatCents === 0 || product.vatBasisPoints > 10000) {
    throw new Error('Vul een positieve prijs en een btw-tarief in basispunten in, bijvoorbeeld 2100 voor 21%.');
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(product.handle) ||
      [product.title, product.description, product.sku].some(value => typeof value !== 'string' || !value.trim()) ||
      [product.title, product.sku].some(value => /^[=+@-]/.test(value.trim()))) {
    throw new Error('Vul een geldige handle, titel, omschrijving en SKU in.');
  }

  const revenueExclVatCents = Math.round(product.priceInclVatCents / (1 + product.vatBasisPoints / 10000));
  const variableCostsCents = costs.purchaseCents + costs.shippingCents + costs.paymentCents + costs.returnReserveCents;
  const contributionBeforeAcquisitionCents = revenueExclVatCents - variableCostsCents;
  const acquisitionRoomCents = contributionBeforeAcquisitionCents - costs.desiredContributionCents;

  if (outputPath) {
    if (synthetic || acquisitionRoomCents < 0) {
      throw new Error('Een importbestand vereist echte invoer en voldoende ruimte voor de gewenste bijdrage.');
    }
    const header = [
      'URL handle', 'Title', 'Description', 'Option1 name', 'Option1 value',
      'SKU', 'Price', 'Published on online store', 'Status'
    ];
    const row = [
      product.handle, product.title, '<p>' + escapeHtml(product.description) + '</p>', 'Title', 'Default Title',
      product.sku, (product.priceInclVatCents / 100).toFixed(2), 'false', 'draft'
    ];
    writeFileSync(outputPath, csvRow(header) + '\n' + csvRow(row) + '\n', { flag: 'wx' });
  }

  console.log(JSON.stringify({
    synthetic, revenueExclVatCents, variableCostsCents, contributionBeforeAcquisitionCents,
    acquisitionRoomCents, meetsDesiredContribution: acquisitionRoomCents >= 0
  }, null, 2));
}

try {
  run();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
