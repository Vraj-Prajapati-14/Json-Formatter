"use client";

import { useState } from "react";
import { Copy, Trash2, CheckCircle, AlertTriangle, Minimize, Maximize, Wrench, ArrowRight } from "lucide-react";
import JsonEditor from "./JsonEditor";
import styles from "./JsonTool.module.css";
import clsx from "clsx";
import { fixJson } from "@/lib/json-utils";

export default function JsonTool() {
    const [input, setInput] = useState<string>('{"example": "paste your json here", "trailing": "comma",}');
    const [output, setOutput] = useState<string>("");
    const [status, setStatus] = useState<{ type: "error" | "success" | null; message: string }>({ type: null, message: "" });

    const handleFormat = () => {
        try {
            if (!input.trim()) return;
            const parsed = JSON.parse(input);
            setOutput(JSON.stringify(parsed, null, 2));
            setStatus({ type: "success", message: "Valid JSON formatted successfully." });
        } catch (e: any) {
            setStatus({ type: "error", message: e.message });
        }
    };

    const handleMinify = () => {
        try {
            if (!input.trim()) return;
            const parsed = JSON.parse(input);
            setOutput(JSON.stringify(parsed));
            setStatus({ type: "success", message: "JSON minified successfully." });
        } catch (e: any) {
            setStatus({ type: "error", message: e.message });
        }
    };

    const handleFix = () => {
        try {
            const fixed = fixJson(input);
            // Try to format it to verify
            const parsed = JSON.parse(fixed);
            setInput(fixed); // Update input with fixed version
            setOutput(JSON.stringify(parsed, null, 2));
            setStatus({ type: "success", message: "JSON auto-corrected and formatted." });
        } catch (e: any) {
            setStatus({ type: "error", message: "Could not auto-fix: " + e.message });
        }
    };

    const handleClear = () => {
        setInput("");
        setOutput("");
        setStatus({ type: null, message: "" });
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(output);
        setStatus({ type: "success", message: "Copied to clipboard!" });
        setTimeout(() => setStatus({ type: null, message: "" }), 2000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.toolbar}>
                <div className={styles.actions}>
                    <button onClick={handleFormat} className="btn btn-primary">
                        <Maximize size={18} /> Format
                    </button>

                    <ArrowRight size={16} style={{ opacity: 0.5 }} />

                    <button onClick={handleFormat} className="btn btn-secondary">
                        <CheckCircle size={18} /> Validate
                    </button>

                    <ArrowRight size={16} style={{ opacity: 0.5 }} />

                    <button onClick={handleFix} className="btn btn-secondary">
                        <Wrench size={18} /> Fix
                    </button>

                    <ArrowRight size={16} style={{ opacity: 0.5 }} />

                    <button onClick={handleMinify} className="btn btn-secondary">
                        <Minimize size={18} /> Minify
                    </button>
                </div>
                <div className={styles.actions}>
                    <button onClick={handleCopy} className="btn btn-secondary" title="Copy Output">
                        <Copy size={18} />
                    </button>
                    <button onClick={handleClear} className="btn btn-secondary" title="Clear All">
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>

            {status.message && (
                <div className={clsx(styles.status, status.type === "error" ? styles.statusError : styles.statusSuccess)}>
                    {status.type === "error" ? <AlertTriangle size={18} style={{ display: 'inline', marginRight: 8 }} /> : <CheckCircle size={18} style={{ display: 'inline', marginRight: 8 }} />}
                    {status.message}
                </div>
            )}

            <div className={styles.workspace}>
                <div className={styles.pane}>
                    <div className={styles.paneHeader}>
                        <span>Input JSON</span>
                        <span>{(new Blob([input]).size / 1024).toFixed(2)} KB</span>
                    </div>
                    <JsonEditor value={input} onChange={(val) => setInput(val || "")} />
                </div>
                <div className={styles.pane}>
                    <div className={styles.paneHeader}>
                        <span>Output / Formatted</span>
                        <span>{(new Blob([output]).size / 1024).toFixed(2)} KB</span>
                    </div>
                    <JsonEditor value={output} readOnly={true} />
                </div>
            </div>
        </div>
    );
}
