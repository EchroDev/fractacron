import { Application } from "../core/application.js";
import { Base, BaseType } from "../core/extends/base.js";
import { Button } from "./button.js";
import { TextInput } from "./text_input.js";

// FORM ESTA EN UNA FASE MUY TEMPRANA!!!
// TODO PODRIA CAMBIAR DRASTICAMENTE EL DIA DE MAÑANA
// DIRIA QUE FORM ES EL ELEMENTO MAS DIFICIL DE HACER
// NO LO USEN EN SUS APPS TODAVIA
// NO SIRVE

export type FormOptions = Partial<BaseType & {
    method: "GET" | "POST" | "DELETE" | "PUT"
}>;

export class Form extends Base {
    declare protected _element: HTMLFormElement;
    public route: string;
    public method: "GET" | "POST" | "DELETE" | "PUT";
    public body: Map<string, string> = new Map();
    bodyChildren: TextInput[] = [];
    private _children: Base | Base[];

    constructor(children: Base | Base[])
    constructor(children: Base | Base[], route: string)
    constructor(children: Base | Base[], route: string, options: FormOptions)

    constructor(children?: Base | Base[], route?: string, options?: FormOptions) {
        super(children || [], { ...options, type: "form" });
        this._children = children || [];
        this.route = route || "";
        this.method = options?.method || "GET";

        if (children instanceof TextInput) {
            this.bodyChildren.push(children);
        } else if (Array.isArray(children)) {
            children.forEach((child) => {
                if (child instanceof TextInput) {
                    this.bodyChildren.push(child);
                }
            })
        }

        this._element.addEventListener("submit", async (event: SubmitEvent) => {
            event.preventDefault();
            this.bodyChildren.forEach((bodyChild) => {
                this.body.set(bodyChild.title, bodyChild.value);
            })
            await fetch(`${Application.backendUrl}${this.route}`, {
                method: this.method,
                body: JSON.stringify(this.body)
            });
        })
    }
}
