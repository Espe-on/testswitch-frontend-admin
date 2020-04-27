﻿import {TextEditorOptions} from '../../Models/TextEditorOptions';

const TextEditorSettings: TextEditorOptions = {
    readOnly: true,
    autoClosingBrackets: "languageDefined",
    autoClosingQuotes: "languageDefined",
    codeLens: false,
    lightbulb: {
        enabled: false
    },
    folding: false,
    suggest: {
        showMethods: false,
        showFunctions: false,
        showConstructors: false,
        showFields: false,
        showVariables: true,
        showClasses: true,
        showStructs: false,
        showInterfaces: true,
        showModules: false,
        showProperties: false,
        showEvents: false,
        showOperators: false,
        showUnits: false,
        showValues: false,
        showConstants: true,
        showEnums: false,
        showEnumMembers: false,
        showKeywords: true,
        showWords: true,
        showColors: false,
        showFiles: false,
        showReferences: false,
        showFolders: true,
        showTypeParameters: false,
        showSnippets: false,
        maxVisibleSuggestions: 5,
    }
};
export {TextEditorSettings};