# Fractacron

![Logo](logo.png)

Es una librería que unifica el Desarrollo Web para ser desarrollado unicamente con TypeScript. Logrando hacer aplicaciones funcionales, seguras, simples y escalables.

## Instalacion

```bash
npm install fractacron
```

>`Nota:` La documentacion disponible, se ha creado con fines de tener una referncia de la redaccion y estructura de la documentacion. Se creara una documentacion completa y mas detallada mas adelante.

## Crear proyecto ( WIP )

Para crear un proyecto ( de momento simplemente la estructura base de uno ), se debe de ejecutar el siguiente comando:

```bash
npx fractacron-cli init <nombre-del-proyecto>
```

Esto basicamente crea la estructura escencial del proyecto, tales como:

```bash

src/
├── public/
├── assets/
├── src/
│   ├── pages/
│   ├── components/
│   └── index.ts
```

De momento no crea ninguna page, componente y nisiquiera el index.html. Se tiene planteado agregar eso el futuro. De momento el index.html unicamente contiene en su body el `script.ts`.

## Running ( WIP )

Para ejecutar el proyecto, se debe de ejecutar el siguiente comando:

```bash
npm run dev
```

Basicamente este comando inicia una instancia de vite ( no viene instalado de fabrica de momento hasta completar las funciones escenciales de fractacron-cli ), lo que permite que se pueda desarrollar con hot reaload.