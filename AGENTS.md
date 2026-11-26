# Portafolio de Cristhian Nunoncca Kuriaki

Portafolio personal publicado en GitHub Pages: hero, sobre mí, proyectos y contacto, en español e inglés.

## Stack

- React 19 + TypeScript + Vite 8 (app en `portafolio-cristh/`)
- CSS propio por componente, sin frameworks
- Lint con Oxlint; deploy con GitHub Actions a GitHub Pages

## Comandos

Todos desde `portafolio-cristh/`:

- Instalar: `pnpm install`
- Dev: `pnpm dev`
- Build (typecheck + bundle): `pnpm build`
- Lint: `pnpm lint`
- Test: no hay suite automatizada; se verifica con `pnpm build` y revisión visual

## Mapa

- `portafolio-cristh/src/components/`: `Navbar`, `Hero`, `PageTemplate`, `EditorialTitle`, `TextBlock`, `StackIcons`
- `portafolio-cristh/src/App.tsx`: navegación por hash (`#inicio`, `#sobre-mi`, `#proyectos`, `#contacto`) e idioma (`es`/`en`, persistido en `localStorage`)
- `.github/workflows/deploy.yml`: build y deploy a Pages en cada push a `main`

## Reglas del proyecto

- Sin dependencias nuevas sin justificar: el sitio es CSS y componentes propios.
- Todo texto visible va en ambos idiomas (`es`/`en`).
- En móvil nada puede tapar contenido: los elementos decorativos van en flujo o con espacio reservado, nunca absolutos sobre texto.
- `vite.config.ts` usa `base: '/portafolio-cristhnk/'`; no cambiarla sin revisar el deploy.
- No commitear `dist/`, `node_modules/` ni lockfiles generados localmente que no use el CI (el workflow usa `package-lock.json`).

## Pull requests e issues

- Rama desde `main` con prefijo de tipo: `feat/`, `fix/`, `chore/`, `docs/`, `refactor/` + descripción corta.
- Título en Conventional Commits; descripción con `.github/pull_request_template.md` (Context, Solution, Impact, Validation, Rollout and rollback, Checklist).
- PR pequeño: un objetivo y < ~400 líneas. Draft si no está listo; revisión con el checklist completo.
- Al menos una aprobación; nunca push directo a `main`. Sin force-push durante la revisión. Merge con squash y borra la rama.
- Issues con las plantillas de `.github/ISSUE_TEMPLATE/` (bug report, feature request); el PR los cierra con `Closes #N`.

## Contexto

- Arquitectura: `docs/arquitectura.md`
- Decisiones: `docs/decisiones.md` (añade una entrada al tomar una decisión relevante)
