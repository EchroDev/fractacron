import { Base, BaseType } from "../core/extends/base.js";
import { BaseContent, BaseContentType } from "../core/extends/base_content.js";
import { Value } from "../utilities/value.js";

type ButtonOptions = Partial<BaseContentType & { signals?: { onClick?: () => void } }>;

export class Button extends BaseContent {
    constructor(children: Base | Base[])
    constructor(children: Base | Base[], content: string)
    constructor(children: Base | Base[], content: string, options: ButtonOptions)

    constructor(children?: Base | Base[], content?: string, options?: ButtonOptions) {
        super(children || [], { ...options, content, type: "button" });
        if (options?.signals?.onClick) this.onClick(options.signals.onClick);
        this._element.style.cursor = "pointer";
    }

    onClick(callback: () => void) {
        this._element.addEventListener("click", callback);
        return this;
    }
}