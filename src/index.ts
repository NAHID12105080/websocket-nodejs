import WebSocket, { WebSocketServer } from "ws";

import http from "http";

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

const wss = new WebSocketServer({ server });
wss.on("connection", (ws) => {
  wss.on("error", console.error);

  ws.on("message", (message) => {
    console.log("received: %s", message);
  });

  ws.send("something");
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
