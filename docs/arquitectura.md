# Arquitectura

Sitio estático de una página (SPA) sin backend ni base de datos.

## Componentes

- `App`: estado de página e idioma; escucha `hashchange` y persiste el idioma en `localStorage`.
- `Navbar`: enlaces a las cuatro secciones y selector de idioma.
- `Hero`: portada de `#inicio` (titular, statement, stack, botones y el oso de tiza).
- `PageTemplate`: contenido de `#sobre-mi`, `#proyectos` y `#contacto`.
- Piezas de apoyo: `EditorialTitle`, `TextBlock`, `StackIcons`.

## Flujo

1. El navegador carga el bundle generado por Vite.
2. `App` lee el hash de la URL y renderiza `Hero` o `PageTemplate`.
3. Cambiar de sección es cambiar el hash; no hay router ni peticiones de datos.

## Deploy

Push a `main` → GitHub Actions instala con `npm ci`, ejecuta `npm run build` y publica `portafolio-cristh/dist` en GitHub Pages.
