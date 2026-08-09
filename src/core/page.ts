import { Base, BaseType } from "./extends/base.js";
import { Application } from "./application.js";

export class Page extends Base {
    private _children: Base | Base[];
    private _title: string;

    constructor(children: Base | Base[])
    constructor(children: Base | Base[], title: string)
    constructor(children: Base | Base[], title: string, options: Partial<Omit<BaseType, "parent">>)


    constructor(children?: Base | Base[], title?: string, options?: Partial<Omit<BaseType, "parent">>) {
        super(children || [], { type: "page" });
        this._children = children || [];
        this._title = title || ""
        if (options?.style) {
            if (options.style.opacity) this.opacity = options.style.opacity;
            if (options.style.backgroundColor) this.backgroundColor = options.style.backgroundColor;
            else this.backgroundColor = Application.pageColor;
        }
    }
    render() {
        if (this._title) document.title = `${Application.titlePrefix}${this._title}`;
        else document.title = Application.titlePrefix;
        this.addChild(this._children);
    }
}