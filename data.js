// Weekly stock & options research snapshot.
// Source: Manual research (Notion Stock & Options Scout agent blocked by Business plan entitlement), week of 2026-11-18.
// No card-ledger repo exists; written to 6c4mb2j78p-source/wax-desk as the fallback data file.
// Replaces the prior week's data.
// Prices and metrics from Bigdata.com as of 2026-11-17/18. Research only, not advice. Verify live quotes and do your own due diligence.

export const researchWeek = "2026-11-18";
export const asOf = "2026-11-18";

export const stockOptionsRows = [
  {
    ticker: "AVGO",
    type: "STOCK",
    price: "341.60",
    quantMetrics: "+2.46% 1D, beta 1.51, high volume",
    analystRating: "Strong Buy (PT 513)",
    earningsDate: "2026-12-??",
    thesis: "AI infrastructure demand, strong EPS beat history, significant upside to consensus PT",
    risk: "Valuation premium, semiconductor cycle",
    allocationSuggestion: "Core holding 5-8%"
  },
  {
    ticker: "LLY",
    type: "STOCK",
    price: "1415.55",
    quantMetrics: "-1.13% 1D, +31% EPS surprise, low beta 0.45",
    analystRating: "Buy (PT 1442)",
    earningsDate: "Recent (Q3)",
    thesis: "Obesity/GLP-1 leadership, massive earnings beat, defensive growth",
    risk: "Competition, pricing pressure",
    allocationSuggestion: "Growth 4-6%"
  },
  {
    ticker: "AMD",
    type: "STOCK",
    price: "503.41",
    quantMetrics: "-0.17% 1D, +7.18% EPS surprise, beta 2.49",
    analystRating: "Buy (PT 659)",
    earningsDate: "Recent",
    thesis: "AI GPU share gains, data center momentum",
    risk: "High beta, competition from NVDA",
    allocationSuggestion: "Satellite 2-4%"
  },
  {
    ticker: "MU",
    type: "STOCK",
    price: "712.42",
    quantMetrics: "-0.92% 1D, huge PT upside to 1589, beta 2.37",
    analystRating: "Strong Buy",
    earningsDate: "Recent",
    thesis: "Memory pricing cycle recovery, AI demand",
    risk: "Cyclical, high volatility",
    allocationSuggestion: "Tactical 1-3%"
  },
  {
    ticker: "ABBV",
    type: "STOCK",
    price: "292.86",
    quantMetrics: "-0.57% 1D, +2.41% EPS, positive sentiment 0.52",
    analystRating: "Buy (PT 314)",
    earningsDate: "Recent",
    thesis: "Stable pharma growth, strong sentiment, dividend support",
    risk: "Patent cliffs, competition",
    allocationSuggestion: "Defensive 3-5%"
  },
  {
    ticker: "NVDA",
    type: "OPTIONS",
    price: "155.46",
    quantMetrics: "-0.44% 1D, high vol, beta 2.22, PT 292",
    analystRating: "Strong Buy (PT 292)",
    earningsDate: "Recent (Q3)",
    thesis: "AI leader but recent pullback; consider call spreads on dips",
    risk: "Extreme volatility, valuation",
    allocationSuggestion: "Options 0.5-1% risk"
  },
  {
    ticker: "PLTR",
    type: "OPTIONS",
    price: "156.56",
    quantMetrics: "-2.39% 1D, +8.35% EPS surprise, beta 1.62",
    analystRating: "Buy (PT 224)",
    earningsDate: "Recent",
    thesis: "Commercial + government AI software growth; long calls or spreads",
    risk: "Valuation, high beta",
    allocationSuggestion: "Speculative options 0.5%"
  },
  {
    ticker: "MSFT",
    type: "STOCK",
    price: "506.24",
    quantMetrics: "-2.27% 1D, solid EPS, PT 615",
    analystRating: "Strong Buy",
    earningsDate: "Recent",
    thesis: "Cloud/AI durable growth, defensive mega-cap",
    risk: "Competition, multiple compression",
    allocationSuggestion: "Core 6-10%"
  },
  {
    ticker: "AAPL",
    type: "STOCK",
    price: "351.91",
    quantMetrics: "-0.25% 1D, modest upside to PT 341",
    analystRating: "Buy",
    earningsDate: "Recent",
    thesis: "Services + ecosystem, buyback support",
    risk: "China, hardware cycle",
    allocationSuggestion: "Core 5-8%"
  },
  {
    ticker: "INTC",
    type: "OPTIONS",
    price: "55.17",
    quantMetrics: "high volume, beta 2.42, turnaround",
    analystRating: "Hold/Buy",
    earningsDate: "Recent",
    thesis: "Foundry + PC recovery; long calls or call spreads",
    risk: "Execution risk, high beta",
    allocationSuggestion: "Speculative options 0.5%"
  }
];

export const pipeReport = [
  "AVGO / STOCK / 341.60 / +2.46% 1D beta 1.51 / Strong Buy PT 513 / TBD / AI infra demand strong EPS / Valuation cycle / Core 5-8%",
  "LLY / STOCK / 1415.55 / -1.13% +31% EPS low beta / Buy PT 1442 / Recent / GLP-1 leadership / Competition / Growth 4-6%",
  "AMD / STOCK / 503.41 / -0.17% +7% EPS beta 2.49 / Buy PT 659 / Recent / AI GPU gains / High beta / Satellite 2-4%",
  "MU / STOCK / 712.42 / PT upside huge beta 2.37 / Strong Buy / Recent / Memory cycle AI / Cyclical / Tactical 1-3%",
  "ABBV / STOCK / 292.86 / +2.41% EPS positive sentiment / Buy PT 314 / Recent / Stable pharma / Patent / Defensive 3-5%",
  "NVDA / OPTIONS / 155.46 / -0.44% high vol beta 2.22 / Strong Buy PT 292 / Recent / AI leader dip / Extreme vol / Options 0.5-1%",
  "PLTR / OPTIONS / 156.56 / -2.39% +8% EPS beta 1.62 / Buy PT 224 / Recent / AI software growth / Valuation / Spec 0.5%",
  "MSFT / STOCK / 506.24 / solid PT 615 / Strong Buy / Recent / Cloud AI / Multiple / Core 6-10%",
  "AAPL / STOCK / 351.91 / modest PT / Buy / Recent / Ecosystem / China / Core 5-8%",
  "INTC / OPTIONS / 55.17 / high beta 2.42 / Hold/Buy / Recent / Turnaround / Execution / Spec 0.5%"
];

// SUMMARY: Strongest stock candidates AVGO, LLY, AMD, MSFT on growth + analyst support. Riskiest options trades NVDA, PLTR, INTC, MU (high beta/vol).
