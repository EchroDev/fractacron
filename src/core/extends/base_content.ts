import { Base, BaseType } from "./base.js";
import { Color, colorToHex } from "../../types/color.js";
import { Value } from "../../utilities/value.js";

export type BaseContentType = {
    content: string | Value<string>
    signals: {
        onContentChange?: () => void
    }
    style: {
        contentColor?: Color
    }
} & BaseType

export abstract class BaseContent extends Base {
    protected _onContentChange: () => void = () => {};

    constructor({content, signals, parent, style, children, type}: Partial<BaseContentType> & {type?: "div" | "p" | "button" | "input"}) {
        super({parent, style, children, type})
        if (content) this.content = content;
        if (signals?.onContentChange) this._onContentChange = signals.onContentChange;
        if (style?.contentColor) this.contentColor = style.contentColor;
    }

    onContentChange(func: () => void) {
        this._onContentChange = func
    }

    set content(content: string | Value<string>) {
        if (typeof content === "string") this._element.textContent = content
        else content.assign(this, "content");
        this._onContentChange();
    }

    set contentColor(value: Color) {
        this._element.style.color = colorToHex(value);
    }
}