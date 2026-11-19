# Proposed technical approach

Status: design for an idea-stage submission. The repository includes an arithmetic checker, not an implemented AI marketplace.

## Architecture

- Client: a small progressive web app with a simple form, voice recording, a local draft queue, and explicit synchronisation status.
- Request service: authentication, permissions, schema validation, and a product catalogue.
- Language layer: evaluate a supported speech model and catalogue matching using aliases or embeddings. Ask for confirmation when pack size, quantity, or product identity is uncertain. An LLM must not invent catalogue availability or calculate money.
- Planning service: create compatible candidate groups and select feasible offers. Evaluate OR-Tools CP-SAT or exact enumeration for small instances.
- Record store: requests, quote versions, proposal versions, per-buyer allocations, approvals, and fulfilment events.
- Adapters: manual quote upload first. Speech, supplier, ONDC, and payment adapters remain replaceable and explicitly labelled when mocked.

Potential implementation stack: a PWA, FastAPI, PostgreSQL, and Python OR-Tools. The stack is a proposed engineering choice. No dependency deployment is claimed.

## Request and quote data

Request fields: pseudonymous buyer ID, confirmed catalogue SKU, permitted substitutes, quantity, unit, maximum complete price, pickup zone, earliest/latest date, baseline quote reference, and approval status.

Quote fields: supplier ID, SKU and pack size, quantity-price tiers, minimum quantity, stock capacity, delivery cost and coverage, applicable taxes/fees, expiry, cancellation terms, and verification evidence. Make taxes explicit or store an all-inclusive price; never silently exclude them.

## Planning objective

For a fixed batch of eligible requests, maximise the served feasible quantity first and minimise full delivered cost second. Report coverage together with savings so the optimiser cannot improve a cost metric merely by ignoring difficult buyers. The unserved option remains available when there is no beneficial feasible group.

Only propose a grouped purchase when all included buyers meet their stated budget and their complete allocated cost is below a comparable individual alternative by the configured threshold. That threshold is a planning parameter, not a measured user preference. If a baseline is unknown, show an estimate and do not claim verified savings.

Candidate constraints:

- Exact SKU/pack compatibility or buyer-approved substitution.
- Buyer quantity and date window.
- Supplier minimum quantity, stock capacity, and quote validity.
- Pickup feasibility, handling capacity, and quoted delivery terms.
- Each buyer's budget, complete allocated cost, and explicit consent.
- Each requested unit allocated at most once.

Use integer paise for money. Log solver status and limits. A time-limited feasible result must not be labelled globally optimal. Compare small cases with exhaustive enumeration before scaling up.

## Cost allocation

First prototype: goods at the selected tier price, plus delivery and the disclosed coordination fee allocated by an agreed measurable basis. Same-size identical packs may use quantity proportional sharing. Mixed products need a separate, declared weight/volume or handling rule and must not be silently treated as equivalent.

For unequal shares, allocate integer-paise remainders deterministically using a largest-remainder method with a fixed tie-breaker. Check that allocated totals exactly equal quoted totals. This ensures budget balance for the recorded costs; it is not proof of general economic fairness or truthful participation.

Recheck the per-buyer budget and saving constraints after allocation. Reject or re-plan groups where a member is worse off under the configured rule. Show alternatives when allocation rules change who benefits. R10/R11 motivate evaluating these trade-offs, rather than promising universal fairness.

## Workflow states and cancellation

Draft, request-confirmed, proposed, awaiting-approvals, supplier-confirmed, received, collected, disputed, closed. Each approval identifies a proposal ID, version, buyer quantity, maximum total, and relevant terms.

Before supplier confirmation, changes to product, amount, quantity, deadline, or participant set invalidate affected approvals and create a fresh proposal. A withdrawal can break a quantity tier. Re-price, change the group with permission, wait, or close. Never charge remaining buyers an unapproved increase. After confirmation, apply accepted terms and show any cancellation liability; no promise of automatic free cancellation.

## Manipulation and failure cases

Test duplicate requests, fake quantity inflation, coordinator-supplier conflicts, altered quotes, expired offers, and unfair cost allocation. Keep quote provenance, reveal fees, separate tentative interest from confirmed demand, limit duplicate confirmed records, and retain a dispute history. These measures reduce selected risks; they do not make the mechanism fully strategy-proof or Sybil-proof.

## Connectivity and privacy

Offline support means capturing drafts and reading cached information. Live quotes, optimisation, and approvals synchronise online. Show stale prices clearly. Avoid storing payment credentials. Obtain consent for speech recordings, minimise retention, and support deletion. Keep personal data and secrets out of this public research repository.

## Evaluation plan

Baseline 1: comparable individual purchases. Baseline 2: deterministic same-SKU/zone/time pooling. Proposed model: constrained grouping and full-cost supplier selection. Evaluate held-out alias requests, feasible group coverage, per-buyer savings, budget violations, exact cost reconciliation, planner runtime, and cancellation recovery. No fixed accuracy or savings outcome is claimed before tests.

The sample checker verifies only the deck's synthetic arithmetic and approval logic. It is not a benchmark of this proposed optimiser.
