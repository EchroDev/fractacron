import { Base } from "../core/extends/base.js";
import { BaseContent, BaseContentType } from "../core/extends/base_content.js";
import { Color } from "../types/color.js";

export class Text extends BaseContent {
    protected _onTextChange: () => void = () => { }

    constructor(children: Base | Base[])
    constructor(children: Base | Base[], content: string)
    constructor(children: Base | Base[], content: string, options: Partial<BaseContentType>)

    constructor(children?: Base | Base[], content?: string, options?: Partial<BaseContentType>) {
        super(children || [], { ...options, content, type: "p" });
        this.content = content || "";
        this._element.style.fontSize = "1.25rem"
        if (options?.style) this.style = options.style;
    }

    set color(color: Color) {
        this.element.style.color = color
    }
}