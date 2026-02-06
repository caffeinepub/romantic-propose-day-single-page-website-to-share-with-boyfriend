# Specification

## Summary
**Goal:** Update the Propose Day proposal flow’s blank-state defaults to use the exact requested date and sender signature text everywhere they appear.

**Planned changes:**
- Change the Propose Day blank-state default date to exactly "February 8th, 2026" across all default render locations (including hero date line and personalization panel placeholder/helper text).
- Change the Propose Day blank-state default sender name so the signature reads exactly "From your Baby girl" when the From input is empty, and align the personalization panel placeholder/helper text accordingly.
- Ensure user-entered custom date/from values override and display instead of the defaults.

**User-visible outcome:** If the user leaves Date and From fields blank, the page shows "February 8th, 2026" and the signature "From your Baby girl" by default; entering custom values replaces those defaults.
