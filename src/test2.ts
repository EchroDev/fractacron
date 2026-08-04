import { Application, Page, Container, Button, Label, TextInput, Image, Reference } from "./index.js";
import { Card } from "./card.js";

Application.settings({
    titlePrefix: "EchroDev | ",
    pageColor: "black"
});

const ref = new Reference<Image>();

const page = new Page({
    title: "Main",
    children: new Container({
        children: [
            new Button({ content: "Hello world!" }),
            new Label({ content: "XD" }),
            new TextInput({
                placeholder: "Nombre de usuario",
                title: "Hola",
                signals: {
                    onContentChange: () => {
                        console.log("XD");
                    }
                }
            }),
            new Image({
                url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg",
                style: {
                    border: {
                        radius: 50,
                        size: 10,
                        color: "red"
                    }
                },
                reference: ref
            }),
            new Card("EchroDev", ref),
            new Card("DevEchro", ref)
        ]
    })
});