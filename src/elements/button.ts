import { Base, BaseType } from "../core/extends/base.js";
import { BaseContent, BaseContentType } from "../core/extends/base_content.js";
import { Value } from "../utilities/value.js";

type ButtonOptions = Partial<BaseContentType & { submit?: boolean; signals?: { onClick?: () => void } }>;

export class Button extends BaseContent {
    public submit: boolean = false;

    constructor(children: Base | Base[])
    constructor(children: Base | Base[], content: string)
    constructor(children: Base | Base[], content: string, options: ButtonOptions)

    constructor(children?: Base | Base[], content?: string, options?: ButtonOptions) {
        super(children || [], { ...options, content, type: "button" });
        this.submit = options?.submit ?? false;
        if (options?.signals?.onClick) this.onClick(options.signals.onClick);
        this._element.style.cursor = "pointer";
        (this._element as HTMLButtonElement).type = options?.submit ? "submit" : "button";
    }

    onClick(callback: () => void) {
        this._element.addEventListener("click", callback);
        return this;
    }
}