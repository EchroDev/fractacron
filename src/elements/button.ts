import { BaseContent, BaseContentType } from "../core/extends/base_content.js";
import { Value } from "../utilities/value.js";

export class Button extends BaseContent {
    constructor({parent, content, style, signals, children}: Partial<BaseContentType & {signals: {onClick?: () => void}}>) {
        super({parent, content, style, signals, children, type: "button"});
        if (signals?.onClick) this.onClick(signals?.onClick);
    }

    onClick(callback: () => void) {
        this._element.addEventListener("click", callback)
    }
}