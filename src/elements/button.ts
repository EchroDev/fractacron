import { BaseContent, BaseContentType } from "../core/extends/base_content.js";
import { Value } from "../utilities/value.js";

export class Button extends BaseContent {
    constructor({parent, content, style, signals}: Partial<BaseContentType & {signals: {onClick?: () => void}}>) {
        super({content, style, signals});
        this._element = document.createElement("button");
        if (signals?.onClick) this.onClick(signals?.onClick);
        if (parent) this.instantiate(parent);
    }

    onClick(callback: () => void) {
        this._element.addEventListener("click", callback)
    }
}