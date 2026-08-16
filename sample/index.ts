import { Application } from "../src/core/application.js";
import { page404 } from "./pages/404.js";
import { everyElementPage } from "./pages/every_element.js";
import { loginPage } from "./pages/login.js";
import { mainPage } from "./pages/main.js";
import { samplePage } from "./pages/sample_page.js";

Application.settings({
    titlePrefix: "EchroDev | ",
    pageColor: "white",
    router: new Map([
        ["/", everyElementPage],
        ["/login", loginPage]
    ]),
    page404
});