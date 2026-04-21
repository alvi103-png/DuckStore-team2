#Ducks Store 
DuckStore es una pagina web realizada para una empresa que necesita lanzar sus productos que concretamente son patos de plástico.

La web tiene las siguientes páginas:

Una landing page que explica el objetivo del comercio.

Una página de catálogo con todos los patitos que estan en venta con su nombre, imagen y precio.

Una página de contacto con un formulario.

Una página de detalle con un patito que contiene nombre, imagen, descripción, precio y cantidad de stock.

#Tabla de contenidos
##Diseño
###Enlaces Figma del PROTOTIPO, WIREFRAME de baja fidelidad y User Flow

Wireframe de Baja definicion
https://www.figma.com/design/UCCItoIzHXfQHgKYhSnhqj/Ducks-Store?node-id=0-1&p=f&t=xbpeuj1L7ILOoKpl-0

Prototipo wireframe de alta fidelidad
https://www.figma.com/design/UCCItoIzHXfQHgKYhSnhqj/Ducks-Store?node-id=1-2&p=f&t=xbpeuj1L7ILOoKpl-0

User Flow
https://www.figma.com/design/UCCItoIzHXfQHgKYhSnhqj/Ducks-Store?node-id=153-498&t=hahWsF5LtyAaYSBc-0

##USER HISTORIES + CRITERIOS DE ACEPTACIÓN

###User History Landing Page
### Usuario objetivo
Persona que entra por primera vez a la web sin conocer la marca.

### User Story - Landing Page 1
**Como** usuario nuevo 
**quiero** entender rápidamente qué vende la web 
**para** decidir si me interesa seguir navegando

**Criterios de aceptación 1.1:**
**Dado** que el usuario entra a la landing  
**Cuando** la página carga 
 **Entonces** debe visualizar un título claro que indique que se venden patitos de hule

**Criterios de aceptación 1.2:**

**Dado** que el usuario está en la landing 
 **Cuando** observa el contenido principal 
 **Entonces** debe ver una descripción breve del producto

**Criterios de aceptación 1.3:**

**Dado** que el usuario accede a la web 
**Cuando** visualiza la primera sección 
**Entonces** debe ver una imagen representativa del producto

 

### User Story - Landing Page 2
**Como** usuario nuevo 
**quiero** entrar al catálogo de patitos 
**para** ver los diferentes tipos de patitos que vende la web

**Criterios de aceptación 2.1:**

**Dado** que el usuario está en la landing 
 **Cuando** quiere ver los productos 
 **Entonces** debe encontrar un botón o enlace visible hacia el catálogo

 

### User Story - Landing Page 3
**Como** usuario nuevo 
**quiero** contactar 
**para** solicitar más información o realizar un pedido.

**Criterios de aceptación 3.1:**

**Dado** que el usuario está en la página de contacto
**Cuando** desea contactar 
**Entonces** debe encontrar un botón para contactar mediante correo electrónico.

### User Story - Landing Page 4
**Como** usuario nuevo 
**quiero** ver las redes sociales del vendedor
**para** recibir más información sobre la empresa y su producto.

**Criterios de aceptación 4.1:**

**Dado** que el usuario está en la landing 
**Cuando** navega por la página 
 **Entonces** debe encontrar enlaces a redes sociales visibles

**Criterios de aceptación 4.2:**

**Dado** que el usuario hace clic en una red social
**Cuando** se ejecuta la acción 
**Entonces** debe ser redirigido a la red social correspondiente....

###User History Catalog Page
**Como** usuario, **quiero** ver una página de catálogo que muestre todos los patitos en venta, incluyendo al menos la imagen, el nombre y el precio de cada uno, **para** poder explorar los productos disponibles y decidir cuáles me interesa comprar.

**Como** usuario, **quiero** ver en detalle el patito que me interesa **para** ver si me interesa comprarlo.

**Como** usuario, **quiero** salir del catálogo **para** regresar a la landing page.

**Como** usuario, **quiero** identificar cuáles son los botones **para** realizar acciones como por ejemplo ver los detalles de cada patito.

Criterios de aceptación:

Dado que el usuario se encuentra en la página del catálogo. Cuando la página carga correctamente. Entonces el usuario debe ver una cuadrícula o lista con todos los patitos disponibles. Y cada patito debe mostrarse dentro de una "card" que incluya:

Imagen del producto.

Nombre del patito.

Precio actual.

Dado que el usuario está visualizando el catálogo de patitos. Cuando el usuario hace clic en el botón "Ver detalles" de un patito específico. Entonces el sistema debe redirigir al usuario a la página de detalle de ese producto. Y el usuario debe poder ver la información ampliada del patito seleccionado.

Dado que el usuario tiene abierto el menú hamburguesa. Cuando el usuario selecciona la opción o enlace que lleva a la Landing Page. Entonces el sistema debe redirigir al usuario a la página de inicio del sitio.

Dado que el usuario tiene abierto el menú hamburguesa. Cuando el usuario selecciona la opción o enlace que lleva a la Contact page. Entonces el sistema debe redirigir al usuario a la página de contacto del sitio.

Dado que el usuario quiere identificar que elemento de la pagina es un botón. Cuando el usuario pase el ratón por encima de un botón. Entonces este botón debe cambiar el cursor y destacar como elemento interactivo.

 

###User History Detail Page
 Scenario: Visualización completa de la información del patito

**Como** usuario interesado en comprar un patito, 
**quiero** consultar una página de detalle del producto que incluya al menos su nombre, descripción, imagen, stock disponible y precio, 
**para** obtener toda la información necesaria antes de tomar una decisión de compra.

**Criterios de aceptación 1.1:**
 **Dado** que quiero comprar un patito
 **cuando** consulto la página de detalle del producto
 **entonces** comprobaré que el nombre, la descripción, la imagen, el stock y el precio están presentes
 Comprobaré que los datos son suficientes y correctos

##Estructura de la web
```



/
├── index.html                          # Página principal (Home)
├── catalog.html                        # Catalogo patitos
├── detail.html                         # Detalle patito   
├── contact.html                        # Contacto
│── assets/
│       ├── icons/                      # Iconos
│       ├── img/                        # Imágenes del proyecto
│       └── css/                        # Estilos
│          ├── catalog.css              # Estilos catalogo
│          ├── detail.css               # Estilos detalle
│          ├── reset.css                # Estilo reseteo documento
│          ├── style.css                # Estilos principales
├── .gitignore
└── README.md
```

##Presentación
###ENLACE PRESENTACIÓN CANVA

Presentacion Final
https://www.canva.com/design/DAHG_6sH_DE/GrJQfxZnITkMzsBlOfje6g/edit

##Tecnologias utilizadas
 Nuestro producto está realizado con las siguientes herramientas: 

En Figma se han realizado los wireframes de baja fidelidad (sketch) y se han importado las maquetas realizadas en alta fidelidad

En Stich se han realizado los  prototipos que se convertiran en las maquetas de alta fidelidad

En visual Code se desarrolla la web con HTML5 y CSS3.

##Autores
Nayeli C.M

Viviana Andrango

Rosa Maria Factoria F5