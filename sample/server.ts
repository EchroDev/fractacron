import { createServer, IncomingMessage, ServerResponse } from "node:http";

const server = createServer((req: IncomingMessage, res: ServerResponse) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.url === "/login" && req.method === "POST") {
        let body = ""
        req.on("data", (chunk) => body += chunk)
        console.log(body);
        res.end("Recibido");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});