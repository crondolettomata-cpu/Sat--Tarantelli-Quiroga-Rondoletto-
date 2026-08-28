# Prompts utilizados — Tableros de Leyes UX y Heurísticas de Nielsen

**Equipo:** Tarantelli · Quiroga · Rondoletto
**Herramienta de IA:** Claude (Claude Code, Anthropic)
**Objetivo:** construir dos tableros web (Leyes UX / Heurísticas de Nielsen) que evalúan la
experiencia de pedido de Burger King, a partir del material de la materia (*Gestalt, leyes
UX y heurísticas de Nielsen*) y del análisis ya elaborado por el equipo.

---

## 1. Insumos que aportó el equipo (no generados por IA)

Antes de pedirle nada a la IA, el equipo ya había producido a mano:

- La evaluación completa de las **10 heurísticas de Nielsen** aplicadas a Burger King,
  con gravedad (escala 0–4) y una discusión interna sobre qué 5 hallazgos priorizar
  (Relación sistema–mundo real, Prevención de errores, Flexibilidad y eficiencia,
  Diseño estético y minimalista, Ayuda y documentación).
- Un borrador de ejemplo con **8 leyes de UX** aplicadas a Burger King (Hick, Fitts,
  Jakob y Tesler, entre otras).
- El PDF/PPTX de cátedra (*Gestalt, leyes UX y heurísticas de Nielsen*) con las
  definiciones oficiales de cada heurística y la consigna del TP.

La IA se usó para estructurar, completar y publicar ese trabajo — no para inventar la
evaluación desde cero.

---

## 2. Prompt principal (consigna al agente)

> "Usando herramientas de inteligencia artificial, cada equipo deberá crear dos
> tableros: uno para las leyes UX y otro para heurísticas de Nielsen. Creados los
> tableros, hacer las evaluaciones correspondientes. Es importante ser precisos en el
> análisis, acompañar capturas de pantalla de los puntos de dolor detectados y explicar
> qué pasa. Puede ser un solo archivo o dos. Tienen que subirlo a GitHub y luego hacer
> deploy en Vercel. Deberán armar un documento con los prompts utilizados
> 'prompts_leyes_heuristicas' en el Drive del equipo. Tenes que hacer todo esto en base
> a burger king" — seguido del ejemplo de las 8 leyes UX y de la evaluación completa de
> las 10 heurísticas de Nielsen con sus gravedades, ya redactada por el equipo.

## 3. Prompts de trabajo (pasos que se le pidieron al agente)

1. **Lectura de la fuente:** "Leé el PPTX de cátedra (`Gestalt_leyes_UX_y_heuristicas_de_Nielsen.pptx`)
   y extraé las definiciones oficiales de cada heurística de Nielsen y de las leyes UX
   que se explican en el material, para usarlas como base de cada tarjeta."
2. **Diseño de la estructura:** "Armá un sitio de un solo archivo (HTML/CSS/JS, sin
   build) con dos tableros tipo board (grilla de tarjetas), uno por cada ley/heurística,
   con: nombre, definición oficial, ejemplo/hallazgo en Burger King, veredicto o
   gravedad, y un casillero para la captura de pantalla correspondiente."
3. **Completar el Tablero 1 (Leyes UX):** "Tomá los 4 ejemplos ya redactados por el
   equipo (Hick, Fitts, Jakob, Tesler) y sumá 4 leyes más del listado de Laws of UX
   citado en la bibliografía de la cátedra (Ley de Miller, Regla Peak-End, Efecto
   Estética-Usabilidad, Umbral de Doherty), con un ejemplo propio aplicado a Burger King
   para cada una."
4. **Completar el Tablero 2 (Heurísticas de Nielsen):** "Tomá la evaluación de las 10
   heurísticas ya redactada por el equipo, con sus gravedades y los 5 hallazgos
   priorizados, y volcala en las tarjetas del tablero sin alterar el criterio de
   severidad que ya habíamos definido."
5. **Manejo honesto de las capturas:** "El entorno no tiene acceso a la app/web real de
   Burger King. En vez de inventar capturas, armá un casillero por tarjeta con el
   nombre de archivo exacto esperado, para que el equipo solo tenga que arrastrar sus
   propias capturas reales a `/screenshots` antes de la entrega."
6. **QA visual:** "Levantá el sitio en un servidor local, renderizalo con un navegador
   headless y revisá que los tres tableros (Leyes UX, Heurísticas de Nielsen,
   Metodología) no tengan errores de layout ni de JavaScript."
7. **Publicación:** "Subí todo a la rama `claude/bk-ux-heuristics-boards-ap1jfq` del
   repositorio del equipo en GitHub, y dejá el proyecto listo para deploy en Vercel
   (sin build command, sitio estático)."

## 4. Qué generó la IA vs. qué es autoría del equipo

| Contenido | Autoría |
|---|---|
| Las 10 heurísticas de Nielsen aplicadas a BK (hallazgos + gravedad + priorización) | **Equipo** (la IA solo lo estructuró en el tablero) |
| Leyes de Hick, Fitts, Jakob y Tesler aplicadas a BK | **Equipo** (la IA solo lo estructuró en el tablero) |
| Leyes de Miller, Peak-End, Estética-Usabilidad y Umbral de Doherty aplicadas a BK | **IA**, para completar las 8 leyes del Tablero 1 |
| Estructura, diseño visual y código del sitio (HTML/CSS/JS) | **IA** |
| Redacción final / precisión de cada hallazgo | **IA**, sobre la base del análisis del equipo |

---

*Documento generado como parte del trabajo práctico — copiar a la carpeta del equipo en
Google Drive según la consigna.*
