import { Base, BaseType } from "../core/extends/base.js";
import { Container } from "./containter.js";

type TextInputType = {
    title: string
    placeholder: string
    type: "email" | "password" | "text"
}

export class TextInput extends Base {
    declare protected _element: HTMLInputElement;

    constructor({style, title, placeholder, type, parent, children}: Partial<BaseType & TextInputType>) {
        super({style, children, type: title ? "div" : "input"});
        if (type) this._element.type = type;
        if (title && placeholder) {
            this._element.style.display = "flex";
            this._element.style.flexDirection = "column"
            const textInput = document.createElement("input");
            textInput.placeholder = placeholder;
            const label = document.createElement("label");
            textInput.id = title;
            label.textContent = title;
            label.htmlFor = textInput.id;
            this._element.appendChild(label);
            this._element.appendChild(textInput);
        } else {
            if (placeholder) this._element.placeholder = placeholder;
        }
    }
}