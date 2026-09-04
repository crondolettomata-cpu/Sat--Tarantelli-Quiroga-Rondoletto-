/* Contenido de los dos tableros. Cada objeto "shot" define el nombre de archivo
   esperado dentro de /screenshots — al agregar la imagen real con ese nombre,
   el tablero la muestra automáticamente en lugar del casillero vacío.

   Tablero 1 usa las 14 leyes de la "Ficha de referencia rápida — Leyes de UX
   para analizar diseños" (basada en lawsofux.com) provista por la cátedra.
   Se documentan 10 de las 14 (mínimo sugerido: 8), priorizando las más
   evidentes en el flujo de pedido de Burger King. */

const LEYES_UX = [
  {
    id: "fitts",
    category: "Percepción y jerarquía visual",
    name: "Ley de Fitts",
    quote: "El tiempo para alcanzar un objetivo depende de su tamaño y de la distancia al mismo.",
    question: "¿Los botones o CTAs de uso frecuente son grandes y están cerca (pulgar en mobile, cursor en desktop)?",
    verdict: "rompe",
    finding: "Parcialmente: el botón principal “Agregar” es grande y ocupa todo el ancho inferior de la pantalla, pero otras acciones de uso frecuente en esa misma pantalla — el “+” para sumar un gustito/extra y las flechas para recorrer ese carrusel — son círculos muy chicos que exigen precisión, sin el margen de error que pide la ley para un CTA que se usa seguido.",
    shot: { file: "leyes-01-fitts-elementos-chicos.png", caption: "Pantalla de personalización de combo: botón “Agregar” grande abajo, pero el “+” de extras y las flechas del carrusel de Gustitos son chicos." }
  },
  {
    id: "hick",
    category: "Decisión y carga cognitiva",
    name: "Ley de Hick",
    quote: "Más opciones y complejidad = más tiempo para decidir.",
    question: "¿Los menús y formularios están simplificados? ¿Se usa progressive disclosure?",
    verdict: "cumple",
    finding: "Sí: el menú se agrupa en categorías (Combos, Carne, Pollo, Postres, Bebidas) en vez de listar todo el catálogo de una vez, y el detalle de cada producto recién se abre al tocarlo.",
    shot: { file: "leyes-02-hick-menu-categorias.png", caption: "Menú principal del tótem/app mostrando las categorías del catálogo." }
  },
  {
    id: "miller",
    category: "Decisión y carga cognitiva",
    name: "Ley de Miller",
    quote: "La memoria de trabajo retiene solo 7 (± 2) elementos.",
    question: "¿La información está agrupada en bloques (chunks) manejables?",
    verdict: "rompe",
    finding: "No del todo: adentro del carrito el combo sí lista sus 3 componentes bajo un mismo ítem, pero es la única agrupación real de la pantalla. El resto — detalles de la tienda, 4 modos de entrega, hora de recogida, carrito, código promocional y total — se muestra todo junto, sin dividir el proceso en pasos, superando lo que se puede retener de un vistazo. Los controles de cantidad (“–” / “+”) además son círculos chicos, el mismo patrón de botones pequeños ya señalado en la Ley de Fitts.",
    shot: { file: "leyes-03-miller-pantalla-carrito.png", caption: "Pantalla completa de “Pide Para Llevar”: detalles de tienda, modos de entrega, hora, carrito, promo y total, todo junto." }
  },
  {
    id: "occam",
    category: "Decisión y carga cognitiva",
    name: "Navaja de Occam",
    quote: "Entre dos soluciones igual de efectivas, gana la más simple.",
    question: "¿Hay elementos que podrían eliminarse sin perder función?",
    verdict: "rompe",
    finding: "Sí: las promociones y sugerencias que aparecen durante el flujo de compra podrían eliminarse sin que el usuario pierda ninguna función, y hoy compiten con el paso de completar el pedido.",
    shot: { file: "leyes-04-occam-promos.png", caption: "Pantalla donde aparece una promoción/sugerencia dentro del flujo de compra." }
  },
  {
    id: "tesler",
    category: "Decisión y carga cognitiva",
    name: "Ley de Tesler",
    quote: "La complejidad no desaparece: se desplaza del sistema al usuario.",
    question: "¿Quién absorbe la complejidad de la tarea: el diseño o la persona usuaria?",
    verdict: "cumple",
    finding: "La absorbe mayormente el diseño: al personalizar una Whopper, la app asume por defecto los ingredientes del combo estándar y solo pide intervención puntual (quitar pepinillos, agregar queso).",
    shot: { file: "leyes-05-tesler-personalizar.png", caption: "Pantalla de personalización de la Whopper (agregar/quitar ingredientes)." }
  },
  {
    id: "peak-end",
    category: "Memoria y motivación",
    name: "Regla Peak-End",
    quote: "Se recuerda el pico emocional y el final de la experiencia, no el promedio.",
    question: "¿Cómo es el cierre del flujo (confirmación, error, pantalla de éxito)?",
    verdict: "rompe",
    finding: "La pantalla final (“Pedido confirmado” / “Listo para retirar”) es el cierre de la experiencia: si aparece débil, lenta o poco clara, empaña el recuerdo de un recorrido que hasta ahí fue fluido.",
    shot: { file: "leyes-06-peakend-confirmacion.png", caption: "Pantalla final de confirmación del pedido." }
  },
  {
    id: "jakob",
    category: "Consistencia y robustez",
    name: "Ley de Jakob",
    quote: "Los usuarios esperan que un producto funcione como los que ya conocen.",
    question: "¿Sigue las convenciones de su categoría o plataforma, o exige aprender un patrón nuevo?",
    verdict: "cumple",
    finding: "Sí: el carrito se ubica arriba a la derecha con el ícono universal de bolsa, igual que en la mayoría de las apps de delivery y e-commerce, sin exigir aprender un patrón nuevo.",
    shot: { file: "leyes-07-jakob-carrito.png", caption: "Encabezado de la app mostrando el ícono de carrito arriba a la derecha." }
  },
  {
    id: "doherty",
    category: "Consistencia y robustez",
    name: "Umbral de Doherty",
    quote: "Responder en menos de 400 ms mantiene la productividad y la atención.",
    question: "¿Hay feedback inmediato ante cada acción (loading, skeleton, estado de carga)?",
    verdict: "rompe",
    finding: "No siempre: al confirmar el pago o aplicar un cupón, la falta de un indicador de carga inmediato deja al usuario sin saber si el toque se registró, con riesgo de que lo repita y duplique el pedido.",
    shot: { file: "leyes-08-doherty-carga-pago.png", caption: "Momento de confirmar el pago, mostrando (o no) un indicador de carga." }
  },
  {
    id: "estetica",
    category: "Percepción y jerarquía visual",
    name: "Efecto Estética-Usabilidad",
    quote: "Un diseño lindo se percibe como más usable, aunque no lo sea.",
    question: "¿La estética general está “comprando” tolerancia a fricciones reales de uso?",
    verdict: "rompe",
    finding: "Sí: las fotos grandes y apetitosas de los combos generan una buena primera impresión que puede tapar fricciones reales del flujo, como pasos de más o promociones intercaladas antes del pago.",
    shot: { file: "leyes-09-estetica-catalogo.png", caption: "Catálogo de combos con fotografías grandes de producto." }
  },
  {
    id: "pareto",
    category: "Priorización",
    name: "Principio de Pareto",
    quote: "En muchos sistemas, el 80% del efecto proviene del 20% de las causas.",
    question: "¿El diseño prioriza visual y funcionalmente las tareas más usadas por la mayoría?",
    verdict: "rompe",
    finding: "No: la pantalla de inicio abre con dos banners grandes —una promo de la línea “King's Selection” y un cartel para activar la geolocalización— y no con accesos directos a “Pedir de nuevo” ni a los combos más pedidos. El espacio más valioso de la pantalla se usa para marketing genérico en vez de priorizar la tarea que la mayoría de las personas usuarias repite en cada visita.",
    shot: { file: "leyes-10-pareto-banners-promocionales.png", caption: "Pantalla de inicio con los banners promocionales (King's Selection y geolocalización) por sobre accesos directos a pedidos frecuentes." }
  }
];

const NIELSEN = [
  {
    id: "n1",
    n: 1,
    name: "Visibilidad del estado del sistema",
    def: "El sistema debe informar a los usuarios del estado del sistema, dando una retroalimentación apropiada en un tiempo razonable.",
    severity: 1,
    priority: false,
    finding: "Burger King brinda feedback durante las distintas etapas del pedido y permite reconocer el avance del proceso (por ejemplo, el estado “En preparación” / “Listo para retirar”). Sin embargo, algunas confirmaciones intermedias — como aplicar un cupón o guardar una dirección — no dejan suficientemente claro si la acción ya se ejecutó o todavía requiere una nueva confirmación.",
    impact: "La persona usuaria queda con una duda puntual sobre si su acción se registró, lo que puede llevarla a repetir el toque o a desconfiar del paso siguiente.",
    shot: { file: "nielsen-01-confirmacion-intermedia.png", caption: "Pantalla de confirmación intermedia del pedido." }
  },
  {
    id: "n2",
    n: 2,
    name: "Relación entre el sistema y el mundo real",
    def: "El sistema debe utilizar el lenguaje de los usuarios, con metáforas, palabras o frases conocidas, en lugar de términos internos del sistema.",
    severity: 2,
    priority: true,
    finding: "La app utiliza términos familiares para hacer un pedido, pero incorpora conceptos propios de la marca como “Coronas” y “Canjes” sin suficiente contexto. Para usuarios nuevos no queda claro qué significan, cómo se obtienen ni qué beneficio ofrecen.",
    impact: "Un usuario nuevo puede ignorar o desconfiar del programa de fidelización directamente, perdiendo beneficios por no entender cómo funciona.",
    shot: { file: "nielsen-02-mibk-coronas.png", caption: "Pantalla de Mi BK / Coronas / Canjes." }
  },
  {
    id: "n3",
    n: 3,
    name: "Control y libertad para el usuario",
    def: "Los usuarios necesitan una “salida de emergencia” claramente marcada para dejar un estado no deseado sin tener que pasar por un proceso extenso.",
    severity: 1,
    priority: false,
    finding: "El usuario puede volver atrás, modificar productos y revisar el carrito antes de confirmar el pedido. Sin embargo, cambiar una decisión tomada varios pasos antes (por ejemplo la sucursal) puede implicar retroceder todo el flujo y repetir pasos ya completados.",
    impact: "Aumenta el tiempo y el esfuerzo percibido para corregir un error de selección temprano, lo que puede frustrar a quien solo quiere cambiar un dato puntual.",
    shot: { file: "nielsen-03-carrito-modificar.png", caption: "Carrito o pantalla donde se puede volver/modificar el pedido." }
  },
  {
    id: "n4",
    n: 4,
    name: "Consistencia y estándares",
    def: "Los usuarios no deberían tener que preguntarse si palabras, situaciones o acciones distintas significan lo mismo. Hay que seguir las convenciones de la plataforma.",
    severity: 0,
    priority: false,
    finding: "La aplicación sigue patrones habituales de las apps de pedidos, como el uso de carrito, categorías y navegación mediante botones reconocibles. Las acciones mantienen una lógica consistente durante todo el recorrido: no se relevó una inconsistencia concreta en las pantallas analizadas, por lo que la heurística se da por cumplida.",
    impact: "Al reconocer patrones ya conocidos de otras apps, la persona usuaria no necesita aprender nada nuevo y navega con confianza desde el primer uso.",
    shot: { file: "nielsen-04-consistencia-navegacion.png", caption: "Cualquier pantalla del flujo principal, para verificar consistencia de patrones." }
  },
  {
    id: "n5",
    n: 5,
    name: "Prevención de errores",
    def: "Es mejor prevenir la aparición de errores que generar buenos mensajes de error. Hay que eliminar las condiciones propensas a error.",
    severity: 0,
    priority: false,
    finding: "La sucursal se define desde el principio del recorrido —antes de armar el pedido— y cada paso siguiente se va verificando contra esa selección (disponibilidad de productos, modo de entrega), en vez de dejar que el usuario avance y se encuentre con una restricción recién al pagar. No se relevó un caso concreto donde el sistema deje avanzar hacia un error evitable.",
    impact: "Al confirmar la disponibilidad desde el inicio, la persona usuaria arma su pedido con la certeza de que lo va a poder completar, sin riesgo de perder el trabajo hecho ni el tiempo invertido.",
    shot: { file: "nielsen-05-seleccion-sucursal.png", caption: "Selección de sucursal al inicio del flujo, antes de armar el pedido." }
  },
  {
    id: "n6",
    n: 6,
    name: "Reconocer antes que recordar",
    def: "Minimizar la carga de memoria del usuario haciendo visibles los objetos, acciones y opciones en pantalla.",
    severity: 2,
    priority: false,
    finding: "Aunque las opciones principales permanecen visibles durante el pedido, cierta información seleccionada previamente (como la sucursal o el modo de entrega) no siempre tiene suficiente presencia durante todo el recorrido, obligando al usuario a recordar una decisión tomada pantallas atrás.",
    impact: "El usuario puede terminar completando el pago sin estar seguro de en qué sucursal o modalidad quedó su pedido, generando ansiedad o pedidos mal configurados.",
    shot: { file: "nielsen-06-info-no-visible.png", caption: "Pantalla avanzada del flujo donde no queda visible la sucursal/ubicación elegida." }
  },
  {
    id: "n7",
    n: 7,
    name: "Flexibilidad y eficiencia de uso",
    def: "Los aceleradores — invisibles para el usuario novato — permiten al usuario experto aumentar la velocidad de interacción.",
    severity: 2,
    priority: true,
    finding: "La app permite completar correctamente un pedido, pero ofrece pocos atajos para usuarios frecuentes: no guardar los datos de la tarjeta obliga a volver a ingresarlos en cada compra, aumentando el esfuerzo en lugar de acelerarlo para quien pide seguido.",
    impact: "La persona que pide seguido pierde tiempo repitiendo los mismos datos en cada compra, sin sentir que la app “la conoce” pese a ser cliente habitual.",
    shot: { file: "nielsen-07-pantalla-pago.png", caption: "Pantalla de pago." }
  },
  {
    id: "n8",
    n: 8,
    name: "Diseño estético y minimalista",
    def: "Las pantallas no deben contener información irrelevante o que se necesita rara vez, porque compite con la información importante y disminuye su visibilidad relativa.",
    severity: 2,
    priority: true,
    finding: "Durante el proceso aparecen promociones, sugerencias y confirmaciones que compiten con la acción principal de completar el pedido. Reducir estos elementos secundarios permitiría jerarquizar mejor la información necesaria para avanzar hacia el pago.",
    impact: "Aumenta el riesgo de que la persona usuaria abandone la compra a mitad de camino, o termine agregando un gasto no planeado por la insistencia de las promos.",
    shot: { file: "nielsen-08-promocion-flujo.png", caption: "Pantalla donde aparece una sugerencia/promoción durante el flujo." }
  },
  {
    id: "n9",
    n: 9,
    name: "Reconocer, diagnosticar y recuperarse de los errores",
    def: "Los mensajes de error deben expresarse en lenguaje claro (sin códigos), indicar con precisión el problema y sugerir una solución constructiva.",
    severity: 2,
    priority: false,
    finding: "La aplicación ofrece mensajes frente a ciertos problemas, pero no siempre indican de forma clara qué ocurrió y cómo solucionarlo. Un mensaje de error útil no solo debe informar que algo falló, sino orientar al usuario sobre el siguiente paso a seguir.",
    impact: "Frente a un mensaje de error poco claro, la persona usuaria puede quedarse sin saber qué hacer y abandonar el pedido en lugar de reintentarlo.",
    shot: { file: "nielsen-09-pantalla-error.png", caption: "Pantalla de error encontrada durante las pruebas (pago, stock, etc.)." }
  },
  {
    id: "n10",
    n: 10,
    name: "Ayuda y documentación",
    def: "La documentación debe ser fácil de buscar, estar centrada en las tareas del usuario, listar pasos concretos y no ser demasiado extensa.",
    severity: 2,
    priority: true,
    finding: "Existe asistencia dentro de la aplicación, pero algunas funciones necesitan ayuda contextual. En “Mi BK”, por ejemplo, una explicación breve sobre qué son las Coronas, cómo se obtienen y cómo funcionan los Canjes reduciría la necesidad de buscar información fuera de la app.",
    impact: "La persona usuaria puede terminar sin usar los beneficios del programa de fidelización simplemente por no entender cómo funciona, aun siendo cliente frecuente.",
    shot: { file: "nielsen-10-ayuda-mibk.png", caption: "Sección de Mi BK o de ayuda." }
  }
];
