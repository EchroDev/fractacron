import { Color } from "../types/color.js";
import { Page } from "./page.js";
import { ApplicationTypes } from "../types/application.types.js";

export abstract class Application {
    static router: Map<string, Page>;
    static titlePrefix: string = "";
    static pageColor: Color

    static settings({ titlePrefix, pageColor, router }: ApplicationTypes) {
        if (titlePrefix) this.titlePrefix = titlePrefix;
        if (pageColor) this.pageColor = pageColor;
        if (router) this.router = router;
        this.navigate("/");
        console.log(router)
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