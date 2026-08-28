/* Contenido de los dos tableros. Cada objeto "shot" define el nombre de archivo
   esperado dentro de /screenshots — al agregar la imagen real con ese nombre,
   el tablero la muestra automáticamente en lugar del casillero vacío. */

const LEYES_UX = [
  {
    id: "hick",
    name: "Ley de Hick",
    quote: "El tiempo que se tarda en tomar una decisión aumenta a medida que se incrementa el número de alternativas.",
    author: "William E. Hick",
    verdict: "cumple",
    finding: "Los tótems de autoservicio y la app agrupan el menú por categorías claras (Combos, Hamburguesas de Carne, Pollo, Postres, Bebidas) en lugar de mostrar más de 50 productos juntos, reduciendo el tiempo de decisión frente a un catálogo tan amplio.",
    shot: { file: "leyes-01-hick-menu-categorias.png", caption: "Menú principal del tótem/app mostrando las categorías del catálogo." }
  },
  {
    id: "fitts",
    name: "Ley de Fitts",
    quote: "El tiempo necesario para alcanzar un objetivo con un movimiento rápido depende del tamaño de dicho objetivo y de la distancia que hay que recorrer hasta él.",
    author: "Paul Fitts, 1954",
    verdict: "cumple",
    finding: "El botón principal de “Añadir al carrito” o “Pagar” ocupa todo el ancho inferior de la pantalla en el tótem y en la app, facilitando tocarlo rápido y sin puntería fina.",
    shot: { file: "leyes-02-fitts-boton-pagar.png", caption: "Pantalla con el botón de Pagar/Añadir al carrito a todo el ancho inferior." }
  },
  {
    id: "jakob",
    name: "Ley de Jakob",
    quote: "Los usuarios esperan que las interfaces se comporten de manera predecible, similar a otras aplicaciones y sitios web que ya han utilizado.",
    author: "Jakob Nielsen",
    verdict: "cumple",
    finding: "La app ubica el carrito de compras en la esquina superior derecha con el ícono universal de bolsa/carrito, igual que la mayoría de las apps de delivery y e-commerce, por lo que no exige aprendizaje adicional.",
    shot: { file: "leyes-03-jakob-carrito.png", caption: "Encabezado de la app mostrando el ícono de carrito arriba a la derecha." }
  },
  {
    id: "tesler",
    name: "Ley de Tesler",
    quote: "Todo proceso tiene un nivel básico de complejidad inherente que, una vez alcanzado, no se puede reducir más — solo se puede mover de un lado a otro.",
    author: "Larry Tesler",
    verdict: "cumple",
    finding: "Al personalizar una Whopper (quitar pepinillos, agregar queso), la interfaz asume por defecto los ingredientes del combo estándar y deja los extras como opcionales, moviendo la complejidad de \"elegir todo\" a \"modificar solo lo que se quiere cambiar\".",
    shot: { file: "leyes-04-tesler-personalizar.png", caption: "Pantalla de personalización de la Whopper (agregar/quitar ingredientes)." }
  },
  {
    id: "miller",
    name: "Ley de Miller",
    quote: "La memoria de trabajo de una persona retiene, en promedio, entre 5 y 9 elementos a la vez.",
    author: "George A. Miller",
    verdict: "cumple",
    finding: "El resumen del pedido agrupa la información en bloques (producto principal / acompañamiento / bebida) en lugar de listar cada ítem y modificador por separado, reduciendo la cantidad de unidades sueltas que el usuario debe retener antes de pagar.",
    shot: { file: "leyes-05-miller-resumen-pedido.png", caption: "Resumen del pedido agrupado por bloques antes del pago." }
  },
  {
    id: "peak-end",
    name: "Regla Peak-End",
    quote: "Las personas juzgan una experiencia principalmente por su momento más intenso y por cómo termina, más que por el promedio de todo el recorrido.",
    author: "Daniel Kahneman",
    verdict: "revisar",
    finding: "La pantalla final de confirmación (“Pedido confirmado” / “Listo para retirar”) funciona como el cierre de la experiencia de compra. Si esa pantalla es débil, lenta en aparecer o poco clara, empaña el recuerdo de un recorrido que hasta ese punto fue fluido.",
    shot: { file: "leyes-06-peakend-confirmacion.png", caption: "Pantalla final de confirmación del pedido." }
  },
  {
    id: "estetica",
    name: "Efecto Estética-Usabilidad",
    quote: "Los usuarios perciben los diseños visualmente atractivos como más fáciles de usar, aunque objetivamente no lo sean.",
    author: "Laws of UX",
    verdict: "revisar",
    finding: "Las fotos grandes y apetitosas de los combos generan una primera impresión de calidad que puede disimular fricciones reales del flujo (pasos de más, promociones intercaladas antes del pago).",
    shot: { file: "leyes-07-estetica-catalogo.png", caption: "Catálogo de combos con fotografías grandes de producto." }
  },
  {
    id: "doherty",
    name: "Umbral de Doherty",
    quote: "La productividad y el nivel de atención de una persona aumentan cuando un sistema responde en menos de 400 ms.",
    author: "Doherty & Thadani, IBM 1982",
    verdict: "revisar",
    finding: "Al confirmar el pago o aplicar un cupón, la ausencia de un indicador de carga inmediato deja al usuario sin saber si el toque se registró, con riesgo de que vuelva a tocar el botón y se dispare un pedido duplicado.",
    shot: { file: "leyes-08-doherty-carga-pago.png", caption: "Momento de confirmar el pago, mostrando (o no) un indicador de carga." }
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
    shot: { file: "nielsen-04-consistencia-navegacion.png", caption: "Cualquier pantalla del flujo principal, para verificar consistencia de patrones." }
  },
  {
    id: "n5",
    n: 5,
    name: "Prevención de errores",
    def: "Es mejor prevenir la aparición de errores que generar buenos mensajes de error. Hay que eliminar las condiciones propensas a error.",
    severity: 2,
    priority: true,
    finding: "Algunas restricciones o decisiones relevantes aparecen recién cuando el usuario ya avanzó en el recorrido. Mostrar antes información como la sucursal seleccionada, su disponibilidad o las condiciones del pedido (para consumir aquí / para llevar) permitiría prevenir errores en lugar de corregirlos después.",
    shot: { file: "nielsen-05-seleccion-sucursal.png", caption: "Selección/confirmación de sucursal." }
  },
  {
    id: "n6",
    n: 6,
    name: "Reconocer antes que recordar",
    def: "Minimizar la carga de memoria del usuario haciendo visibles los objetos, acciones y opciones en pantalla.",
    severity: 2,
    priority: false,
    finding: "Aunque las opciones principales permanecen visibles durante el pedido, cierta información seleccionada previamente (como la sucursal o el modo de entrega) no siempre tiene suficiente presencia durante todo el recorrido, obligando al usuario a recordar una decisión tomada pantallas atrás.",
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
    shot: { file: "nielsen-10-ayuda-mibk.png", caption: "Sección de Mi BK o de ayuda." }
  }
];
