# Tutorial: Counter Button

## Introduccion
En este tutorial, aprenderas a crear un boton el cual incrementara el valor de un texto cada vez que se le haga click.

## ¿Que aprenderas?
- Aprenderas a crear e instanciar una pagina.
- Aprenderas a crear un boton y configurarlo de forma basica.
- Aprenderas a crear un click handler en un boton.
- Aprenderas a instanciar texto.
- Aprenderas a crear valores dinamicos con Value<>().

## Tutorial
### Paso 1: Instanciar archivo y pagina.
En este paso, aprenderas a crear un archivo para tu pagina, y se te explicara donde crear ese archivo y configurar de manera basica tu pagina.

>Debes de crear una carpeta `pages` dentro de tu carpeta `src`, dentro de esa carpeta crea un archivo para tu pagina, usualmente llamado `page.ts`.

Dentro de ese archivo `page.ts` debes de importar `fractacron` e instanciar una pagina de tipo `Page`, como se muestra a continuacion.

```typescript
import { Page } from "fractacron";

const page = new Page({
    title: "Main",
});
```

Esta es una pagina basica. Basicamente se debe de crear un objeto tipo `Page`, ese mismo recibe un tipo `options` en el cual se pueden establecer parametros. El parametro mas basico es el de title, el cual tiene un valor de Main. Al crear un objeto de tipo `Page`, inmediatamente se crea la pagina y sus configuraciones.

### Paso 2: Crear un texto con un valor dinamico.
En este paso, aprenderas a instanciar un texto de manera basica. Al cual de contenido le vas a asignar un valor dinamico gracias a la clase `Value`, la cual permite que al cambiar de valor, se cambie el valor del texto de forma automatica.

Primero debemos de importar `Label` y `Value` de `fractacron`. Por lo tanto se debe de modificar la primera linea de codigo de esta manera:

```typescript
import { Page, Label, Value } from "fractacron";
```

Una vez importados, ahora es momento de crear el valor dinamico. Este mismo es un objeto de tipo `Value`, la cual tiene una propiedad en la cual se puede obtener un valor. Pero es que ademas, este mismo objeto se puede anclar a un texto, para que cuando cambie el valor del `Value`, se cambiara el valor del texto en pantalla de forma automatica.

De esta manera se instancia un valor dinamico de tipo numero

```typescript
const value = new Value<number>();
```
Ahora mismo, este valor no esta asignado a absolutamente nada, solamente esta instanciado. Por lo tanto lo siguiente seria crear el texto el cual se anclara a este `Value` que acabamos de crear.

Para poder instanciar un Label y ademas anclarlo al value, debemos de crear un Label dentro de la pagina y a su contenido le asignamos el value que acabamos de crear. Otra forma de hacerlo es crear una variable que refiera al `Label` y asignarselo al value.

```typescript
import { Page, Label, Value } from "fractacron";

const value = new Value<number>();

const page = new Page({
    title: "Main",
    children: new Label({ content: value })
});
```

De esta manera, solamente con asignarle a la propiedad content el objeto value, ya esta anclado a ese texto para ser modificado de forma automatica.

### Paso 3: Crear un boton a la par del Label
En este paso aprenderas a instanciar un boton y como poder instanciar 2 elementos en un mismo children. Para esto debes de instanciar una clase del tipo `Button` de `fractacron`.

```typescript
import { Page, Label, Value, Button } from "fractacron";
```
Una vez hecho eso, ahora debemos de instanciar un Boton. Pero te preguntaras, ¿Como se pueden instanciar 2 elementos en el campo de children de `Page`? La respuesta es muy simple, se crea un Array de elementos, tal y como se mostrara a continuacion:
```typescript
import { Page, Label, Value, Button } from "fractacron";

const value = new Value<number>();

const page = new Page({
    title: "Main",
    children: [
        new Label({ content: value }),
        new Button({ content: "Click me" })
    ]
});
```
Con esto, ahora tenemos un boton en el cual su contenido es "Click me".
>Dato: El parametro content de Button, tambien puede recibir un value al igual que el Label.

### Paso 4: Crear evento `onClick` del boton y modificar `Value`
En este paso aprenderas a crear un handle para el click de un boton mediante el metodo `onClick`. Y ademas, aprenderas a modificar el `Value` creado anteriormente.

Como habras notado, el boton de momento existe y ya. No tiene ninguna funcion, y por eso mismo hay que asignarle un `onClick`. A continuacion se proporcionaran dos formas de hacer esto y sus diferencias.

#### Forma 1: `onClick` en el options del `Button`
En esta forma, se puede asignar el onClick mediante el parametro de options. En este caso `onClick` se encuentra dentro de `signals`, y se puede establecer en este mismo campo.

Y para poder asignar la funcion que queremos que haga el boton, se le asigna a onClick una funcion sin retorno en la cual vamos a referenciar a nuestro value y usaremos el metodo `changeValue` para cambiar el valor de nuestro value, que a la vez causara que el texto cambie de valor.

```typescript
import { Page, Label, Value, Button } from "fractacron";

const value = new Value<number>();

const page = new Page({
    title: "Main",
    children: [
        new Label({ content: value }),
        new Button({
            content: "Click me",
            signals: {
                onClick: () => {
                    value.setContent(value.content + 1);
                }
            }
        })
    ]
});
```

>Ventaja: Poder instanciar el onClick de manera instantanea en las configuraciones del boton.

>Desventaja: En el futuro, cuando se usen referencias, no se podran modificar propiedades del boton en si.

>Uso recomendado: Cuando se necesita una funcion rapida para el handle, para cosas mas avanzadas es mejor la `Forma 2`.

#### Forma 2: `onClick` mediante method chaining
En esta forma, en vez de usar el parametro de options, usaremos un metodo llamado `onClick `del propio boton el cual se concatena con el propio objeto.

Y para poder asignar la funcion que queremos que haga el boton, se le asigna a onClick una funcion sin retorno en la cual vamos a referenciar a nuestro value y usaremos el metodo `changeValue` para cambiar el valor de nuestro value, que a la vez causara que el texto cambie de valor.

```typescript
import { Page, Label, Value, Button } from "fractacron";

const value = new Value<number>();

const page = new Page({
    title: "Main",
    children: [
        new Label({ content: value }),
        new Button({
            content: "Click me"
        }).onClick(() => {
            value.setContnet(value.content + 1);
        })
    ]
});
```

>Ventaja: Poder usar referencias en el futuro, ya que no estamos limitados a los parametros de `Button`.

>Desventaja: Un poco mas de codigo a escribir.

>Uso recomendado: Para la mayoria de los casos es mas recomendable esta forma.