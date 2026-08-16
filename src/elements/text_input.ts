import { InputType } from "../types/input.type";
import { Base, BaseType } from "../core/extends/base.js";
import { Input } from "./input.js";

type TextInputType = {
    type: "text" | "email" | "password"
    placeholder: string
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

        switch (preset?.type) {
            case "default":
                this._defaultPreset();
                break;
            case "rounded":
                this._roundedPreset();
                break;
            case "contrast":
                this._contrastPreset();
                break;
            case "rounded-contrast":
                this._contrastPreset();
                this._roundedPreset();
                break;
            case "bordered":
                this._defaultPreset();
                this._inputElement.style.border = "2px solid";
                break;
            case "rounded-bordered":
                this._roundedPreset();
                this._inputElement.style.border = "2px solid";
                break;
        }

        switch (preset?.size) {
            case "small":
                this._inputElement.style.padding = "6px 8px 6px 8px"
                this._inputElement.style.fontSize = "12px"
                break;
            case "large":
                this._inputElement.style.padding = "10px 12px 10px 12px"
                this._inputElement.style.fontSize = "24px"

        }
    }

    private _defaultPreset() {
        this._inputElement.style.padding = "8px 10px 8px 10px"
        this._inputElement.style.borderRadius = "8px"
        this._inputElement.style.border = "0"
        this._inputElement.style.fontSize = "16px"
    }

    private _roundedPreset() {
        this._defaultPreset();
        this._inputElement.style.borderRadius = "360px";
    }

    private _contrastPreset() {
        this._defaultPreset();
        this.bgColor = "#9c9c9cff"
        this.padding = 8;
        this.borderRadius = 8;
    }

    onContentChange(func: () => void) {
        this._element.addEventListener("input", func);
        return this;
    }
}