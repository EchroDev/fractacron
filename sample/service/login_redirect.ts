import { Application } from "../../src/core/application.js";

export const loginRedirect = () => {
    Application.navigate("/login");
}