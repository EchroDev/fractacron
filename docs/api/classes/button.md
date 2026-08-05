# Button
La clase `Button` permite crear botones funcionales con eventos, dentro del sitio web. Este mismo tiene un contenido y se pueden crear eventos al hacer click para la interaccion del usuario.

## Uso basico
```typescript
import { Page, Button } from "fractacron";

const page = new Page({
    title: "Main",
    children: new Button({
        content: "Click me"
    }).onClick(() => {
        console.log("Hola, mundo!");
    })
});
```
En este ejemplo de uso basico se instancia un boton que dice "Click me" y al hacer click se imprime "Hola, mundo!" en la consola del navegador.

## Opciones
>`Button` hereda las opciones de `Base`. Las opciones de `Base` no seran mencionadas en este articulo, si no que son mencionadas en al articulo de `Base`.
### Signals
El objeto signals permite añadir eventos al boton. Los eventos en especifico son mencioandos a continuacion.
#### onClick: () => void
Esta opcion recibe una funcion, la cual se ejecuta cuando se haga click en el boton. Esta misma funcion no puede devolver un valor.

```typescript
import { Page, Button } from "fractacron";

const page = new Page({
    title: "Main",
    children: new Button({
        content: "Click me",
        signals: {
            onClick: () => {
                console.log("Hola, mundo!");
            }
        }
    })
});
```
En este caso, al hacer click en el boton, se imprime "Hola, mundo!" en la cosnola del navegador.
## Metodos
### onClick: () => void
Este metodo recibe una funcion, la cual se ejecuta cuando se haga click en el boton. Esta misma funcion no puede devolver un valor.

```typescript
import { Page, Button } from "fractacron";

const page = new Page({
    title: "Main",
    children: new Button({
        content: "Click me",
    }).onClick(() => {
        console.log("Hola, mundo!");
    })
});
```
En este caso, al hacer click en el boton, se imprime "Hola, mundo!" en la cosnola del navegador.