import { Base, BaseType } from "../core/extends/base.js";
import { element, Element } from "../core/extends/element.js";
import { BaseStyles } from "../types/base_styles.types.js";

export type ContainerTagType = "div" | "header" | "footer" | "main" | "aside" | "section" | "nav";

export type ContainerType = {
    style: BaseStyles
    type: ContainerTagType
}

export type ContainerPresetType = "default" | "center" | "center-column";

export class Container extends Base {
    constructor(children: Base | Base[])
    constructor(children: Base | Base[], type: ContainerTagType)
    constructor(children: Base | Base[], type: ContainerTagType, preset: ContainerPresetType)
    constructor(children: Base | Base[], type: ContainerTagType, preset: ContainerPresetType, options: Partial<BaseType & ContainerType>)

    constructor(children?: Base | Base[], type?: ContainerTagType, preset?: ContainerPresetType, options?: Partial<BaseType & ContainerType>) {
        super(children || [], { ...options, type });
        if (options?.style) this.style = options.style;
    }
}

export const div = (children: HTMLElement | HTMLElement[], styles?: string, config?: (el: HTMLDivElement) => void) => {
    return element("div", styles || "", config || ((el: HTMLDivElement) => { }), children);
}