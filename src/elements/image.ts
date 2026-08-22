import { Base, BaseType } from "../core/extends/base.js";
import { element } from "../core/extends/element.js";
import { ImageType } from "../types/image.types.js";

export class Image extends Base {
    declare protected _element: HTMLImageElement;

    constructor(children: Base | Base[])
    constructor(children: Base | Base[], url: string)
    constructor(children: Base | Base[], url: string, preset: "default" | "bordered" | "rounded" | "rounded-bordered")
    constructor(children: Base | Base[], url: string, preset: "default" | "bordered" | "rounded" | "rounded-bordered", options: Partial<BaseType & ImageType>)

    constructor(children?: Base | Base[], url?: string, preset?: "default" | "rounded" | "bordered" | "rounded-bordered", options?: Partial<BaseType & ImageType>) {
        super(children || [], { ...options, type: "img" });
        this.url = url || "";

        if (options?.style) this.style = options.style;
    }

    set url(value: string) {
        this._element.src = value;
    }
}

export const img = (children: HTMLElement | HTMLElement[], { src, width, height }: { src: string, width: number, height: number }, styles?: string, config?: (el: HTMLImageElement) => void) => {
    const img = element("img", styles || "", config || ((el: HTMLImageElement) => { }), children);
    img.src = src;
    img.width = width;
    img.height = height;
    return img;
}