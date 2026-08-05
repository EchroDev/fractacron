#!/usr/bin/env node

export type { Color, colorToHex } from "./types/color.js";
export type { ListType } from "./types/list.types.js";
export { Reference } from "./utilities/reference.js";
export { Page } from "./core/page.js";
export { Label } from "./elements/label.js"
export { Button } from "./elements/button.js";
export { Container } from "./elements/containter.js";
export { Value } from "./utilities/value.js";
export { Application } from "./core/application.js";
export { TextInput } from "./elements/text_input.js";
export { Image } from "./elements/image.js";
export { List } from "./elements/list.js";

const args = process.argv;

const helpCommand = () => {
    console.log("Available fast commands: ");
    console.log("\t--version | -v // It provides fractacron version.");
    console.log("\t--help | -h // It provides all the commands.");
    console.log("\t--errors | -e // It provides all the errors and messages.");
    console.log("Available abstract commands:");
    console.log("\tcreate | arguments: [<name_of_the_proyect>] // It creates a new fractacron proyect.")
}

if (args.length === 2) {
    console.log(" --- Fractacron CLI ---");
    console.log("Fractacron version: v0.4\n");
    helpCommand();
    process.exit(0);
} else if (args[2] === "--version" || args[2] === "-v") {
    console.log("Fractacron version: v0.4");
    process.exit(0);
} else if (args[2] === "--help" || args[2] === "-h") helpCommand();
else if (args[2] === "--errors" || args[2] === "-e") {
    console.log("Available errors and messages:\n");
    console.log("[UNKNOWN_CMD_ERR]: Command not found, use the command --help | -h for help.");
} else if (args[2] === "create") {

}
else {
    console.log("[UNKNOWN_CMD_ERR]: Command not found, use the command --help | -h for help.");
    process.exit(1);
}