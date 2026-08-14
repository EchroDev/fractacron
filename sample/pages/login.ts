import { Page } from "../../src/core/page.js";
import { LoginField } from "../components/login_field.js";
import { Button } from "../../src/elements/button.js";
import { Container } from "../../src";
import { Slider } from "../../src/elements/slider.js";

export const loginPage = new Page(
    new Container([
        new LoginField("Username", "Example: EchroDev"),
        new LoginField("Password", "Example: 1234abcd"),
        new Button([], "Login", {
            submit: true
        }),
        new Slider([], "Random slider", {
            min: 1,
            max: 10
        })
    ], "div"),
    "Login"
);