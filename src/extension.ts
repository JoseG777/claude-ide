import * as vscode from "vscode";
import { startServer } from "./server";
// TODO A1: import startServer from "./server"

export function activate(context: vscode.ExtensionContext)
{
    vscode.window.showInformationMessage("Hello, claude ide!");

    const channel = vscode.window.createOutputChannel("Claude IDE");
    channel.show();
    channel.appendLine("Claude IDE Activated");

    const server = startServer((msg) => channel.appendLine(msg));

    context.subscriptions.push({ dispose: () => server.close() });
}

export function deactivate()
{
}
