import { Page } from "../../core/page.js";
import { List } from "../../elements/list.js";
import { LoginField } from "../components/login_field.js";


export class LoginPage extends Page {
    constructor() {
        super({
            title: "Login",
            children: new List({
                children: [
                    new LoginField("Username", "Example: EchroDev"),
                    new LoginField("Password", "Example: 1234abcd"),
                ]
            })
        });
    }
}