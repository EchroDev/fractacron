import { ASTNode, Attribute, Program, Tag } from "./ast";
import { Token } from "./token";
import { TokenType } from "./token_type";

export default class Parser {

    // Valores repetitivos y de forma abstracta
    program: Program = { kind: "Program", body: [] };
    private currentTag: Tag | undefined = undefined;
    private currentTagId: number = 0;

    constructor(private tokens: Token[]) {
        while (this.tokens.length > 0) {
            this.parse();
        }
        console.dir(this.program, { depth: null });
    }

    private parse() {
        const body = this.program.body;

        switch (this.tokens[0]!.type) {

            // En caso de que se abra un Tag, se crea en el body un tag
            case TokenType.TagOpen:

                // En el caso en el que se este analizando un Tag, se le añadira de children un nuevo Tag y sera el nuevo currentTag
                if (this.currentTag) {
                    (this.currentTag as Tag).children.push({ kind: "Tag", type: this.tokens.shift()!.content, attributes: [], children: [], content: "", parent: this.currentTag, id: this.currentTagId++ } as Tag);
                    this.currentTag = (this.currentTag as Tag).children[(this.currentTag as Tag).children.length - 1] as Tag;
                } else {
                    body.push({ kind: "Tag", type: this.tokens.shift()!.content, attributes: [], children: [], content: "", parent: this.program, id: this.currentTagId++ } as Tag);
                    this.currentTag = body[body.length - 1] as Tag;
                }
                break;

            // En caso de que se encuentre un nombre de atributo, se accede al Tag que se esta analizando y se le añade un atributo
            case TokenType.AttributeName:
                this.currentTag!.attributes.push({ name: this.tokens.shift()!.content, value: "", kind: "Attribute" } as Attribute);
                break;

            // En caso de que se encuentre un valor de atributo, se accede al Tag que se esta analizando y se le añade un valor al atributo
            case TokenType.AttributeValue:
                const attributes = this.currentTag!.attributes;
                attributes[attributes.length - 1]!.value = this.tokens.shift()!.content;
                break;

            // En caso de que se encuentre un contenido, se accede al Tag que se esta analizando y se le añade un content
            case TokenType.Content:
                this.currentTag!.content = this.tokens.shift()!.content;
                break;

            // En caso de que se encuentre con un TagClose, significara que currentTag ahora sera el padre del elemento que se estaba analizando
            case TokenType.TagClose:

                // En el caso de que el padre del tag de ahora sea otro Tag, currentTag se reasigna
                if (this.currentTag?.parent.kind === "Tag") {
                    this.currentTag = this.currentTag!.parent as Tag;
                }

                // En cambio, si el padre del tag de ahora es un Program, significa que su padre es la raiz, lo cual no pertenece a un Tag. Por lo tanto currentTag se vacia
                else {
                    this.currentTag = undefined;
                }
                this.tokens.shift();
                break;

            // En el caso el que no se encuentre un token valido, se lanza un error
            default:
                throw new Error("Unexpected token");
        }
    }
}