# Contact section

## Propósito / Purpose
- 🇪🇸 Ofrecer canales directos (CV, LinkedIn, email, GitHub, WhatsApp) enfatizando disponibilidad inmediata y foco en reclutadores TIC.
- 🇬🇧 Provide direct channels (CV, LinkedIn, email, GitHub, WhatsApp) while emphasizing immediate availability and recruiter value.

## Archivos clave
- `index.jsx`: renderiza botones de contacto y genera mensajes personalizados (WhatsApp, correo).
- `Contact.css`: estilos para `.contact-btn`, layout responsivo y fondo animado.

## Datos y dependencias
- `useLanguage()` suministra strings, incluidas etiquetas/ARIA por botón.
- `useMemo()` arma el mensaje prellenado de WhatsApp según idioma.
- Descarga de CV selecciona archivo según `language` (`public/cv/`).

## Accesibilidad
- Botones son `<a>` con `aria-label` descriptivo y `Icon*` marcados como `aria-hidden`.
- Sección envuelve título con `dangerouslySetInnerHTML`, por lo que todo HTML debe vivir en `translations` (mantén etiquetas seguras).
- Fondo animado se oculta si el usuario activa `prefers-reduced-motion` (clase `.reduced-motion` aplicada desde hook reutilizable).

## Observabilidad
- Botón CV hereda métricas de descarga a través de logs del servidor; los demás enlaces pueden instrumentarse con Plausible si se requiere (ver `FloatingWhatsApp` para referencia).

## Extensión
- Añade nuevos canales duplicando el shape `{ label, aria }` en `translations.contact.buttons`.
- Actualiza este README y el README raíz para reflejar canales adicionales.
