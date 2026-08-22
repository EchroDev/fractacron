import { Base, BaseType } from "./extends/base.js";
import { Application } from "./application.js";
import { Element } from "./extends/element.js";

export class Page {
    private _children: HTMLElement | HTMLElement[];
    private _title: string;

    constructor(children: HTMLElement | HTMLElement[])
    constructor(children: HTMLElement | HTMLElement[], title: string)
    constructor(children: HTMLElement | HTMLElement[], title: string, options: Partial<Omit<BaseType, "parent">>)

    constructor(children?: HTMLElement | HTMLElement[], title?: string, options?: Partial<Omit<BaseType, "parent">>) {
        this._children = children || [];
        this._title = title || ""
    }
    render() {
        if (this._title) document.title = `${Application.titlePrefix}${this._title}`;
        if (Application.pageColor) document.body.style.backgroundColor = Application.pageColor;
        else document.title = Application.titlePrefix;
        if (this._children instanceof HTMLElement) document.body.appendChild(this._children);
        else {
            this._children.forEach((element) => {
                document.body.appendChild(element);
            })
        }
    }
}