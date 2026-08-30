# ComparendoHoy

Guía estática en español para quien acaba de recibir un comparendo en Bogotá. HTML + un CSS + un JS (solo la rama vía / fotomulta en la portada). Sin servidor obligatorio.

Última actualización: 29 agosto 2026.

## Páginas

| Archivo | Ruta | Qué es |
|---|---|---|
| `index.html` | `/` | Si el comparendo fue hoy. Pregunta vía vs fotomulta. Reloj + tres acciones. |
| `descuento-50-25.html` | `/descuento-50-25.html` | Plazos 50% / 25%, bandas UVB 2026, acuerdos. |
| `curso-pedagogico-sdm.html` | `/curso-pedagogico-sdm.html` | Curso SDM gratis: agendar, RUNT, un curso por orden. |
| `puntos-curso-sdm.html` | `/puntos-curso-sdm.html` | Seis puntos oficiales. Sábados: Paloquemao y Calle 13. |
| `curso-cia-cuando-si.html` | `/curso-cia-cuando-si.html` | Cuándo un CIA. 25% al CIA, resto al organismo. |
| `fotomulta.html` | `/fotomulta.html` | El reloj es la notificación, no la foto. |
| `acerca.html` | `/acerca.html` | Qué es esta guía. |
| `aviso.html` | `/aviso.html` | Aviso. Sin afiliados. Fuentes. |

Otros archivos: `css/sitio.css`, `js/rama.js`, `favicon.svg`, `robots.txt`, `sitemap.xml`.

El `sitemap.xml` usa rutas relativas: no hay dominio propio. Si se publica, anteponer la URL canónica a cada `<loc>`.

## Reglas que no se “mejoran”

- El descuento exige curso pedagógico **y** pago dentro de la ventana.
- En vía: 50% días hábiles 1–5; 25% días 6–20. Ley 769 de 2002 art. 136.
- Electrónico: 50% en 11 días hábiles desde la **notificación**; 25% días 12–26.
- Curso SDM Bogotá: gratis. Agendar en movilidadbogota.gov.co o (601) 364 9400 opción 2.
- SICOV: 3 ago 2026 (Resolución 8863 de 16 jul 2026). Confirmar qué llevar. Sin protocolo inventado.
- Acuerdos Bogotá: requisitos etiquetados 2025; confirmar 2026.
- FCM/SIMIT: acuerdos para **algunos** municipios; verificar si la ciudad está habilitada.

## Abrir en local

Archivos en `/workspace/comparendohoy/`. Abrir `index.html` en el navegador, o servir solo en localhost si se quiere probar.
