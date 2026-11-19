// Authoring module for @oai/artifact-tool. Call populate(presentation, repositoryPath).
// The host supplies the Presentation instance. This file contains the editable slide source.
import fs from 'node:fs/promises';
import path from 'node:path';

export const FONT = 'Calibri';
export const SIZE = { width: 1280, height: 720 };
const C = { bg: '#F7F5EF', ink: '#183A32', muted: '#52665D', accent: '#B66A18', white: '#FFFFFF', pale: '#E8EEE5' };
const source = {
  challenge: 'https://thegavshackathon.com/challenges',
  brochure: 'https://thegavshackathon.com/docs/Tech4Bharat-2026-Problem-Statements.pdf',
  ondc: 'https://ondc.org/pages/buyer-network-participants.html',
  jumbotail: 'https://jumbotail.com/',
  udaan: 'https://udaan.com/about-us',
  solver: 'https://developers.google.com/optimization/cp/cp_solver',
  voice: 'https://dibd-bhashini.gitbook.io/bhashini-apis',
  sharing: 'https://arxiv.org/abs/1511.05270',
  mechanism: 'https://bura.brunel.ac.uk/bitstream/2438/17214/1/FullText.pdf',
  repo: 'https://github.com/Anant-0705/Research'
};

function text(slide, value, x, y, w, h, size = 30, bold = false, color = C.ink) {
  const box = slide.shapes.add({ geometry: 'textbox', name: `text-${slide.shapes.items.length + 1}`,
    position: { left: x, top: y, width: w, height: h }, fill: 'none',
    line: { fill: 'none', width: 0, style: 'solid' } });
  box.text = value;
  box.text.style = { typeface: FONT, fontSize: size, bold, color,
    alignment: 'left', verticalAlignment: 'top', autoFit: 'none', wrap: 'word', insets: 0 };
  return box;
}

function page(p, title, n, notes, dark = false) {
  const slide = p.slides.add({ width: SIZE.width, height: SIZE.height });
  slide.background.fill = dark ? C.ink : C.bg;
  if (title) text(slide, title, 68, 54, 1144, 120, 52, true, dark ? C.bg : C.ink);
  if (n !== 1) text(slide, `SaathBuy / Team README                                      ${String(n).padStart(2, '0')}`, 68, 678, 1144, 24, 17, false, dark ? '#D4DFD6' : C.muted);
  slide.speakerNotes.text = notes;
  return slide;
}

async function image(slide, file, x, y, w, h, alt, fit = 'contain') {
  const bytes = await fs.readFile(file);
  slide.images.add({ blob: bytes, contentType: 'image/png', alt, fit,
    position: { left: x, top: y, width: w, height: h } });
}

function row(slide, label, body, y, opts = {}) {
  text(slide, label, 72, y, 350, 70, 31, true, opts.color ?? C.ink);
  text(slide, body, 450, y, 750, 94, 29, false, opts.color ?? C.ink);
}

export async function populate(p, root) {
  if (p.slides.items.length) p.slides.keep([]);
  const a = name => path.join(root, 'assets', name);

  // 1 — cover
  let s = page(p, '', 1,
    `Idea-stage proposal. Team README: Anant Singhal, Aaditya Singhal, Satvik Srivastava. Theme 5, problem 5.2. The product name is a working name. No pilot outcomes or production integrations are claimed. Challenge source: ${source.brochure}. Cover illustration generated for this proposal with the built-in image tool. Prompt recorded in assets/generation-prompts.json.`);
  await image(s, a('cover-illustration.png'), 744, 0, 536, 720, 'Illustration of buyers and a shopkeeper organising a shared purchase', 'cover');
  text(s, 'SaathBuy', 68, 106, 680, 126, 96, true);
  text(s, 'Rural Collective\nBuying Network', 72, 255, 660, 140, 46, false);
  text(s, 'A clear price for every buyer\nin a shared purchase', 72, 430, 640, 92, 31, false, C.muted);
  text(s, 'Team README', 72, 558, 640, 42, 30, true);
  text(s, 'Anant Singhal\nAaditya Singhal\nSatvik Srivastava', 72, 607, 640, 86, 23);

  // 2 — problem
  s = page(p, 'The cost of buying separately', 2,
    `The organiser brief identifies dispersed small purchases and limited bargaining power as a research problem. Source: ${source.brochure}, statement 5.2, printed pages 13–14. The three lines on this slide are a plain-language problem framing. We must validate their importance in the chosen cluster. No prevalence or quantified saving is claimed.`);
  row(s, 'Small orders', 'Buyers may miss a useful quantity discount.', 210);
  row(s, 'Hidden full cost', 'Delivery and pickup costs can erase the discount.', 350);
  row(s, 'Manual coordination', 'Someone must collect requests and explain the split.', 490);

  // 3 — solution promise
  s = page(p, 'A group offer each person can understand', 3,
    `Original proposed workflow. Statement 5.2 requires transparent allocations and each buyer committing only their own money: ${source.brochure}. A beneficial plan depends on comparable individual alternatives, honest quotes, fees and pickup costs. The safeguards are proposed features, not already implemented guarantees.`);
  text(s, 'What I want\nWhat I can spend\nWhen I need it', 72, 205, 490, 250, 42, true);
  text(s, 'SaathBuy proposes a compatible group\nand shows my complete price.', 665, 220, 535, 150, 35);
  text(s, 'I approve my own amount.\nA changed price needs a new approval.', 665, 440, 535, 130, 31, true, C.accent);

  // 4 — flow image
  s = p.slides.add({ width: SIZE.width, height: SIZE.height });
  s.background.fill = C.bg;
  await image(s, a('buying-flow.png'), 0, 0, 1280, 720, 'Five proposed stages: share a need, combine requests, compare full costs, everyone approves, collect together');
  s.speakerNotes.text = 'Original proposed process. This explanatory image was generated with the built-in image tool. It describes planned functionality and does not depict a deployed service. The source image and exact prompt are in assets/. Textual workflow is in docs/product-plan.md.';

  // 5 — illustrative arithmetic
  s = page(p, 'A purchase example', 5,
    'Synthetic illustration, not field results or market quotes. Ten buyers each buy two identical packs. Their comparable individual alternative costs INR 100 per pack, all included. The supplier offers INR 82 per pack at a 20-pack minimum. Goods cost INR 1,640, delivery INR 120, and the illustrative coordination fee INR 40. Total INR 1,800 versus INR 2,000 individually. Each buyer pays INR 180 instead of INR 200, a saving of INR 20 or 10%. Prices include applicable tax, equal shares fit equal quantities, and no extra pickup cost is assumed. Reproduce with node scripts/check-example.mjs. The fee does not demonstrate profitability.');
  text(s, '10 buyers, 2 identical packs each', 72, 166, 1120, 44, 30);
  const values = [
    ['Cost item', 'Group total'],
    ['Goods', 'INR 1,640'],
    ['Delivery', 'INR 120'],
    ['Coordination fee', 'INR 40'],
    ['Full group cost', 'INR 1,800'],
    ['Individual alternative', 'INR 2,000']
  ];
  const t = s.tables.add({ rows: 6, columns: 2, left: 72, top: 240, width: 720, height: 336,
    columnWidths: [460, 260], values });
  t.borders.assign({ fill: '#CFD8CB', width: 1, style: 'solid' });
  for (let r = 0; r < 6; r++) for (let c = 0; c < 2; c++) {
    const cell = t.getCell(r,c);
    cell.fill = r === 0 ? C.ink : (r === 4 ? C.pale : C.bg);
    cell.text.style = { typeface: FONT, fontSize: 27, bold: r === 0 || r === 4, color: r === 0 ? C.bg : C.ink,
      insets: 10, verticalAlignment: 'middle' };
  }
  text(s, 'INR 180', 870, 265, 335, 98, 69, true);
  text(s, 'per buyer', 875, 370, 320, 50, 33);
  text(s, 'INR 20 less\nthan buying alone', 875, 465, 320, 108, 32, true, C.accent);
  text(s, 'Illustrative figures. Same goods and pickup conditions. No additional buyer cost assumed.', 72, 608, 1136, 50, 23, false, C.muted);

  // 6 — technical core
  s = page(p, 'The Applied AI core', 6,
    `The statement is tagged Applied AI Systems: ${source.brochure}. Proposed language-model role: speech transcription, catalogue matching and clarification. BHASHINI is a candidate speech provider, not an integration: ${source.voice}. Proposed optimisation uses price tiers, stock, budgets and date constraints, with integer-paise arithmetic. OR-Tools is one implementation option: ${source.solver}. Demand forecasting is later work once sufficient timestamped history exists. Evaluation must compare with simple pooling.`);
  text(s, 'Understanding a request', 72, 210, 520, 64, 36, true);
  text(s, 'Match local product names.\nConfirm quantity and pack size.\nAsk about unclear details.', 72, 304, 520, 190, 31);
  text(s, 'Choosing a feasible group', 665, 210, 540, 64, 36, true);
  text(s, 'Respect budgets and deadlines.\nCheck stock and minimum orders.\nCompare complete costs.', 665, 304, 540, 190, 31);
  text(s, 'Model suggestions need confirmation. Money uses exact arithmetic.', 72, 565, 1136, 62, 29, true, C.accent);

  // 7 — cancellation flow image
  s = p.slides.add({ width: SIZE.width, height: SIZE.height });
  s.background.fill = C.bg;
  await image(s, a('cancellation-flow.png'), 0, 0, 1280, 720, 'A buyer leaves, the system rechecks the group, shows a new total and asks everyone again. Pause if no beneficial offer exists.');
  s.speakerNotes.text = 'Original proposed recovery process before supplier confirmation. A withdrawal may invalidate the supplier quantity tier. Recompute and require fresh approval for a revised offer, or pause. After a supplier-confirmed purchase, accepted cancellation terms apply. The image is an original generated explanatory asset, not a screenshot. Prompt and source image are in assets/.';

  // 8 — accessibility
  s = page(p, 'Designed for everyday use', 8,
    `The organisers expect local-language, accessible interaction under connectivity constraints: ${source.challenge}. Proposed MVP supports a chosen local language with spoken readback and a simple form. Offline support is draft capture and cached information. Supplier checks and planning require connectivity. A shop, SHG or JanAI Café can be an assisted path if an actual local arrangement is available; no partnership is claimed.`);
  row(s, 'Speak or type', 'Hear the product and amount before confirming.', 205);
  row(s, 'Save a draft', 'Send it when connectivity returns. Mark stale prices.', 345);
  row(s, 'Get local help', 'A shop or SHG could assist with pickup and questions.', 485);

  // 9 — position and related work
  s = page(p, 'Our proposed focus', 9,
    `Existing digital trade includes Jumbotail (${source.jumbotail}) and udaan (${source.udaan}). These public company pages establish related categories only. We do not assert missing competitor features or exclusive novelty. Our proposed contribution is measured grouping, visible individual costs, and versioned approval after changes. ONDC is a possible later integration after onboarding (${source.ondc}), not a partner or live connection. Cost allocation trade-offs: ${source.sharing} and ${source.mechanism}.`);
  text(s, 'Digital wholesale and trade platforms\nalready connect buyers and suppliers.', 72, 200, 1100, 104, 34);
  text(s, 'Our focus is the group decision', 72, 356, 1100, 60, 40, true);
  text(s, 'Who should buy together?\nDoes each person benefit after every charge?\nWhat changes when someone leaves?', 72, 446, 1120, 156, 32);

  // 10 — evaluation
  s = page(p, 'How we will test it', 10,
    `This is a proposed evaluation, not completed work. Start with labelled synthetic cases and then permissioned field-derived cases. Compare individual purchases, simple same-product pooling and constrained optimisation. Report total savings together with coverage and each buyer's outcome. Hold out product aliases for matching evaluation. Organiser technical expectations: ${source.challenge}. Detailed protocol is in research/evidence-and-validation.md.`);
  row(s, 'Cost', 'Compare with individual buying and simple pooling.', 205);
  row(s, 'Correctness', 'Check every budget, quantity, date and cost split.', 345);
  row(s, 'Recovery', 'Test withdrawals, expired quotes and unavailable stock.', 485);

  // 11 — business hypothesis
  s = page(p, 'A business model to validate', 11,
    'Original commercial hypotheses. Test a transparent coordination fee per order or a subscription for repeat coordinators. Do not assume both revenue streams are needed initially. Put any buyer-facing fee into the full cost before comparing savings. Research willingness to pay, coordinator time, support, delivery handling, returns, and speech inference costs. A local shop might supply, coordinate, or host collection if it agrees. No revenue, partnerships, employment counts, or profitability is claimed.');
  text(s, 'Possible paying customer', 72, 205, 530, 60, 36, true);
  text(s, 'A repeat local coordinator\nor a participant in a completed order', 72, 300, 550, 160, 32);
  text(s, 'Value to test', 705, 205, 500, 60, 36, true);
  text(s, 'Useful group offers\nClear cost sharing\nLess coordination work', 705, 300, 500, 190, 32);
  text(s, 'Every charge appears before approval. Fees and adoption need field validation.', 72, 575, 1136, 70, 28, true, C.accent);

  // 12 — roadmap
  s = page(p, 'The first prototype', 12,
    'Original planned scope, not progress claims. Discovery first, then a small catalogue and two quote feeds, one pickup point and a constrained planner. Language choice follows actual testing access. Scope assumptions are in docs/product-plan.md. Supplier and payment operations may be simulated during the hackathon if clearly labelled. The repository currently supplies the idea pack and arithmetic example, not the deployed system.');
  row(s, '01  Understand', 'Interview buyers, suppliers and a potential coordinator.', 185);
  row(s, '02  Build', 'One cluster, a small catalogue and two quote feeds.', 300);
  row(s, '03  Demonstrate', 'A group offer, individual approvals and one withdrawal.', 415);
  row(s, '04  Measure', 'Report costs, feasibility and request-matching errors.', 530);

  // 13 — team
  s = page(p, 'Team README', 13,
    `Team names supplied by the user. Anant Singhal, Aaditya Singhal, Satvik Srivastava. Roles are not assigned in this proposal. Repository: ${source.repo}. Current status: idea-stage research and submission materials. The intended prototype and fieldwork are future work.`, true);
  text(s, 'Anant Singhal\nAaditya Singhal\nSatvik Srivastava', 72, 215, 1100, 240, 45, true, C.bg);
  text(s, 'Next milestone: one explainable group purchase\nwith individual approval and a cancellation test', 72, 500, 1120, 110, 32, false, C.bg);
  text(s, 'Idea-stage proposal', 72, 630, 1100, 35, 23, false, '#D4DFD6');

  // 14 — references
  s = page(p, 'Research behind the proposal', 14,
    `All retained references, access notes and limitations: ${source.repo}/blob/main/research/references.md. Challenge: ${source.brochure}. Methods: ${source.solver}, ${source.sharing}, ${source.mechanism}. Speech: ${source.voice}. Ecosystem: ${source.ondc}, ${source.jumbotail}, ${source.udaan}. The annotated bibliography also includes the official HCES release as background only. All product mechanisms and examples in this deck are our proposal or labelled synthetic illustrations.`);
  const refs = [
    ['Official challenge and problem 5.2', source.brochure],
    ['Group formation and cost-sharing research', source.sharing],
    ['Constraint optimisation: Google OR-Tools', source.solver],
    ['Speech interface option: BHASHINI', source.voice],
    ['Commerce integration option: ONDC', source.ondc],
    ['Full research notes and submission pack', source.repo]
  ];
  refs.forEach(([label,url], i) => {
    const box = text(s, label, 72, 188 + i * 71, 1120, 50, 29, i === 5);
    box.text.get(label).link = { uri: url, isExternal: true };
    box.text.get(label).color = C.ink;
  });
  text(s, 'Source links are clickable. Research checked on 19 November 2026.', 72, 628, 1136, 40, 22, false, C.muted);
  return { slideCount: p.slides.items.length, font: FONT, size: SIZE };
}
