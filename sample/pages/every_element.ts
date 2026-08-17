import { Page, Container, Button, Text, Image, List, TextInput } from "../../src";

export const everyElementPage = new Page(
    new Container([
        new Container([
            new Button([], "Click me!"),
            new Text([], "Button"),
        ], "div", "center-column", { style: "flex flex-col items-center" }),
        new Container([
            new TextInput([], "Username", { type: "default" }),
            new Text([], "Input")
        ], "div", "center-column", { style: "flex flex-col items-center" }),
        new Container([
            new Image([], "https://images.seeklogo.com/logo-png/27/1/node-js-logo-png_seeklogo-273749.png", "default", { style: "w-40" }),
            new Text([], "Image")
        ], "div", "center-column", { style: "flex flex-col items-center" }),
        new List([
            new Text([], "Item 1"),
            new Text([], "Item 2"),
            new Text([], "Item 3")
        ])
    ], "div", "default", { style: "flex w-screen justify-center items-center gap-4 bg-gray-400" }), "Every Element"
)