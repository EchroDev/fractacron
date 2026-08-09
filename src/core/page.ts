import { Base, BaseType } from "./extends/base.js";
import { Application } from "./application.js";

export class Page extends Base {
    private _children: Base | Base[];
    private _title: string;

    constructor(children: Base | Base[], { title, style }: Partial<Omit<BaseType, "parent"> & { title: string }>) {
        super(children, { type: "page" });
        this._children = children;
        this._title = title || ""
        if (style) {
            if (style.opacity) this.opacity = style.opacity;
            if (style.backgroundColor) this.backgroundColor = style.backgroundColor;
            else this.backgroundColor = Application.pageColor;
        }
    }
    render() {
        if (this._title) document.title = `${Application.titlePrefix}${this._title}`;
        else document.title = Application.titlePrefix;
        this.addChild(this._children);
    }
}