import { Page } from "../../src/core/page.js";
import { List } from "../../src/elements/list.js";
import { LoginField } from "../components/login_field.js";

export const loginPage = new Page(new List([
    new LoginField("Username", "Example: EchroDev"),
    new LoginField("Password", "Example: 1234abcd"),
], {}), {
    title: "Login"
});