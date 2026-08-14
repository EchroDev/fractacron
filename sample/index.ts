import { Application } from "../src/core/application.js";
import { page404 } from "./pages/404.js";
import { loginPage } from "./pages/login.js";
import { mainPage } from "./pages/main.js";

Application.settings({
    titlePrefix: "EchroDev | ",
    pageColor: "black",
    router: new Map([
        ["/", mainPage],
        ["/login", loginPage]
    ]),
    page404
});