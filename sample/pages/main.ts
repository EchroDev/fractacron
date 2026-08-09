import { Button, Container, Page, Label, Reference } from "../../src/index.js";
import { loginRedirect } from "../service/login_redirect.js";
import { containerStyles } from "../styles/container_styles.js";

export const mainPage = new Page(new Container([
    new Label([], {
        content: "EchroDev "
    }),
    new Container([
        new Button([], {
            content: "Log in",
            signals: {
                onClick: loginRedirect
            }
        }),
        new Button([], {
            content: "Sign Up"
        })
    ], {
        type: "nav",
        style: {
            display: "flex",
            flexDirection: "row",
            gap: 5
        },
    })
], {
    type: "header",
    style: containerStyles
}), {
    title: "Main",
})