"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const PORT = process.env.PING_LISTEN_PORT || 7878; // 7878 default port
// server create
http_1.default.createServer((req, res) => {
    if (req.url === "/ping" && req.method === "GET") {
        res.write(JSON.stringify(req.headers)); // write response to client
        res.end();
    }
    else if (req.method === "GET") {
        res.writeHead(404, { "Content-Type": "text/html" }); // 404 not found
        res.end();
    }
    else {
        res.writeHead(500, { "Content-Type": "text/html" }); // 500 internal error
        res.end();
    }
    ;
}).listen(PORT);
console.log(`Server is running on PORT: ${PORT}`);
