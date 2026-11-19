# Presentation files

- **SaathBuy-Team-README.pptx**: 14-slide PowerPoint with editable slide text, a native cost table, speaker notes, clickable research links, and three embedded original illustrations.
- **SaathBuy-Team-README.pdf**: flattened reading copy of the same slides. Source links are accessible in the PowerPoint and research notes; the flattened PDF does not preserve clickable slide links.
- **slide-content.md**: slide narrative and notes in plain text.

Team name: README. Members: Anant Singhal, Aaditya Singhal, Satvik Srivastava.

The presentation describes an idea-stage proposal under Theme 5, statement 5.2. Numerical examples are synthetic. Any future services, fieldwork, integrations, and commercial outcomes remain proposals.

The authoring module is in `../scripts/build-presentation.mjs`. It exports `populate(presentation, repositoryPath)` for an environment with `@oai/artifact-tool`. Exact image prompts and original PNGs are in `../assets/`. Runtime-specific export and validation files remain outside this repository.
