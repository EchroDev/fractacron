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

export class TextInput extends Input {
    constructor(children: Base | Base[])
    constructor(children: Base | Base[], title: string)
    constructor(children: Base | Base[], title: string, options: Partial<BaseType & TextInputType>)

    constructor(children?: Base | Base[], title?: string, options?: Partial<BaseType & TextInputType>) {
        super(children || [], title, options as Partial<BaseType & InputType>, options?.type || "text");
        if (options?.placeholder && !title) this._element.placeholder = options.placeholder;
        if (options?.signals?.onContentChange) this.onContentChange(options.signals.onContentChange);
    }

    onContentChange(func: () => void) {
        this._element.addEventListener("input", func);
        return this;
    }
}