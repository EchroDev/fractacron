import { Button, Container, Page, Label, Reference } from "../../src/index.js";
import { loginRedirect } from "../service/login_redirect.js";
import { containerStyles } from "../styles/container_styles.js";

export const mainPage = new Page(new Container([
    new Label([], "EchroDev"),
    new Container([
        new Button([], "Log in", {
            signals: {
                onClick: loginRedirect
            }
        }),
        new Button([], "Sign up")
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