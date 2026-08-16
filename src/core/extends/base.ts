import { Color, colorToHex } from "../../types/color.js"
import { BaseStyles } from "../../types/base_styles.types.js"
import { DirectionsStyles } from "../../types/directions_styles.types.js"
import { ElementType } from "../../types/element_type.js"
import { Reference } from "../../utilities/reference.js"
import { Application } from "../application.js"

export type BaseType = {
    parent: Base
    style: BaseStyles
    reference: Reference<Base>
}

export abstract class Base {
    protected _element: HTMLElement = document.body;
    protected _reference?: Reference<Base>

    constructor(children: Base | Base[], { style, parent, type, reference }: Partial<BaseType> & { type?: ElementType }) {
        if (type && type !== "page") this._element = document.createElement(type);
        if (style) this.styles = style;
        if (type !== "page") {
            if (parent) this.instantiate(parent);
            if (children) this.addChild(children, type);
            if (reference) {
                reference.element = this;
                Application.references.push(reference);
            }
        }
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

    set styles(style: BaseStyles) {
        // Basic styles.
        if (style.opacity) this.opacity = style.opacity;
        if (style.bgColor) this.bgColor = style.bgColor;
        if (style.color) this.color = style.color;
        if (style.width) this.width = style.width;
        if (style.height) this.height = style.height;

        // Border styles.
        if (style.borderRadius) this.borderRadius = style.borderRadius;
        if (typeof style.borderSize === "number") this.borderSize = style.borderSize;
        if (style.borderColor) this.borderColor = style.borderColor;

        // Position styles.
        if (style.position) this.position = style.position;
        if (style.directions) this.directions = style.directions;

        // Padding styles.
        if (style.padding) this.padding = style.padding;

        // Margin Styles.
        if (style.margin) this.margin = style.margin;

        // Font Styles.
        if (style.fontSize) this.fontSize = style.fontSize;

        // Flexbox Styles.
        if (style.display) this.display = style.display;
        if (style.flexDirection) this.flexDirection = style.flexDirection;
        if (style.gap) this.gap = style.gap;
        if (style.alignItems) this.alignItems = style.alignItems;
        if (style.justifyContent) this.justifyContent = style.justifyContent;
    }

    set options(options: Partial<Omit<BaseType, "parent" | "type">>) {
        this.styles = options.style ?? {};
        if (options.reference) options.reference.element = this;
    }

    set reference(reference: Reference<Base>) {
        reference.element = this;
    }

    get element(): HTMLElement { return this._element }
    set opacity(value: number) { this._element.style.opacity = `${value / 100}` }
    set bgColor(value: Color) { this._element.style.backgroundColor = colorToHex(value); }
    set color(value: Color) { this._element.style.color = colorToHex(value); }
    set width(value: number) { this._element.style.width = `${value}px`; }
    set height(value: number) { this._element.style.height = `${value}px`; }
    set position(value: "absolute" | "relative" | "fixed") { this._element.style.position = value; }

    set directions(value: DirectionsStyles) {
        if (value.top !== undefined) this._element.style.top = `${value.top}px`;
        if (value.bottom !== undefined) this._element.style.bottom = `${value.bottom}px`;
        if (value.left !== undefined) this._element.style.left = `${value.left}px`;
        if (value.right !== undefined) this._element.style.right = `${value.right}px`;
    }

    set padding(value: number | DirectionsStyles) {
        if (typeof value === "number") this._element.style.padding = `${value}px`;
        else {
            if (value.left !== undefined) this._element.style.paddingLeft = `${value.left}px`;
            if (value.right !== undefined) this._element.style.paddingRight = `${value.right}px`;
            if (value.top !== undefined) this._element.style.paddingTop = `${value.top}px`;
            if (value.bottom !== undefined) this._element.style.paddingBottom = `${value.bottom}px`;
        }
    }
    set margin(value: number | DirectionsStyles) {
        if (typeof value === "number") this._element.style.margin = `${value}px`;
        else {
            if (value.left !== undefined) this._element.style.marginLeft = `${value.left}px`;
            if (value.right !== undefined) this._element.style.marginRight = `${value.right}px`;
            if (value.top !== undefined) this._element.style.marginTop = `${value.top}px`;
            if (value.bottom !== undefined) this._element.style.marginBottom = `${value.bottom}px`;
        }
    }

    set fontSize(value: number) {
        this._element.style.fontSize = `${value}px`;
    }

    set display(value: "flex" | "grid" | "block") {
        this._element.style.display = value;
    }
    set flexDirection(value: "row" | "column") {
        this._element.style.flexDirection = value;
    }
    set gap(value: number) {
        this._element.style.gap = `${value}px`;
    }
    set alignItems(value: "start" | "end" | "center") {
        this._element.style.alignItems = value;
    }
    set justifyContent(value: "start" | "end" | "center") {
        this._element.style.justifyContent = value;
    }

    set borderRadius(value: number) { this._element.style.borderRadius = `${value}px` }
    set borderSize(value: number | DirectionsStyles) {
        if (typeof value === "number") this._element.style.border = `${value}px solid`
        else {
            if (value.left) this.borderLeft = value.left;
            if (value.right) this.borderRight = value.right;
            if (value.top) this.borderTop = value.top;
            if (value.bottom) this.borderBottom = value.bottom;
        }
    }
    set borderLeft(value: number) { this._element.style.borderLeft = `${value}px solid` }
    set borderRight(value: number) { this._element.style.borderRight = `${value}px solid` }
    set borderTop(value: number) { this._element.style.borderTop = `${value}px solid` }
    set borderBottom(value: number) { this._element.style.borderBottom = `${value}px solid` }

    set borderColor(value: Color) {
        this._element.style.borderColor = colorToHex(value);
    }
}