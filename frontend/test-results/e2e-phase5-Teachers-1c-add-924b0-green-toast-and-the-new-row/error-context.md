# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\phase5.spec.js >> Teachers >> 1c. adding a real teacher shows a green toast and the new row
- Location: e2e\phase5.spec.js:198:3

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByPlaceholder('Search teachers...')

```

```
Error: browserContext.close: Target page, context or browser has been closed
```