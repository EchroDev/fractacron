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
    title: string;
    value: string = "";

    constructor(children: Base | Base[])
    constructor(children: Base | Base[], title: string)
    constructor(children: Base | Base[], title: string, options: Partial<BaseType & TextInputType>)

    constructor(children?: Base | Base[], title?: string, options?: Partial<BaseType & TextInputType>) {
        super(children || [], { ...options, type: title ? "div" : "input" });
        if (options?.type) this._element.type = options.type;
        this.title = title || "";
        if (title && options?.placeholder) {
            this._element.style.display = "flex";
            this._element.style.flexDirection = "column";
            const textInput = document.createElement("input");
            textInput.placeholder = options.placeholder;
            textInput.addEventListener("input", () => this.value = textInput.value);
            const label = document.createElement("label");
            textInput.id = title;
            label.textContent = title;
            label.htmlFor = textInput.id;
            this._element.appendChild(label);
            this._element.appendChild(textInput);
        } else {
            if (options?.placeholder) this._element.placeholder = options.placeholder;
            this._element.addEventListener("input", () => this.value = this._element.value);
        }
        if (options?.signals?.onContentChange) this.onContentChange(options.signals.onContentChange);
    }

    onContentChange(func: () => void) {
        this._element.addEventListener("input", func);
        return this;
    }
}