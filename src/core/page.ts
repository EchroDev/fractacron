import { Base, BaseType } from "./extends/base.js";
import { Application } from "./application.js";

export class Page extends Base {
    constructor({title, style}: Partial<Omit<BaseType, "parent"> & {title: string}>) {
        super({})
        this._element = document.body;
        if (style) {
            if (style.opacity) this.opacity = style.opacity;
            if (style.backgroundColor) this.backgroundColor = style.backgroundColor;
            else this.backgroundColor = Application.pageColor;
        } 
        this._element = document.body
        if (title) document.title = `${Application.titlePrefix}${title}`;
        else document.title = Application.titlePrefix;
    }
}