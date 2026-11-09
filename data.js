// Weekly card market research snapshot.
// Source: Manual research (Notion Card Market Scout agent blocked by Business plan entitlement), week of 2026-11-09.
// No card-ledger repo exists; written to 6c4mb2j78p-source/wax-desk as the fallback data file.
// Replaces the prior week's data (2026-11-04 stock snapshot).
// Prices and metrics from TCGPlayer, eBay solds, PokeInvest, SlabPing, etc. as of 2026-11-09. Research only, not advice. Verify live quotes and do your own due diligence.

export const researchWeek = "2026-11-09";
export const asOf = "2026-11-09";

export const cardMarketRows = [
  {
    card: "30th Celebration Elite Trainer Box (standard)",
    type: "SEALED",
    lastSoldPrice: "119.00",
    soldDate: "2026-11-06",
    source: "TCGPlayer / eBay median",
    psa10Population: "N/A",
    populationTrend: "N/A",
    priceTrend6mo: "Down ~20-30% from early Oct highs of $145-160; stabilizing near $110-120",
    notes: "High sales volume (thousands/month). Still ~2.4x MSRP. Oversupplied relative to launch but liquid."
  },
  {
    card: "30th Celebration Pokémon Center Elite Trainer Box",
    type: "SEALED",
    lastSoldPrice: "268.00",
    soldDate: "2026-11-08",
    source: "TCGPlayer market / TCGIndex",
    psa10Population: "N/A",
    populationTrend: "N/A",
    priceTrend6mo: "Down from $300+ mid-Oct; ~4.5x MSRP still",
    notes: "Premium exclusive. Lower volume than standard ETB. Holding better premium."
  },
  {
    card: "Mew ex #152 Special Illustration Rare",
    type: "SINGLE_PSA10",
    lastSoldPrice: "1157",
    soldDate: "2026-11-05",
    source: "SlabPing / eBay solds",
    psa10Population: "333",
    populationTrend: "Rapidly rising (from ~50 mid-Oct)",
    priceTrend6mo: "Down sharply ~30-40% as supply hits market",
    notes: "Top chase. High gem rate ~90%. Oversupplied in PSA 10; price pressure continues."
  },
  {
    card: "Gengar ex #154 Special Illustration Rare",
    type: "SINGLE_PSA10",
    lastSoldPrice: "906",
    soldDate: "2026-11-07",
    source: "SlabPing / eBay",
    psa10Population: "~40+",
    populationTrend: "Rising",
    priceTrend6mo: "Down ~25%+ from early peaks",
    notes: "Strong demand but pop increasing. Still premium."
  },
  {
    card: "Mew ex #158 Futuristic Rare",
    type: "SINGLE_PSA10",
    lastSoldPrice: "400",
    soldDate: "2026-11-07",
    source: "Cardboard Terminal / eBay",
    psa10Population: "477",
    populationTrend: "Very high and rising fast",
    priceTrend6mo: "Down ~20%",
    notes: "High volume graded. Oversupplied relative to other chases."
  },
  {
    card: "Pikachu ex #150",
    type: "SINGLE_PSA10",
    lastSoldPrice: "452",
    soldDate: "2026-11-06",
    source: "SlabPing",
    psa10Population: "~25+",
    populationTrend: "Rising",
    priceTrend6mo: "Down ~20%",
    notes: "Popular but more supply coming."
  }
];

export const pipeReport = [
  "30th Celebration Elite Trainer Box (standard) / SEALED / 119.00 / 2026-11-06 / TCGPlayer / eBay median / N/A / N/A / Down ~20-30% from early Oct highs of $145-160; stabilizing near $110-120 / High sales volume (thousands/month). Still ~2.4x MSRP. Oversupplied relative to launch but liquid.",
  "30th Celebration Pokémon Center Elite Trainer Box / SEALED / 268.00 / 2026-11-08 / TCGPlayer market / TCGIndex / N/A / N/A / Down from $300+ mid-Oct; ~4.5x MSRP still / Premium exclusive. Lower volume than standard ETB. Holding better premium.",
  "Mew ex #152 Special Illustration Rare / SINGLE_PSA10 / 1157 / 2026-11-05 / SlabPing / eBay solds / 333 / Rapidly rising (from ~50 mid-Oct) / Down sharply ~30-40% as supply hits market / Top chase. High gem rate ~90%. Oversupplied in PSA 10; price pressure continues.",
  "Gengar ex #154 Special Illustration Rare / SINGLE_PSA10 / 906 / 2026-11-07 / SlabPing / eBay / ~40+ / Rising / Down ~25%+ from early peaks / Strong demand but pop increasing. Still premium.",
  "Mew ex #158 Futuristic Rare / SINGLE_PSA10 / 400 / 2026-11-07 / Cardboard Terminal / eBay / 477 / Very high and rising fast / Down ~20% / High volume graded. Oversupplied relative to other chases.",
  "Pikachu ex #150 / SINGLE_PSA10 / 452 / 2026-11-06 / SlabPing / ~25+ / Rising / Down ~20% / Popular but more supply coming."
];

// SUMMARY: Standard and PC ETBs stabilizing after post-launch decline (still premium to MSRP); graded chase singles (esp. Mew ex SIR/FR) oversupplied as PSA 10 populations surge, driving 20-40% price drops.
