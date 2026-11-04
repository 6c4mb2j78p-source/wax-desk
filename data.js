// Weekly stock & options research snapshot.
// Source: Manual research (Notion Stock & Options Scout agent blocked by Business plan entitlement), week of 2026-11-04.
// No card-ledger repo exists; written to 6c4mb2j78p-source/wax-desk as the fallback data file.
// Replaces the prior week's data (2026-11-02).
// Prices and metrics from Bigdata.com / FMP as of 2026-11-04. Research only, not advice. Verify live quotes and do your own due diligence.

export const researchWeek = "2026-11-04";
export const asOf = "2026-11-04";

export const stockOptionsRows = [
  {
    ticker: "NVDA",
    type: "STOCK",
    price: "206.69",
    quantMetrics: "Beta 2.22, YTD +10.8%, 1M -11.7%, above 200MA",
    analystRating: "Buy (58 Buy / 16 Hold), PT $339",
    earningsDate: "2026-11-17",
    thesis: "AI leader with strong analyst support and upside to consensus PT despite recent pullback.",
    risk: "High beta, valuation, macro sensitivity.",
    allocationSuggestion: "Core 5-8%"
  },
  {
    ticker: "AVGO",
    type: "STOCK",
    price: "332.13",
    quantMetrics: "Beta 1.50, strong semi momentum",
    analystRating: "Buy (55 Buy / 5 Hold), PT $514",
    earningsDate: "2026-12-10",
    thesis: "AI infrastructure beneficiary with highest analyst conviction among large semis.",
    risk: "Competition, cycle risk.",
    allocationSuggestion: "Core 4-6%"
  },
  {
    ticker: "LLY",
    type: "STOCK",
    price: "1409.38",
    quantMetrics: "Low beta 0.45, healthcare strength",
    analystRating: "Buy (34 Buy / 9 Hold), PT $1443",
    earningsDate: "2027-02-05",
    thesis: "Defensive growth via GLP-1 franchise, solid Buy ratings.",
    risk: "Pipeline, regulatory, high absolute price.",
    allocationSuggestion: "Core 3-5%"
  },
  {
    ticker: "PLTR",
    type: "STOCK",
    price: "175.40",
    quantMetrics: "Beta 1.62, high volume",
    analystRating: "Buy (16 Buy / 9 Hold), PT $217",
    earningsDate: "2027-02-01",
    thesis: "AI software growth story with improving analyst coverage.",
    risk: "Valuation premium, execution.",
    allocationSuggestion: "Satellite 2-4%"
  },
  {
    ticker: "AMD",
    type: "STOCK",
    price: "483.90",
    quantMetrics: "Beta 2.49, high volume",
    analystRating: "Buy consensus expected",
    earningsDate: "TBD",
    thesis: "AI accelerator competitor to NVDA with high growth potential.",
    risk: "High beta, competitive pressure.",
    allocationSuggestion: "Satellite 2-3%"
  },
  {
    ticker: "MU",
    type: "STOCK",
    price: "855.10",
    quantMetrics: "Beta 2.23, memory cycle",
    analystRating: "Buy consensus expected",
    earningsDate: "TBD",
    thesis: "Memory pricing recovery supporting AI demand.",
    risk: "Cyclical, high beta.",
    allocationSuggestion: "Satellite 1-3%"
  },
  {
    ticker: "NVDA",
    type: "OPTIONS_CALL",
    price: "Call ~$15-25 (ATM Nov/Dec)",
    quantMetrics: "High IV around earnings, delta ~0.5",
    analystRating: "Buy underlying",
    earningsDate: "2026-11-17",
    thesis: "Defined-risk long call into earnings for leveraged upside.",
    risk: "Time decay, IV crush post-earnings, total loss possible.",
    allocationSuggestion: "Speculative 1%"
  },
  {
    ticker: "AVGO",
    type: "OPTIONS_CALL",
    price: "Call ~$20-40",
    quantMetrics: "Moderate IV",
    analystRating: "Strong Buy underlying",
    earningsDate: "2026-12-10",
    thesis: "Long call on high-conviction AI name.",
    risk: "Premium decay, directional miss.",
    allocationSuggestion: "Speculative 1%"
  },
  {
    ticker: "LLY",
    type: "OPTIONS_PUT",
    price: "Put ~$50-100 (OTM)",
    quantMetrics: "Low beta hedge",
    analystRating: "Buy underlying",
    earningsDate: "2027-02-05",
    thesis: "Protective put on high-priced defensive name.",
    risk: "Cost of hedge reduces returns.",
    allocationSuggestion: "Hedge 1%"
  },
  {
    ticker: "PLTR",
    type: "OPTIONS_CALL",
    price: "Call ~$10-20",
    quantMetrics: "Elevated IV",
    analystRating: "Buy underlying",
    earningsDate: "2027-02-01",
    thesis: "High-reward call on volatile AI software name.",
    risk: "Highest risk of full premium loss among list.",
    allocationSuggestion: "Speculative 0.5-1%"
  }
];

export const pipeReport = [
  "NVDA / STOCK / 206.69 / Beta 2.22, YTD +10.8%, 1M -11.7%, above 200MA / Buy (58 Buy / 16 Hold), PT $339 / 2026-11-17 / AI leader with strong analyst support and upside to consensus PT despite recent pullback. / High beta, valuation, macro sensitivity. / Core 5-8%",
  "AVGO / STOCK / 332.13 / Beta 1.50, strong semi momentum / Buy (55 Buy / 5 Hold), PT $514 / 2026-12-10 / AI infrastructure beneficiary with highest analyst conviction among large semis. / Competition, cycle risk. / Core 4-6%",
  "LLY / STOCK / 1409.38 / Low beta 0.45, healthcare strength / Buy (34 Buy / 9 Hold), PT $1443 / 2027-02-05 / Defensive growth via GLP-1 franchise, solid Buy ratings. / Pipeline, regulatory, high absolute price. / Core 3-5%",
  "PLTR / STOCK / 175.40 / Beta 1.62, high volume / Buy (16 Buy / 9 Hold), PT $217 / 2027-02-01 / AI software growth story with improving analyst coverage. / Valuation premium, execution. / Satellite 2-4%",
  "AMD / STOCK / 483.90 / Beta 2.49, high volume / Buy consensus expected / TBD / AI accelerator competitor to NVDA with high growth potential. / High beta, competitive pressure. / Satellite 2-3%",
  "MU / STOCK / 855.10 / Beta 2.23, memory cycle / Buy consensus expected / TBD / Memory pricing recovery supporting AI demand. / Cyclical, high beta. / Satellite 1-3%",
  "NVDA / OPTIONS_CALL / Call ~$15-25 (ATM Nov/Dec) / High IV around earnings, delta ~0.5 / Buy underlying / 2026-11-17 / Defined-risk long call into earnings for leveraged upside. / Time decay, IV crush post-earnings, total loss possible. / Speculative 1%",
  "AVGO / OPTIONS_CALL / Call ~$20-40 / Moderate IV / Strong Buy underlying / 2026-12-10 / Long call on high-conviction AI name. / Premium decay, directional miss. / Speculative 1%",
  "LLY / OPTIONS_PUT / Put ~$50-100 (OTM) / Low beta hedge / Buy underlying / 2027-02-05 / Protective put on high-priced defensive name. / Cost of hedge reduces returns. / Hedge 1%",
  "PLTR / OPTIONS_CALL / Call ~$10-20 / Elevated IV / Buy underlying / 2027-02-01 / High-reward call on volatile AI software name. / Highest risk of full premium loss among list. / Speculative 0.5-1%"
];

// SUMMARY: Strongest stock candidates: AVGO (strongest analyst Buy, high PT upside), NVDA (AI leader, solid Buy ratings despite pullback), LLY (defensive low-beta growth). Riskiest options trades: PLTR calls (high IV, volatile name, high chance of full loss), NVDA calls (earnings IV crush risk).
