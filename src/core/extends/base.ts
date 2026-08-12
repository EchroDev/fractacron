import { Border } from "../../utilities/border.js"
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
    border: Border;

    constructor(children: Base | Base[], { style, parent, type, reference }: Partial<BaseType> & { type?: ElementType }) {
        if (type && type !== "page") this._element = document.createElement(type);
        this.border = new Border(this._element);
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

    protected set _baseStyles(style: BaseStyles) {
        // Basic styles.
        if (style.opacity !== undefined) this.opacity = style.opacity;
        if (style.backgroundColor !== undefined) this.backgroundColor = style.backgroundColor;
        if (style.color !== undefined) this.color = style.color;
        if (style.border?.radius !== undefined) this.border.radius = style.border.radius;
        if (style.width !== undefined) this.width = style.width;
        if (style.height !== undefined) this.height = style.height;

        // Border styles.
        if (style.border?.size !== undefined) this.border.size = style.border.size;
        if (style.border?.color !== undefined) this.border.color = style.border.color;

        // Position styles.
        if (style.position !== undefined) this.position = style.position;
        if (style.directions !== undefined) this.directions = style.directions;

        // Padding styles.
        if (style.padding !== undefined) this.padding = style.padding;

        // Margin Styles.
        if (style.margin !== undefined) this.margin = style.margin;
    }

    set styles(style: BaseStyles) {
        this._baseStyles = style;
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
    set backgroundColor(value: Color) { this._element.style.backgroundColor = colorToHex(value); }
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
}