import { Color } from "../types/color.js";
import { Page } from "./page.js";
import { ApplicationTypes } from "../types/application.types.js";

export abstract class Application {
    static titlePrefix: string = "";
    static pageColor: Color
    static settings({ titlePrefix, pageColor, mainPage }: ApplicationTypes) {
        if (titlePrefix) this.titlePrefix = titlePrefix;
        if (pageColor) this.pageColor = pageColor;
        if (mainPage) this.navigate(mainPage);
    }
    static navigate(page: new () => Page) {
        document.body.innerHTML = "";
        new page();
    }
}