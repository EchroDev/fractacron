import { Base, BaseType } from "../core/extends/base.js";
import { Color, colorToHex } from "../types/color.js";
import { ContainerStyles } from "../types/container_styles.types.js";

type ContainerTagType = "div" | "header" | "footer" | "main" | "aside" | "section" | "nav";

type ContainerType = {
    style: ContainerStyles
    type: ContainerTagType
}

export class Container extends Base {
    constructor(children: Base | Base[])
    constructor(children: Base | Base[], type: ContainerTagType)
    constructor(children: Base | Base[], type: ContainerTagType, options: Partial<BaseType & ContainerType>)

    constructor(children?: Base | Base[], type?: ContainerTagType, options?: Partial<BaseType & ContainerType>) {
        super(children || [], { ...options, type });
        if (options?.style?.display) this._element.style.display = options.style.display;
        if (options?.style?.flexDirection) this._element.style.flexDirection = options.style.flexDirection;
        if (options?.style?.center) this.centerElements = true;
        if (options?.style?.gap) this._element.style.gap = `${options.style.gap}px`;
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