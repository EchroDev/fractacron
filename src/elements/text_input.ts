import { Base, BaseType } from "../core/extends/base.js";
import { Container } from "./containter.js";

type TextInputType = {
    title: string
    placeholder: string
    type: "email" | "password" | "text"
}

export class TextInput extends Base {
    protected declare _element: HTMLInputElement;

    constructor({style, title, placeholder, type, parent}: Partial<BaseType & TextInputType>) {
        super({style});
        this._element = document.createElement("input");
        if (type) this._element.type = type;
        if (placeholder) this._element.placeholder = placeholder;
        if (parent) {
            if (title) {
                const container = new Container({ parent, style: {flex: "column"} })
                const label = document.createElement("label");
                this._element.id = title;
                label.textContent = title;
                label.htmlFor = this._element.id;
                container.element.appendChild(label);
                container.addChild(this);
            } else this.instantiate(parent);
        }
    }
}