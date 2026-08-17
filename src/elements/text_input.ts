import { InputType } from "../types/input.type";
import { Base, BaseType } from "../core/extends/base.js";
import { Input } from "./input.js";

type TextInputType = {
    type: "text" | "email" | "password"
    placeholder: string
    fieldStyle: string
    signals: Partial<{
        onContentChange?: () => void
    }>
} & InputType

type TextInputPreset = Partial<{
    type: "default" | "rounded" | "contrast" | "rounded-contrast" | "bordered" | "rounded-bordered"
    size: "small" | "large"
}>

export class TextInput extends Input {
    constructor(children: Base | Base[])
    constructor(children: Base | Base[], title: string)
    constructor(children: Base | Base[], title: string, preset: TextInputPreset)
    constructor(children: Base | Base[], title: string, preset: TextInputPreset, options: Partial<BaseType & TextInputType>)

    constructor(children?: Base | Base[], title?: string, preset?: TextInputPreset, options?: Partial<BaseType & TextInputType>) {
        super(children || [], title, options as Partial<BaseType & InputType>, options?.type || "text");
        if (options?.placeholder && !title) this._element.placeholder = options.placeholder;
        if (options?.signals?.onContentChange) this.onContentChange(options.signals.onContentChange);

        // Default Field Style
        this._inputElement.style.border = "4px solid";
        this._inputElement.style.borderRadius = "1.5rem";
        this._inputElement.style.padding = "0.25rem 0.75rem";
        this._inputElement.style.backgroundColor = "#ffffff";
        this._inputElement.style.fontSize = "1.25rem";

        // Default container style
        this._element.style.borderRadius = "1.5rem";
        this._element.style.padding = "0.5rem";
        this._element.style.backgroundColor = "#e5e7eb";

        if (options?.style) this.style = options.style;
        if (options?.fieldStyle) this.fieldStyle = options.fieldStyle;
    }

    onContentChange(func: () => void) {
        this._element.addEventListener("input", func);
        return this;
    }

    set fieldStyle(value: string) {
        this._inputElement.className = this._inputElement.className + " " + value;
    }
}