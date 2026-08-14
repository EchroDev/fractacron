import { Base } from "../core/extends/base.js"
import { BaseContent } from "../core/extends/base_content.js";

export class Value<T> {
    private _content: T;
    private _assigned = new Map<Base, "content">();

    constructor(content: T) {
        this._content = content;
    }

    setContent(content: T) {
        this._content = content;
        this._assigned.forEach((property, element) => {
            if (property === "content" && element instanceof BaseContent) element.content = this._content as string
        })
    }

    assign(element: Base, property: "content"): T {
        this._assigned.set(element, property);
        if ("content" in element && property == "content") element.content = this._content as string
        console.log(this._assigned);
        return this._content
    }

    get content() {
        return this._content;
    }
}