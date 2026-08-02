import { Application, Page, Container, Button, Label, TextInput } from "./index.js";

Application.settings({
    titlePrefix: "EchroDev | ",
    pageColor: "black"
});

const page = new Page({
    title: "Main",
    children: new Container({
        children: [
            new Button({content: "Hello world!"}),
            new Label({content: "XD"}),
            new TextInput({placeholder: "Nombre de usuario", title: "Hola"})
        ]
    })
});