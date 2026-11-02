// Weekly card market research snapshot.
// Source: Manual research (Notion Card Market Scout agent blocked by Business plan entitlement), week of 2026-11-02.
// No card-ledger repo exists; written to 6c4mb2j78p-source/wax-desk as the fallback data file.
// Replaces the prior week's data (2026-10-26).
// Prices are recent market/sold aggregates from TCGplayer, PriceCharting, PokeFocus, pokeinvest, etc. as of early Nov 2026.
// Research only, not advice. Verify live quotes and do your own due diligence.

export const researchWeek = "2026-11-02";
export const asOf = "2026-11-02";

export const cardMarketRows = [
  {
    card: "Pokémon 30th Celebration Elite Trainer Box (EN, sealed)",
    type: "SEALED_ETB",
    lastSoldPrice: "114.00",
    soldDate: "2026-11-02",
    source: "TCGplayer market / PokeFocus",
    psa10Population: "NA",
    populationTrend: "NA",
    priceTrend6mo: "-30% since Sep (down)",
    notes: "Market ~$113-118; 30d median ~$129. High volume, 500+ listings. Still OVERSUPPLIED, down ~15% from late Oct ~128-135."
  },
  {
    card: "Pokémon 30th Celebration Pokémon Center ETB (EN, sealed)",
    type: "SEALED_PC_ETB",
    lastSoldPrice: "275.00",
    soldDate: "2026-11-01",
    source: "TCGplayer / pokevizinvestor",
    psa10Population: "NA",
    populationTrend: "NA",
    priceTrend6mo: "-45% since Sep (down)",
    notes: "Market ~$275-278. Down from ~293 late Oct and ~300 prior. Stabilizing but soft."
  },
  {
    card: "Pokémon 30th Celebration Booster Bundle (EN, 6 packs, sealed)",
    type: "SEALED_BUNDLE",
    lastSoldPrice: "67.00",
    soldDate: "2026-11-02",
    source: "TCGplayer / PokeFocus",
    psa10Population: "NA",
    populationTrend: "NA",
    priceTrend6mo: "-15% since Sep (down)",
    notes: "Market ~$67-71. Flat-to-soft vs prior ~69-70. ~$11/pack. Oversupplied."
  },
  {
    card: "Umbreon ex SIR 161/131, Prismatic Evolutions, English, PSA 10",
    type: "SINGLE",
    lastSoldPrice: "4200.00",
    soldDate: "2026-11-01",
    source: "pokeinsider / PriceCharting aggregates",
    psa10Population: "6748",
    populationTrend: "up",
    priceTrend6mo: "-20% (down)",
    notes: "PSA 10 ~$4.2k-$5k. Pop ~6.6k-6.7k (up from prior 6566). High supply, softening."
  },
  {
    card: "Mew R/RGB (red), ME: 30th Celebration, English, raw NM",
    type: "SINGLE",
    lastSoldPrice: "4500.00",
    soldDate: "2026-11-01",
    source: "TCGplayer / pokeprices",
    psa10Population: "61",
    populationTrend: "stable",
    priceTrend6mo: "mixed (some +12% 30d)",
    notes: "Raw ~$4.5k. Thin sales. PSA 10 ~$10k. APPRECIATING on some measures; thin supply."
  },
  {
    card: "Gyarados 6/102 Base Set 1st Edition holo, English, PSA 8",
    type: "SINGLE",
    lastSoldPrice: "2250.00",
    soldDate: "2026-02-22",
    source: "Collectibles.com / underval",
    psa10Population: "88",
    populationTrend: "stable",
    priceTrend6mo: "+50% (up)",
    notes: "Recent comps thin; prior ~$3k. PSA 10 pop stable ~88. APPRECIATING long-term."
  },
  {
    card: "Pikachu with Grey Felt Hat SVP 085, English, raw NM",
    type: "SINGLE",
    lastSoldPrice: "900.00",
    soldDate: "2026-10-31",
    source: "TCGplayer / thelabtcg",
    psa10Population: "49970",
    populationTrend: "up",
    priceTrend6mo: "-5% (flat-down)",
    notes: "Raw ~$850-980. Pop ~50k. Huge supply; drifting."
  },
  {
    card: "Mew ex SAR 205/165, Japanese Pokémon Card 151 (sv2a), PSA 10",
    type: "SINGLE",
    lastSoldPrice: "320.00",
    soldDate: "2026-10-31",
    source: "mycardpost / pokeinvest",
    psa10Population: "23280",
    populationTrend: "up",
    priceTrend6mo: "-50% (down)",
    notes: "PSA 10 ~$320-400. Pop 23k+. OVERSUPPLIED."
  }
];

export const pipeReport = [
  "Pokémon 30th Celebration Elite Trainer Box (EN, sealed) / SEALED_ETB / 114.00 / 2026-11-02 / TCGplayer market / PokeFocus / NA / NA / -30% since Sep (down) / Market ~$113-118; 30d median ~$129. High volume. Still OVERSUPPLIED, down from late Oct.",
  "Pokémon 30th Celebration Pokémon Center ETB (EN, sealed) / SEALED_PC_ETB / 275.00 / 2026-11-01 / TCGplayer / pokevizinvestor / NA / NA / -45% since Sep (down) / Market ~$275-278. Softening from ~293.",
  "Pokémon 30th Celebration Booster Bundle (EN, 6 packs, sealed) / SEALED_BUNDLE / 67.00 / 2026-11-02 / TCGplayer / PokeFocus / NA / NA / -15% since Sep (down) / Market ~$67-71. Flat-soft. Oversupplied.",
  "Umbreon ex SIR 161/131, Prismatic Evolutions, English, PSA 10 / SINGLE / 4200.00 / 2026-11-01 / pokeinsider / PriceCharting / 6748 / up / -20% (down) / ~$4.2k-$5k. Pop up to ~6.7k. High supply, softening.",
  "Mew R/RGB (red), ME: 30th Celebration, English, raw NM / SINGLE / 4500.00 / 2026-11-01 / TCGplayer / pokeprices / 61 / stable / mixed (some +12% 30d) / Raw ~$4.5k. Thin. APPRECIATING. PSA 10 ~$10k.",
  "Gyarados 6/102 Base Set 1st Edition holo, English, PSA 8 / SINGLE / 2250.00 / 2026-02-22 / Collectibles.com / 88 / stable / +50% (up) / Thin comps. APPRECIATING long-term. Pop stable.",
  "Pikachu with Grey Felt Hat SVP 085, English, raw NM / SINGLE / 900.00 / 2026-10-31 / TCGplayer / 49970 / up / -5% (flat-down) / ~$850-980. Huge pop ~50k. Drifting.",
  "Mew ex SAR 205/165, Japanese Pokémon Card 151 (sv2a), PSA 10 / SINGLE / 320.00 / 2026-10-31 / mycardpost / 23280 / up / -50% (down) / ~$320-400. Pop 23k+. OVERSUPPLIED."
];

// SUMMARY: Appreciating: Base Set 1st Ed Gyarados PSA 8 (long-term up, thin), Mew R/RGB raw (mixed but thin supply, ~$4.5k). Oversupplied or falling: English 30th ETB (~$114, still high volume down), PC ETB (~$275 soft), booster bundle (~$67), Prismatic Umbreon 161 PSA 10 (~$4.2k, pop 6.7k+), JP 151 Mew 205 PSA 10 (~$320, pop 23k+), Felt Hat Pikachu (pop 50k, drifting). Notion agent unavailable due to plan entitlement; data from public market sources.
