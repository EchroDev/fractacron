import { Button, Container, Page, Text, Reference } from "../../src/index.js";
import { loginRedirect } from "../service/login_redirect.js";
import { containerStyles } from "../styles/container_styles.js";
import { navButtonStyles } from "../styles/nav_button_styles.js";

export const mainPage = new Page(new Container([
    new Text([], "EchroDev", { style: { color: "white" } }),
    new Container([
        new Button([], "Log in", {
            signals: {
                onClick: loginRedirect
            },
            style: navButtonStyles
        }),
        new Button([], "Sign up", { style: navButtonStyles })
    ], "nav", {
        style: {
            display: "flex",
            flexDirection: "row",
            gap: 5
        },
    })
], "header", {
    style: containerStyles
}), "Main")