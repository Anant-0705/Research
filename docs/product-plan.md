# SaathBuy product plan

## One-sentence explanation

People share purchase needs, the system finds a useful group offer, and each person approves their own complete price.

## Challenge and intended users

Theme 5, statement 5.2. Initial users could be households, small businesses, and a local shop/SHG coordinator in one cluster. The first pilot should choose one buyer segment and a small set of standard packaged goods after field research. The broader concept can support multiple categories later.

## Proposed user journey

1. A buyer enters a need by voice or form. Save a draft locally if connectivity drops.
2. The system proposes a catalogue match and reads back the product, pack size, quantity, budget, and deadline. The buyer confirms.
3. A coordinator verifies dated supplier quotes, stock, delivery charges, and offer expiry.
4. The optimiser groups compatible confirmed requests and computes full costs.
5. Each buyer reviews the same quote version and sees their own allocation and price. Individual consent is mandatory.
6. An authorised coordinator confirms with the supplier once the required approvals and any agreed commitment conditions are met. Hackathon actions use a labelled sandbox.
7. The local pickup point records received goods and buyer collection. Discrepancies enter an issue queue.
8. A withdrawal before supplier confirmation triggers a revised proposal. Changes after confirmation use the accepted cancellation and return terms.

## MVP boundaries

Planning target: one local cluster, 10–20 test buyer profiles, 10–20 catalogue products, two manually supplied supplier quote feeds, one pickup point, and Hindi plus English interaction initially. Choose Kannada instead of Hindi if the field location and available testing support it. These counts are scope assumptions, not user or partnership claims.

Included: request capture, verified catalogue mapping, compatible grouping, full-cost comparison, individual explanation, versioned approvals, a withdrawal scenario, and a collection checklist.

Later: multiple pickup points, real payment integration, automated supplier onboarding, richer demand forecasting, ONDC integration, and trained ranking models. We do not need to implement a general vehicle-routing marketplace to demonstrate 5.2.

## Business hypotheses

- A transparent per-order coordination fee could cover local handling and support.
- A coordinator subscription could support repeat ordering once usage is demonstrated.
- Suppliers may value consolidated demand, but any paid relationship must be disclosed and must not silently affect offer rankings.

Measure fee tolerance and actual coordination time before selecting a model. Avoid claiming that the toy fee demonstrates profitability. Model costs for speech inference, support, pickup handling, returns, and reconciliation separately. Buyers must compare the final amount against a comparable individual alternative.

## Local merchant participation

A shop may be a supplier, pickup point, or coordinator. Interview merchants about effects on their existing margins and relationships. Define handling responsibility, fee visibility, and service expectations before a field test. An assisted interaction path can work through a JanAI Café or another trusted local coordinator if available; no partnership is assumed.

## Demo story

Ten synthetic buyers request two identical packs each. Show the individual alternative, supplier offers, and the total with delivery and the illustrative coordination fee. Let each buyer approve. Remove one buyer before confirmation. Recheck minimum order quantity, generate a revised proposal if feasible, and request fresh approvals. Show a separate case where combining purchases produces no saving and no order is proposed.

## Work allocation

Team: Anant Singhal, Aaditya Singhal, Satvik Srivastava. Roles remain open for the team to assign. Workstreams: user research and interface; request matching and optimisation; quote data, workflow, and evaluation.
