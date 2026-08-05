# Getting Started

## Instalacion

```bash
npm i fractacron
```

## Hola mundo!

Se establece un parametro global en `Application` que establece un prefix para el titulo de todas las `Paginas`

```typescript
import { Application, Page, Label } from "fractacron";

Application.settings({
    titlePrefix: "Hola mundo | "
});
```

Se crea una `Page`, se le establece de titulo `"Main"` y se le envia un `Label` como hijo el cual es un elemento independiente de la pagina.

```typescript
import { Application, Page, Label } from "fractacron";

Application.settings({
    titlePrefix: "Hola mundo | "
});

const page = new Page({
    title: "Main",
    children: new Label({ content: "Hola, mundo! "})
});
```

De esta manera se obtiene una pagina que unicamente tiene un Hola, mundo! basico y que ademas tiene las minimas configuraciones.

## Estructura basica de proyecto
Esta estructura es el estandar para esta libreria, ya que es la que mas se adapta a la modalidad de desarrollo de esta misma.

```
public/
├── file.pdf
assets/
├── images/
│   └── logo.png
src/
├── main.ts
├── pages/
│   └── page.ts
└── components/
    └── card.ts
```

>- `public/`: Es la carpeta en la cual se guardan los archivos a los cuales se pueda acceder mediante url (documentos, imagenes, etc).
>- `assets/`: Es la carpeta en la cual se guardan los archivos que se utilizan en la aplicacion, de los cuales no serian accesibles mediante url.
>- `main.ts`: Es el archivo principal de la aplicacion, usualmente donde estaran los settings de `Application`.
>- `src/`: Es la carpeta en la cual se guardan los archivos de la aplicacion.
>- `src/pages/`: Es la carpeta en la cual se guardan las paginas de la aplicacion.
>- `src/components/`: Es la carpeta en la cual se guardan los componentes de la aplicacion.
