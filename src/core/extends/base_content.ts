import { Base, BaseType } from "./base.js";
import { Color, colorToHex } from "../../types/color.js";
import { Value } from "../../utilities/value.js";
import { BaseContentStyles } from "../../types/base_content_styles.types.js";
import { BaseStyles } from "../../types/base_styles.types.js";

export type BaseContentType = {
    content: string | Value<string>
    signals: {
        onContentChange?: () => void
    }
    style: BaseContentStyles
} & BaseType

export abstract class BaseContent extends Base {
    protected _onContentChange: () => void = () => { };

    constructor(children: Base | Base[], { content, signals, parent, style, type }: Partial<BaseContentType> & { type?: "div" | "p" | "button" | "input" }) {
        super(children, { parent, style, type })
        if (content) this.content = content;
        if (signals?.onContentChange) this._onContentChange = signals.onContentChange;
        this._baseContentStyles = style as Omit<BaseContentStyles, keyof BaseStyles>;
    }

    onContentChange(func: () => void) {
        this._onContentChange = func
    }

    protected set _baseContentStyles(styles: Omit<BaseContentStyles, keyof BaseStyles>) {
        if (styles.font?.color) this.fontColor = styles.font.color;
        if (styles.font?.size) this.fontSize = styles.font.size;
    }

    set styles(styles: BaseContentStyles) {
        this._baseStyles = styles;
        if (styles.font?.color) this.fontColor = styles.font.color;
        if (styles.font?.size) this.fontSize = styles.font.size;
    }

    set options(options: Partial<Omit<BaseContentType, "parent" | "type">>) {
        this._baseContentStyles = options.style as Omit<BaseContentStyles, keyof BaseStyles>;
        if (options.content) this.content = options.content;
        if (options.signals?.onContentChange) this._onContentChange = options.signals.onContentChange;
    }

    set fontColor(value: Color) {
        this._element.style.color = colorToHex(value);
    }

    set fontSize(value: number) {
        this._element.style.fontSize = `${value}px`;
    }

    set content(content: string | Value<string>) {
        if (typeof content === "string") this._element.textContent = content
        else content.assign(this, "content");
        this._onContentChange();
    }
}