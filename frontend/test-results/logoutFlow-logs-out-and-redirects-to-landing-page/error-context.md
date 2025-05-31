# Test info

- Name: logs out and redirects to landing page
- Location: /Users/valion/Documents/School/WD- Year 1/Sem 2/DE/notethat/frontend/tests/e2e/logoutFlow.spec.ts:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected string: "http://localhost:3000/"
Received string: "https://notethat-lw82.onrender.com/"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    9 × locator resolved to <html lang="en">…</html>
      - unexpected value "https://notethat-lw82.onrender.com/"

    at /Users/valion/Documents/School/WD- Year 1/Sem 2/DE/notethat/frontend/tests/e2e/logoutFlow.spec.ts:25:22
```

# Page snapshot

```yaml
- main:
  - heading "Welcome to NoteThat 📒" [level=1]
  - button "Login"
  - button "Register"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('logs out and redirects to landing page', async ({ page }) => {
   4 |   // 1. Go to landing page and click Login
   5 |   await page.goto('https://notethat-lw82.onrender.com');
   6 |   await page.click('text=Login');
   7 |
   8 |   // 2. Fill in login credentials
   9 |   await page.fill('input[placeholder="Email"]', 'valion@example.com');
  10 |   await page.fill('input[placeholder="Password"]', 'notethat123');
  11 |
  12 |   // 3. Submit login form and wait for redirect to /home
  13 |   await Promise.all([
  14 |     page.waitForURL('**/home'),
  15 |     page.click('button:has-text("Login")'),
  16 |   ]);
  17 |
  18 |   // 4. Assert user has reached the home page
  19 |   await expect(page.locator('text=Your Notes')).toBeVisible();
  20 |
  21 |   // 5. Click the user avatar icon to trigger logout
  22 |   await page.click('button >> i.fas.fa-user');
  23 |
  24 |   // 6. Verify redirect back to landing page
> 25 |   await expect(page).toHaveURL('http://localhost:3000/');
     |                      ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
  26 |   await expect(page.locator('text=Welcome to NoteThat')).toBeVisible();
  27 | });
  28 |
```