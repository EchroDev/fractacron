import { Base, BaseType } from "../core/extends/base.js";
import { ListType } from "../types/list.types.js";

export class List extends Base {
    constructor({ parent, style, children, reference, type }: Partial<BaseType & ListType>) {
        super({ parent, style, children, reference, type: type ? type === "unordered" ? "ul" : "ol" : "ul" });
    }
}
