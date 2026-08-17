import { Button, Container, Page, Text, Reference } from "../../src/index.js";
import { loginRedirect } from "../service/login_redirect.js";
import { containerStyles } from "../styles/container_styles.js";
import { navButtonStyles } from "../styles/nav_button_styles.js";

export const mainPage = new Page(new Container([
    new Text([], "EchroDev", { style: "text-white" }),
    new Container([
        new Button([], "Log in", {}, {
            signals: {
                onClick: loginRedirect
            },
        }),
        new Button([], "Sign up", {}, {})
    ], "nav", "default", {
        style: "flex flex-row gap-2"
    })
], "header", "default", {
}), "Main")