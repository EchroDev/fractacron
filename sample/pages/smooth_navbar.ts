import { Button, Container, Image, Page, Text, TextInput } from "../../src";

export const smoothNavbar = new Page([
    new Container([
        new Container([
            new Image([], "https://raw.githubusercontent.com/EchroDev/fractacron/HEAD/logo.png", "default", { style: "w-10 rounded-full" }),
            new Text([], "Fractacron"),
            new Container([
                new Button([], "About", {}, { style: "hover:scale-105 duration-100" }),
                new Button([], "Docs", {}, { style: "hover:scale-105 duration-100" }),
                new Button([], "Download", {}, { style: "hover:scale-105 duration-100" }),
            ], "nav", "default", { style: "flex gap-2 bg-gray-500 rounded-full p-2 pl-3 pr-3" })
        ], "header", "default", { style: "flex justify-center items-center gap-2 bg-gray-400 rounded-full w-min pl-7 m-2" }),
        new Container([
            new Button(
                new Image(
                    [],
                    "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
                    "default",
                    { style: "w-10" }
                ),
            )
        ], "div", "default", { style: "flex gap-2 bg-gray-500 rounded-full m-2" })
    ], "header", "default", { style: "flex justify-between w-screen" })
], "Hi!")