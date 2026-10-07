// Weekly stock and options research snapshot.
// Source: Stock & Options Scout, week of 2026-10-07.
// No card-ledger repo exists; written to 6c4mb2j78p-source/wax-desk as the fallback data file.
// Replaces the prior week's data rows.
// Prices and option quotes are as of 2026-10-02 (scout did not return a later refresh).
// Research only, not advice. Option spreads can lose their full debit.

export const marketWeek = "2026-10-07";
export const asOf = "2026-10-02";

export const marketRows = [
  {
    ticker: "AVGO",
    type: "STOCK",
    price: "$352.85 (Oct 2)",
    quantMetrics: "Mkt cap $1.68T; P/E 43.9 trailing / 19.8 fwd; PEG 0.36; rev +48.7%; FCF margin 44%",
    analystRating: "Strong Buy (50); avg target $531.85",
    earningsDate: "Dec 9, 2026",
    thesis: "AI custom chips and networking; 29% below its high",
    risk: "Valuation; few big customers; China",
    allocationSuggestion: "Growth satellite; fractional shares in weekly tranches"
  },
  {
    ticker: "V",
    type: "STOCK",
    price: "$360.96 (Oct 2)",
    quantMetrics: "Mkt cap $663B; P/E 30.6 / 24.9 fwd; rev +14.4%; op margin 66.9%",
    analystRating: "Strong Buy (40); avg target $419.36",
    earningsDate: "Oct 27, 2026",
    thesis: "Low-volatility quality compounder with buybacks",
    risk: "Premium multiple; legal and regulatory risk",
    allocationSuggestion: "Core holding; steady weekly buys"
  },
  {
    ticker: "GOOGL",
    type: "STOCK",
    price: "$343.50 (Oct 2)",
    quantMetrics: "Mkt cap $4.2T; P/E 17.0 / 25.2 fwd; rev +20.1%; net cash about $122B",
    analystRating: "Strong Buy (61); avg target $429.36",
    earningsDate: "about Oct 28, 2026 (estimate)",
    thesis: "AI, cloud and search leader, 16% below its high",
    risk: "Capex squeezing cash flow; antitrust",
    allocationSuggestion: "Core holding; split buys around earnings"
  },
  {
    ticker: "LLY",
    type: "STOCK",
    price: "$1,140.38 (Oct 2)",
    quantMetrics: "Mkt cap $1.02T; P/E 38.6 / 27.6 fwd; rev +49.6%; op margin 49.7%",
    analystRating: "Buy (30); avg target $1,328.83",
    earningsDate: "Oct 29, 2026",
    thesis: "Obesity drug leader with strong pipeline",
    risk: "Valuation; pricing and policy pressure",
    allocationSuggestion: "Core growth, smaller weight"
  },
  {
    ticker: "ABT",
    type: "STOCK",
    price: "$97.31 (Oct 2)",
    quantMetrics: "Mkt cap $168B; P/E 31.3 / 16.7 fwd; rev +8.1%; yield 2.6%",
    analystRating: "Buy (27); avg target $120.26",
    earningsDate: "Oct 21, 2026",
    thesis: "Oversold dividend healthcare name at a low multiple",
    risk: "Acquisition integration; weak segments",
    allocationSuggestion: "Value and income slice; add after Oct 21"
  },
  {
    ticker: "UBER",
    type: "STOCK",
    price: "$68.04 (Oct 2)",
    quantMetrics: "Mkt cap $139B; P/E 16.6 fwd; PEG 0.61; FCF yield 7.3%",
    analystRating: "Buy (51); avg target $100.77",
    earningsDate: "about Nov 3, 2026 (estimate)",
    thesis: "Cash-generative, priced for a robotaxi threat",
    risk: "Robotaxi competition; no price floor yet",
    allocationSuggestion: "Small contrarian slice"
  },
  {
    ticker: "ABT 2026-11-20 95/105 call debit spread",
    type: "OPTION",
    price: "Stock $97.31; debit 4.10 (Oct 2)",
    quantMetrics: "Cost $410; max loss $410 / max gain $590; IV about 30%; OI 979 / 1,742; breakeven $99.10 (+1.8%)",
    analystRating: "Buy; avg target $120.26",
    earningsDate: "Oct 21, 2026 (inside the trade)",
    thesis: "Lowest-risk idea; needs only a small rise",
    risk: "Earnings drop can lose the full $410",
    allocationSuggestion: "Small slice, one contract"
  },
  {
    ticker: "V 2026-11-20 380/400 call debit spread",
    type: "OPTION",
    price: "Stock $360.96; debit 4.00 (Oct 2)",
    quantMetrics: "Cost $400; max loss $400 / max gain $1,600; IV about 23%; OI 1,728 / 936; breakeven $384 (+6.4%)",
    analystRating: "Strong Buy; avg target $419.36",
    earningsDate: "Oct 27, 2026 (inside the trade)",
    thesis: "Best 4-to-1 payoff at low volatility",
    risk: "Needs a 6.4% rally; wider short-leg quote",
    allocationSuggestion: "Small speculative slice, one contract"
  },
  {
    ticker: "JPM 2026-11-20 345/365 call debit spread",
    type: "OPTION",
    price: "Stock $331.02; debit 4.63 (Oct 2)",
    quantMetrics: "Cost $463; max loss $463 / max gain $1,537; IV about 24%; OI 2,147 / 1,388; breakeven $349.63 (+5.6%)",
    analystRating: "Buy (24); avg target $375.81",
    earningsDate: "Oct 13, 2026 (inside the trade)",
    thesis: "Low-volatility bank with a payoff if it rises after earnings",
    risk: "Full loss below $345",
    allocationSuggestion: "Small slice, one contract"
  },
  {
    ticker: "UBER 2026-11-20 70/80 call debit spread",
    type: "OPTION",
    price: "Stock $68.04; debit 2.45 (Oct 2)",
    quantMetrics: "Cost $245; max loss $245 / max gain $755; IV about 40%; OI 5,828 / 6,655; breakeven $72.45 (+6.5%)",
    analystRating: "Buy; avg target $100.77",
    earningsDate: "about Nov 3, 2026 (inside the trade)",
    thesis: "Cheapest ticket with very liquid options",
    risk: "High volatility; earnings gap either way",
    allocationSuggestion: "Small speculative slice"
  }
];

export const pipeReport = [
  "AVGO / STOCK / $352.85 (Oct 2) / Mkt cap $1.68T; P/E 43.9 trailing / 19.8 fwd; PEG 0.36; rev +48.7%; FCF margin 44% / Strong Buy (50); avg target $531.85 / Dec 9, 2026 / AI custom chips and networking; 29% below its high / Valuation; few big customers; China / Growth satellite; fractional shares in weekly tranches",
  "V / STOCK / $360.96 (Oct 2) / Mkt cap $663B; P/E 30.6 / 24.9 fwd; rev +14.4%; op margin 66.9% / Strong Buy (40); avg target $419.36 / Oct 27, 2026 / Low-volatility quality compounder with buybacks / Premium multiple; legal and regulatory risk / Core holding; steady weekly buys",
  "GOOGL / STOCK / $343.50 (Oct 2) / Mkt cap $4.2T; P/E 17.0 / 25.2 fwd; rev +20.1%; net cash about $122B / Strong Buy (61); avg target $429.36 / about Oct 28, 2026 (estimate) / AI, cloud and search leader, 16% below its high / Capex squeezing cash flow; antitrust / Core holding; split buys around earnings",
  "LLY / STOCK / $1,140.38 (Oct 2) / Mkt cap $1.02T; P/E 38.6 / 27.6 fwd; rev +49.6%; op margin 49.7% / Buy (30); avg target $1,328.83 / Oct 29, 2026 / Obesity drug leader with strong pipeline / Valuation; pricing and policy pressure / Core growth, smaller weight",
  "ABT / STOCK / $97.31 (Oct 2) / Mkt cap $168B; P/E 31.3 / 16.7 fwd; rev +8.1%; yield 2.6% / Buy (27); avg target $120.26 / Oct 21, 2026 / Oversold dividend healthcare name at a low multiple / Acquisition integration; weak segments / Value and income slice; add after Oct 21",
  "UBER / STOCK / $68.04 (Oct 2) / Mkt cap $139B; P/E 16.6 fwd; PEG 0.61; FCF yield 7.3% / Buy (51); avg target $100.77 / about Nov 3, 2026 (estimate) / Cash-generative, priced for a robotaxi threat / Robotaxi competition; no price floor yet / Small contrarian slice",
  "ABT 2026-11-20 95/105 call debit spread / OPTION / Stock $97.31; debit 4.10 (Oct 2) / Cost $410; max loss $410 / max gain $590; IV about 30%; OI 979 / 1,742; breakeven $99.10 (+1.8%) / Buy; avg target $120.26 / Oct 21, 2026 (inside the trade) / Lowest-risk idea; needs only a small rise / Earnings drop can lose the full $410 / Small slice, one contract",
  "V 2026-11-20 380/400 call debit spread / OPTION / Stock $360.96; debit 4.00 (Oct 2) / Cost $400; max loss $400 / max gain $1,600; IV about 23%; OI 1,728 / 936; breakeven $384 (+6.4%) / Strong Buy; avg target $419.36 / Oct 27, 2026 (inside the trade) / Best 4-to-1 payoff at low volatility / Needs a 6.4% rally; wider short-leg quote / Small speculative slice, one contract",
  "JPM 2026-11-20 345/365 call debit spread / OPTION / Stock $331.02; debit 4.63 (Oct 2) / Cost $463; max loss $463 / max gain $1,537; IV about 24%; OI 2,147 / 1,388; breakeven $349.63 (+5.6%) / Buy (24); avg target $375.81 / Oct 13, 2026 (inside the trade) / Low-volatility bank with a payoff if it rises after earnings / Full loss below $345 / Small slice, one contract",
  "UBER 2026-11-20 70/80 call debit spread / OPTION / Stock $68.04; debit 2.45 (Oct 2) / Cost $245; max loss $245 / max gain $755; IV about 40%; OI 5,828 / 6,655; breakeven $72.45 (+6.5%) / Buy; avg target $100.77 / about Nov 3, 2026 (inside the trade) / Cheapest ticket with very liquid options / High volatility; earnings gap either way / Small speculative slice"
];

export const summary = "Strongest stock candidates: V and GOOGL as core compounders (Strong Buy, targets $419 and $429), with AVGO the highest-upside satellite (target $531.85, earnings Dec 9) and ABT the value/income name. Riskiest options: UBER Nov 20 70/80 call spread (about 40% IV, earnings inside the trade, full $245 at risk) and the V 380/400 spread (needs a 6.4% rally; JPM 345/365 also loses the full debit below $345). Quotes are Oct 2; re-check live chains before any order.";
