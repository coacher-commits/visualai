# Visible IA Site

Landing estatica para Visible IA, consultoria de visibilidad en IA orientada a pymes espanolas.
El disenio actual sigue un estilo editorial premium (cream + ink + acento calido)
con copy directo, estructura comercial clara y enfoque en conversion.

## Stack
- HTML estatico (`index.html`)
- CSS puro sin frameworks (`styles.css`)
- JavaScript vanilla para interacciones (`script.js`)
- Archivos tecnicos GEO-first (`llms.txt`, `robots.txt`, `sitemap.xml`)

## Estructura de la landing
- Hero con CTA principal y secundario
- Banda de credibilidad e insights
- Bloque de problema y oportunidad
- Servicios productizados en cards
- Metodologia paso a paso
- Diferencial tecnico (automatizacion)
- Perfil fundador
- FAQ
- CTA final con formulario
- Paginas satelite de servicio:
  - `auditoria-visibilidad-ia.html`
  - `sprint-visibilidad-ia-30-dias.html`
  - `retainer-visibilidad-ia.html`

## Uso local
1. Abre `index.html` en el navegador para una revision rapida.
2. Opcional: levanta un servidor local para pruebas mas realistas:
   - `python3 -m http.server 8080`
   - visita `http://localhost:8080`

## Personalizacion rapida
- Copy y secciones: editar `index.html`
- Paleta, tipografia, layout y responsive: editar `styles.css`
- Menu movil, validacion y feedback de formulario: editar `script.js`
- Roadmap de ejecucion GEO-first: `proyecto-visible-ia-geo-first.md`

## Nota sobre formulario
El formulario actualmente muestra feedback local en cliente.
Para captar leads reales, conecta el submit con un endpoint (backend propio o servicio de formularios).
