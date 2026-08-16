import { Base, BaseType } from "../core/extends/base.js";
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

        switch (preset) {
            case "default":
                this.borderRadius = 40;
                break;
            case "rounded":
                this.borderRadius = 999;
                break;
            case "bordered":
                this.borderRadius = 40;
                this.borderSize = 4;
                break;
            case "rounded-bordered":
                this.borderRadius = 999;
                this.borderSize = 4;
        }
    }

    set url(value: string) {
        this._element.src = value;
    }
}
