import { Base, BaseType } from "../core/extends/base.js";
import { BaseContent, BaseContentType } from "../core/extends/base_content.js";
import { Value } from "../utilities/value.js";


type ButtonOptions = Partial<BaseContentType & { submit?: boolean; signals?: { onClick?: () => void } }>;
type ButtonPresetType = Partial<{
    rounded: boolean
    bordered: boolean
    size: "small" | "large"
}>

export class Button extends BaseContent {
    public submit: boolean = false;

    constructor(children: Base | Base[])
    constructor(children: Base | Base[], content: string)
    constructor(children: Base | Base[], content: string, preset: ButtonPresetType)
    constructor(children: Base | Base[], content: string, preset: ButtonPresetType, options: ButtonOptions,)

    constructor(children?: Base | Base[], content?: string, preset?: ButtonPresetType, options?: ButtonOptions,) {
        super(children || [], { ...options, content, type: "button" });
        this.submit = options?.submit ?? false;
        if (options?.signals?.onClick) this.onClick(options.signals.onClick);
        this._element.style.cursor = "pointer";
        (this._element as HTMLButtonElement).type = options?.submit ? "submit" : "button";

        // Default Style
        this._element.style.borderRadius = "999px";
        this._element.style.border = "0";
        this._element.style.padding = "0.25rem 0.75rem";
        this._element.style.backgroundColor = "#e5e7eb";
        this._element.style.fontSize = "1.25rem";

        if (options?.style) this.style = options.style;
    }

    onClick(callback: () => void) {
        this._element.addEventListener("click", callback);
        return this;
    }
}