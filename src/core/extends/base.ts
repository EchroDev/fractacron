import { Border } from "../../utilities/border.js"
import { Color, colorToHex } from "../../types/color.js"
import { BaseStyles } from "../../types/base_styles.types.js"
import { ElementType } from "../../types/element_type.js"
import { Reference } from "../../utilities/reference.js"

export type BaseType = {
    parent: Base
    style: BaseStyles
    reference: Reference<Base>
}

export abstract class Base {
    protected _element: HTMLElement = document.body;
    border: Border;

    constructor(children: Base | Base[], { style, parent, type, reference }: Partial<BaseType> & { type?: ElementType }) {
        if (type) this._element = document.createElement(type);
        this.border = new Border(this._element);
        if (style) {
            if (style.opacity) this.opacity = style.opacity;
            if (style.backgroundColor) this.backgroundColor = style.backgroundColor;
            if (style.color) this.color = style.color;
            if (style.border?.radius) this.border.radius = style.border.radius;
            if (typeof style.border?.size === "number") this.border.size = style.border.size;
            else {
                if (style.border?.size?.left) this.border.sizeLeft = style.border.size.left;
                if (style.border?.size?.right) this.border.sizeRight = style.border.size.right;
                if (style.border?.size?.top) this.border.sizeTop = style.border.size.top;
                if (style.border?.size?.bottom) this.border.sizeBottom = style.border.size.bottom;
            }
            if (style.border?.color) this.border.color = style.border?.color;
            // Hacer Padding y Margin.
        }
        if (parent) this.instantiate(parent);
        if (children) this.addChild(children, type);
        if (reference) reference.element = this;
    }

    addChild(element: Base | Base[], type?: ElementType) {
        if (element instanceof Base) {
            if (type && type === "ul" || type === "ol") {
                const li = document.createElement("li");
                li.appendChild(element.element);
                this._element.appendChild(li);
            } else {
                this._element.appendChild(element.element);
            }
        } else {
            element.forEach((base) => {
                if (type && type === "ul" || type === "ol") {
                    const li = document.createElement("li");
                    li.appendChild(base.element);
                    this._element.appendChild(li);
                } else {
                    this._element.appendChild(base.element);
                }
            })
        }
    }
    instantiate(parent: Base) { parent.addChild(this) }

    free(): null {
        this._element.remove();
        return null
    }

    get element(): HTMLElement { return this._element }
    set opacity(value: number) { this._element.style.opacity = `${value / 100}` }
    set backgroundColor(value: Color) { this._element.style.backgroundColor = colorToHex(value); }
    set color(value: Color) { this._element.style.color = colorToHex(value); }
}