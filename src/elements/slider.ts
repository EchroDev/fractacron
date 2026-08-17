import { Input } from "./input";
import { Base, BaseType } from "../core/extends/base";
import { SliderType } from "../types/slider.type";

export class Slider extends Input {
    constructor(children: Base | Base[])
    constructor(children: Base | Base[], title: string)
    constructor(children: Base | Base[], title: string, options: Partial<BaseType & SliderType>)

    constructor(children?: Base | Base[], title?: string, options?: Partial<BaseType & SliderType>) {
        super(children || [], title, options, "range");
        if (options?.min) this._inputElement.min = options.min.toString();
        if (options?.max) this._inputElement.max = options.max.toString();
        if (options?.step) this._inputElement.step = options.step.toString();
        if (options?.style) this.style = options.style;
    }
}