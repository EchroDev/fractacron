import { Base } from "../core/extends/base.js";
import { BaseContent, BaseContentType } from "../core/extends/base_content.js";
import { Color } from "../types/color.js";

export class Label extends BaseContent {
    protected _onTextChange: () => void = () => { }

    constructor(children: Base | Base[], { content, parent, style, signals, reference }: Partial<BaseContentType>) {
        super(children, { parent, content, signals, style, type: "p", reference });
        if (content) this.content = content;
    }

    set color(color: Color) {
        this.element.style.color = color
    }
}