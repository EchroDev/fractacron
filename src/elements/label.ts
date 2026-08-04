import { BaseContent, BaseContentType } from "../core/extends/base_content.js";
import { Color } from "../types/color.js";

export class Label extends BaseContent {
    protected _onTextChange: () => void = () => { }

    constructor({ content, parent, style, signals, children, reference }: Partial<BaseContentType>) {
        super({ parent, content, signals, style, children, type: "p", reference });
        if (content) this.content = content;
    }

    set color(color: Color) {
        this.element.style.color = color
    }
}