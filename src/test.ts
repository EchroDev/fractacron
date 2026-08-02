import { Color, Page, Label, Button, Container, Value, Application, TextInput } from "./index.js";

Application.settings({
    titlePrefix: "EchroDev | ",
    pageColor: "gray"
});

const page: Page = new Page({
    title: "Hola, mundo!",
    style: {
        backgroundColor: "gray"
    }
});

const container = new Container({
    parent: page,
    style: {
        backgroundColor: "blue",
        gap: 10,
        center: true,
        border: {
            radius: 20,
            size: 8,
            color: "black"
        }
    }
});

const value = new Value<string>("Hola mundo!");
const label: Label = new Label({
    content: value,
    parent: container,
    style: {
        opacity: 50,
        contentColor: "white"
    }
});

label.onContentChange(() => {
    label.opacity = 50;
});

const button = new Button({
    parent: container,
    content: value,
    style: {
        contentColor: "white"
    },
    signals: {
        onClick() {
            value.setContent("Chao, mundo!")
        },
    }
});

const input = new TextInput({
    parent: container,
    title: "Nombre de usuario",
    placeholder: "Example: EchroDev"
})