# Seguridad: revisión del 2026-10-31

Contexto: revisión de seguridad de todos los repos tras el «octubre negro» (la IA abarata el ataque: se asume que todo repo, endpoint y clave se escanea en minutos). Este documento recoge lo aplicado a este repo y lo que queda pendiente; el estado vive en `docs/`, no en la conversación.

> Repo **público**: los pendientes se describen por categoría y acción, sin detalles explotables.

## Cambios aplicados

Ninguno en esta tanda.

## Pendientes

- [ ] **Media** · Raíz (E-27): Sin `.gitignore`: añadir uno mínimo.
- [ ] **Baja** · Raíz y `site/` (RA-02): Sitio duplicado que ya diverge; dejar una sola copia y comprobar cuál publica Pages.
- [ ] **Baja** · `AGENT.md`, `docs/` (RA-03): Decidir si las instrucciones de agente y los documentos de trabajo deben estar en un repo público; comprobar que no se sirven como páginas.
- [ ] **Baja** · `index.html` (RA-01, RA-04): Datos de contacto en claro (decisión del dueño); si se quiere reducir spam, formulario con Turnstile. Añadir meta CSP de refuerzo.

## Reglas nuevas para agentes de este repo

- .gitignore base: `.env*`, `*.pem`, `*.key`, `*.sqlite*`, `*.db`, `.wrangler/`, y `*.xlsx`/`*.docx`/`*.pdf` en repos con material de cliente. Ejecutar `gitleaks detect --log-opts=--all` antes de hacer público un repo.
- En repos públicos, commits con el email `noreply` de GitHub.
- Antes de añadir formularios o terceros: CSP, SRI y revisión de privacidad.
- Los documentos de trabajo y prompts de agentes no viven en repos públicos salvo decisión expresa.
