# List
La clase `List` permite crear listas ordenadas y desordenadas dentro del sitio web. Cada elemento hijo (`children`) asignado a la lista es envuelto automáticamente en un elemento `<li>`.

## Uso basico
```typescript
import { Page, List, Label } from "fractacron";

const page = new Page({
    title: "Main",
    children: new List({
        type: "ordered",
        children: [
            new Label({ content: "Primer elemento" }),
            new Label({ content: "Segundo elemento" })
        ]
    })
});
```
En este ejemplo de uso basico se instancia una lista ordenada (`<ol>`) con dos elementos dentro de la pagina.

## Opciones
>`List` hereda las opciones de `Base`. Las opciones de `Base` no seran mencionadas en este articulo, si no que son mencionadas en al articulo de `Base`.

### type: "ordered" | "unordered"
Esta opcion define el tipo de lista a crear. Si no se especifica, por defecto sera `"ordered"`.
- `"ordered"`: Crea un elemento de lista ordenada (`<ol>`).
- `"unordered"`: Crea un elemento de lista desordenada (`<ul>`).

```typescript
import { Page, List, Label } from "fractacron";

const page = new Page({
    title: "Main",
    children: new List({
        type: "unordered",
        children: [
            new Label({ content: "Item A" }),
            new Label({ content: "Item B" })
        ]
    })
});
```
En este caso, al especificar `type: "unordered"`, se genera una lista desordenada (`<ul>`) conteniendo los elementos proporcionados.
