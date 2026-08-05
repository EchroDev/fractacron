import { Button, Container, Image, Label, Reference } from "./index.js"

export class Card extends Container {
    constructor(content: string, ref: Reference<Image>) {
        super({
            style: {
                backgroundColor: "gray",
                border: {
                    radius: 20
                }
            },
            children: [
                new Label({ content }),
                new Button({
                    content: "Go to profile",
                    signals: {
                        onClick: () => {
                            if (ref.element) {
                                ref.element.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/330px-Unofficial_JavaScript_logo_2.svg.png";
                            }
                        }
                    }
                })
            ],
        })
    }
}