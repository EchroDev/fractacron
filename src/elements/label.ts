import { BaseContent, BaseContentType } from "../core/extends/base_content.js";
import { Color } from "../types/color.js";

export class Label extends BaseContent {
    protected _onTextChange: () => void = () => {}

    constructor({ content, parent, style, signals }: Partial<BaseContentType>) {
        super({content, signals, style})
        this._element = document.createElement("p");
        if (content) this.content = content;
        if (parent) parent.addChild(this);
    }

    set color(color: Color) {
        this.element.style.color = color
    }
}