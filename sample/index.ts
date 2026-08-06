import { Application } from "../src/core/application.js";
import { MainPage } from "./pages/main.js";

Application.settings({
    titlePrefix: "EchroDev | ",
    mainPage: MainPage
});