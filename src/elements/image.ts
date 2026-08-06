import { Base, BaseType } from "../core/extends/base.js";
import { ImageType } from "../types/image.types.js";

export class Image extends Base {
    declare protected _element: HTMLImageElement;

    constructor(children: Base | Base[], options?: Partial<BaseType & ImageType>) {
        const { parent, style, url, width, height, reference } = options || {};
        super(children, { parent, style, type: "img", reference });

        if (url) this.url = url;
        if (width !== undefined) this.width = width;
        if (height !== undefined) this.height = height;
    }

    set url(value: string) {
        this._element.src = value;
    }

    set width(value: number | string) {
        this._element.style.width = typeof value === "number" ? `${value}px` : value;
    }

    set height(value: number | string) {
        this._element.style.height = typeof value === "number" ? `${value}px` : value;
    }
}
