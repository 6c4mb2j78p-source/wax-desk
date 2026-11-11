// Weekly stock & options research snapshot.
// Source: Manual research (Notion Stock & Options Scout agent blocked by Business plan entitlement), week of 2026-11-11.
// No card-ledger repo exists; written to 6c4mb2j78p-source/wax-desk as the fallback data file.
// Replaces the prior week's data.
// Prices and metrics from Bigdata.com as of 2026-11-11. Research only, not advice. Verify live quotes and do your own due diligence.

export const researchWeek = "2026-11-11";
export const asOf = "2026-11-11";

export const stockOptionsRows = [
  {
    ticker: "AVGO",
    type: "STOCK",
    price: "331.98",
    quantMetrics: "+3.91% 1D, beta 1.50, high volume",
    analystRating: "Strong Buy (PT 514)",
    earningsDate: "2026-12-??",
    thesis: "AI infrastructure demand, strong EPS beat history, significant upside to consensus PT",
    risk: "Valuation premium, semiconductor cycle",
    allocationSuggestion: "Core holding 5-8%"
  },
  {
    ticker: "LLY",
    type: "STOCK",
    price: "1432.29",
    quantMetrics: "+1.44% 1D, +31% EPS surprise, low beta 0.45",
    analystRating: "Buy (PT 1445)",
    earningsDate: "Next Q",
    thesis: "Obesity/GLP-1 leadership, massive earnings beat, defensive growth",
    risk: "Competition, pricing pressure",
    allocationSuggestion: "Growth 4-6%"
  },
  {
    ticker: "AMD",
    type: "STOCK",
    price: "515.21",
    quantMetrics: "+1.30% 1D, +7.18% EPS surprise, beta 2.49",
    analystRating: "Buy (PT 652)",
    earningsDate: "Recent",
    thesis: "AI GPU share gains, data center momentum",
    risk: "High beta, competition from NVDA",
    allocationSuggestion: "Satellite 2-4%"
  },
  {
    ticker: "MU",
    type: "STOCK",
    price: "725.11",
    quantMetrics: "-1.10% 1D, huge PT upside to 1589, beta 2.37",
    analystRating: "Strong Buy",
    earningsDate: "Recent",
    thesis: "Memory pricing cycle recovery, AI demand",
    risk: "Cyclical, high volatility",
    allocationSuggestion: "Tactical 1-3%"
  },
  {
    ticker: "PLTR",
    type: "STOCK",
    price: "168.82",
    quantMetrics: "+8.35% EPS surprise, beta 1.62",
    analystRating: "Buy (PT 220)",
    earningsDate: "Recent",
    thesis: "Commercial + government AI software growth",
    risk: "Valuation, execution",
    allocationSuggestion: "Growth 2-3%"
  },
  {
    ticker: "NVDA",
    type: "OPTIONS",
    price: "168.89",
    quantMetrics: "-5.47% 1D, high vol, beta 2.22",
    analystRating: "Strong Buy (PT 340)",
    earningsDate: "Next",
    thesis: "AI leader but recent pullback; consider call spreads on dips",
    risk: "Extreme volatility, valuation",
    allocationSuggestion: "Options 0.5-1% risk"
  },
  {
    ticker: "INTC",
    type: "OPTIONS",
    price: "58.13",
    quantMetrics: "+27.9% EPS surprise, beta 2.42, turnaround",
    analystRating: "Hold/Buy (PT 113)",
    earningsDate: "Recent",
    thesis: "Foundry + PC recovery; long calls or call spreads",
    risk: "Execution risk, high beta",
    allocationSuggestion: "Speculative options 0.5%"
  },
  {
    ticker: "MSFT",
    type: "STOCK",
    price: "533.16",
    quantMetrics: "-2.20% 1D, solid EPS, PT 612",
    analystRating: "Strong Buy",
    earningsDate: "Recent",
    thesis: "Cloud/AI durable growth, defensive mega-cap",
    risk: "Competition, multiple compression",
    allocationSuggestion: "Core 6-10%"
  },
  {
    ticker: "AAPL",
    type: "STOCK",
    price: "348.51",
    quantMetrics: "Stable, modest upside to PT",
    analystRating: "Buy",
    earningsDate: "Recent",
    thesis: "Services + ecosystem, buyback support",
    risk: "China, hardware cycle",
    allocationSuggestion: "Core 5-8%"
  },
  {
    ticker: "PANW",
    type: "OPTIONS",
    price: "326.36",
    quantMetrics: "Cybersecurity demand, PT 400",
    analystRating: "Buy",
    earningsDate: "Next",
    thesis: "Platform growth; consider bull call spreads",
    risk: "Valuation, competition",
    allocationSuggestion: "Options 0.5-1%"
  }
];

export const pipeReport = [
  "AVGO / STOCK / 331.98 / +3.91% 1D beta 1.50 / Strong Buy PT 514 / TBD / AI infra demand strong EPS / Valuation cycle / Core 5-8%",
  "LLY / STOCK / 1432.29 / +1.44% +31% EPS low beta / Buy PT 1445 / TBD / GLP-1 leadership / Competition / Growth 4-6%",
  "AMD / STOCK / 515.21 / +1.30% +7% EPS beta 2.49 / Buy PT 652 / Recent / AI GPU gains / High beta / Satellite 2-4%",
  "MU / STOCK / 725.11 / PT upside huge beta 2.37 / Strong Buy / Recent / Memory cycle AI / Cyclical / Tactical 1-3%",
  "PLTR / STOCK / 168.82 / +8% EPS beta 1.62 / Buy PT 220 / Recent / AI software growth / Valuation / Growth 2-3%",
  "NVDA / OPTIONS / 168.89 / -5.47% high vol beta 2.22 / Strong Buy PT 340 / Next / AI leader dip / Extreme vol / Options 0.5-1%",
  "INTC / OPTIONS / 58.13 / +28% EPS beta 2.42 / Hold/Buy PT 113 / Recent / Turnaround / Execution / Spec 0.5%",
  "MSFT / STOCK / 533.16 / solid PT 612 / Strong Buy / Recent / Cloud AI / Multiple / Core 6-10%",
  "AAPL / STOCK / 348.51 / modest PT / Buy / Recent / Ecosystem / China / Core 5-8%",
  "PANW / OPTIONS / 326.36 / cyber PT 400 / Buy / Next / Platform / Valuation / Options 0.5-1%"
];

// SUMMARY: Strongest stock candidates AVGO, LLY, AMD, MSFT on growth + analyst support. Riskiest options trades NVDA, INTC, MU (high beta/vol).
