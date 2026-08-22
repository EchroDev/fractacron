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
    console.log("\tbuild | arguments: [<src_path_name>] [<file_name>] | optional: --run | -r");
}

if (args.length === 2) {
    console.log(" --- Fractacron CLI ---");
    console.log("Fractacron version: v0.7.0\n");
    helpCommand();
    process.exit(0);

} else if (args[2] === "--version" || args[2] === "-v") {
    console.log("Fractacron version: v0.7.0");
    process.exit(0);
}

else if (args[2] === "--help" || args[2] === "-h") {
    helpCommand();
}

else if (args[2] === "--errors" || args[2] === "-e") {
    console.log("Available errors and messages:\n");
    console.log("[UNKNOWN_CMD_ERR]: Command not found, use the command --help | -h for help.");

} else if (args[2] === "init" && args[3]) {
    await initCommand();
}

else if (args[2] === "build" && args[3] && args[4]) {
    execSync(`tsx ./src/index.ts ${args[3]} ${args[4]}`);
    console.log("Fractacron project builded");
    if (args[5] === "--run" || args[5] === "-r") {
        execSync("npm run dev", { stdio: "inherit" });
    }
    process.exit(0);
}

else {
    console.log("[UNKNOWN_CMD_ERR]: Command not found, use the command --help | -h for help.");
    process.exit(1);
}

async function initCommand() {
    try {
        await mkdir(args[3]!);
        await mkdir(`${args[3]}/public`);
        await mkdir(`${args[3]}/src`);
    } catch {
        throw new Error("There was an error while creating the fractacron project");
    }

    try {
        execSync('npm i fractacron@latest typescript@latest vite@latest @types/node@latest tsx@latest -D', { stdio: "inherit", cwd: `./${args[3]}` });
        execSync('npx tsc --init', { stdio: "inherit", cwd: `./${args[3]}` });
    } catch {
        console.log("[INIT_PROJECT_ERROR] An npm / npx command failed. Try again.");
        process.exit(1);
    }

    const htmlFile = [
        "<!DOCTYPE html>",
        "<html lang=\"en\">",
        "<head>",
        "\t<meta charset=\"UTF-8\">",
        "\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "\t<title>Fractacron Project</title>",
        "\t<link rel=\"stylesheet\" href=\"./globals.css\">",
        "</head>",
        "<body>",
        "\t<script type=\"module\" src=\"./dist/index.js\"></script>",
        "</body>",
        "</html>"
    ];

    const fractacronFile = [
        "<h1 className=\"text-3xl m-2\">Fractacron</h1>",
    ];

    const cssFile = [
        "@import \"tailwindcss\";",
        "@source \"./*.fractacron\";"
    ];

    const viteConfig = [
        "import tailwindcss from '@tailwindcss/vite';",
        "import { defineConfig } from 'vite';",
        "export default defineConfig({",
        "  root: \"./src\",",
        "  plugins: [tailwindcss()],",
        "})"
    ];

    try {
        await writeFile(`${args[3]}/src/index.html`, htmlFile.join("\n"));
        await writeFile(`${args[3]}/src/index.fractacron`, fractacronFile.join("\n"));
        await writeFile(`${args[3]}/src/globals.css`, cssFile.join("\n"));
        await writeFile(`${args[3]}/vite.config.ts`, viteConfig.join("\n"));
    } catch {
        throw new Error("There was an error while creating the initial files");
    }

    // Falta crear el resto de archivos.
    console.log(`✅ Project by the name of \"${args[3]}\" has been succesfully created.`);
    process.exit(0);
}