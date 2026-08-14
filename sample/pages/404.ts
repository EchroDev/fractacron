import { Page, Text, Button, Application } from "../../src";

export const page404 = new Page(
    [
        new Text([], "404 Not found.", { style: { fontSize: 48 } }),
        new Button([], "Return to home", {
            signals: {
                onClick() {
                    Application.navigate("/");
                },
            }
        })
    ]
);