import { Page, Container, Button, Text, Image, List, TextInput } from "../../src";

export const everyElementPage = new Page(
    new Container([
        new Container([
            new Container([
                new Button([], "Click me!"),
                new Text([], "Default"),
            ], "div", "center-column"),
            new Container([
                new Button([], "Click me!", { rounded: true, size: "small" }),
                new Text([], "Rounded"),
            ], "div", "center-column"),
            new Container([
                new Button([], "Click me!", { bordered: true, size: "large" }),
                new Text([], "Bordered"),
            ], "div", "center-column"),
            new Container([
                new Button([], "Click me!", { rounded: true, bordered: true }),
                new Text([], "Rounded Bordered"),
            ], "div", "center-column"),
        ], "div", "center"),
        new Text([], "EchroDev"),
        new Container([
            new Container([
                new TextInput([], "Username", { type: "default" }),
                new Text([], "Default")
            ], "div", "center-column"),
            new Container([
                new TextInput([], "Username", { type: "rounded" }),
                new Text([], "Rounded")
            ], "div", "center-column"),
            new Container([
                new TextInput([], "Username", { type: "contrast" }),
                new Text([], "Contrast")
            ], "div", "center-column"),
            new Container([
                new TextInput([], "Username", { type: "rounded-contrast" }),
                new Text([], "Rounded  Contrast")
            ], "div", "center-column"),
            new Container([
                new TextInput([], "Username", { type: "bordered" }),
                new Text([], "Bordered")
            ], "div", "center-column"),
            new Container([
                new TextInput([], "Username", { type: "rounded-bordered" }),
                new Text([], "Rounded Bordered")
            ], "div", "center-column")
        ], "div", "center"),
        new Container([
            new Container([
                new Image([], "https://images.seeklogo.com/logo-png/27/1/node-js-logo-png_seeklogo-273749.png", "default", { style: { width: 200 } }),
                new Text([], "Default")
            ], "div", "center-column"),
            new Container([
                new Image([], "https://images.seeklogo.com/logo-png/27/1/node-js-logo-png_seeklogo-273749.png", "rounded", { style: { width: 200 } }),
                new Text([], "Rounded")
            ], "div", "center-column"),
            new Container([
                new Image([], "https://images.seeklogo.com/logo-png/27/1/node-js-logo-png_seeklogo-273749.png", "bordered", { style: { width: 200 } }),
                new Text([], "Bordered")
            ], "div", "center-column"),
            new Container([
                new Image([], "https://images.seeklogo.com/logo-png/27/1/node-js-logo-png_seeklogo-273749.png", "rounded-bordered", { style: { width: 200 } }),
                new Text([], "Rounded Bordered")
            ], "div", "center-column")
        ], "div", "center"),
        new List([
            new Text([], "Item 1"),
            new Text([], "Item 2"),
            new Text([], "Item 3")
        ])
    ], "div", "center-column"), "Every Element")