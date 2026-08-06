import { Base, BaseType } from "../core/extends/base.js";
import { Color, colorToHex } from "../types/color.js";

type ContainerType = {
    style: Partial<{
        flex: "column" | "row",
        gap: number
        center: true
    }>
    type: "div" | "header" | "footer" | "main" | "aside" | "section" | "nav"
}

export class Container extends Base {
    constructor(children: Base | Base[], { parent, style, reference, type }: Partial<BaseType & ContainerType>) {
        super(children, { parent, style, type: type ? type : "div", reference });
        if (style?.flex) {
            this._element.style.display = "flex";
            this._element.style.flexDirection = style.flex;
        }
        if (style?.center) this.centerElements = true;
        if (style?.gap) this._element.style.gap = `${style.gap}px`;
    }

    set centerElements(value: boolean) {
        if (value) {
            this._element.style.display = "flex";
            this._element.style.justifyContent = "center";
            this._element.style.alignItems = "center";
        }
    }

    set backgroundColor(color: Color) {
        this._element.style.backgroundColor = colorToHex(color);
    }

    set borderRadius(value: number) {
        this._element.style.borderRadius = `${value}px`
    }
}