import { Base, BaseType } from "../core/extends/base.js";
import { ListType } from "../types/list.types.js";

export class List extends Base {
    constructor(children: Base | Base[], { parent, style, reference, type }: Partial<BaseType & ListType>) {
        super(children, { parent, style, reference, type: type ? type === "unordered" ? "ul" : "ol" : "ul" });
    }
}