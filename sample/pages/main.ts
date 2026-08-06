import { Button, Container, Page, Label, Reference } from "../../src/index.js";
import { loginRedirect } from "../service/login_redirect.js";

export class MainPage extends Page {
    constructor() {
        super(new Container([
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
                    flex: "row",
                    gap: 5
                },
            })
        ], {
            type: "header",
            style: {
                flex: "row",
                center: true,
                gap: 10
            },
        }), {
            title: "Main",
        });
    }
}