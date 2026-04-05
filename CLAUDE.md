# Regent's University London — Storybook Drupal FE

Project-level rules for Claude Code. These apply to every session automatically.

---

## Folder Structure

Every new item lives in its own named subdirectory. Directory name and all file names share the same kebab-case slug. Never create loose files at the layer root.

### Components — 4 files required

```
src/components/[name]/
├── [name].js          ← Named export initName(el) + any helpers
├── [name].json        ← "default" props + "variants" keyed object
├── [name].stories.js  ← Storybook stories
└── [name].twig        ← Drupal Twig template with prop block at top
```

SCSS import path in `[name].stories.js`: `../../../scss/main.scss`

### Layouts — 3 files required (no .js)

```
src/layouts/[name]/
├── [name].json
├── [name].stories.js
└── [name].twig
```

Stories imports data locally: `import data from "./[name].json"`

### Templates — 3 files required (no .js)

```
src/templates/[name]/
├── [name].json
├── [name].stories.js
└── [name].twig
```

Stories imports data locally: `import data from "./[name].json"`

### Pages — 3 files required (no .js)

```
src/pages/[name]/
├── [name].json
├── [name].stories.js
└── [name].twig
```

Stories imports data locally AND the matching template stories:
```js
import data from "./[name].json";
import nameMeta from "../../templates/[name]/[name].stories.js";
```

### Rules

- Always create the named subdirectory before adding any files.
- Components always get a `.js` file — use an empty `export function init[Name](el) {}` stub if there is no behaviour.
- Layouts, templates, and pages never get a `.js` file.
- All files within a directory use the exact same kebab-case name as the directory.
- Never place a `.stories.js` file directly inside `src/components/`, `src/layouts/`, `src/templates/`, or `src/pages/`.

---

## Design Approach

Before creating any new foundation element, component, layout, template, or page — analyse the requirement as a senior UI designer first:

- Identify the purpose, content hierarchy, and user interaction patterns.
- Determine which design system tokens apply: colours, spacing, typography, radius, motion, elevation, and opacity.
- Define all applicable states: default, hover, focus, active/pressed, disabled, and any error or loading states.
- Consider WCAG 2.1 AA compliance, ARIA roles, and keyboard interaction patterns before writing any code.
- Only use design system tokens (CSS custom properties) — never raw hex values, hard-coded px spacing, or arbitrary colours.
- Never use hardcoded padding values. Always use spacing tokens (`--sp-4` through `--sp-96`) from `scss/foundation/tokens/_spacing.scss`. If a value falls between two tokens, use the closest one.
- Ensure visual consistency with existing components: same border-radius scale, same motion tokens, same focus ring treatment.

---

## Design System

- SCSS tokens live in `scss/foundation/tokens/`. Add new tokens to the relevant partial, then `@forward` from `_index.scss`.
- Component SCSS lives in `scss/components/[name]/`. Register new partials in `scss/main.scss`.
- All interactive states use design system motion tokens: `--duration-fast` / `--ease-out` for hover/press, `--duration` for larger transitions.
- Press feedback: `transform: scale(0.98)` — matches the live design system at `http://localhost:3000`.
- Focus ring: `outline: 2px solid var(--color-powdered-blue)` with `outline-offset: 4px` on **all** interactive elements (buttons, links, form controls). Error state focus uses `--color-deep-red` as outline colour.
- WCAG 2.1 AA compliance required on all components. Disabled states use full-opacity muted colours rather than opacity reduction on text.
- **Token-first rule:** Whenever creating anything new in the design system or Storybook, check `scss/foundation/tokens/` for an available token matching the property before applying any hardcoded value. This applies to every CSS property — colour, spacing, typography, radius, shadow, motion, opacity, and z-index. Only use a hardcoded value when no token exists and the value cannot reasonably be expressed as a combination of existing tokens.

---

## Asset & SCSS Paths in Templates & Pages

When components are placed inside templates or pages, **always verify and optimize the import paths** for SCSS and assets to ensure they render correctly both in Storybook and production:

- **SCSS imports in component stories** (`src/components/[name]/[name].stories.js`): Always import from the design system foundation:
  ```js
  import "../../../scss/main.scss";  // Resolves from src/components/[name]/ → src/scss/
  ```

- **Image assets in component data** (`.json` files and template props): Use asset paths relative to the static server root:
  ```json
  { "src": "/images/example.jpg" }   // staticDirs: ["../src/assets"] in .storybook/main.js
  ```

- **Template & page stories** (`src/templates/[name]/[name].stories.js`, `src/pages/[name]/[name].stories.js`): Import SCSS the same way:
  ```js
  import "../../../scss/main.scss";  // Resolves correctly from the template/page depth
  ```

- **Twig templates** (`src/templates/[name]/[name].twig`, `src/pages/[name]/[name].twig`): Twig does not directly import SCSS — SCSS is handled by the Storybook stories or build process. Twig only includes other Twig components via Drupal's `@components` namespace alias.

- **Image paths in Twig**: Use the same `/images/` prefix as in JSON data — Drupal's static file serving will resolve them correctly.

**Verify before commit:** Test all templates and pages in Storybook at `localhost:6006` to ensure images load and styles render without errors.
