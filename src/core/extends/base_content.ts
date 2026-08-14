import { Base, BaseType } from "./base.js";
import { Color, colorToHex } from "../../types/color.js";
import { Value } from "../../utilities/value.js";
import { BaseStyles } from "../../types/base_styles.types.js";

export type BaseContentType = {
    content: string | Value<string>
    signals: {
        onContentChange?: () => void
    }
    style: BaseStyles
} & BaseType

export abstract class BaseContent extends Base {
    protected _onContentChange: () => void = () => { };

    constructor(children: Base | Base[], { content, signals, parent, style, type }: Partial<BaseContentType> & { type?: "div" | "p" | "button" | "input" }) {
        super(children, { parent, style, type })
        if (content) this.content = content;
        if (signals?.onContentChange) this._onContentChange = signals.onContentChange;
        if (style) this.styles = style;
    }

    onContentChange(func: () => void) {
        this._onContentChange = func
    }

    set options(options: Partial<Omit<BaseContentType, "parent" | "type">>) {
        if (options.style) this.styles = options.style;
        if (options.content) this.content = options.content;
        if (options.signals?.onContentChange) this._onContentChange = options.signals.onContentChange;
    }

    set content(content: string | Value<string>) {
        if (typeof content === "string") this._element.textContent = content
        else content.assign(this, "content");
        this._onContentChange();
    }
}