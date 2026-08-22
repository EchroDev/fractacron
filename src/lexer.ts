import { Token } from "./token";
import { TokenType } from "./token_type";
import { readFile } from "node:fs/promises";

export default class Lexer {
    tokens: Token[] = [];
    private codeChars: string[] = [];

    // Tag flags
    private inOpenTag: boolean = false;
    private readyCurrentTag: boolean = false;
    private canReadContent: boolean = false;

    // Attribute flags
    private inAttributeValue: boolean = false;
    private checkingAttributeValue: boolean = false;

    private currentTag: string = "";

    async init(srcPath: string, fileName: string) {
        try {
            const code = await readFile(`${srcPath}/${fileName}.fractacron`, "utf-8");
            this.codeChars = code.split("");

            while (this.codeChars.length > 0) {
                // Se abre un tag y por defecto detecta que es inicial
                if (this.codeChars[0] === "<") {
                    this.checkOpenTag();
                }

                // Si se reconoce esto, no es un tag inicial, si no, uno de cierre
                else if (this.codeChars[0] === "/") {
                    this.inOpenTag = false;
                }

                // En este caso si hay un OpenTag, y aun no se habia declarado el tipo de tag pero hay un espacio, se declara el currentTag.
                else if (this.codeChars[0] === " " && !this.readyCurrentTag && this.inOpenTag) {
                    this.declareTagInOpenTag();
                }

                // Esto indica el cierre de Tag, dependiendo si estaba abierto o cerrado se reconoera su tipo. En el caso del de open, solo se guarda un nuevo token si no se declaro antes currentTag
                else if (this.codeChars[0] === ">") {
                    this.checkCloseTag();
                }

                // Se hacen las verificaciones de atributo
                else if (this.inOpenTag && this.readyCurrentTag) {
                    this.checkAttribute();
                }

                // Si no es ningun caracter basura, se le añade a currentTag un caracter.
                else if (this.codeChars[0] !== "\n" && this.codeChars[0] !== " " && this.codeChars[0] !== "\t" && this.codeChars[0] !== "\r") this.currentTag += this.codeChars[0];
                this.codeChars.shift();
            }
            console.log(this.tokens);
        } catch (err) {
            throw new Error("There was an error while reading the file");
        }
    }

    // Se encarga de verificar name y value de los atributos
    private checkAttribute() {
        if (this.codeChars[0] === "=" && this.inOpenTag && this.readyCurrentTag) {
            this.tokens.push({ content: this.currentTag, type: TokenType.AttributeName });
            this.currentTag = "";
            this.inAttributeValue = true;
        }

        else if (this.codeChars[0] === '"') {
            if (this.inAttributeValue && this.checkingAttributeValue) {
                this.tokens.push({ content: this.currentTag, type: TokenType.AttributeValue });
                this.currentTag = "";
            }
            this.checkingAttributeValue = !this.checkingAttributeValue;
        }

        // Si no es ningun caracter basura, se le añade a currentTag un caracter.
        else if (this.codeChars[0] !== "\n" && (this.codeChars[0] !== " " || this.checkingAttributeValue) && this.codeChars[0] !== "\t" && this.codeChars[0] !== "\r") this.currentTag += this.codeChars[0];
    }

    // Se encarga de declarar tagOpen y ademas verificar si se debe de agregar un content
    private checkOpenTag() {
        if (this.canReadContent && this.currentTag.trim() !== "") {
            this.tokens.push({ content: this.currentTag, type: TokenType.Content });
            this.currentTag = "";
            this.canReadContent = false;
        }
        this.inOpenTag = true;
    }

    // Se encarga de declarar un token TagOpen ( su unico uso en el init es cuando no se declaro un type pero se va a continuar en openTag ej: <div     >)
    private declareTagInOpenTag() {
        this.readyCurrentTag = true;
        this.tokens.push({ content: this.currentTag, type: TokenType.TagOpen });
        this.currentTag = "";
    }

    // Se encarga de verificar tagClose ( > ), y comprobar si se trata de un Type TagClose o si se esta cerrando un TagOpen en el cual no se habia declarado el tipo antes
    private checkCloseTag() {
        if (!this.inOpenTag) {
            this.tokens.push({ content: this.currentTag, type: TokenType.TagClose });
            this.currentTag = "";
        } else if (this.inOpenTag) {
            if (!this.readyCurrentTag) {
                this.tokens.push({ content: this.currentTag, type: TokenType.TagOpen });
                this.currentTag = "";
            } else {
                if (this.currentTag !== "") {
                    this.tokens.push({ content: this.currentTag, type: TokenType.Null });
                    this.currentTag = "";
                }
                this.readyCurrentTag = false;
            }
            this.inOpenTag = false;
            this.canReadContent = true;
        }
    }
}