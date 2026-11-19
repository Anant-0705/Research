# Team README

## SaathBuy — Rural Collective Buying Network

**Tech4Bharat / GAVS 2026 · Theme 5: Rural FMCG and logistics**  
**Selected problem: 5.2 — Village group buying · Applied AI Systems**

SaathBuy is a proposed system that combines compatible purchase requests, compares supplier offers including delivery and service costs, and explains the amount each buyer would pay. Every buyer approves their own commitment. A changed price triggers a new approval.

### Team members

- Anant Singhal
- Aaditya Singhal
- Satvik Srivastava

### Start here

| Material | Purpose |
|---|---|
| [Submission form answers](submission/form-answers.md) | Copy-ready text for the HackCulture fields |
| [PowerPoint](presentation/SaathBuy-Team-README.pptx) | Presentation to upload with the idea |
| [Slide narrative](presentation/slide-content.md) | Plain-language slide copy and speaking notes |
| [Research references](research/references.md) | Annotated primary sources and their limitations |
| [Evidence and open questions](research/evidence-and-validation.md) | What the sources support and what still needs fieldwork |
| [Related solutions](research/related-solutions.md) | Existing approaches and our proposed positioning |
| [Product plan](docs/product-plan.md) | MVP, user journey, and planned business model |
| [Technical approach](docs/technical-approach.md) | Matching, optimisation, cost allocation, and evaluation |
| [Illustrative example](examples/group-purchase.json) | Synthetic numbers used in the deck |
| [Example checker](scripts/check-example.mjs) | Reproduce the illustration with Node.js |
| [Buying flow image](assets/buying-flow.png) | Five-step explanation |
| [Cancellation flow image](assets/cancellation-flow.png) | Recalculation and fresh approval |

### Project status

This repository contains an **idea-stage research and submission pack**. It does not contain a deployed marketplace, trained model, live supplier integration, or completed field trial. Proposed features and evaluation plans are described as future work. All example prices are synthetic. No pilot savings, customers, partnerships, or model accuracy are claimed.

The mathematical core is group formation and total-cost optimisation. Speech and language models help collect and structure requests. Exact arithmetic determines prices. ONDC and BHASHINI are possible future integration paths, not confirmed integrations or partners.

### Reproduce the numerical example

Requires Node.js 18 or newer, with no third-party dependencies:

```sh
node scripts/check-example.mjs
```

### Research approach

Sources were checked on **19 November 2026**. Each reference states what it supports. National survey figures are context, not a market-size estimate or proof of customer demand. Research summaries are original notes; source documents remain with their publishers.

The project and product name are working names. Team name: **README**.
