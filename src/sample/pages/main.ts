import { Button, Container, Page, Label, Reference } from "../../index.js";
import { loginRedirect } from "../service/login_redirect.js";

export class MainPage extends Page {
    constructor() {
        super({
            title: "Main",
            children: new Container({
                type: "header",
                style: {
                    flex: "row",
                    center: true,
                    gap: 10
                },
                children: [
                    new Label({
                        content: "EchroDev ",
                    }),
                    new Container({
                        type: "nav",
                        style: {
                            flex: "row",
                            gap: 5
                        },
                        children: [
                            new Button({
                                content: "Log in",
                                signals: {
                                    onClick: loginRedirect
                                }
                            }),
                            new Button({
                                content: "Sign Up"
                            })
                        ]
                    })
                ]
            })
        });
    }
}