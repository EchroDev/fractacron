import { Color, colorToHex } from "../../types/color.js"
import { BaseStyles } from "../../types/base_styles.types.js"
import { DirectionsStyles } from "../../types/directions_styles.types.js"
import { ElementType } from "../../types/element_type.js"
import { Reference } from "../../utilities/reference.js"
import { Application } from "../application.js"

export type BaseType = {
    parent: Base
    style: string
    reference: Reference<Base>
}

export abstract class Base {
    protected _element: HTMLElement = document.body;
    protected _reference?: Reference<Base>

    constructor(children: Base | Base[], { parent, type, reference }: Partial<BaseType> & { type?: ElementType }) {
        if (type && type !== "page") this._element = document.createElement(type);
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

    set options(options: Partial<Omit<BaseType, "parent" | "type">>) {
        this._element.className = options.style ?? "";
        if (options.reference) options.reference.element = this;
    }

    set style(value: string) {
        this._element.className = value;
    }

    set reference(reference: Reference<Base>) {
        reference.element = this;
    }

    get element(): HTMLElement { return this._element }
}