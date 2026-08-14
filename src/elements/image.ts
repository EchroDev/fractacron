import { Base, BaseType } from "../core/extends/base.js";
import { ImageType } from "../types/image.types.js";

export class Image extends Base {
    declare protected _element: HTMLImageElement;

    constructor(children: Base | Base[])
    constructor(children: Base | Base[], url: string)
    constructor(children: Base | Base[], url: string, options: Partial<BaseType & ImageType>)

    constructor(children?: Base | Base[], url?: string, options?: Partial<BaseType & ImageType>) {
        super(children || [], { ...options, type: "img" });
        this.url = url || "";
    }

    set url(value: string) {
        this._element.src = value;
    }
}
