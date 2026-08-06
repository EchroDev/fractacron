import { Base, BaseType } from "../core/extends/base.js";

type TextInputType = {
    title: string
    placeholder: string
    type: "email" | "password" | "text"
    signals: Partial<{
        onContentChange?: () => void
    }>
}

export class TextInput extends Base {
    declare protected _element: HTMLInputElement;

    constructor(children: Base | Base[], { style, title, placeholder, type, parent, signals, reference }: Partial<BaseType & TextInputType>) {
        super(children, { style, type: title ? "div" : "input", parent, reference });
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
        if (signals?.onContentChange) this.onContentChange(signals.onContentChange);
    }

    onContentChange(func: () => void) {
        this._element.addEventListener("input", func);
        return this;
    }
}