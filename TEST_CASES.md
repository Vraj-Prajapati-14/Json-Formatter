# JSON Test Cases

Use these examples to test the specific features of your JSON Formatter & Validator.

## Case 1: The "Trailing Comma" Error
**Features to test:** Validate (should fail), Fix (should remove comma).
```json
{
  "name": "Project Alpha",
  "status": "active",
  "members": [
    "Alice",
    "Bob",
  ],
  "settings": {
    "theme": "dark",
    "notifications": true,
  }
}
```

## Case 2: The "JavaScript Style" (Single Quotes & No Key Quotes)
**Features to test:** Validate (should fail), Fix (might fix depending on logic simplicity).
```javascript
{
  name: 'Project Beta',
  'type': 'test',
  data: {
    id: 123
  }
}
```

## Case 3: Minified & Invalid
**Features to test:** Format (to see structure), Validate (fail), Fix.
```json
{"id":1,"users":["admin","guest",],"active":true,}
```

## Case 4: Deeply Nested (Valid)
**Features to test:** Format (Tree View / Pretty Print), Minify.
```json
{"level1":{"level2":{"level3":[{"id":1,"value":"deep"},{"id":2,"value":"deeper"}]},"meta":{"created":"2023-01-01"}}}
```

## Case 5: Large Dataset (structure)
**Features to test:** Performance of editor and formatter.
```json
[
  {"id": 1, "name": "Item 1", "tags": ["a", "b"]},
  {"id": 2, "name": "Item 2", "tags": ["c", "d"]},
  {"id": 3, "name": "Item 3", "tags": ["e", "f"]},
  {"id": 4, "name": "Item 4", "tags": ["g", "h"]}
]
```
