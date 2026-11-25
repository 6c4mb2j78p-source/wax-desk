// Weekly stock & options research snapshot.
// Source: Bigdata.com quant data, analyst ratings, earnings (Notion Stock & Options Scout agent blocked by Business plan entitlement), week of 2026-11-25.
// No card-ledger repo exists; written to 6c4mb2j78p-source/wax-desk as the fallback data file.
// Replaces the prior week's data.
// Prices as of 2026-11-24 close. Research only, not advice. Verify live quotes and options chains.

export const researchWeek = "2026-11-25";
export const asOf = "2026-11-25";

export const stockOptionsRows = [
  {
    ticker: "AMD",
    type: "STOCK",
    price: "413.27",
    quantMetrics: "Price -8.9% 1D, high vol, upside ~60% to median target",
    analystRating: "Strong Buy consensus, target 661.52",
    earningsDate: "2026-11-03 (recent beat +7%)",
    thesis: "AI chip demand recovery, strong relative upside vs peers after selloff",
    risk: "High beta, competition from NVDA, execution on MI series",
    allocationSuggestion: "4-6%"
  },
  {
    ticker: "AVGO",
    type: "STOCK",
    price: "301.08",
    quantMetrics: "-4% 1D, solid upside ~70% to target",
    analystRating: "Buy, target 512.67",
    earningsDate: "2026-09-02 (recent)",
    thesis: "Custom AI ASICs and software stack strength, diversified semis",
    risk: "Customer concentration, valuation",
    allocationSuggestion: "5-7%"
  },
  {
    ticker: "NVDA",
    type: "STOCK",
    price: "155.38",
    quantMetrics: "-5.9% 1D post-earnings, high volume, ~68% to target",
    analystRating: "Buy, target 261.09",
    earningsDate: "2026-11-17 (beat +7.6%)",
    thesis: "Dominant AI GPU leader, continued data center growth",
    risk: "Competition, high expectations, regulatory",
    allocationSuggestion: "6-8%"
  },
  {
    ticker: "META",
    type: "STOCK",
    price: "589.82",
    quantMetrics: "-1.3% 1D, ~41% upside to target",
    analystRating: "Buy, target 832.92",
    earningsDate: "2026-10-21 (strong beat +13%)",
    thesis: "Ad recovery, AI efficiency, Reality Labs optionality",
    risk: "Regulatory, capex, user growth slowdown",
    allocationSuggestion: "4-6%"
  },
  {
    ticker: "MSFT",
    type: "STOCK",
    price: "496.13",
    quantMetrics: "+0.7% 1D, stable, ~24% upside",
    analystRating: "Strong Buy, target 617.36",
    earningsDate: "2026-10-28 (beat)",
    thesis: "Azure AI leadership, cloud + software moat",
    risk: "Competition from GOOGL/AMZN, valuation",
    allocationSuggestion: "5-7%"
  },
  {
    ticker: "PLTR",
    type: "STOCK",
    price: "161.18",
    quantMetrics: "+1.1% 1D, high growth, ~39% upside",
    analystRating: "Buy, target 224.35",
    earningsDate: "2026-11-02 (beat +8%)",
    thesis: "Commercial + gov AI software momentum",
    risk: "High valuation, concentrated customers, volatility",
    allocationSuggestion: "2-4%"
  },
  {
    ticker: "TSLA",
    type: "OPTIONS",
    price: "384.68",
    quantMetrics: "High beta, IV elevated around events",
    analystRating: "Hold/Buy mixed, target 453",
    earningsDate: "2026-10-21 (beat)",
    thesis: "Call debit spreads or short puts for defined risk on autonomy/AI narrative",
    risk: "Extreme volatility, execution risk, regulatory",
    allocationSuggestion: "1-2% (options notional)"
  },
  {
    ticker: "NVDA",
    type: "OPTIONS",
    price: "155.38",
    quantMetrics: "High options volume, post-earnings IV crush potential",
    analystRating: "Buy",
    earningsDate: "2026-11-17",
    thesis: "Bull put spreads or covered calls for premium income",
    risk: "Gap risk, high gamma",
    allocationSuggestion: "1-3%"
  },
  {
    ticker: "AMZN",
    type: "STOCK",
    price: "252.29",
    quantMetrics: "-1.2% 1D, ~30% upside",
    analystRating: "Buy, target 327.90",
    earningsDate: "2026-10-29 (miss)",
    thesis: "AWS growth + retail efficiency, AI investments",
    risk: "Margin pressure, competition",
    allocationSuggestion: "4-5%"
  },
  {
    ticker: "GOOGL",
    type: "STOCK",
    price: "279.05",
    quantMetrics: "-1.1% 1D, ~44% upside despite recent miss",
    analystRating: "Buy, target 402.77",
    earningsDate: "2026-10-28 (miss)",
    thesis: "Search + YouTube + Cloud AI leadership",
    risk: "Regulatory antitrust, AI search disruption",
    allocationSuggestion: "4-6%"
  }
];

export const pipeReport = [
  "AMD / STOCK / 413.27 / -8.9% 1D high vol ~60% upside / Strong Buy target 661 / 2026-11-03 / AI chip recovery / High beta competition / 4-6%",
  "AVGO / STOCK / 301.08 / -4% 1D ~70% upside / Buy target 513 / 2026-09-02 / Custom AI ASICs / Customer concentration / 5-7%",
  "NVDA / STOCK / 155.38 / -5.9% 1D post-earn ~68% upside / Buy target 261 / 2026-11-17 / AI GPU leader / Competition expectations / 6-8%",
  "META / STOCK / 589.82 / -1.3% ~41% upside / Buy target 833 / 2026-10-21 / Ad+AI efficiency / Regulatory capex / 4-6%",
  "MSFT / STOCK / 496.13 / +0.7% ~24% upside / Strong Buy target 617 / 2026-10-28 / Azure AI moat / Competition / 5-7%",
  "PLTR / STOCK / 161.18 / +1.1% high growth ~39% / Buy target 224 / 2026-11-02 / AI software momentum / Valuation volatility / 2-4%",
  "TSLA / OPTIONS / 384.68 / High beta elevated IV / Mixed target 453 / 2026-10-21 / Defined risk spreads on AI narrative / Extreme vol / 1-2%",
  "NVDA / OPTIONS / 155.38 / High vol IV crush / Buy / 2026-11-17 / Premium selling spreads / Gap gamma / 1-3%",
  "AMZN / STOCK / 252.29 / -1.2% ~30% upside / Buy target 328 / 2026-10-29 / AWS+retail / Margin competition / 4-5%",
  "GOOGL / STOCK / 279.05 / -1.1% ~44% upside / Buy target 403 / 2026-10-28 / Search Cloud AI / Antitrust / 4-6%"
];

// SUMMARY: Strongest stock candidates AMD, AVGO, NVDA on AI upside; riskiest options TSLA and NVDA due to volatility.
