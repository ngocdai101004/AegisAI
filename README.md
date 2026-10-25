# AegisAI Project Page

Static project page for **AegisAI: Designing Defense-in-Depth Safety for Conversational Text-to-Image Generation**, preserving the existing Academic Project Page Template layout.

## Preview locally

From this directory:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No build step is required.

## Content and assets

- `index.html`: paper summary, authors, system, component evaluations, user study, limitations, and BibTeX.
- `static/pdfs/paper.pdf`: the supplied `AegisAI_SOICT2026_Oral.pdf`.
- `static/images/`: figures from the supplied LaTeX source, plus a local shield favicon.
- `static/css/index.css`: existing page theme with small responsive and accessibility adjustments.
- `static/js/index.js`: citation copying and scroll-to-top behavior.

The supplied PDF is the reference version. Its title and abstract match `AegisAI_revised.tex`; `main.tex` has an earlier title. GuardChat is referenced only as the existing benchmark used in AegisAI’s preliminary evaluation. No public AegisAI code/demo URL, DOI, or proceedings metadata was supplied, so the page does not invent those links or bibliographic fields.

The template attribution is preserved in the page footer; see `LICENSE` for the source-code license.
