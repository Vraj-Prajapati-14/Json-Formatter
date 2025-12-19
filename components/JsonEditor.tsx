"use client";

import Editor, { useMonaco } from "@monaco-editor/react";
import { useEffect } from "react";
import styles from "./JsonEditor.module.css";
import { useTheme } from "./ThemeProvider";

interface JsonEditorProps {
    value: string;
    onChange?: (value: string | undefined) => void;
    readOnly?: boolean;
    language?: string;
}

export default function JsonEditor({ value, onChange, readOnly = false, language = "json" }: JsonEditorProps) {
    const monaco = useMonaco();
    const { theme } = useTheme();

    useEffect(() => {
        if (monaco) {
            // Define dark theme
            monaco.editor.defineTheme("premium-dark", {
                base: "vs-dark",
                inherit: true,
                rules: [],
                colors: {
                    "editor.background": "#1e293b", // Slate 800
                    "editor.lineHighlightBackground": "#334155",
                    "editorCursor.foreground": "#6366f1",
                },
            });

            // Define light theme
            monaco.editor.defineTheme("premium-light", {
                base: "vs",
                inherit: true,
                rules: [],
                colors: {
                    "editor.background": "#f8fafc", // Slate 50
                    "editor.lineHighlightBackground": "#e2e8f0",
                    "editorCursor.foreground": "#6366f1",
                },
            });

            // Set theme based on current theme
            monaco.editor.setTheme(theme === "dark" ? "premium-dark" : "premium-light");
        }
    }, [monaco, theme]);

    const handleEditorDidMount = (editor: any) => {
        // You can add event listeners or additional configuration here
    };

    return (
        <div className={styles.editorContainer}>
            <Editor
                height="100%"
                defaultLanguage={language}
                value={value}
                onChange={onChange}
                theme={theme === "dark" ? "premium-dark" : "premium-light"}
                options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: "on",
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    readOnly: readOnly,
                    formatOnPaste: true,
                    formatOnType: true,
                    fontFamily: "'JetBrains Mono', monospace",
                }}
                onMount={handleEditorDidMount}
            />
        </div>
    );
}
