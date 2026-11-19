# SaathBuy — slide narrative and speaking notes



Team README: Anant Singhal, Aaditya Singhal, Satvik Srivastava.



This file includes the editable slide text and presenter notes. Slides 4 and 7 contain explanatory flow images. The PowerPoint retains editable text and its cost table; the PDF is a flattened reading copy.



## Slide 1: SaathBuy



SaathBuy

Rural Collective

Buying Network

A clear price for every buyer

in a shared purchase

Team README

Anant Singhal

Aaditya Singhal

Satvik Srivastava



Speaking notes:



Idea-stage proposal. Team README: Anant Singhal, Aaditya Singhal, Satvik Srivastava. Theme 5, problem 5.2. The product name is a working name. No pilot outcomes or production integrations are claimed. Challenge source: https://thegavshackathon.com/docs/Tech4Bharat-2026-Problem-Statements.pdf. Cover illustration generated for this proposal with the built-in image tool. Prompt recorded in assets/generation-prompts.json.



## Slide 2: The cost of buying separately



The cost of buying separately

SaathBuy / Team README                                      02

Small orders

Buyers may miss a useful quantity discount.

Hidden full cost

Delivery and pickup costs can erase the discount.

Manual coordination

Someone must collect requests and explain the split.



Speaking notes:



The organiser brief identifies dispersed small purchases and limited bargaining power as a research problem. Source: https://thegavshackathon.com/docs/Tech4Bharat-2026-Problem-Statements.pdf, statement 5.2, printed pages 13–14. The three lines on this slide are a plain-language problem framing. We must validate their importance in the chosen cluster. No prevalence or quantified saving is claimed.



## Slide 3: A group offer each person can understand



A group offer each person can understand

SaathBuy / Team README                                      03

What I want

What I can spend

When I need it

SaathBuy proposes a compatible group

and shows my complete price.

I approve my own amount.

A changed price needs a new approval.



Speaking notes:



Original proposed workflow. Statement 5.2 requires transparent allocations and each buyer committing only their own money: https://thegavshackathon.com/docs/Tech4Bharat-2026-Problem-Statements.pdf. A beneficial plan depends on comparable individual alternatives, honest quotes, fees and pickup costs. The safeguards are proposed features, not already implemented guarantees.



## Slide 4: How SaathBuy works



See the corresponding generated flow image in assets/.





Speaking notes:



Original proposed process. This explanatory image was generated with the built-in image tool. It describes planned functionality and does not depict a deployed service. The source image and exact prompt are in assets/. Textual workflow is in docs/product-plan.md.



## Slide 5: A purchase example



A purchase example

SaathBuy / Team README                                      05

10 buyers, 2 identical packs each

Cost item

Group total

Goods

INR 1,640

Delivery

INR 120

Coordination fee

INR 40

Full group cost

INR 1,800

Individual alternative

INR 2,000

INR 180

per buyer

INR 20 less

than buying alone

Illustrative figures. Same goods and pickup conditions. No additional buyer cost assumed.



Speaking notes:



Synthetic illustration, not field results or market quotes. Ten buyers each buy two identical packs. Their comparable individual alternative costs INR 100 per pack, all included. The supplier offers INR 82 per pack at a 20-pack minimum. Goods cost INR 1,640, delivery INR 120, and the illustrative coordination fee INR 40. Total INR 1,800 versus INR 2,000 individually. Each buyer pays INR 180 instead of INR 200, a saving of INR 20 or 10%. Prices include applicable tax, equal shares fit equal quantities, and no extra pickup cost is assumed. Reproduce with node scripts/check-example.mjs. The fee does not demonstrate profitability.



## Slide 6: The Applied AI core



The Applied AI core

SaathBuy / Team README                                      06

Understanding a request

Match local product names.

Confirm quantity and pack size.

Ask about unclear details.

Choosing a feasible group

Respect budgets and deadlines.

Check stock and minimum orders.

Compare complete costs.

Model suggestions need confirmation. Money uses exact arithmetic.



Speaking notes:



The statement is tagged Applied AI Systems: https://thegavshackathon.com/docs/Tech4Bharat-2026-Problem-Statements.pdf. Proposed language-model role: speech transcription, catalogue matching and clarification. BHASHINI is a candidate speech provider, not an integration: https://dibd-bhashini.gitbook.io/bhashini-apis. Proposed optimisation uses price tiers, stock, budgets and date constraints, with integer-paise arithmetic. OR-Tools is one implementation option: https://developers.google.com/optimization/cp/cp_solver. Demand forecasting is later work once sufficient timestamped history exists. Evaluation must compare with simple pooling.



## Slide 7: When a buyer leaves



See the corresponding generated flow image in assets/.





Speaking notes:



Original proposed recovery process before supplier confirmation. A withdrawal may invalidate the supplier quantity tier. Recompute and require fresh approval for a revised offer, or pause. After a supplier-confirmed purchase, accepted cancellation terms apply. The image is an original generated explanatory asset, not a screenshot. Prompt and source image are in assets/.



## Slide 8: Designed for everyday use



Designed for everyday use

SaathBuy / Team README                                      08

Speak or type

Hear the product and amount before confirming.

Save a draft

Send it when connectivity returns. Mark stale prices.

Get local help

A shop or SHG could assist with pickup and questions.



Speaking notes:



The organisers expect local-language, accessible interaction under connectivity constraints: https://thegavshackathon.com/challenges. Proposed MVP supports a chosen local language with spoken readback and a simple form. Offline support is draft capture and cached information. Supplier checks and planning require connectivity. A shop, SHG or JanAI Café can be an assisted path if an actual local arrangement is available; no partnership is claimed.



## Slide 9: Our proposed focus



Our proposed focus

SaathBuy / Team README                                      09

Digital wholesale and trade platforms

already connect buyers and suppliers.

Our focus is the group decision

Who should buy together?

Does each person benefit after every charge?

What changes when someone leaves?



Speaking notes:



Existing digital trade includes Jumbotail (https://jumbotail.com/) and udaan (https://udaan.com/about-us). These public company pages establish related categories only. We do not assert missing competitor features or exclusive novelty. Our proposed contribution is measured grouping, visible individual costs, and versioned approval after changes. ONDC is a possible later integration after onboarding (https://ondc.org/pages/buyer-network-participants.html), not a partner or live connection. Cost allocation trade-offs: https://arxiv.org/abs/1511.05270 and https://bura.brunel.ac.uk/bitstream/2438/17214/1/FullText.pdf.



## Slide 10: How we will test it



How we will test it

SaathBuy / Team README                                      10

Cost

Compare with individual buying and simple pooling.

Correctness

Check every budget, quantity, date and cost split.

Recovery

Test withdrawals, expired quotes and unavailable stock.



Speaking notes:



This is a proposed evaluation, not completed work. Start with labelled synthetic cases and then permissioned field-derived cases. Compare individual purchases, simple same-product pooling and constrained optimisation. Report total savings together with coverage and each buyer's outcome. Hold out product aliases for matching evaluation. Organiser technical expectations: https://thegavshackathon.com/challenges. Detailed protocol is in research/evidence-and-validation.md.



## Slide 11: A business model to validate



A business model to validate

SaathBuy / Team README                                      11

Possible paying customer

A repeat local coordinator

or a participant in a completed order

Value to test

Useful group offers

Clear cost sharing

Less coordination work

Every charge appears before approval. Fees and adoption need field validation.



Speaking notes:



Original commercial hypotheses. Test a transparent coordination fee per order or a subscription for repeat coordinators. Do not assume both revenue streams are needed initially. Put any buyer-facing fee into the full cost before comparing savings. Research willingness to pay, coordinator time, support, delivery handling, returns, and speech inference costs. A local shop might supply, coordinate, or host collection if it agrees. No revenue, partnerships, employment counts, or profitability is claimed.



## Slide 12: The first prototype



The first prototype

SaathBuy / Team README                                      12

01  Understand

Interview buyers, suppliers and a potential coordinator.

02  Build

One cluster, a small catalogue and two quote feeds.

03  Demonstrate

A group offer, individual approvals and one withdrawal.

04  Measure

Report costs, feasibility and request-matching errors.



Speaking notes:



Original planned scope, not progress claims. Discovery first, then a small catalogue and two quote feeds, one pickup point and a constrained planner. Language choice follows actual testing access. Scope assumptions are in docs/product-plan.md. Supplier and payment operations may be simulated during the hackathon if clearly labelled. The repository currently supplies the idea pack and arithmetic example, not the deployed system.



## Slide 13: Team README



Team README

SaathBuy / Team README                                      13

Anant Singhal

Aaditya Singhal

Satvik Srivastava

Next milestone: one explainable group purchase

with individual approval and a cancellation test

Idea-stage proposal



Speaking notes:



Team names supplied by the user. Anant Singhal, Aaditya Singhal, Satvik Srivastava. Roles are not assigned in this proposal. Repository: https://github.com/Anant-0705/Research. Current status: idea-stage research and submission materials. The intended prototype and fieldwork are future work.



## Slide 14: Research behind the proposal



Research behind the proposal

SaathBuy / Team README                                      14

Official challenge and problem 5.2

Group formation and cost-sharing research

Constraint optimisation: Google OR-Tools

Speech interface option: BHASHINI

Commerce integration option: ONDC

Full research notes and submission pack

Source links are clickable. Research checked on 19 November 2026.



Speaking notes:



All retained references, access notes and limitations: https://github.com/Anant-0705/Research/blob/main/research/references.md. Challenge: https://thegavshackathon.com/docs/Tech4Bharat-2026-Problem-Statements.pdf. Methods: https://developers.google.com/optimization/cp/cp_solver, https://arxiv.org/abs/1511.05270, https://bura.brunel.ac.uk/bitstream/2438/17214/1/FullText.pdf. Speech: https://dibd-bhashini.gitbook.io/bhashini-apis. Ecosystem: https://ondc.org/pages/buyer-network-participants.html, https://jumbotail.com/, https://udaan.com/about-us. The annotated bibliography also includes the official HCES release as background only. All product mechanisms and examples in this deck are our proposal or labelled synthetic illustrations.

