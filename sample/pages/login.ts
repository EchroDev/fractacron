import { Page } from "../../src/core/page.js";
import { LoginField } from "../components/login_field.js";
import { Button } from "../../src/elements/button.js";
import { Container } from "../../src";

export const loginPage = new Page(
    new Container([
        new LoginField("Username", "Example: EchroDev"),
        new LoginField("Password", "Example: 1234abcd"),
        new Button([], "Login", {
            submit: true
        })
    ], "div"),
    "Login"
);