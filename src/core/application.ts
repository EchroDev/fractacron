import { Color } from "../types/color.js";
import { Page } from "./page.js";
import { ApplicationTypes } from "../types/application.types.js";
import { Reference } from "../utilities/reference.js";
import { Base } from "./extends/base.js";

export abstract class Application {
    static router: Map<string, Page>;
    static titlePrefix: string = "";
    static pageColor: Color;
    static backendUrl: string;
    static references: Reference<Base>[] = [];
    private static _page404: Page;
    private static _currentHistoryIndex = 0;

    static settings({ titlePrefix, pageColor, router, page404 }: ApplicationTypes) {
        if (titlePrefix) this.titlePrefix = titlePrefix;
        if (pageColor) this.pageColor = pageColor;
        if (router) this.router = router;
        if (page404) this._page404 = page404;

        window.addEventListener("DOMContentLoaded", () => {
            this.navigate(location.pathname);
        });

        window.addEventListener("popstate", (event: PopStateEvent) => {
            const state = event.state as { idx: number, route: string };
            this.navigate(state.route);
        });
    }

    static navigate(route: string) {
        const page = this.router.get(route);
        if (page) {
            document.body.innerHTML = "";
            history.pushState({ idx: this._currentHistoryIndex++, route }, "", route);
            page.render();
        } else {
            if (this._page404) this._page404.render();
            else document.body.innerHTML = "404 Not Found";
        }
    }
}