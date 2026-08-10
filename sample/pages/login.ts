import { Page } from "../../src/core/page.js";
import { LoginField } from "../components/login_field.js";
import { Form } from "../../src";
import { Button } from "../../src/elements/button.js";

export const loginPage = new Page(
    new Form([
        new LoginField("Username", "Example: EchroDev"),
        new LoginField("Password", "Example: 1234abcd"),
        new Button([], "Login", {
            submit: true
        })
    ], "/login", { method: "POST" }),
    "Login"
);