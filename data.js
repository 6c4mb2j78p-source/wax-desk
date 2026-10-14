// Weekly stock and options research snapshot.
// Source: Stock & Options Scout, week of 2026-10-14.
// No card-ledger repo exists; written to 6c4mb2j78p-source/wax-desk as the fallback data file.
// Replaces the prior week's data rows.
// Prices and option quotes are as of 2026-10-13 close (last trades; bid/ask not available pre-market).
// Research only, not advice. Option spreads can lose their full debit.

export const marketWeek = "2026-10-14";
export const asOf = "2026-10-13";

export const marketRows = [
  {
    ticker: "GOOGL",
    type: "STOCK",
    price: "$353.78 (Oct 13 close)",
    quantMetrics: "PE 17.75; fwd PE 26.26; FY26 rev est +23.9%; 52w 239.71-408.61",
    analystRating: "Strong Buy; 62 analysts (44 SB/13 Buy/5 Hold); avg PT $430.40 (+21.7%)",
    earningsDate: "2026-10-28 (confirmed)",
    thesis: "Lowest trailing PE of the group with ~24% revenue growth est and 21.7% to avg PT",
    risk: "Earnings Oct 28 in 2 weeks; AI capex/regulatory headlines",
    allocationSuggestion: "Core holding; buy in weekly tranches, consider waiting past Oct 28"
  },
  {
    ticker: "AVGO",
    type: "STOCK",
    price: "$357.31 (Oct 13 close)",
    quantMetrics: "PE 45.61; fwd PE 20.62; FY26 rev est +65.9%; beta 1.48; 52w 289.96-495.00",
    analystRating: "Strong Buy; 50 analysts (40 SB/7 Buy/3 Hold); avg PT $527.59 (+47.7%)",
    earningsDate: "unknown (next date not announced; last reported 2026-09-02)",
    thesis: "Largest upside to avg PT; custom AI chip demand; fwd PE ~21",
    risk: "High beta; reported $50B+ AI financing plans; ~28% below 52w high",
    allocationSuggestion: "Core holding, small weekly tranches"
  },
  {
    ticker: "UBER",
    type: "STOCK",
    price: "$71.32 (Oct 13 close)",
    quantMetrics: "PE 15.56; fwd PE 17.66; FY26 EPS est +37%; 52w 65.41-100.35",
    analystRating: "Buy; 50 analysts (32 SB/9 Buy/8 Hold/1 Strong Sell); avg PT $100.86 (+41.4%)",
    earningsDate: "2026-11-04 (confirmed)",
    thesis: "Cheap vs growth, 41% to avg PT, near 52w low",
    risk: "Robotaxi competition; pending Delivery Hero bid; litigation",
    allocationSuggestion: "Tranche; small weekly buys"
  },
  {
    ticker: "ABT",
    type: "STOCK",
    price: "$102.61 (Oct 13 close)",
    quantMetrics: "PE 33.20; fwd PE 17.71; div yield 2.46%; beta 0.58; 52w 81.97-133.34",
    analystRating: "Strong Buy; 28 analysts (19 SB/5 Buy/4 Hold); avg PT $120.72 (+17.7%)",
    earningsDate: "2026-10-21 (confirmed); ex-div 2026-10-15",
    thesis: "Defensive dividend payer at ~18x fwd earnings, upgrades trending up",
    risk: "Earnings Oct 21 within a week; trailing EPS -61% YoY",
    allocationSuggestion: "Core defensive holding; tranche"
  },
  {
    ticker: "LLY",
    type: "STOCK",
    price: "$1,166.51 (Oct 13 close)",
    quantMetrics: "PE 39.16; fwd PE 29.86; FY26 rev est +35.9%; beta 0.45",
    analystRating: "Buy; 30 analysts (19 SB/6 Buy/3 Hold/1 Sell/1 Strong Sell); avg PT $1,330.14 (+14.0%)",
    earningsDate: "2026-10-29 (confirmed)",
    thesis: "Obesity-drug growth leader with ~36% revenue growth est",
    risk: "Earnings Oct 29; drug-pricing policy; high share price (fractional shares)",
    allocationSuggestion: "Small tranche via fractional shares"
  },
  {
    ticker: "V",
    type: "STOCK",
    price: "$396.06 (Oct 13 close; at 52w high 396.35)",
    quantMetrics: "PE 33.72; fwd PE 27.42; beta 0.77; div yield 0.68%",
    analystRating: "Strong Buy; 40 analysts (27 SB/9 Buy/3 Hold/1 Sell); avg PT $420.47 (+6.2%)",
    earningsDate: "2026-10-27 (confirmed)",
    thesis: "Quality compounder, low beta",
    risk: "Only ~6% to avg PT after run to 52w high; earnings Oct 27",
    allocationSuggestion: "Small tranche only; wait for pullback"
  },
  {
    ticker: "GOOGL 2026-11-20 380C/400C spread",
    type: "OPTION",
    price: "Net debit ~$3.73 ($373/contract) from Oct 13 last trades (380C 7.03, 400C 3.30); bid/ask not available pre-market",
    quantMetrics: "Max loss $373; max gain $1,627; breakeven $383.73 (+8.5% vs $353.78); 380C vol 10,081",
    analystRating: "Underlying Strong Buy; avg PT $430.40",
    earningsDate: "2026-10-28 (confirmed) - SPANS EARNINGS",
    thesis: "Defined-risk bet GOOGL rallies past $384 after Oct 28 earnings",
    risk: "Needs +8.5% in 5 weeks; earnings gap can go either way; most retail options traders lose money",
    allocationSuggestion: "Small speculative slice (entertainment money)"
  },
  {
    ticker: "UBER 2026-11-20 72.5C/80C spread",
    type: "OPTION",
    price: "Net debit ~$2.26 ($226/contract) from Oct 13 last trades (72.5C 3.40, 80C 1.14); bid/ask not available pre-market",
    quantMetrics: "Max loss $226; max gain $524; breakeven $74.76 (+4.8% vs $71.32); 80C vol 607",
    analystRating: "Underlying Buy; avg PT $100.86",
    earningsDate: "2026-11-04 (confirmed) - SPANS EARNINGS",
    thesis: "Low-cost rebound play near 52w low into Nov 4 earnings",
    risk: "Earnings binary; robotaxi headlines; most retail options traders lose money",
    allocationSuggestion: "Small speculative slice (entertainment money)"
  },
  {
    ticker: "ABT 2026-11-20 105C/110C spread",
    type: "OPTION",
    price: "Net debit ~$1.65 ($165/contract) from Oct 13 last trades (105C 3.15, 110C 1.50); bid/ask not available pre-market",
    quantMetrics: "Max loss $165; max gain $335; breakeven $106.65 (+3.9% vs $102.61); 105C vol 416",
    analystRating: "Underlying Strong Buy; avg PT $120.72",
    earningsDate: "2026-10-21 (confirmed) - SPANS EARNINGS; ex-div Oct 15",
    thesis: "Cheapest defined-risk play on a defensive name into Oct 21 earnings",
    risk: "Earnings in 1 week; ex-div drop ~$0.63; most retail options traders lose money",
    allocationSuggestion: "Small speculative slice (entertainment money)"
  },
  {
    ticker: "AVGO 2026-11-20 400C/420C spread",
    type: "OPTION",
    price: "Net debit ~$2.37 ($237/contract) from Oct 13 last trades (400C 5.10, 420C 2.73); bid/ask not available pre-market",
    quantMetrics: "Max loss $237; max gain $1,763; breakeven $402.37 (+12.6% vs $357.31); 420C vol 8,380",
    analystRating: "Underlying Strong Buy; avg PT $527.59",
    earningsDate: "unknown (next date not announced; not expected before Nov 20 but UNVERIFIED)",
    thesis: "Lottery-style upside on AI chip momentum",
    risk: "Needs +12.6% in 5 weeks; high beta; most likely to expire worthless; most retail options traders lose money",
    allocationSuggestion: "Smallest speculative slice (entertainment money)"
  }
];

export const pipeReport = [
  "GOOGL / STOCK / $353.78 (Oct 13 close) / PE 17.75; fwd PE 26.26; FY26 rev est +23.9%; 52w 239.71-408.61 / Strong Buy; 62 analysts (44 SB/13 Buy/5 Hold); avg PT $430.40 (+21.7%) / 2026-10-28 (confirmed) / Lowest trailing PE of the group with ~24% revenue growth est and 21.7% to avg PT / Earnings Oct 28 in 2 weeks; AI capex/regulatory headlines / Core holding; buy in weekly tranches, consider waiting past Oct 28",
  "AVGO / STOCK / $357.31 (Oct 13 close) / PE 45.61; fwd PE 20.62; FY26 rev est +65.9%; beta 1.48; 52w 289.96-495.00 / Strong Buy; 50 analysts (40 SB/7 Buy/3 Hold); avg PT $527.59 (+47.7%) / unknown (next date not announced; last reported 2026-09-02) / Largest upside to avg PT; custom AI chip demand; fwd PE ~21 / High beta; reported $50B+ AI financing plans; ~28% below 52w high / Core holding, small weekly tranches",
  "UBER / STOCK / $71.32 (Oct 13 close) / PE 15.56; fwd PE 17.66; FY26 EPS est +37%; 52w 65.41-100.35 / Buy; 50 analysts (32 SB/9 Buy/8 Hold/1 Strong Sell); avg PT $100.86 (+41.4%) / 2026-11-04 (confirmed) / Cheap vs growth, 41% to avg PT, near 52w low / Robotaxi competition; pending Delivery Hero bid; litigation / Tranche; small weekly buys",
  "ABT / STOCK / $102.61 (Oct 13 close) / PE 33.20; fwd PE 17.71; div yield 2.46%; beta 0.58; 52w 81.97-133.34 / Strong Buy; 28 analysts (19 SB/5 Buy/4 Hold); avg PT $120.72 (+17.7%) / 2026-10-21 (confirmed); ex-div 2026-10-15 / Defensive dividend payer at ~18x fwd earnings, upgrades trending up / Earnings Oct 21 within a week; trailing EPS -61% YoY / Core defensive holding; tranche",
  "LLY / STOCK / $1,166.51 (Oct 13 close) / PE 39.16; fwd PE 29.86; FY26 rev est +35.9%; beta 0.45 / Buy; 30 analysts (19 SB/6 Buy/3 Hold/1 Sell/1 Strong Sell); avg PT $1,330.14 (+14.0%) / 2026-10-29 (confirmed) / Obesity-drug growth leader with ~36% revenue growth est / Earnings Oct 29; drug-pricing policy; high share price (fractional shares) / Small tranche via fractional shares",
  "V / STOCK / $396.06 (Oct 13 close; at 52w high 396.35) / PE 33.72; fwd PE 27.42; beta 0.77; div yield 0.68% / Strong Buy; 40 analysts (27 SB/9 Buy/3 Hold/1 Sell); avg PT $420.47 (+6.2%) / 2026-10-27 (confirmed) / Quality compounder, low beta / Only ~6% to avg PT after run to 52w high; earnings Oct 27 / Small tranche only; wait for pullback",
  "GOOGL 2026-11-20 380C/400C spread / OPTION / Net debit ~$3.73 ($373/contract) from Oct 13 last trades (380C 7.03, 400C 3.30); bid/ask not available pre-market / Max loss $373; max gain $1,627; breakeven $383.73 (+8.5% vs $353.78); 380C vol 10,081 / Underlying Strong Buy; avg PT $430.40 / 2026-10-28 (confirmed) - SPANS EARNINGS / Defined-risk bet GOOGL rallies past $384 after Oct 28 earnings / Needs +8.5% in 5 weeks; earnings gap can go either way; most retail options traders lose money / Small speculative slice (entertainment money)",
  "UBER 2026-11-20 72.5C/80C spread / OPTION / Net debit ~$2.26 ($226/contract) from Oct 13 last trades (72.5C 3.40, 80C 1.14); bid/ask not available pre-market / Max loss $226; max gain $524; breakeven $74.76 (+4.8% vs $71.32); 80C vol 607 / Underlying Buy; avg PT $100.86 / 2026-11-04 (confirmed) - SPANS EARNINGS / Low-cost rebound play near 52w low into Nov 4 earnings / Earnings binary; robotaxi headlines; most retail options traders lose money / Small speculative slice (entertainment money)",
  "ABT 2026-11-20 105C/110C spread / OPTION / Net debit ~$1.65 ($165/contract) from Oct 13 last trades (105C 3.15, 110C 1.50); bid/ask not available pre-market / Max loss $165; max gain $335; breakeven $106.65 (+3.9% vs $102.61); 105C vol 416 / Underlying Strong Buy; avg PT $120.72 / 2026-10-21 (confirmed) - SPANS EARNINGS; ex-div Oct 15 / Cheapest defined-risk play on a defensive name into Oct 21 earnings / Earnings in 1 week; ex-div drop ~$0.63; most retail options traders lose money / Small speculative slice (entertainment money)",
  "AVGO 2026-11-20 400C/420C spread / OPTION / Net debit ~$2.37 ($237/contract) from Oct 13 last trades (400C 5.10, 420C 2.73); bid/ask not available pre-market / Max loss $237; max gain $1,763; breakeven $402.37 (+12.6% vs $357.31); 420C vol 8,380 / Underlying Strong Buy; avg PT $527.59 / unknown (next date not announced; not expected before Nov 20 but UNVERIFIED) / Lottery-style upside on AI chip momentum / Needs +12.6% in 5 weeks; high beta; most likely to expire worthless; most retail options traders lose money / Smallest speculative slice (entertainment money)"
];

export const summary = "Strongest stock candidates: GOOGL (Strong Buy, avg PT $430.40, +21.7%, lowest PE), AVGO (Strong Buy, avg PT $527.59, +47.7%), and UBER (Buy, avg PT $100.86, +41.4%, near 52w low). Riskiest options trades: AVGO 2026-11-20 400C/420C spread (needs +12.6%, high beta, likely to expire worthless) and GOOGL 2026-11-20 380C/400C spread (spans earnings, needs +8.5%). Quotes from Oct 13 last trades; re-check live chains before any order. Research only, not advice.";
