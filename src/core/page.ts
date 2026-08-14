import { Base, BaseType } from "./extends/base.js";
import { Application } from "./application.js";

export class Page extends Base {
    private _children: Base | Base[];
    private _title: string;

    constructor(children: Base | Base[])
    constructor(children: Base | Base[], title: string)
    constructor(children: Base | Base[], title: string, options: Partial<Omit<BaseType, "parent">>)

    constructor(children?: Base | Base[], title?: string, options?: Partial<Omit<BaseType, "parent">>) {
        super(children || [], { ...options, type: "page" });
        this._children = children || [];
        this._title = title || ""
    }
    render() {
        if (this._title) document.title = `${Application.titlePrefix}${this._title}`;
        if (Application.pageColor) this.backgroundColor = Application.pageColor;
        else document.title = Application.titlePrefix;
        this.addChild(this._children);
    }
}