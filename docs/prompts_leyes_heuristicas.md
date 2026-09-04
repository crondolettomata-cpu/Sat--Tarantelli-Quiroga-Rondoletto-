# Prompts utilizados — Tableros de Leyes UX y Heurísticas de Nielsen

**Equipo:** Tarantelli · Quiroga · Rondoletto
**Producto evaluado:** Burger King (app / web de pedidos)
**Herramienta de IA usada en todos los prompts:** Claude Code (Anthropic), sesión conectada al repositorio de GitHub del equipo.

Este documento registra los prompts reales usados para construir el sitio (no un resumen):
qué se le pidió a la IA, el texto exacto de cada pedido, y qué devolvió / qué hubo que
corregir. Los prompts están en el orden cronológico en que se enviaron durante la sesión.

---

## Prompt 1 — Consigna inicial y contenido base

**Objetivo del prompt:** pedirle a la IA que arme los dos tableros completos (Leyes UX y
Heurísticas de Nielsen) a partir de la consigna de la materia, adjuntando el PPTX de
cátedra y todo el análisis que el equipo ya había redactado a mano (el ejemplo de 8 leyes
UX aplicadas a Burger King, y la evaluación completa de las 10 heurísticas de Nielsen con
severidad y la discusión interna sobre qué 5 hallazgos priorizar).

**Prompt completo (texto exacto):**

> @"/root/.claude/uploads/.../16fc59c3-Gestalt_leyes_UX_y_heur_sticas_de_Nielsen.pptx" * Usando herramientas de inteligencia artificial, cada equipo deberá crear dos tableros: uno para las leyes UX y otro para heurísticas de Nielsen.
> * Creados los tableros, hacer las evaluaciones correspondientes.
> * Es importante ser precisos en el análisis, acompañar capturas de pantalla de los puntos de dolor detectados y explicar qué pasa.
> * Puede ser un solo archivo o dos. Tienen que subirlo a GitHub y luego hacer deploy en Vercel.
> * Deberán armar un documento con los prompts utilizados "prompts_leyes_heuristicas" en el Drive del equipo.
>
> Tenes que hacer todo esto en base a burger king
>
> [seguido de un ejemplo práctico de 8 leyes UX aplicadas a Burger King (Hick, Fitts, Jakob, Tesler, y ejemplos adicionales de heurísticas), y de la evaluación completa, ya redactada por el equipo, de las 10 heurísticas de Nielsen aplicadas a Burger King con severidad 0–4, incluyendo la discusión interna sobre cuáles 5 hallazgos priorizar: Relación sistema–mundo real, Prevención de errores, Flexibilidad y eficiencia de uso, Diseño estético y minimalista, y Ayuda y documentación — todas calificadas en severidad 2, con la justificación explícita de por qué no se usó 3 o 4.]

**Resultado y ajustes:**
- La IA leyó el PPTX de cátedra (extrajo las definiciones oficiales de cada heurística de
  Nielsen y de las leyes UX explicadas ahí) y detectó que el entorno de ejecución **no
  tiene acceso a internet abierto** (solo GitHub/npm/pypi), por lo que no podía navegar la
  app/web real de Burger King para sacar capturas propias.
- En vez de inventar capturas falsas, propuso —y así se aceptó— construir el sitio con un
  **casillero de captura por tarjeta**, con el nombre de archivo exacto esperado, para que
  el equipo complete con sus propias capturas reales.
- Generó un sitio de un solo archivo (`index.html` + `style.css` + `data.js` + `script.js`,
  sin build) con Tablero 1 (Leyes UX, 8 leyes) y Tablero 2 (Heurísticas de Nielsen, 10
  heurísticas), volcando el análisis ya redactado por el equipo y completando el Tablero 1
  con 4 leyes UX adicionales (Miller, Peak-End, Estética-Usabilidad, Umbral de Doherty) para
  llegar a 8, porque el equipo solo tenía redactadas 4 (Hick, Fitts, Jakob, Tesler).
- Ajuste posterior necesario: esas 4 leyes adicionales se habían elegido por criterio propio
  de la IA a partir de la bibliografía general de "Laws of UX", **sin la Ficha de referencia
  rápida de cátedra** (14 leyes oficiales) — ver Prompt 3.
- Intentó pushear a GitHub y encontró que la app de GitHub conectada a la sesión no tenía
  permiso de escritura sobre el repositorio (error 403 tanto por `git push` como por la API).
  Quedó con el trabajo commiteado localmente a la espera de que se habilite el acceso.

---

## Prompt 2 — Reintento de push

**Objetivo del prompt:** que la IA seguidera intentando publicar en GitHub sin que el
equipo tuviera que estar pendiente manualmente.

**Prompt completo (texto exacto):**

> reintenta el push cuando este resuelto porfavor

**Resultado y ajustes:**
- La IA programó un reintento automático de `git push` cada 20 minutos (usando su
  herramienta de recordatorios internos) hasta que el acceso a GitHub quede habilitado, en
  vez de pedirle al equipo que esté chequeando el estado.

---

## Prompt 3 — Corrección de alcance contra la consigna ampliada

**Objetivo del prompt:** el equipo pegó la consigna ampliada/aclarada de la cátedra (con
requisitos más específicos: las 14 leyes de una "Ficha de referencia rápida" como checklist
para el Tablero 1, cobertura mínima de 8, las 10 heurísticas completas para el Tablero 2,
formato exacto del documento de prompts, y entregables finales) y le pidió a la IA que
verificara el sitio contra esos requisitos **antes** de hacer el push.

**Prompt completo (texto exacto):**

> fijate que cumpla con todo esto antes de hacer el push:
> Algunas aclaraciones sobre la tarea de análisis de leyes y heurísticas.
>
> Qué tienen que crear
>
> * Dos tableros de evaluación, construidos como una mini-web con asistencia de IA generativa de código (Claude Code, Cursor, v0, Lovable, Bolt o similar).
> * Puede ser un solo proyecto con dos vistas/secciones, o dos proyectos separados; en ambos casos tienen que quedar desplegados en Vercel.
> * Cada tablero funciona como un documento de evaluación navegable: por cada ley o heurística, muestra el hallazgo, la evidencia (captura) y el análisis escrito. No hace falta funcionalidad de backend (es contenido estático que ustedes completan con su análisis real).
>
> Tablero 1: leyes UX
>
> * Recorran las navegaciones principales de su producto usando las 14 leyes de la Ficha de referencia rápida como checklist. No hace falta encontrar las 14 en el mismo producto: prioricen las más evidentes.
> * Sugerencia de cobertura mínima: documenten al menos 8 de las 14 leyes con evidencia real (cumplida o rota). Es un piso orientativo, ajustable según lo que efectivamente encuentren en su producto.
>
> Por cada ley documentada, el tablero muestra:
>
> * Ley UX: nombre de la ley (de las 14 de la Ficha de referencia).
> * Cumple / rompe: indicar si el producto respeta la ley o la incumple en el punto analizado.
> * Captura: screenshot del punto exacto de la interfaz donde se observa.
> * Explicación: 1-2 frases que respondan la pregunta guía de esa ley: qué pasa y por qué.
>
> Tablero 2: heurísticas de Nielsen
> A diferencia de las leyes UX, acá evalúan las 10 heurísticas completas: es el estándar de una evaluación heurística real.
>
> Por cada heurística, el tablero muestra:
>
> * Heurística: una de las 10 heurísticas de Nielsen (las 10, sin excepción).
> * Severidad: escala de Nielsen 0-4: 0 no es un problema, 1 cosmético, 2 menor, 3 mayor, 4 catástrofe de usabilidad.
> * Captura: screenshot del punto de dolor (severidad ≥ 1) o del punto donde se cumple bien (severidad 0).
> * Explicación: qué pasa, por qué rompe o cumple la heurística, y qué impacto tiene en la persona usuaria.
>
> Documento de prompts ("prompts_leyes_heuristicas")
> Se sube al Drive del equipo con ese nombre exacto. No es un anexo protocolar: nos interesa ver cómo iteraron con la IA, qué funcionó y qué no. Por cada prompt relevante, tiene que incluir:
>
> * Herramienta de IA usada: Claude Code, Cursor, v0, ChatGPT, etc.
> * Objetivo del prompt: qué le pidieron a la IA y para qué parte del tablero.
> * Prompt completo: el texto exacto, no un resumen.
> * Resultado y ajustes: qué devolvió la IA y qué tuvieron que corregir o reformular.
>
> Entregables
>
> * Link al tablero (o los dos tableros) desplegado en Vercel.
> * Link al repositorio en GitHub, público o compartido con el equipo docente.
> * Documento "prompts_leyes_heuristicas" en el Drive del equipo.
>
> Cualquier duda, nos escriben! (editado)

**Resultado y ajustes:**
- La IA detectó dos brechas contra la versión anterior del sitio: (1) el Tablero 1 estaba
  usando 4 leyes elegidas por criterio propio en vez de la Ficha de referencia rápida oficial
  de 14 leyes citada en la consigna, y (2) el documento de prompts no seguía el formato de 4
  campos pedido (Herramienta / Objetivo / Prompt completo / Resultado y ajustes) — tenía
  resúmenes en vez del texto exacto de cada intercambio.
- Como el enlace a la Ficha de referencia rápida es un Google Doc y el entorno de ejecución
  tiene bloqueado el acceso a `docs.google.com`, la IA no pudo leerlo directamente. En vez de
  inventar o suponer los 14 nombres, le preguntó al equipo cómo proceder (pegar el listado
  real vs. usar una selección estándar de lawsofux.com) — el equipo optó por pegar el
  listado real.
- Este documento de prompts se reescribió por completo en el formato de 4 campos por
  prompt, usando el texto exacto de cada mensaje enviado durante la sesión (no resúmenes).

---

## Prompt 4 — Ficha de referencia rápida (adjunto)

**Objetivo del prompt:** entregarle a la IA el contenido real de la Ficha de referencia
rápida (que no se podía leer por estar en Google Docs, bloqueado en el entorno) para que
el Tablero 1 usara exactamente esas 14 leyes oficiales en vez de una selección propia.

**Prompt completo (texto exacto):**

> @"/root/.claude/uploads/.../c7089282-Gu_a_de_leyes_UX.pdf"

(Adjunto: PDF de la cátedra "FICHA DE REFERENCIA RÁPIDA — Leyes de UX para analizar
diseños", basado en lawsofux.com, con las 14 leyes agrupadas en 5 categorías: Percepción y
jerarquía visual, Decisión y carga cognitiva, Memoria y motivación, Consistencia y
robustez, y Priorización — cada una con su "qué dice" y su pregunta guía.)

**Resultado y ajustes:**
- La IA leyó el PDF y extrajo las 14 leyes con su texto oficial (nombre, "qué dice" y
  pregunta guía) y **reescribió por completo el Tablero 1** para dejar de usar 4 leyes
  elegidas por criterio propio (Miller, Peak-End, Estética-Usabilidad y Doherty ya estaban
  bien, pero les faltaba la pregunta guía oficial) y sumó dos leyes más de la ficha —
  Navaja de Occam y Principio de Pareto — llegando a **10 de las 14** documentadas.
- Cada tarjeta del Tablero 1 pasó a mostrar explícitamente la pregunta guía de la ficha y a
  responderla en 1-2 frases (antes la explicación no estaba atada a esa pregunta puntual).
- El veredicto de cada ley se estandarizó a **Cumple / Rompe** (antes usaba una tercera
  etiqueta, "Punto a revisar", que no estaba pedida en la consigna).
- El Tablero 2 (Nielsen) se completó con un campo explícito de **Impacto en la persona
  usuaria** por heurística, separado del hallazgo, para cubrir el tercer elemento que pide
  la consigna ampliada ("qué impacto tiene en la persona usuaria").
- Se actualizaron `screenshots/README.md` (nuevos nombres de archivo de captura para el
  Tablero 1) y el resto de la documentación (`README.md`, este mismo archivo) para
  reflejar la cobertura real: 10/14 leyes UX + 10/10 heurísticas de Nielsen.

---

## Prompt 5 — Corrección con evidencia real (primera captura del equipo)

**Objetivo del prompt:** el equipo empezó a probar la app real de Burger King y mandó la
primera captura real (pantalla de personalización de un combo, con el botón "Agregar" y el
carrusel de "Gustitos"), pidiendo corregir la tarjeta de Ley de Fitts en base a lo que se
ve ahí — no a la suposición inicial de la IA.

**Prompt completo (texto exacto):**

> [captura de pantalla adjunta: pantalla de personalización de combo en burgerking.com.ar,
> con el menú de categorías arriba, el resumen del pedido con "Acompañamientos Regular:
> Papas Fritas Regular" y "Bebidas Regular: Pepsi Regular", una sección "Gustitos" con un
> carrusel de extras (Taza Galáctico $9.990, con un botón "+" circular chico, y flechas de
> navegación "<" ">" también circulares y chicas), y el botón "Agregar - $20.700,00" en
> rojo ocupando todo el ancho inferior]
>
> hay que cambiar lo de la ley de fitts

**Resultado y ajustes:**
- Como el pedido era ambiguo (¿cambiar el veredicto, cambiar solo el texto, o algo distinto?),
  la IA preguntó en vez de reescribir a ciegas — para no pisar una lectura que era del
  equipo, no suya.
- El equipo aclaró: el problema es que, si bien el CTA principal ("Agregar") es grande y
  cumple la ley, **otros elementos de uso frecuente en la misma pantalla son chicos** — el
  botón "+" para sumar un extra y las flechas del carrusel de Gustitos — y esos sí exigen
  precisión.
- La IA cambió el veredicto de la tarjeta de **Cumple → Rompe**, reescribió el hallazgo para
  reflejar el matiz (CTA principal grande, pero controles secundarios de uso frecuente
  chicos) y renombró el archivo de captura esperado a
  `leyes-01-fitts-elementos-chicos.png` para que el equipo suba ahí esa misma captura real
  que ya sacaron.
- Este es el primer hallazgo del Tablero 1 respaldado por una captura real del producto (no
  una hipótesis) — el resto de las 10 leyes documentadas todavía están pendientes de
  contrastar contra capturas reales a medida que el equipo recorra la app.

---

## Prompt 6 — Corrección con evidencia real (segunda captura del equipo)

**Objetivo del prompt:** el equipo mandó una segunda captura real (pantalla completa de
"Pide Para Llevar": detalles de tienda, modos de entrega, hora de recogida, carrito con el
combo y su total) pidiendo corregir la tarjeta de Ley de Miller, que hasta ese momento
seguía con una hipótesis de la IA sin contrastar.

**Prompt completo (texto exacto):**

> [captura de pantalla adjunta: pantalla "Pide Para Llevar" de burgerking.com.ar con
> "Detalles del restaurante" (dirección de la tienda y 4 opciones de entrega: Pedido al
> Auto, Retirar, Para Servir, Servicio a la mesa), "Hora de recogida" (botón "Ahora"), y a
> la derecha "Tu carrito" con "Combo Deluxe King Doble King" y sus 3 sub-ítems listados,
> botones Editar/Eliminar, control de cantidad con "–"/"+", campo de código promocional y
> total; debajo empieza a asomar una sección "Gustitos"]
>
> hay que cambiar la ley de miller tambien

La IA preguntó qué específicamente había que corregir (el carrito sí agrupa bien el
combo), y el equipo aclaró:

> el resumen del pedido no cumple con esto que pusiste: Sí: el resumen del pedido agrupa
> la información en bloques (producto principal / acompañamiento / bebida) en lugar de
> listar cada ítem y modificador por separado. además tiene lo que explicaste en el uno

**Resultado y ajustes:**
- La IA había afirmado que el resumen del pedido agrupaba la información en bloques por
  categoría (producto principal / acompañamiento / bebida) — una hipótesis razonable pero
  **no verificada**, y la captura real la contradice: dentro del carrito solo hay un
  agrupamiento real (el combo con sus 3 sub-ítems); el resto de la pantalla (tienda, 4
  modos de entrega, hora, carrito, promo, total, más "Gustitos" debajo) se presenta todo
  junto, sin dividir el proceso en pasos.
- La IA cambió el veredicto de **Cumple → Rompe**, reescribió el hallazgo para reflejar
  que la única agrupación real es la del combo y que el resto de la pantalla no reduce la
  carga de memoria, y sumó una mención a que los controles de cantidad ("–"/"+") repiten
  el mismo patrón de botones chicos ya señalado en la Ley de Fitts (lo que el equipo pedía
  con "además tiene lo que explicaste en el uno").
- Se renombró el archivo de captura esperado a `leyes-03-miller-pantalla-carrito.png`.
- Este intercambio deja un patrón claro para el resto del tablero: las leyes que la IA
  redactó sin ver el producto real quedan como hipótesis hasta que una captura del equipo
  las confirma o las corrige — dos de dos hasta ahora (Fitts y Miller) tuvieron que
  corregirse al contrastarlas con la app real.

---

## Prompt 7 — Corrección con evidencia real (tercera captura del equipo)

**Objetivo del prompt:** el equipo mandó una tercera captura real (la pantalla de inicio
de burgerking.com.ar) y, a diferencia de las dos veces anteriores, indicó directamente qué
frase estaba mal en vez de pedir que la IA adivinara.

**Prompt completo (texto exacto):**

> [captura de pantalla adjunta: pantalla de inicio de burgerking.com.ar con la barra
> superior (Pide aquí / Restaurantes / Mi BK / Cupones, Coronas y carrito), una franja de
> "Coronas disponibles" con botón "Revisar Canjes", y dos banners grandes: uno de la línea
> "King's Selection" ("No te quedes sin probarlas!") y otro para activar la
> geolocalización ("Activá tu geolocalización y disfrutá como rey")]
>
> en el principio de pareto no se cumple lo que habías puesto: En Burger King: Sí: la
> pantalla de inicio destaca accesos directos como "Pedir de nuevo" y los combos más
> pedidos, priorizando las tareas que concentran la mayoría de los pedidos por sobre el
> catálogo completo.

**Resultado y ajustes:**
- Como el equipo ya señaló la frase exacta a corregir y qué muestra la pantalla real, la
  IA no volvió a preguntar — reescribió directo la tarjeta.
- Cambió el veredicto de **Cumple → Rompe**: la pantalla de inicio real no tiene accesos
  directos a "Pedir de nuevo" ni a combos populares; el espacio principal lo ocupan dos
  banners promocionales genéricos (King's Selection y geolocalización), es decir, la
  heurística se rompe porque el diseño prioriza marketing por sobre la tarea que la
  mayoría de las personas usuarias repite (volver a pedir lo de siempre).
- Se renombró el archivo de captura esperado a
  `leyes-10-pareto-banners-promocionales.png`.
- Con esta van **tres de tres** leyes redactadas como hipótesis por la IA que tuvieron que
  corregirse al contrastarlas con capturas reales (Fitts, Miller, Pareto) — confirma que
  conviene tratar cualquier hallazgo del Tablero 1 como provisorio hasta que el equipo lo
  chequee contra la app real.

---

## Prompt 8 — Primera corrección del Tablero 2 (Nielsen)

**Objetivo del prompt:** el equipo empezó a revisar el Tablero 2 (Heurísticas de Nielsen,
hasta ese momento redactado por la IA sin contrastar con la app real) y corrigió la
primera heurística, "Prevención de errores", con una observación de uso propia (sin
captura esta vez, con una descripción directa de cómo funciona el flujo real).

**Prompt completo (texto exacto):**

> lo de prevención de errores en las heuristicas creo que esta mal, la ubicacion se puede
> poner desde un principio y todos los pasos se van verificando

**Resultado y ajustes:**
- La hipótesis original de la IA decía que la sucursal se confirmaba recién al final del
  recorrido, generando un riesgo de perder el pedido armado. El equipo corrigió: en la app
  real, la sucursal se define **desde el principio**, antes de armar el pedido, y cada paso
  siguiente se verifica contra esa selección — lo opuesto a lo que decía la tarjeta.
- La IA cambió el veredicto de **Gravedad 2 → Gravedad 0** (la heurística se cumple, no es
  un problema) y sacó la marca de "★ Prioritaria", ya que una heurística que se cumple no
  compite por prioridad de arreglo. Reescribió el hallazgo y el impacto en sentido positivo
  (arma el pedido con la certeza de poder completarlo, en vez de arriesgarse a perderlo) y
  actualizó la descripción de la captura esperada para que muestre la selección de
  sucursal **al inicio** del flujo, no al final.
- Aviso pendiente para el equipo: al sacar "Prevención de errores" de las 5 heurísticas
  priorizadas originales (Relación sistema–mundo real, Prevención de errores, Flexibilidad
  y eficiencia, Diseño estético y minimalista, Ayuda y documentación), esa lista quedó en
  4. Falta que el equipo decida si suma una quinta heurística priorizada o si deja la
  lista en 4.

---

## Prompt 9 — Corrección por coherencia interna (sin captura nueva)

**Objetivo del prompt:** el equipo notó que la tarjeta de "Reconocer antes que recordar"
contradecía la corrección que se acababa de hacer en "Prevención de errores" (Prompt 8):
si la sucursal se define desde el principio y se verifica en cada paso, no puede ser cierto
al mismo tiempo que esa información "no siempre tiene suficiente presencia" en pantalla.

**Prompt completo (texto exacto):**

> lo que dice esto no tiene coherencia con lo que acabamos de modicficar

(mensaje acompañado de una captura de la tarjeta "Reconocer antes que recordar" tal como
estaba en el sitio, con Gravedad 2)

**Resultado y ajustes:**
- La IA revisó las capturas ya recibidas del equipo (personalización de combo y carrito) y
  confirmó la inconsistencia: en ambas aparece una barra fija al pie de pantalla
  ("Retirar — BK San Fernando Autoking...") con la sucursal y el modo de entrega, visible
  en todo momento — lo contrario de lo que decía la tarjeta.
- Cambió el veredicto de **Gravedad 2 → Gravedad 0** (se cumple), reescribió el hallazgo
  para describir la barra fija como el mecanismo real que resuelve la heurística, y
  actualizó la captura esperada a `nielsen-06-barra-sucursal-visible.png`.
- Este ajuste no vino de una captura nueva, sino de que el equipo detectó una
  **contradicción lógica entre dos tarjetas** del propio sitio — un tipo de revisión tan
  válido como contrastar contra una captura, y que conviene seguir haciendo a medida que
  se corrige el resto del Tablero 2.

---

## Qué generó la IA vs. qué es autoría del equipo

| Contenido | Autoría |
|---|---|
| Las 10 heurísticas de Nielsen aplicadas a BK (hallazgos + severidad + priorización de las 5 más sólidas) | **Equipo** — la IA solo lo estructuró en tarjetas |
| Leyes de Hick, Fitts, Jakob y Tesler aplicadas a BK | **Equipo** — la IA solo lo estructuró en tarjetas |
| Leyes adicionales del Tablero 1 hasta llegar a 10/14 (Miller, Occam, Peak-End, Doherty, Estética-Usabilidad, Pareto) | **IA**, a partir de la Ficha de referencia rápida de cátedra |
| Estructura, diseño visual y código del sitio (HTML/CSS/JS) | **IA** |
| Redacción final / precisión de cada hallazgo | **IA**, sobre la base del análisis del equipo |
| Casilleros de captura (en vez de capturas inventadas) | **Decisión de la IA**, por la restricción de red del entorno — validada por el equipo |

---

*Documento generado como parte del trabajo práctico — copiar a la carpeta del equipo en
Google Drive con el nombre exacto **prompts_leyes_heuristicas**, según la consigna.*
