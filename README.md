# Evaluación UX — Burger King

Trabajo práctico de UX/UI: dos tableros construidos con ayuda de IA para evaluar la
experiencia de pedido de Burger King (app/web) contra **8 leyes de UX** y las **10
heurísticas de usabilidad de Jakob Nielsen**.

Sitio estático de un solo archivo HTML (`index.html`) + `style.css` + `script.js` +
`data.js` con el contenido de ambos tableros. Sin build, sin dependencias — se sirve tal
cual.

## Estructura

```
index.html    → tablero (tabs: Leyes UX / Heurísticas de Nielsen / Metodología)
style.css     → estilos
data.js       → contenido de las 8 leyes UX y las 10 heurísticas, con hallazgos en BK
script.js     → render de tarjetas + manejo de tabs + fallback de capturas
screenshots/  → capturas reales del equipo (ver screenshots/README.md para los nombres esperados)
docs/prompts_leyes_heuristicas.md  → registro de los prompts de IA usados para armar los tableros
```

## Ver en local

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Completar con capturas reales

El sitio ya tiene un casillero de captura en cada tarjeta con el nombre de archivo
esperado (ej. `screenshots/nielsen-05-seleccion-sucursal.png`). Ver la lista completa en
[`screenshots/README.md`](screenshots/README.md). Al agregar la imagen con ese nombre
exacto en `/screenshots`, se muestra automáticamente — no requiere tocar código.

## Deploy en Vercel

1. Importar este repositorio en [vercel.com/new](https://vercel.com/new).
2. Framework Preset: **Other** (sitio estático, sin build command, sin output directory).
3. Deploy. Al pushear nuevas capturas a `/screenshots`, Vercel vuelve a desplegar solo.
