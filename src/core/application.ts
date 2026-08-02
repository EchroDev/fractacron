import { Color } from "../types/color.js";

export abstract class Application {
    static titlePrefix: string = "";
    static pageColor: Color
    static settings({titlePrefix, pageColor}: Partial<{titlePrefix: string, pageColor: Color}>) {
        if (titlePrefix) this.titlePrefix = titlePrefix;
        if (pageColor) this.pageColor = pageColor;
    }
}