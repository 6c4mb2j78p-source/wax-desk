// Weekly card market research snapshot.
// Source: Manual research (Notion Card Market Scout agent blocked by Business plan entitlement), week of 2026-11-23.
// No card-ledger repo exists; written to 6c4mb2j78p-source/wax-desk as the fallback data file.
// Replaces the prior week's data.
// Prices from TCGplayer, eBay solds, PokeInvest, SlabPing as of 2026-11-23. Research only, not advice. Verify live quotes.

export const researchWeek = "2026-11-23";
export const asOf = "2026-11-23";

export const cardMarketRows = [
  {
    card: "30th Celebration Elite Trainer Box",
    type: "SEALED",
    lastSoldPrice: "110.00",
    soldDate: "2026-11-22",
    source: "eBay/TCGplayer median",
    psa10Population: "N/A",
    populationTrend: "N/A",
    priceTrend6mo: "Down from ~180 launch/presale highs to ~110",
    notes: "Stabilizing near 2.2x MSRP; high volume, oversupplied relative to early demand"
  },
  {
    card: "30th Celebration Pokemon Center ETB",
    type: "SEALED",
    lastSoldPrice: "253.00",
    soldDate: "2026-11-22",
    source: "TCGplayer",
    psa10Population: "N/A",
    populationTrend: "N/A",
    priceTrend6mo: "Down from 730 presale peak to 253",
    notes: "Still 4x MSRP but correcting; exclusive but liquid"
  },
  {
    card: "Charizard Classic Collection #4",
    type: "SINGLE",
    lastSoldPrice: "762.40",
    soldDate: "2026-11-16",
    source: "PokeInvest PSA 10",
    psa10Population: "322",
    populationTrend: "Rising",
    priceTrend6mo: "PSA 10 holding relatively firm after initial drop",
    notes: "High gem rate ~88%; strong collector demand for Charizard"
  },
  {
    card: "Lugia Classic Collection #149",
    type: "SINGLE",
    lastSoldPrice: "853.45",
    soldDate: "2026-11-16",
    source: "PokeInvest PSA 10",
    psa10Population: "158",
    populationTrend: "Rising",
    priceTrend6mo: "PSA 10 premium strong, raw ~116-142",
    notes: "Highest PSA 10 in set among classics; lower pop than SIRs"
  },
  {
    card: "Mew ex 152/128 SIR",
    type: "SINGLE",
    lastSoldPrice: "494.00",
    soldDate: "2026-11-23",
    source: "SlabPing PSA 10",
    psa10Population: "1029",
    populationTrend: "Rising rapidly",
    priceTrend6mo: "Down significantly from early PSA 10 highs; raw ~60-85",
    notes: "High gem rate; population growth pressuring prices"
  },
  {
    card: "Gengar ex 154/128 SIR",
    type: "SINGLE",
    lastSoldPrice: "531.00",
    soldDate: "2026-11-23",
    source: "SlabPing PSA 10",
    psa10Population: "743",
    populationTrend: "Rising",
    priceTrend6mo: "Correcting; raw ~45-70",
    notes: "Similar to Mew; more downside expected as grades return"
  },
  {
    card: "Mew RGB Rare (R/G/B)",
    type: "SINGLE",
    lastSoldPrice: "3850.00",
    soldDate: "2026-11-22",
    source: "UltraBall raw avg",
    psa10Population: "~100-200 total across variants",
    populationTrend: "Slow rising",
    priceTrend6mo: "Volatile high, some cooling from launch spikes",
    notes: "Ultra-scarce chase; appreciating relative to set average"
  }
];

export const pipeReport = [
  "30th Celebration ETB / SEALED / 110.00 / 2026-11-22 / eBay-TCGplayer / N/A / N/A / Down ~40% from launch highs / Stabilizing oversupplied",
  "Pokemon Center ETB / SEALED / 253.00 / 2026-11-22 / TCGplayer / N/A / N/A / Down from 730 peak / Correcting exclusive",
  "Charizard #4 Classic / SINGLE / 762.40 / 2026-11-16 / PokeInvest PSA10 / 322 / Rising / Holding firm / Strong demand",
  "Lugia #149 Classic / SINGLE / 853.45 / 2026-11-16 / PokeInvest PSA10 / 158 / Rising / Premium strong / Lower pop",
  "Mew ex 152 SIR / SINGLE / 494.00 / 2026-11-23 / SlabPing PSA10 / 1029 / Rising rapidly / Down / High pop pressure",
  "Gengar ex 154 SIR / SINGLE / 531.00 / 2026-11-23 / SlabPing PSA10 / 743 / Rising / Correcting / Similar pressure",
  "Mew RGB / SINGLE / 3850.00 / 2026-11-22 / UltraBall / low / Slow / Volatile high / Scarce appreciating"
];

// SUMMARY: Classic Collection Charizard and Lugia PSA 10s appreciating relatively; standard ETBs and common SIRs (Mew/Gengar) oversupplied with rising populations and declining prices.
