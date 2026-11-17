import type { Question } from '../../types/content';
import { calcQ, mp, part } from '../questionHelpers';

function interpretation(
  id: string,
  prompt: string,
  modelAnswer: string,
  keywords: string[]
) {
  return part(id, prompt, prompt, 2, modelAnswer, {
    markingGuide: [mp('Interprets the result and states a management action', keywords, 2)]
  });
}

export const calcBank: Question[] = [
  calcQ(
    'calc-01',
    'PV = $200,000; EV = $180,000; AC = $220,000; BAC = $800,000. Calculate (a) SV, (b) CV, (c) SPI, (d) CPI and (e) interpret the project’s position.',
    [
      part('a', 'a', 'Schedule variance (SV)', 2, 'SV = EV − PV = $180,000 − $200,000 = −$20,000. The project is $20,000 behind schedule.', {
        numericAnswer: -20000,
        tolerance: 1,
        unit: '$',
        formula: 'SV = EV − PV'
      }),
      part('b', 'b', 'Cost variance (CV)', 2, 'CV = EV − AC = $180,000 − $220,000 = −$40,000. The project is $40,000 over budget.', {
        numericAnswer: -40000,
        tolerance: 1,
        unit: '$',
        formula: 'CV = EV − AC'
      }),
      part('c', 'c', 'Schedule performance index (SPI)', 2, 'SPI = EV ÷ PV = $180,000 ÷ $200,000 = 0.90. The project is behind schedule.', {
        numericAnswer: 0.9,
        tolerance: 0.001,
        unit: '',
        formula: 'SPI = EV ÷ PV'
      }),
      part('d', 'd', 'Cost performance index (CPI)', 2, 'CPI = EV ÷ AC = $180,000 ÷ $220,000 = 0.8182. The project is over budget.', {
        numericAnswer: 0.8182,
        tolerance: 0.001,
        unit: '',
        formula: 'CPI = EV ÷ AC'
      }),
      interpretation(
        'e',
        'Interpretation and action',
        'The project is behind schedule and over budget. The project manager should investigate the causes of the cost and schedule slippage, forecast the final cost, and recommend corrective action through integrated change control.',
        ['behind', 'over budget', 'investigate', 'corrective', 'forecast']
      )
    ],
    'Both variances are negative and both indexes are below 1.0, so the project is behind schedule and over budget.',
    'Do not call a negative variance favourable.'
  ),
  calcQ(
    'calc-02',
    'PV = $500,000; EV = $550,000; AC = $520,000; BAC = $1,500,000. Calculate (a) SV, (b) CV, (c) SPI, (d) CPI and (e) interpret the project’s position.',
    [
      part('a', 'a', 'Schedule variance (SV)', 2, 'SV = EV − PV = $550,000 − $500,000 = +$50,000. The project is $50,000 ahead of schedule.', {
        numericAnswer: 50000,
        tolerance: 1,
        unit: '$',
        formula: 'SV = EV − PV'
      }),
      part('b', 'b', 'Cost variance (CV)', 2, 'CV = EV − AC = $550,000 − $520,000 = +$30,000. The project is $30,000 under budget.', {
        numericAnswer: 30000,
        tolerance: 1,
        unit: '$',
        formula: 'CV = EV − AC'
      }),
      part('c', 'c', 'Schedule performance index (SPI)', 2, 'SPI = EV ÷ PV = $550,000 ÷ $500,000 = 1.10. The project is ahead of schedule.', {
        numericAnswer: 1.1,
        tolerance: 0.001,
        unit: '',
        formula: 'SPI = EV ÷ PV'
      }),
      part('d', 'd', 'Cost performance index (CPI)', 2, 'CPI = EV ÷ AC = $550,000 ÷ $520,000 = 1.0577. The project is under budget.', {
        numericAnswer: 1.0577,
        tolerance: 0.001,
        unit: '',
        formula: 'CPI = EV ÷ AC'
      }),
      interpretation(
        'e',
        'Interpretation and action',
        'The project is ahead of schedule and under budget. The project manager should confirm that the earned value is genuine, protect the gains, and continue monitoring for changes.',
        ['ahead', 'under budget', 'confirm', 'monitor', 'protect']
      )
    ],
    'Both variances are positive and both indexes are above 1.0, so the project is ahead of schedule and under budget.',
    'Do not assume good performance will continue without monitoring.'
  ),
  calcQ(
    'calc-03',
    'PV = $120,000; EV = $90,000; AC = $100,000; BAC = $400,000. Calculate (a) SV, (b) CV, (c) SPI, (d) CPI and (e) interpret the project’s position.',
    [
      part('a', 'a', 'Schedule variance (SV)', 2, 'SV = EV − PV = $90,000 − $120,000 = −$30,000. The project is $30,000 behind schedule.', {
        numericAnswer: -30000,
        tolerance: 1,
        unit: '$',
        formula: 'SV = EV − PV'
      }),
      part('b', 'b', 'Cost variance (CV)', 2, 'CV = EV − AC = $90,000 − $100,000 = −$10,000. The project is $10,000 over budget.', {
        numericAnswer: -10000,
        tolerance: 1,
        unit: '$',
        formula: 'CV = EV − AC'
      }),
      part('c', 'c', 'Schedule performance index (SPI)', 2, 'SPI = EV ÷ PV = $90,000 ÷ $120,000 = 0.75. The project is behind schedule.', {
        numericAnswer: 0.75,
        tolerance: 0.001,
        unit: '',
        formula: 'SPI = EV ÷ PV'
      }),
      part('d', 'd', 'Cost performance index (CPI)', 2, 'CPI = EV ÷ AC = $90,000 ÷ $100,000 = 0.90. The project is over budget.', {
        numericAnswer: 0.9,
        tolerance: 0.001,
        unit: '',
        formula: 'CPI = EV ÷ AC'
      }),
      interpretation(
        'e',
        'Interpretation and action',
        'The project is behind schedule and over budget, with schedule performance weaker than cost performance. The project manager should investigate schedule constraints and cost drivers and take corrective action.',
        ['behind', 'over budget', 'schedule', 'cost', 'corrective']
      )
    ],
    'SPI is 0.75 and CPI is 0.90, so both dimensions are unfavourable, with the schedule problem larger.',
    'A CPI of 0.90 is below 1.0, so the project is over budget.'
  ),
  calcQ(
    'calc-04',
    'PV = $800,000; EV = $760,000; AC = $850,000; BAC = $2,000,000. Calculate (a) SV, (b) CV, (c) SPI, (d) CPI and (e) interpret the project’s position.',
    [
      part('a', 'a', 'Schedule variance (SV)', 2, 'SV = EV − PV = $760,000 − $800,000 = −$40,000. The project is $40,000 behind schedule.', {
        numericAnswer: -40000,
        tolerance: 1,
        unit: '$',
        formula: 'SV = EV − PV'
      }),
      part('b', 'b', 'Cost variance (CV)', 2, 'CV = EV − AC = $760,000 − $850,000 = −$90,000. The project is $90,000 over budget.', {
        numericAnswer: -90000,
        tolerance: 1,
        unit: '$',
        formula: 'CV = EV − AC'
      }),
      part('c', 'c', 'Schedule performance index (SPI)', 2, 'SPI = EV ÷ PV = $760,000 ÷ $800,000 = 0.95. The project is slightly behind schedule.', {
        numericAnswer: 0.95,
        tolerance: 0.001,
        unit: '',
        formula: 'SPI = EV ÷ PV'
      }),
      part('d', 'd', 'Cost performance index (CPI)', 2, 'CPI = EV ÷ AC = $760,000 ÷ $850,000 = 0.8941. The project is over budget.', {
        numericAnswer: 0.8941,
        tolerance: 0.001,
        unit: '',
        formula: 'CPI = EV ÷ AC'
      }),
      interpretation(
        'e',
        'Interpretation and action',
        'The project is behind schedule and over budget, with cost performance the larger concern. The project manager should investigate cost overruns, reforecast the final cost and consider corrective action.',
        ['behind', 'over budget', 'cost', 'forecast', 'corrective']
      )
    ],
    'SPI is 0.95 and CPI is 0.8941, so both are unfavourable, with cost performance worse than schedule performance.',
    'A CPI below 1.0 means over budget, not under budget.'
  ),
  calcQ(
    'calc-05',
    'PV = $60,000; EV = $75,000; AC = $70,000; BAC = $300,000. Calculate (a) SV, (b) CV, (c) SPI, (d) CPI and (e) interpret the project’s position.',
    [
      part('a', 'a', 'Schedule variance (SV)', 2, 'SV = EV − PV = $75,000 − $60,000 = +$15,000. The project is $15,000 ahead of schedule.', {
        numericAnswer: 15000,
        tolerance: 1,
        unit: '$',
        formula: 'SV = EV − PV'
      }),
      part('b', 'b', 'Cost variance (CV)', 2, 'CV = EV − AC = $75,000 − $70,000 = +$5,000. The project is $5,000 under budget.', {
        numericAnswer: 5000,
        tolerance: 1,
        unit: '$',
        formula: 'CV = EV − AC'
      }),
      part('c', 'c', 'Schedule performance index (SPI)', 2, 'SPI = EV ÷ PV = $75,000 ÷ $60,000 = 1.25. The project is ahead of schedule.', {
        numericAnswer: 1.25,
        tolerance: 0.001,
        unit: '',
        formula: 'SPI = EV ÷ PV'
      }),
      part('d', 'd', 'Cost performance index (CPI)', 2, 'CPI = EV ÷ AC = $75,000 ÷ $70,000 = 1.0714. The project is under budget.', {
        numericAnswer: 1.0714,
        tolerance: 0.001,
        unit: '',
        formula: 'CPI = EV ÷ AC'
      }),
      interpretation(
        'e',
        'Interpretation and action',
        'The project is ahead of schedule and under budget. The project manager should verify that the progress is real, protect the gains and continue monitoring.',
        ['ahead', 'under budget', 'verify', 'monitor', 'protect']
      )
    ],
    'Both indexes are above 1.0, so the project is ahead of schedule and under budget.',
    'An SPI above 1.0 is favourable for schedule.'
  ),
  calcQ(
    'calc-06',
    'PV = $400,000; EV = $300,000; AC = $450,000; BAC = $1,000,000. Calculate (a) ETC using the efficiency method, (b) ETC using the plan method, (c) EAC using the efficiency method, and (d) interpret the forecasts.',
    [
      part('a', 'a', 'ETC — efficiency method', 3, 'CPI = EV ÷ AC = $300,000 ÷ $450,000 = 0.6667. ETC = (BAC − EV) ÷ CPI = ($1,000,000 − $300,000) ÷ 0.6667 = $700,000 ÷ 0.6667 = $1,050,000.', {
        numericAnswer: 1050000,
        tolerance: 1000,
        unit: '$',
        formula: 'CPI = EV ÷ AC; ETC = (BAC − EV) ÷ CPI'
      }),
      part('b', 'b', 'ETC — plan method', 2, 'ETC = BAC − EV = $1,000,000 − $300,000 = $700,000.', {
        numericAnswer: 700000,
        tolerance: 1000,
        unit: '$',
        formula: 'ETC = BAC − EV'
      }),
      part('c', 'c', 'EAC — efficiency method', 3, 'EAC = AC + ETC = $450,000 + $1,050,000 = $1,500,000.', {
        numericAnswer: 1500000,
        tolerance: 1000,
        unit: '$',
        formula: 'EAC = AC + ETC'
      }),
      interpretation(
        'd',
        'Interpretation and action',
        'If current cost efficiency continues, the project will finish at about $1,500,000 against a $1,000,000 budget. The team must improve cost efficiency or renegotiate the budget through change control.',
        ['1,500,000', 'over budget', 'efficiency', 'change control', 'reforecast']
      )
    ],
    'The efficiency forecast is $1,500,000; the plan-based forecast is $1,150,000 (AC $450,000 + ETC $700,000). The choice of ETC depends on whether past performance is expected to continue.',
    'Do not mix the ETC methods or add ETC to EV.'
  ),
  calcQ(
    'calc-07',
    'PV = $250,000; EV = $200,000; AC = $240,000; BAC = $900,000. Calculate (a) ETC using the efficiency method, (b) ETC using the plan method, (c) EAC using the efficiency method, and (d) interpret the forecasts.',
    [
      part('a', 'a', 'ETC — efficiency method', 3, 'CPI = EV ÷ AC = $200,000 ÷ $240,000 = 0.8333. ETC = (BAC − EV) ÷ CPI = ($900,000 − $200,000) ÷ 0.8333 = $700,000 ÷ 0.8333 = $840,000.', {
        numericAnswer: 840000,
        tolerance: 1000,
        unit: '$',
        formula: 'CPI = EV ÷ AC; ETC = (BAC − EV) ÷ CPI'
      }),
      part('b', 'b', 'ETC — plan method', 2, 'ETC = BAC − EV = $900,000 − $200,000 = $700,000.', {
        numericAnswer: 700000,
        tolerance: 1000,
        unit: '$',
        formula: 'ETC = BAC − EV'
      }),
      part('c', 'c', 'EAC — efficiency method', 3, 'EAC = AC + ETC = $240,000 + $840,000 = $1,080,000.', {
        numericAnswer: 1080000,
        tolerance: 1000,
        unit: '$',
        formula: 'EAC = AC + ETC'
      }),
      interpretation(
        'd',
        'Interpretation and action',
        'If current efficiency continues, the project will finish at about $1,080,000 against a $900,000 budget. The project manager should investigate the cost drivers and take corrective action.',
        ['1,080,000', 'over budget', 'cost', 'corrective', 'forecast']
      )
    ],
    'The efficiency forecast is $1,080,000; the plan-based forecast is $940,000. The team is currently over budget.',
    'CPI is below 1.0, so the project is over budget.'
  ),
  calcQ(
    'calc-08',
    'PV = $350,000; EV = $400,000; AC = $380,000; BAC = $1,200,000. Calculate (a) ETC using the efficiency method, (b) ETC using the plan method, (c) EAC using the efficiency method, and (d) interpret the forecasts.',
    [
      part('a', 'a', 'ETC — efficiency method', 3, 'CPI = EV ÷ AC = $400,000 ÷ $380,000 = 1.0526. ETC = (BAC − EV) ÷ CPI = ($1,200,000 − $400,000) ÷ 1.0526 = $800,000 ÷ 1.0526 = $760,000.', {
        numericAnswer: 760000,
        tolerance: 1000,
        unit: '$',
        formula: 'CPI = EV ÷ AC; ETC = (BAC − EV) ÷ CPI'
      }),
      part('b', 'b', 'ETC — plan method', 2, 'ETC = BAC − EV = $1,200,000 − $400,000 = $800,000.', {
        numericAnswer: 800000,
        tolerance: 1000,
        unit: '$',
        formula: 'ETC = BAC − EV'
      }),
      part('c', 'c', 'EAC — efficiency method', 3, 'EAC = AC + ETC = $380,000 + $760,000 = $1,140,000.', {
        numericAnswer: 1140000,
        tolerance: 1000,
        unit: '$',
        formula: 'EAC = AC + ETC'
      }),
      interpretation(
        'd',
        'Interpretation and action',
        'If current efficiency continues, the project will finish at about $1,140,000, below the $1,200,000 budget. The project manager should confirm the earned value and protect the cost advantage.',
        ['1,140,000', 'under budget', 'confirm', 'protect', 'monitor']
      )
    ],
    'CPI is above 1.0, so the project is under budget. The efficiency forecast is $1,140,000, below BAC.',
    'An EAC below BAC is favourable, but the earned value should be verified.'
  ),
  calcQ(
    'calc-09',
    'PV = $150,000; EV = $120,000; AC = $160,000; BAC = $600,000. Calculate (a) ETC using the efficiency method, (b) ETC using the plan method, (c) EAC using the efficiency method, and (d) interpret the forecasts.',
    [
      part('a', 'a', 'ETC — efficiency method', 3, 'CPI = EV ÷ AC = $120,000 ÷ $160,000 = 0.75. ETC = (BAC − EV) ÷ CPI = ($600,000 − $120,000) ÷ 0.75 = $480,000 ÷ 0.75 = $640,000.', {
        numericAnswer: 640000,
        tolerance: 1000,
        unit: '$',
        formula: 'CPI = EV ÷ AC; ETC = (BAC − EV) ÷ CPI'
      }),
      part('b', 'b', 'ETC — plan method', 2, 'ETC = BAC − EV = $600,000 − $120,000 = $480,000.', {
        numericAnswer: 480000,
        tolerance: 1000,
        unit: '$',
        formula: 'ETC = BAC − EV'
      }),
      part('c', 'c', 'EAC — efficiency method', 3, 'EAC = AC + ETC = $160,000 + $640,000 = $800,000.', {
        numericAnswer: 800000,
        tolerance: 1000,
        unit: '$',
        formula: 'EAC = AC + ETC'
      }),
      interpretation(
        'd',
        'Interpretation and action',
        'If current efficiency continues, the project will finish at about $800,000 against a $600,000 budget. The project manager should investigate the cost overrun and recommend corrective action.',
        ['800,000', 'over budget', 'investigate', 'corrective', 'forecast']
      )
    ],
    'The efficiency forecast is $800,000; the plan-based forecast is $640,000. Both exceed BAC.',
    'Even the plan-based forecast can exceed BAC when AC is high and EV is low.'
  ),
  calcQ(
    'calc-10',
    'PV = $720,000; EV = $600,000; AC = $640,000; BAC = $1,440,000. Calculate (a) ETC using the efficiency method, (b) ETC using the plan method, (c) EAC using the efficiency method, and (d) interpret the forecasts.',
    [
      part('a', 'a', 'ETC — efficiency method', 3, 'CPI = EV ÷ AC = $600,000 ÷ $640,000 = 0.9375. ETC = (BAC − EV) ÷ CPI = ($1,440,000 − $600,000) ÷ 0.9375 = $840,000 ÷ 0.9375 = $896,000.', {
        numericAnswer: 896000,
        tolerance: 1000,
        unit: '$',
        formula: 'CPI = EV ÷ AC; ETC = (BAC − EV) ÷ CPI'
      }),
      part('b', 'b', 'ETC — plan method', 2, 'ETC = BAC − EV = $1,440,000 − $600,000 = $840,000.', {
        numericAnswer: 840000,
        tolerance: 1000,
        unit: '$',
        formula: 'ETC = BAC − EV'
      }),
      part('c', 'c', 'EAC — efficiency method', 3, 'EAC = AC + ETC = $640,000 + $896,000 = $1,536,000.', {
        numericAnswer: 1536000,
        tolerance: 1000,
        unit: '$',
        formula: 'EAC = AC + ETC'
      }),
      interpretation(
        'd',
        'Interpretation and action',
        'If current efficiency continues, the project will finish at about $1,536,000 against a $1,440,000 budget. The project manager should investigate the cost slippage and take corrective action.',
        ['1,536,000', 'over budget', 'cost', 'corrective', 'forecast']
      )
    ],
    'CPI is 0.9375, below 1.0, so the project is over budget. The efficiency forecast exceeds BAC.',
    'Do not round CPI so aggressively that the EAC loses precision.'
  ),
  calcQ(
    'calc-11',
    'PV = $300,000; EV = $270,000; AC = $330,000; BAC = $1,200,000. Calculate (a) SV, (b) CV, (c) SPI, (d) CPI and (e) TCPI.',
    [
      part('a', 'a', 'Schedule variance (SV)', 2, 'SV = EV − PV = $270,000 − $300,000 = −$30,000. The project is behind schedule.', {
        numericAnswer: -30000,
        tolerance: 1,
        unit: '$',
        formula: 'SV = EV − PV'
      }),
      part('b', 'b', 'Cost variance (CV)', 2, 'CV = EV − AC = $270,000 − $330,000 = −$60,000. The project is over budget.', {
        numericAnswer: -60000,
        tolerance: 1,
        unit: '$',
        formula: 'CV = EV − AC'
      }),
      part('c', 'c', 'Schedule performance index (SPI)', 2, 'SPI = EV ÷ PV = $270,000 ÷ $300,000 = 0.90.', {
        numericAnswer: 0.9,
        tolerance: 0.001,
        unit: '',
        formula: 'SPI = EV ÷ PV'
      }),
      part('d', 'd', 'Cost performance index (CPI)', 2, 'CPI = EV ÷ AC = $270,000 ÷ $330,000 = 0.8182.', {
        numericAnswer: 0.8182,
        tolerance: 0.001,
        unit: '',
        formula: 'CPI = EV ÷ AC'
      }),
      part('e', 'e', 'To-complete performance index (TCPI)', 2, 'TCPI = (BAC − EV) ÷ (BAC − AC) = ($1,200,000 − $270,000) ÷ ($1,200,000 − $330,000) = $930,000 ÷ $870,000 = 1.0690. The team must improve cost efficiency to finish within the remaining budget.', {
        numericAnswer: 1.069,
        tolerance: 0.001,
        unit: '',
        formula: 'TCPI = (BAC − EV) ÷ (BAC − AC)'
      })
    ],
    'The project is behind schedule and over budget. TCPI is above 1.0, so the remaining work must be performed more efficiently than plan to finish on budget.',
    'TCPI uses the remaining budget (BAC − AC), not the original budget alone.'
  ),
  calcQ(
    'calc-12',
    'PV = $250,000; EV = $260,000; AC = $250,000; BAC = $1,000,000. Calculate (a) SV, (b) CV, (c) SPI, (d) CPI and (e) TCPI.',
    [
      part('a', 'a', 'Schedule variance (SV)', 2, 'SV = EV − PV = $260,000 − $250,000 = +$10,000. The project is ahead of schedule.', {
        numericAnswer: 10000,
        tolerance: 1,
        unit: '$',
        formula: 'SV = EV − PV'
      }),
      part('b', 'b', 'Cost variance (CV)', 2, 'CV = EV − AC = $260,000 − $250,000 = +$10,000. The project is under budget.', {
        numericAnswer: 10000,
        tolerance: 1,
        unit: '$',
        formula: 'CV = EV − AC'
      }),
      part('c', 'c', 'Schedule performance index (SPI)', 2, 'SPI = EV ÷ PV = $260,000 ÷ $250,000 = 1.04.', {
        numericAnswer: 1.04,
        tolerance: 0.001,
        unit: '',
        formula: 'SPI = EV ÷ PV'
      }),
      part('d', 'd', 'Cost performance index (CPI)', 2, 'CPI = EV ÷ AC = $260,000 ÷ $250,000 = 1.04.', {
        numericAnswer: 1.04,
        tolerance: 0.001,
        unit: '',
        formula: 'CPI = EV ÷ AC'
      }),
      part('e', 'e', 'To-complete performance index (TCPI)', 2, 'TCPI = (BAC − EV) ÷ (BAC − AC) = ($1,000,000 − $260,000) ÷ ($1,000,000 − $250,000) = $740,000 ÷ $750,000 = 0.9867. The remaining work can be completed at slightly less than plan efficiency and still finish on budget.', {
        numericAnswer: 0.9867,
        tolerance: 0.001,
        unit: '',
        formula: 'TCPI = (BAC − EV) ÷ (BAC − AC)'
      })
    ],
    'The project is slightly ahead of schedule and under budget. TCPI below 1.0 gives the team some cost buffer.',
    'Do not treat a TCPI below 1.0 as a problem.'
  ),
  calcQ(
    'calc-13',
    'PV = $90,000; EV = $100,000; AC = $95,000; BAC = $500,000. Calculate (a) SV, (b) CV, (c) SPI, (d) CPI and (e) TCPI.',
    [
      part('a', 'a', 'Schedule variance (SV)', 2, 'SV = EV − PV = $100,000 − $90,000 = +$10,000. The project is ahead of schedule.', {
        numericAnswer: 10000,
        tolerance: 1,
        unit: '$',
        formula: 'SV = EV − PV'
      }),
      part('b', 'b', 'Cost variance (CV)', 2, 'CV = EV − AC = $100,000 − $95,000 = +$5,000. The project is under budget.', {
        numericAnswer: 5000,
        tolerance: 1,
        unit: '$',
        formula: 'CV = EV − AC'
      }),
      part('c', 'c', 'Schedule performance index (SPI)', 2, 'SPI = EV ÷ PV = $100,000 ÷ $90,000 = 1.1111.', {
        numericAnswer: 1.1111,
        tolerance: 0.001,
        unit: '',
        formula: 'SPI = EV ÷ PV'
      }),
      part('d', 'd', 'Cost performance index (CPI)', 2, 'CPI = EV ÷ AC = $100,000 ÷ $95,000 = 1.0526.', {
        numericAnswer: 1.0526,
        tolerance: 0.001,
        unit: '',
        formula: 'CPI = EV ÷ AC'
      }),
      part('e', 'e', 'To-complete performance index (TCPI)', 2, 'TCPI = (BAC − EV) ÷ (BAC − AC) = ($500,000 − $100,000) ÷ ($500,000 − $95,000) = $400,000 ÷ $405,000 = 0.9877. The remaining work can be completed at slightly less than plan efficiency and still finish on budget.', {
        numericAnswer: 0.9877,
        tolerance: 0.001,
        unit: '',
        formula: 'TCPI = (BAC − EV) ÷ (BAC − AC)'
      })
    ],
    'The project is ahead of schedule and under budget, and TCPI is below 1.0.',
    'SPI and CPI above 1.0 are both favourable.'
  ),
  calcQ(
    'calc-14',
    'PV = $600,000; EV = $540,000; AC = $620,000; BAC = $1,800,000. Calculate (a) SV, (b) CV, (c) SPI, (d) CPI and (e) TCPI.',
    [
      part('a', 'a', 'Schedule variance (SV)', 2, 'SV = EV − PV = $540,000 − $600,000 = −$60,000. The project is behind schedule.', {
        numericAnswer: -60000,
        tolerance: 1,
        unit: '$',
        formula: 'SV = EV − PV'
      }),
      part('b', 'b', 'Cost variance (CV)', 2, 'CV = EV − AC = $540,000 − $620,000 = −$80,000. The project is over budget.', {
        numericAnswer: -80000,
        tolerance: 1,
        unit: '$',
        formula: 'CV = EV − AC'
      }),
      part('c', 'c', 'Schedule performance index (SPI)', 2, 'SPI = EV ÷ PV = $540,000 ÷ $600,000 = 0.90.', {
        numericAnswer: 0.9,
        tolerance: 0.001,
        unit: '',
        formula: 'SPI = EV ÷ PV'
      }),
      part('d', 'd', 'Cost performance index (CPI)', 2, 'CPI = EV ÷ AC = $540,000 ÷ $620,000 = 0.8710.', {
        numericAnswer: 0.871,
        tolerance: 0.001,
        unit: '',
        formula: 'CPI = EV ÷ AC'
      }),
      part('e', 'e', 'To-complete performance index (TCPI)', 2, 'TCPI = (BAC − EV) ÷ (BAC − AC) = ($1,800,000 − $540,000) ÷ ($1,800,000 − $620,000) = $1,260,000 ÷ $1,180,000 = 1.0678. The team must improve cost efficiency to finish within the remaining budget.', {
        numericAnswer: 1.0678,
        tolerance: 0.001,
        unit: '',
        formula: 'TCPI = (BAC − EV) ÷ (BAC − AC)'
      })
    ],
    'The project is behind schedule and over budget. TCPI above 1.0 means the team must improve cost efficiency to finish on budget.',
    'TCPI uses the remaining budget, not the total BAC.'
  ),
  calcQ(
    'calc-15',
    'PV = $180,000; EV = $150,000; AC = $170,000; BAC = $750,000. Calculate (a) SV, (b) CV, (c) SPI, (d) CPI and (e) TCPI.',
    [
      part('a', 'a', 'Schedule variance (SV)', 2, 'SV = EV − PV = $150,000 − $180,000 = −$30,000. The project is behind schedule.', {
        numericAnswer: -30000,
        tolerance: 1,
        unit: '$',
        formula: 'SV = EV − PV'
      }),
      part('b', 'b', 'Cost variance (CV)', 2, 'CV = EV − AC = $150,000 − $170,000 = −$20,000. The project is over budget.', {
        numericAnswer: -20000,
        tolerance: 1,
        unit: '$',
        formula: 'CV = EV − AC'
      }),
      part('c', 'c', 'Schedule performance index (SPI)', 2, 'SPI = EV ÷ PV = $150,000 ÷ $180,000 = 0.8333.', {
        numericAnswer: 0.8333,
        tolerance: 0.001,
        unit: '',
        formula: 'SPI = EV ÷ PV'
      }),
      part('d', 'd', 'Cost performance index (CPI)', 2, 'CPI = EV ÷ AC = $150,000 ÷ $170,000 = 0.8824.', {
        numericAnswer: 0.8824,
        tolerance: 0.001,
        unit: '',
        formula: 'CPI = EV ÷ AC'
      }),
      part('e', 'e', 'To-complete performance index (TCPI)', 2, 'TCPI = (BAC − EV) ÷ (BAC − AC) = ($750,000 − $150,000) ÷ ($750,000 − $170,000) = $600,000 ÷ $580,000 = 1.0345. The team must improve cost efficiency slightly to finish within the remaining budget.', {
        numericAnswer: 1.0345,
        tolerance: 0.001,
        unit: '',
        formula: 'TCPI = (BAC − EV) ÷ (BAC − AC)'
      })
    ],
    'The project is behind schedule and over budget. TCPI above 1.0 means a modest improvement in cost efficiency is needed.',
    'A TCPI just above 1.0 still means improvement is required.'
  )
];
