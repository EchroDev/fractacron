#!/usr/bin/env node

import { execSync } from "child_process";
import { mkdir, writeFile } from "fs/promises"

const args = process.argv;
const helpCommand = () => {
    console.log("Available fast commands: ");
    console.log("\t--version | -v // It provides fractacron version.");
    console.log("\t--help | -h // It provides all the commands.");
    console.log("\t--errors | -e // It provides all the errors and messages.");
    console.log("Available abstract commands:");
    console.log("\tinit | arguments: [<name_of_the_proyect>] // It creates a new fractacron proyect.");
}

if (args.length === 2) {
    console.log(" --- Fractacron CLI ---");
    console.log("Fractacron version: v0.5\n");
    helpCommand();
    process.exit(0);
} else if (args[2] === "--version" || args[2] === "-v") {
    console.log("Fractacron version: v0.5");
    process.exit(0);
} else if (args[2] === "--help" || args[2] === "-h") helpCommand();
else if (args[2] === "--errors" || args[2] === "-e") {
    console.log("Available errors and messages:\n");
    console.log("[UNKNOWN_CMD_ERR]: Command not found, use the command --help | -h for help.");
} else if (args[2] === "init" && args[3]) {

    await mkdir(args[3]);
    await mkdir(`${args[3]}/public`);
    await mkdir(`${args[3]}/assets`);
    await mkdir(`${args[3]}/src`);
    await mkdir(`${args[3]}/src/utilities`);
    await mkdir(`${args[3]}/src/pages`);
    await mkdir(`${args[3]}/src/components`);
    await mkdir(`${args[3]}/src/styles`);
    await mkdir(`${args[3]}/src/core`);

    try {
        execSync('npm i fractacron@latest typescript@latest vite@latest @types/node@latest -D', { stdio: "inherit", cwd: `./${args[3]}` });
        execSync('npx tsc --init', { stdio: "inherit", cwd: `./${args[3]}` });
    } catch {
        console.log("[INIT_PROJECT_ERROR] An npm / npx command failed. Try again.");
        process.exit(1);
    }

    const indexFile = [
        "import { Application } from \"fractacron\"",
        "import { MainPage } from \"./pages/mainPage.js\"",
        "",
        "Application.settings({",
        "    titlePrefix: \"EchroDev | \",",
        "    mainPage: MainPage",
        "});"
    ];

    await writeFile(`${args[3]}/index.ts`, indexFile.join("\n"));

    // Falta crear el resto de archivos.
    console.log(`✅ Project by the name of \"${args[3]}\" has been succesfully created.`);
    process.exit(0);
}
else {
    console.log("[UNKNOWN_CMD_ERR]: Command not found, use the command --help | -h for help.");
    process.exit(1);
}