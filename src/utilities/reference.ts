import { Base } from "../core/extends/base.js";
import { Application } from "../core/application.js";
import { Button } from "../elements/button.js";
import { Label } from "../elements/label.js";
import { Container } from "../elements/containter.js";
import { TextInput } from "../elements/text_input.js";
import { Image } from "../elements/image.js";
import { List } from "../elements/list.js";

export class Reference<T extends Base = Base> {
    element: T | null = null;
}
