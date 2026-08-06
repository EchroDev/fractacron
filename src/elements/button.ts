import { Base, BaseType } from "../core/extends/base.js";
import { BaseContent, BaseContentType } from "../core/extends/base_content.js";
import { Value } from "../utilities/value.js";

export class Button extends BaseContent {
    constructor(children: Base | Base[], { parent, content, style, signals, reference }: Partial<BaseContentType & { signals: { onClick?: () => void } }>) {
        super(children, { parent, content, style, signals, type: "button", reference });
        if (signals?.onClick) this.onClick(signals?.onClick);
        this._element.style.cursor = "pointer";
    }

    onClick(callback: () => void) {
        this._element.addEventListener("click", callback);
        return this;
    }
}