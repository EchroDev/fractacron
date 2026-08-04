import { Base } from "../core/extends/base.js";

export class Reference<T extends Base = Base> {
    element: T | null = null;
}
