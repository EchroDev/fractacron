import { Color } from "../types/color.js";
import { Page } from "./page.js";
import { ApplicationTypes } from "../types/application.types.js";
import { Reference } from "../utilities/reference.js";
import { Base } from "./extends/base.js";

export abstract class Application {
    static router: Map<string, Page>;
    static titlePrefix: string = "";
    static pageColor: Color
    static backendUrl: string
    static references: Reference<Base>[] = [];

    static settings({ titlePrefix, pageColor, router, backendUrl }: ApplicationTypes) {
        if (titlePrefix) this.titlePrefix = titlePrefix;
        if (pageColor) this.pageColor = pageColor;
        if (router) this.router = router;
        if (backendUrl) this.backendUrl = backendUrl;
        this.navigate("/");
    }

    static navigate(route: string) {
        const page = this.router.get(route);
        if (page) {
            document.body.innerHTML = "";
            history.pushState({}, "", route);
            page.render();
        }
    }
}