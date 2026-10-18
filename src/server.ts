import { WebSocketServer } from "ws";

// Starts the local WebSocket server that Claude Code will connect to.
// `log` is passed in by extension.ts so this file never imports vscode
// (that keeps it testable with plain Node).
export function startServer(log: (message: string) => void)
{
    const server = new WebSocketServer({host: "127.0.0.1", port: 0});

    server.on("listening", () => {
        const address = server.address();
        if(typeof address === "object" && address !== null)
        {
            log(`Listening to port: ${address.port}`);
        }
    });

    return server;
}
