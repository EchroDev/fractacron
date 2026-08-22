import { mkdir } from "node:fs/promises";
import { createWriteStream, WriteStream } from "node:fs";
import { Program, Tag } from "./ast";

export default class Transpiler {
    constructor(private program: Program) { }

    async init(srcPath: string) {

        // Crear carpeta dist e iniciar streaming de archivo
        try {
            await mkdir(`${srcPath}/dist`, { recursive: true });
        } catch {
            throw new Error("There was an error while creating the folder");
        }
        const stream = createWriteStream(`${srcPath}/dist/index.js`, { encoding: "utf-8" });

        // Recorrer todos los tags en program body para transpilarlos
        for (const rootTag of this.program.body) {
            this.transpileTag(stream, rootTag);
            stream.write(`document.body.appendChild(${String.fromCharCode(65 + rootTag.id)})\n`);
        }
        stream.end();
    }

    // La funcion transpilara un tag completo en el archivo final
    private transpileTag(stream: WriteStream, tag: Tag) {

        // Se declara la constante para el tag en el archivo final
        stream.write(`const ${String.fromCharCode(65 + tag.id)} = document.createElement("${tag.type}")\n`);

        // Si el tag tiene un content asociado, este mismo es transpilado al archivo final
        if (tag.content) {
            stream.write(`${String.fromCharCode(65 + tag.id)}.textContent = "${tag.content}"\n`);
        }

        // Se recorren todos los artibutos y se transpilan
        for (const attribute of tag.attributes) {
            stream.write(`${String.fromCharCode(65 + tag.id)}.${attribute.name} = "${attribute.value}"\n`);
        }

        // Se recorre cada child, y estos mismos al ser Tags, se usa esta misma funcion de forma recursiva. Ademas se añade el child al padre
        for (const child of tag.children) {
            this.transpileTag(stream, child);
            stream.write(`${String.fromCharCode(65 + tag.id)}.appendChild(${String.fromCharCode(65 + child.id)})\n`);
        }
    }
}