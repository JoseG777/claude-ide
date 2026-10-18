import * as vscode from "vscode";
import { startServer } from "./server";
// TODO A1: import startServer from "./server"

export function activate(context: vscode.ExtensionContext)
{
    vscode.window.showInformationMessage("Hello, claude ide!");
    // TODO A2: create the log panel
    //   - const channel = vscode.window.createOutputChannel("Claude IDE")
    //   - channel.show() so it opens automatically
    //   - channel.appendLine("Claude IDE activated")

    // TODO B: start the server, giving it a way to log
    //   - const server = startServer((msg) => channel.appendLine(msg))
    //   - use the arrow function, not channel.appendLine directly
    //     (passing the method alone loses its `this`)

    // TODO C: make VS Code close the server when the extension stops
    //   - context.subscriptions.push({ dispose: () => server.close() })
    //   - VS Code calls dispose() on everything in this list at shutdown
    const channel = vscode.window.createOutputChannel("Claude IDE");
    channel.show();
    channel.appendLine("Claude IDE Activated");

    const server = startServer((msg) => channel.appendLine(msg));

    context.subscriptions.push({ dispose: () => server.close() });
}

export function deactivate()
{
    // Nothing needed here: cleanup happens through context.subscriptions (TODO C).
    // Later: delete the lock file here too.
}
