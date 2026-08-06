import { Application } from "../../src/core/application.js";
import { LoginPage } from "../pages/login.js";

export const loginRedirect = () => {
    Application.navigate(LoginPage);
}