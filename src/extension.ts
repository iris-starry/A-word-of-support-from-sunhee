import * as vscode from 'vscode';

import quotesData from './quotes.json';

interface Quote {
    quote: string;
    author: string;
}

function getRandomQuote(): Quote {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    return quotesData[randomIndex];
}

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "a-word-of-support-from-sunhee" is now active!');

    // Create a new output channel
    const outputChannel = vscode.window.createOutputChannel('Random Quotes');

    // Get a random quote
    const quote = getRandomQuote();

    // Show the random quote in the output channel
    outputChannel.appendLine(`"${quote.quote}" - ${quote.author}`);

    // Show the output channel
    outputChannel.show();
}

export function deactivate() {}
