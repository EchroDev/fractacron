import { Page } from "../core/page.js"
import { Color } from "./color.js"

export type ApplicationTypes = Partial<{
    titlePrefix: string,
    pageColor: Color,
    mainPage: new () => Page
}>