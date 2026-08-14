import { Base, BaseType } from "../core/extends/base.js";
import { BaseStyles } from "../types/base_styles.types.js";

type ContainerTagType = "div" | "header" | "footer" | "main" | "aside" | "section" | "nav";

type ContainerType = {
    style: BaseStyles
    type: ContainerTagType
}

export class Container extends Base {
    constructor(children: Base | Base[])
    constructor(children: Base | Base[], type: ContainerTagType)
    constructor(children: Base | Base[], type: ContainerTagType, options: Partial<BaseType & ContainerType>)

    constructor(children?: Base | Base[], type?: ContainerTagType, options?: Partial<BaseType & ContainerType>) {
        super(children || [], { ...options, type });
    }
}