import { Page, Text, Button, Application } from "../../src";

export const page404 = new Page(
    [
        new Text([], "404 Not found.", { style: "text-3xl" }),
        new Button([], "Return to home", {}, {
            signals: {
                onClick() {
                    Application.navigate("/");
                },
            }
        })
    ]
);