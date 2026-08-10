import { Application } from "../src/core/application.js";
import { loginPage } from "./pages/login.js";
import { mainPage } from "./pages/main.js";

Application.settings({
    titlePrefix: "EchroDev | ",
    router: new Map([
        ["/", mainPage],
        ["/login", loginPage]
    ]),
    backendUrl: "http://localhost:3000"
});