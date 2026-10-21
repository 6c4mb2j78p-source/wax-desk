// Weekly stock and options research snapshot.
// Source: Stock & Options Scout, week of 2026-10-21.
// No card-ledger repo exists; written to 6c4mb2j78p-source/wax-desk as the fallback data file.
// Replaces the prior week's data.
// Prices as of Oct 20, 2026 close. Option premiums from Oct 20 last trades (re-check bid/ask after open).
// Research only, not advice. Verify live quotes and do your own due diligence.

export const researchWeek = "2026-10-21";
export const asOf = "2026-10-20";

export const stockOptionsRows = [
  {
    ticker: "GOOGL",
    type: "STOCK",
    price: "$340.28 (Oct 20 close)",
    quantMetrics: "PE 17.1; fwd PE 22.2; PEG 1.16; FY26 EPS est growth +23.3%; beta 1.21; 52w 249.29-408.61",
    analystRating: "Strong Buy; 62 analysts (44 SB/13 Buy/5 Hold); avg PT $430.51 (+26.5%)",
    earningsDate: "2026-10-28 AMC (confirmed)",
    thesis: "Lowest PE in group with ~23% EPS growth est and ~27% to avg PT",
    risk: "Earnings in 1 week; AI capex/regulatory headlines; -2.1% last week",
    allocationSuggestion: "Core, ~25% of weekly budget; consider splitting before/after Oct 28"
  },
  {
    ticker: "AVGO",
    type: "STOCK",
    price: "$334.37 (Oct 20 close)",
    quantMetrics: "PE 42.7; fwd PE 17.2; PEG 0.27; FY EPS est growth +70.9%; beta 1.48; 32% below 52w high 495.00",
    analystRating: "Strong Buy; 50 analysts (40 SB/7 Buy/3 Hold); avg PT $527.59 (+57.8%)",
    earningsDate: "2026-12-09 (Yahoo estimate; not yet confirmed by company)",
    thesis: "Largest upside to avg PT; fwd PE ~17 on ~71% EPS growth est",
    risk: "High beta; below 20/50/200-day SMAs (downtrend); -7.7% past month",
    allocationSuggestion: "Core, ~20% of weekly budget in small tranches"
  },
  {
    ticker: "UBER",
    type: "STOCK",
    price: "$68.94 (Oct 20 close)",
    quantMetrics: "PE 15.1; fwd PE 15.6; FY26 EPS est growth +37%; beta 1.27; 5.9% above 52w low 65.41",
    analystRating: "Buy; 50 analysts (32 SB/9 Buy/8 Hold/1 Strong Sell); avg PT $100.86 (+46.3%)",
    earningsDate: "2026-11-04 BMO (confirmed)",
    thesis: "Cheapest fwd PE in group; 46% to avg PT; near 52w low",
    risk: "Robotaxi competition; below 50/200-day SMAs; earnings Nov 4",
    allocationSuggestion: "Tranche, ~15% of weekly budget"
  },
  {
    ticker: "ABT",
    type: "STOCK",
    price: "$102.45 (Oct 20 close)",
    quantMetrics: "PE 33.0; fwd PE 16.9; div yield 2.46%; beta 0.58; FY EPS est growth +7.2%",
    analystRating: "Strong Buy; 28 analysts (19 SB/5 Buy/4 Hold); avg PT $120.72 (+17.8%)",
    earningsDate: "2026-10-21 BMO (confirmed; TODAY before the open)",
    thesis: "Defensive dividend payer at ~17x fwd earnings; ratings trending up",
    risk: "Reports today - price can gap at the open; trailing EPS -48% Q/Q",
    allocationSuggestion: "Defensive, ~10% of weekly budget; wait to see earnings reaction"
  },
  {
    ticker: "LLY",
    type: "STOCK",
    price: "$1,283.66 (Oct 20 close)",
    quantMetrics: "PE 43.1; fwd PE 27.2; PEG 0.88; FY EPS est growth +44.1%; beta 0.45; 2.1% below 52w high 1311.75",
    analystRating: "Buy; 31 analysts (20 SB/6 Buy/3 Hold/1 Sell/1 Strong Sell); avg PT $1,328 (+3.5%)",
    earningsDate: "2026-10-29 BMO (confirmed)",
    thesis: "Obesity-drug growth leader; +9.3% past month",
    risk: "Only ~3.5% to avg PT after the run; earnings Oct 29; drug-pricing policy",
    allocationSuggestion: "Small, ~5% of weekly budget (fractional); wait for pullback"
  },
  {
    ticker: "V",
    type: "STOCK",
    price: "$406.57 (Oct 20 close; near 52w high 408.59)",
    quantMetrics: "PE 34.6; fwd PE 27.1; FY EPS est growth +15.4%; beta 0.77; div yield 0.66%",
    analystRating: "Strong Buy; 40 analysts (27 SB/9 Buy/3 Hold/1 Sell); avg PT $422.77 (+4.0%)",
    earningsDate: "2026-10-27 AMC (confirmed)",
    thesis: "Quality low-beta compounder",
    risk: "Only ~4% to avg PT at 52w high after +12% month; earnings Oct 27",
    allocationSuggestion: "Small, ~5% of weekly budget; wait for pullback"
  },
  {
    ticker: "GOOGL 2026-11-20 360C/380C",
    type: "OPTION - call debit spread",
    price: "Net debit ~$4.30 ($430/contract) from Oct 20 last trades (360C 7.15, 380C 2.85); bid/ask unavailable pre-market",
    quantMetrics: "Max loss $430; max gain $1,570; breakeven $364.30 (+7.1% vs $340.28); 360C vol 1,586, 380C vol 954",
    analystRating: "Underlying Strong Buy; avg PT $430.51",
    earningsDate: "2026-10-28 (confirmed) - SPANS EARNINGS",
    thesis: "Defined-risk bet GOOGL recovers above $364 after Oct 28 earnings",
    risk: "Needs +7.1% in 1 month; earnings gap either way; most retail options traders lose money - entertainment money only",
    allocationSuggestion: "Small speculative slice, 1 contract max"
  },
  {
    ticker: "UBER 2026-11-20 70C/75C",
    type: "OPTION - call debit spread",
    price: "Net debit ~$1.73 ($173/contract) from Oct 20 last trades (70C 3.11, 75C 1.38); bid/ask unavailable pre-market",
    quantMetrics: "Max loss $173; max gain $327; breakeven $71.73 (+4.0% vs $68.94); 70C vol 723, 75C vol 1,122",
    analystRating: "Underlying Buy; avg PT $100.86",
    earningsDate: "2026-11-04 (confirmed) - SPANS EARNINGS",
    thesis: "Low-cost rebound play near 52w low into Nov 4 earnings",
    risk: "Earnings binary; downtrend below 50/200-day SMAs; most retail options traders lose money - entertainment money only",
    allocationSuggestion: "Small speculative slice, 1 contract"
  },
  {
    ticker: "ABT 2026-11-20 105C/110C",
    type: "OPTION - call debit spread",
    price: "Net debit ~$1.61 ($161/contract) from Oct 20 last trades (105C 3.26, 110C 1.65); bid/ask unavailable pre-market",
    quantMetrics: "Max loss $161; max gain $339; breakeven $106.61 (+4.1% vs $102.45); 110C vol 4,371, 105C vol 321",
    analystRating: "Underlying Strong Buy; avg PT $120.72",
    earningsDate: "2026-10-21 BMO (confirmed) - earnings TODAY, before any fill; Oct 20 premiums will be stale at the open",
    thesis: "Cheapest defined-risk play on a defensive name; enter only after seeing the earnings reaction",
    risk: "Premiums reprice at open after earnings; most retail options traders lose money - entertainment money only",
    allocationSuggestion: "Small speculative slice, 1 contract; re-quote after open"
  },
  {
    ticker: "AVGO 2026-11-20 360C/380C",
    type: "OPTION - call debit spread",
    price: "Net debit ~$3.48 ($348/contract) from Oct 20 last trades (360C 6.40, 380C 2.92); bid/ask unavailable pre-market",
    quantMetrics: "Max loss $348; max gain $1,652; breakeven $363.48 (+8.7% vs $334.37); 360C vol 807, 380C vol 955",
    analystRating: "Underlying Strong Buy; avg PT $527.59",
    earningsDate: "2026-12-09 (Yahoo estimate, unconfirmed) - does not span earnings if date holds",
    thesis: "Rebound bet on AI chip leader 32% off its high",
    risk: "Needs +8.7% in 1 month while in a downtrend; high beta; most retail options traders lose money - entertainment money only",
    allocationSuggestion: "Smallest speculative slice, 1 contract"
  }
];

export const pipeReport = [
  "GOOGL / STOCK / $340.28 (Oct 20 close) / PE 17.1; fwd PE 22.2; PEG 1.16; FY26 EPS est growth +23.3%; beta 1.21; 52w 249.29-408.61 / Strong Buy; 62 analysts (44 SB/13 Buy/5 Hold); avg PT $430.51 (+26.5%) / 2026-10-28 AMC (confirmed) / Lowest PE in group with ~23% EPS growth est and ~27% to avg PT / Earnings in 1 week; AI capex/regulatory headlines; -2.1% last week / Core, ~25% of weekly budget; consider splitting before/after Oct 28",
  "AVGO / STOCK / $334.37 (Oct 20 close) / PE 42.7; fwd PE 17.2; PEG 0.27; FY EPS est growth +70.9%; beta 1.48; 32% below 52w high 495.00 / Strong Buy; 50 analysts (40 SB/7 Buy/3 Hold); avg PT $527.59 (+57.8%) / 2026-12-09 (Yahoo estimate; not yet confirmed by company) / Largest upside to avg PT; fwd PE ~17 on ~71% EPS growth est / High beta; below 20/50/200-day SMAs (downtrend); -7.7% past month / Core, ~20% of weekly budget in small tranches",
  "UBER / STOCK / $68.94 (Oct 20 close) / PE 15.1; fwd PE 15.6; FY26 EPS est growth +37%; beta 1.27; 5.9% above 52w low 65.41 / Buy; 50 analysts (32 SB/9 Buy/8 Hold/1 Strong Sell); avg PT $100.86 (+46.3%) / 2026-11-04 BMO (confirmed) / Cheapest fwd PE in group; 46% to avg PT; near 52w low / Robotaxi competition; below 50/200-day SMAs; earnings Nov 4 / Tranche, ~15% of weekly budget",
  "ABT / STOCK / $102.45 (Oct 20 close) / PE 33.0; fwd PE 16.9; div yield 2.46%; beta 0.58; FY EPS est growth +7.2% / Strong Buy; 28 analysts (19 SB/5 Buy/4 Hold); avg PT $120.72 (+17.8%) / 2026-10-21 BMO (confirmed; TODAY before the open) / Defensive dividend payer at ~17x fwd earnings; ratings trending up / Reports today - price can gap at the open; trailing EPS -48% Q/Q / Defensive, ~10% of weekly budget; wait to see earnings reaction",
  "LLY / STOCK / $1,283.66 (Oct 20 close) / PE 43.1; fwd PE 27.2; PEG 0.88; FY EPS est growth +44.1%; beta 0.45; 2.1% below 52w high 1311.75 / Buy; 31 analysts (20 SB/6 Buy/3 Hold/1 Sell/1 Strong Sell); avg PT $1,328 (+3.5%) / 2026-10-29 BMO (confirmed) / Obesity-drug growth leader; +9.3% past month / Only ~3.5% to avg PT after the run; earnings Oct 29; drug-pricing policy / Small, ~5% of weekly budget (fractional); wait for pullback",
  "V / STOCK / $406.57 (Oct 20 close; near 52w high 408.59) / PE 34.6; fwd PE 27.1; FY EPS est growth +15.4%; beta 0.77; div yield 0.66% / Strong Buy; 40 analysts (27 SB/9 Buy/3 Hold/1 Sell); avg PT $422.77 (+4.0%) / 2026-10-27 AMC (confirmed) / Quality low-beta compounder / Only ~4% to avg PT at 52w high after +12% month; earnings Oct 27 / Small, ~5% of weekly budget; wait for pullback",
  "GOOGL 2026-11-20 360C/380C / OPTION - call debit spread / Net debit ~$4.30 ($430/contract) from Oct 20 last trades (360C 7.15, 380C 2.85); bid/ask unavailable pre-market / Max loss $430; max gain $1,570; breakeven $364.30 (+7.1% vs $340.28); 360C vol 1,586, 380C vol 954 / Underlying Strong Buy; avg PT $430.51 / 2026-10-28 (confirmed) - SPANS EARNINGS / Defined-risk bet GOOGL recovers above $364 after Oct 28 earnings / Needs +7.1% in 1 month; earnings gap either way; most retail options traders lose money - entertainment money only / Small speculative slice, 1 contract max",
  "UBER 2026-11-20 70C/75C / OPTION - call debit spread / Net debit ~$1.73 ($173/contract) from Oct 20 last trades (70C 3.11, 75C 1.38); bid/ask unavailable pre-market / Max loss $173; max gain $327; breakeven $71.73 (+4.0% vs $68.94); 70C vol 723, 75C vol 1,122 / Underlying Buy; avg PT $100.86 / 2026-11-04 (confirmed) - SPANS EARNINGS / Low-cost rebound play near 52w low into Nov 4 earnings / Earnings binary; downtrend below 50/200-day SMAs; most retail options traders lose money - entertainment money only / Small speculative slice, 1 contract",
  "ABT 2026-11-20 105C/110C / OPTION - call debit spread / Net debit ~$1.61 ($161/contract) from Oct 20 last trades (105C 3.26, 110C 1.65); bid/ask unavailable pre-market / Max loss $161; max gain $339; breakeven $106.61 (+4.1% vs $102.45); 110C vol 4,371, 105C vol 321 / Underlying Strong Buy; avg PT $120.72 / 2026-10-21 BMO (confirmed) - earnings TODAY, before any fill; Oct 20 premiums will be stale at the open / Cheapest defined-risk play on a defensive name; enter only after seeing the earnings reaction / Premiums reprice at open after earnings; most retail options traders lose money - entertainment money only / Small speculative slice, 1 contract; re-quote after open",
  "AVGO 2026-11-20 360C/380C / OPTION - call debit spread / Net debit ~$3.48 ($348/contract) from Oct 20 last trades (360C 6.40, 380C 2.92); bid/ask unavailable pre-market / Max loss $348; max gain $1,652; breakeven $363.48 (+8.7% vs $334.37); 360C vol 807, 380C vol 955 / Underlying Strong Buy; avg PT $527.59 / 2026-12-09 (Yahoo estimate, unconfirmed) - does not span earnings if date holds / Rebound bet on AI chip leader 32% off its high / Needs +8.7% in 1 month while in a downtrend; high beta; most retail options traders lose money - entertainment money only / Smallest speculative slice, 1 contract"
];
