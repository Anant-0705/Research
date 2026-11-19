import fs from 'node:fs/promises';
import assert from 'node:assert/strict';

const input = JSON.parse(await fs.readFile(new URL('../examples/group-purchase.json', import.meta.url), 'utf8'));
const packs = input.buyers * input.packs_per_buyer;
assert.ok(packs >= input.supplier_minimum_packs && packs <= input.supplier_capacity_packs);
const individualTotal = packs * input.individual_all_in_price_per_pack;
const goodsTotal = packs * input.supplier_price_per_pack;
const groupTotal = goodsTotal + input.group_delivery_cost + input.group_coordination_fee;
assert.equal(groupTotal % input.buyers, 0, 'This illustration assumes exactly equal whole-paise shares');
const groupPerBuyer = groupTotal / input.buyers;
const baselinePerBuyer = individualTotal / input.buyers;
assert.equal(groupPerBuyer * input.buyers, groupTotal, 'All shares must reconcile');
assert.ok(groupPerBuyer < baselinePerBuyer, 'A proposed buyer must benefit in this example');
assert.deepEqual([individualTotal, goodsTotal, groupTotal, groupPerBuyer], [200000, 164000, 180000, 18000]);

const remainingPacks = (input.buyers - 1) * input.packs_per_buyer;
assert.ok(remainingPacks < input.supplier_minimum_packs, 'One withdrawal must invalidate this offer tier');
const approval = { version: 1, approved: true };
const revisedProposal = { version: 2 };
assert.equal(approval.approved && approval.version === revisedProposal.version, false, 'Old approval must not authorise a new proposal');

console.log(JSON.stringify({
  disclosure: input.status,
  totalPacks: packs,
  individualTotalINR: individualTotal / 100,
  goodsTotalINR: goodsTotal / 100,
  deliveryINR: input.group_delivery_cost / 100,
  coordinationFeeINR: input.group_coordination_fee / 100,
  groupTotalINR: groupTotal / 100,
  individualPerBuyerINR: baselinePerBuyer / 100,
  groupPerBuyerINR: groupPerBuyer / 100,
  savingPerBuyerINR: (baselinePerBuyer - groupPerBuyer) / 100,
  savingPercent: (individualTotal - groupTotal) / individualTotal * 100,
  afterWithdrawalPacks: remainingPacks,
  withdrawalOutcome: 'Original 20-pack offer is infeasible. Obtain a new offer or pause, then request fresh approvals.',
  validation: 'Synthetic arithmetic, offer threshold, and approval-version checks passed'
}, null, 2));
