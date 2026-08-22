import { Page } from "../../src";
import { div } from "../../src/elements/containter.js";
import { button } from "../../src/elements/button";
import { input } from "../../src/elements/input.js";
import { li, ol } from "../../src/elements/list.js";

export const elementFunction = new Page([
    div([
        button([], "Hola"),
        input([], { inputType: "email", placeholder: "example@gmail.com" }),
        ol([
            li(
                button([], "First")),
            li(
                button([], "Second")
            ), li(
                button([], "Third")
            )
        ])
    ])
])