import { Base, BaseType } from "./extends/base.js";
import { Application } from "./application.js";

export class Page extends Base {
    constructor({ title, style, children }: Partial<Omit<BaseType, "parent"> & { title: string }>) {
        super({ children })
        if (style) {
            if (style.opacity) this.opacity = style.opacity;
            if (style.backgroundColor) this.backgroundColor = style.backgroundColor;
            else this.backgroundColor = Application.pageColor;
        }
        if (title) document.title = `${Application.titlePrefix}${title}`;
        else document.title = Application.titlePrefix;
    }

}