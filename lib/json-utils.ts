import yaml from 'js-yaml';
import JSON5 from 'json5';

export function fixJson(input: string): string {
    if (!input) return "";

    // Strategy 1: Strict JSON
    try {
        return JSON.stringify(JSON.parse(input), null, 2);
    } catch (e) { }

    // Strategy 2: JSON5 (Handles comments, trailing commas, unquoted keys, single quotes)
    try {
        return JSON.stringify(JSON5.parse(input), null, 2);
    } catch (e) { }

    // Strategy 3: JS-YAML (Superset of JSON, handles some loose syntaxes)
    try {
        return JSON.stringify(yaml.load(input), null, 2);
    } catch (e) { }

    // Strategy 4: Aggressive / Dirty Fixes
    // If we are here, standard parsers failed. We try to patch the string.
    let content = input;

    // 4a. Quote unquoted string values that look like math/dates/ids (e.g. 90566-7771)
    // Look for: "key": value-with-dash-or-text,
    // Note: specific heuristic for the user's zipcode case
    content = content.replace(/:\s*([0-9a-zA-Z]+-[0-9a-zA-Z]+)([,}\s])/g, ': "$1"$2');

    try {
        return JSON.stringify(JSON5.parse(content), null, 2);
    } catch (e) { }

    // 4b. If still failing, try a very permissive Function approach (Safety Warning: Client-Side Only)
    // This evaluates the code as JS. It handles almost everything valid in JS.
    // We wrap it in parenthesis to ensure it's treated as an expression.
    try {
        // eslint-disable-next-line no-new-func
        const func = new Function("return " + content);
        const res = func();
        return JSON.stringify(res, null, 2);
    } catch (e) { }

    // If all fails, return input (or throw the last error if you prefer, but returning input allows user to edit)
    throw new Error("Could not auto-fix even with advanced strategies.");
}
