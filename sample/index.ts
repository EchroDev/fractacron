import { Application } from "../src/core/application.js";
import { page404 } from "./pages/404.js";
import { everyElementPage } from "./pages/every_element.js";
import { loginPage } from "./pages/login.js";
import { mainPage } from "./pages/main.js";
import { samplePage } from "./pages/sample_page.js";
import "./globals.css";
import { smoothNavbar } from "./pages/smooth_navbar.js";
import { elementFunction } from "./pages/element_function.js";

Application.settings({
    titlePrefix: "EchroDev | ",
    pageColor: "white",
    router: new Map([
        ["/", elementFunction]
    ]),
    page404
});