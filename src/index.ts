import Lexer from "./lexer";
import Parser from "./parser";
import Transpiler from "./transpiler";

async function main() {
    const start = performance.now();
    const lexer = new Lexer();
    if (process.argv[2] && process.argv[3]) {
        await lexer.init(process.argv[2], process.argv[3]);
    } else {
        console.log("No file route provided");
        throw new Error("No file provided");
    }
    const parser = new Parser(lexer.tokens);
    await new Transpiler(parser.program).init(process.argv[2]);
    const end = performance.now();
    console.log(`Time: ${(end - start).toFixed(2)}ms`);
}
main();