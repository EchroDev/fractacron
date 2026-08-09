import { TextInput } from "../../src/elements/text_input.js";

export class LoginField extends TextInput {
    constructor(title: string, placeholder: string) {
        super([], title, {
            placeholder,
        })
    }
}