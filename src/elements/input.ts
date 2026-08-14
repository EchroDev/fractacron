import { BaseType } from "../core/extends/base.js";
import { Base } from "../core/extends/base.js";
import { InputType } from "../types/input.type.js";

export abstract class Input extends Base {
    declare protected _element: HTMLInputElement;
    declare protected _inputElement: HTMLInputElement;
    title: string;
    value: string = "";

    constructor(children?: Base | Base[], title?: string, options?: Partial<BaseType & InputType>, type?: "text" | "email" | "password" | "range") {
        super(children || [], { ...options, type: title ? "div" : "input" });
        this._element.type = type!;
        this.title = title || "";
        if (title) {
            this._element.style.display = "flex";
            this._element.style.flexDirection = "column";
            const input = document.createElement("input");
            this._inputElement = input;
            input.type = type!
            input.addEventListener("input", () => this.value = input.value);
            const label = document.createElement("label");
            input.id = title;
            label.textContent = title;
            label.htmlFor = input.id;
            this._element.appendChild(label);
            this._element.appendChild(input);
        } else {
            this._inputElement = this._element;
            this._element.addEventListener("input", () => this.value = this._element.value);
        }
    }
}