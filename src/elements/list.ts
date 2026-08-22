import { Base, BaseType } from "../core/extends/base.js";
import { element } from "../core/extends/element.js";
import { ListType } from "../types/list.types.js";

export class List extends Base {
    constructor(children: Base | Base[])
    constructor(children: Base | Base[], type: "ordered" | "unordered")
    constructor(children: Base | Base[], type: "ordered" | "unordered", options: Partial<BaseType & ListType>)

    constructor(children?: Base | Base[], type?: "ordered" | "unordered", options?: Partial<BaseType & ListType>) {
        super(children || [], { ...options, type: type === "ordered" ? "ol" : "ul" });
        if (options?.style) this.style = options.style;
    }
}

export const ol = (children: HTMLElement | HTMLElement[], styles?: string, config?: (el: HTMLOListElement) => void) => {
    return element("ol", styles || "", config || ((el: HTMLOListElement) => { }), children);
}

export const ul = (children: HTMLElement | HTMLElement[], styles?: string, config?: (el: HTMLUListElement) => void) => {
    return element("ul", styles || "", config || ((el: HTMLUListElement) => { }), children);
}

export const li = (children: HTMLElement | HTMLElement[], styles?: string, config?: (el: HTMLLIElement) => void) => {
    return element("li", styles || "", config || ((el: HTMLLIElement) => { }), children);
}