# Evidence, assumptions, and field validation

## What is supported

The official challenge identifies fragmented purchases and limited group bargaining power as a problem to investigate [R03]. Established B2B commerce businesses describe retailer-supplier services [R06, R07]. Cost-sharing research treats group formation and payment allocation as linked design problems [R10, R11]. These establish relevance and prior work, not SaathBuy's efficacy. Full source links are in [references.md](references.md).

## What remains a hypothesis

1. Buyers in the target cluster have sufficiently similar products and compatible purchase dates.
2. A supplier discount will exceed delivery, handling, coordination, and extra pickup costs.
3. Buyers will accept a wait window and a clear individual cost split.
4. Local shops or SHGs will coordinate pickups for a fee that preserves buyer savings.
5. Simple transparent fees or coordinator subscriptions can cover operating costs.
6. Speech input helps users more than a small assisted form after correction time is included.

None of these are reported as interview findings or measured outcomes.

## Planned discovery

Planning target, not completed work: speak with 10 prospective buyers, 3 local shops/SHG coordinators, 3 suppliers, and 2 delivery providers in one accessible cluster. Obtain permission before collecting records. Record actual pack sizes, dated baseline quotes, acceptable collection windows, and return terms. Keep identifiable records out of the public repository.

Questions:

- What was your last repeat purchase, including brand, pack size, quantity, and total paid?
- What extra travel or pickup cost did it involve?
- How long could you wait, and what would make you leave a group?
- Have you bought with neighbours before? What went wrong?
- Which quantities unlock supplier price changes? How long are quotes valid?
- Who could host pickup, and what would the coordinator charge?
- How should damaged goods, short deliveries, and substitutions be handled?
- Would a local shop participate as a supplier or pickup partner?

## Proposed benchmark

Use labelled synthetic cases first, then permissioned field-derived cases. Keep identical product, quality, pack size, timing, and pickup conditions for comparisons. Include actual delivery and service costs in every plan. Test:

- Individual purchase baseline.
- Simple pooling baseline: same product, same pickup zone, one cutoff time, lowest feasible quoted full cost.
- Proposed constrained group optimiser.

Metrics: per-buyer cost change, total cost change, feasibility violations, number served, minimum saving across buyers, quote-to-plan runtime, input correction rate, and cancellation recovery. Split product-name examples into development and held-out sets; do not benchmark only exact phrases seen during setup. Evaluate local-language speech separately from optimisation.

Pre-register scenarios: no saving, below-minimum group size, a supplier stockout, a quote expiry, a participant withdrawal, different pack sizes, duplicated requests, fake quantity inflation, and an out-of-budget buyer. A lower-cost plan is a proposal until all required approvals exist.

## Integrity of reporting

Report results with dataset sizes, dates, baselines, and assumptions. Do not describe synthetic savings as a field outcome. Do not use national expenditure figures as a village-level income proxy. Do not claim optimality unless the solver certifies it for the tested model and input. Demand forecasting is later work until enough time-stamped history exists.
