import { BaseContent, BaseContentType } from "../core/extends/base_content.js";
import { Value } from "../utilities/value.js";

export class Button extends BaseContent {
    constructor({ parent, content, style, signals, children, reference }: Partial<BaseContentType & { signals: { onClick?: () => void } }>) {
        super({ parent, content, style, signals, children, type: "button", reference });
        if (signals?.onClick) this.onClick(signals?.onClick);
        this._element.style.cursor = "pointer";
    }

    onClick(callback: () => void) {
        this._element.addEventListener("click", callback);
        return this;
    }
}