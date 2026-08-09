import { Base, BaseType } from "../core/extends/base.js";
import { ListType } from "../types/list.types.js";

export class List extends Base {
    constructor(children: Base | Base[])
    constructor(children: Base | Base[], type: "ordered" | "unordered")
    constructor(children: Base | Base[], type: "ordered" | "unordered", options: Partial<BaseType & ListType>)

    constructor(children?: Base | Base[], type?: "ordered" | "unordered", options?: Partial<BaseType & ListType>) {
        super(children || [], { ...options, type: type === "ordered" ? "ol" : "ul" });
    }
}