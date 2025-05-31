# Test info

- Name: creates a pinned note and verifies it appears under 📌 Pinned
- Location: /Users/valion/Documents/School/WD- Year 1/Sem 2/DE/notethat/frontend/tests/e2e/pinNote.spec.ts:3:5

# Error details

```
Error: expect.toBeVisible: Error: strict mode violation: locator('div:has(h2:has-text("📌 Pinned"))').locator('h3').filter({ hasText: 'Pinned Note E2E' }) resolved to 3 elements:
    1) <h3 class="text-lg font-bold text-blue-300">Pinned Note E2E</h3> aka getByRole('heading', { name: 'Pinned Note E2E' }).first()
    2) <h3 class="text-lg font-bold text-blue-300">Pinned Note E2E</h3> aka getByRole('heading', { name: 'Pinned Note E2E' }).nth(1)
    3) <h3 class="text-lg font-bold text-blue-300">Pinned Note E2E</h3> aka locator('div').filter({ hasText: /^Pinned Note E2EPersonalThis note is pinned6\/1\/2025📌 Unpin$/ }).getByRole('heading')

Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('div:has(h2:has-text("📌 Pinned"))').locator('h3').filter({ hasText: 'Pinned Note E2E' })

    at /Users/valion/Documents/School/WD- Year 1/Sem 2/DE/notethat/frontend/tests/e2e/pinNote.spec.ts:41:5
```

# Page snapshot

```yaml
- main:
  - text: 
  - heading "NoteThat" [level=1]
  - textbox "Search notes..."
  - text: 
  - button ""
  - button ""
  - heading " Your Notes" [level=1]
  - textbox "🔍 Search notes..."
  - button "+ New Note"
  - heading "📌 Pinned" [level=2]
  - heading "Note from Postman 2.1" [level=3]
  - text: Development
  - paragraph: This was created using Postman again.
  - text: 3/30/2025
  - button "📌 Unpin"
  - heading "TEST" [level=3]
  - text: Personal
  - paragraph: Testing note functionality
  - text: 4/9/2025
  - button "📌 Unpin"
  - heading "Pinned Note E2E" [level=3]
  - text: Personal
  - paragraph: This note is pinned
  - text: 5/31/2025
  - button "📌 Unpin"
  - heading "Pinned Note E2E" [level=3]
  - text: Personal
  - paragraph: This note is pinned
  - text: 5/31/2025
  - button "📌 Unpin"
  - heading "Pinned Note E2E" [level=3]
  - text: Personal
  - paragraph: This note is pinned
  - text: 6/1/2025
  - button "📌 Unpin"
  - heading "Pinned Note E2E" [level=3]
  - text: Personal
  - paragraph: This note is pinned
  - text: 6/1/2025
  - button "📌 Unpin"
  - separator
  - heading "Note from Postman" [level=3]
  - text: Development
  - paragraph: This was created using Postman.
  - text: 3/30/2025
  - button "📍 Pin"
  - heading "Note from Postman 3.0" [level=3]
  - text: Development
  - paragraph: This was created using Postman.
  - text: 3/30/2025
  - button "📍 Pin"
  - heading "DE" [level=3]
  - text: Research
  - paragraph: The manadatory assignment
  - text: 4/8/2025
  - button "📍 Pin"
  - heading "Presentation" [level=3]
  - text: Personal
  - paragraph: right now
  - text: 4/9/2025
  - button "📍 Pin"
  - heading "Integration Note" [level=3]
  - text: Test
  - paragraph: Created via fullstack test
  - text: 5/30/2025
  - button "📍 Pin"
  - heading "E2E Note Title" [level=3]
  - text: Development
  - paragraph: E2E Note Content
  - text: 5/31/2025
  - button "📍 Pin"
  - heading "E2E Note Title 1748710585478" [level=3]
  - text: Development
  - paragraph: E2E Note Content 1748710585478
  - text: 5/31/2025
  - button "📍 Pin"
  - heading "Integration Note" [level=3]
  - text: Test
  - paragraph: Created via fullstack test
  - text: 5/31/2025
  - button "📍 Pin"
  - heading "Integration Note" [level=3]
  - text: Test
  - paragraph: Created via fullstack test
  - text: 5/31/2025
  - button "📍 Pin"
  - heading "Integration Note" [level=3]
  - text: Test
  - paragraph: Created via fullstack test
  - text: 5/31/2025
  - button "📍 Pin"
  - heading "Integration Note" [level=3]
  - text: Test
  - paragraph: Created via fullstack test
  - text: 5/31/2025
  - button "📍 Pin"
  - heading "Integration Note" [level=3]
  - text: Test
  - paragraph: Created via fullstack test
  - text: 5/31/2025
  - button "📍 Pin"
  - heading "Integration Note" [level=3]
  - text: Test
  - paragraph: Created via fullstack test
  - text: 5/31/2025
  - button "📍 Pin"
  - heading "Integration Note" [level=3]
  - text: Test
  - paragraph: Created via fullstack test
  - text: 5/31/2025
  - button "📍 Pin"
  - heading "Integration Note" [level=3]
  - text: Test
  - paragraph: Created via fullstack test
  - text: 5/31/2025
  - button "📍 Pin"
  - heading "Integration Note" [level=3]
  - text: Test
  - paragraph: Created via fullstack test
  - text: 6/1/2025
  - button "📍 Pin"
  - heading "Integration Note" [level=3]
  - text: Test
  - paragraph: Created via fullstack test
  - text: 6/1/2025
  - button "📍 Pin"
  - heading "Integration Note" [level=3]
  - text: Test
  - paragraph: Created via fullstack test
  - text: 6/1/2025
  - button "📍 Pin"
  - heading "Integration Note" [level=3]
  - text: Test
  - paragraph: Created via fullstack test
  - text: 6/1/2025
  - button "📍 Pin"
  - heading "Integration Note" [level=3]
  - text: Test
  - paragraph: Created via fullstack test
  - text: 6/1/2025
  - button "📍 Pin"
  - heading "E2E Note Title 1748732847505" [level=3]
  - text: Development
  - paragraph: E2E Note Content 1748732847505
  - text: 6/1/2025
  - button "📍 Pin"
  - heading "E2E Note Title 1748733601310" [level=3]
  - text: Development
  - paragraph: E2E Note Content 1748733601310
  - text: 6/1/2025
  - button "📍 Pin"
  - heading "E2E Note Title 1748733653012" [level=3]
  - text: Development
  - paragraph: E2E Note Content 1748733653012
  - text: 6/1/2025
  - button "📍 Pin"
  - heading "E2E Note Title 1748733709008" [level=3]
  - text: Development
  - paragraph: E2E Note Content 1748733709008
  - text: 6/1/2025
  - button "📍 Pin"
  - heading "E2E Note Title 1748733741008" [level=3]
  - text: Development
  - paragraph: E2E Note Content 1748733741008
  - text: 6/1/2025
  - button "📍 Pin"
  - heading "📝 Task Board" [level=2]
  - button "+ New Task"
  - heading "todo" [level=3]
  - paragraph: No tasks
  - heading "in Progress" [level=3]
  - paragraph: No tasks
  - heading "done" [level=3]
  - paragraph: No tasks
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('creates a pinned note and verifies it appears under 📌 Pinned', async ({ page }) => {
   4 |   // 1. Visit frontend
   5 |   await page.goto('https://notethat-lw82.onrender.com');
   6 |
   7 |   await page.click('text=Login');
   8 |
   9 |   // 2. Login
  10 |   await page.fill('input[placeholder="Email"]', 'valion@example.com');
  11 |   await page.fill('input[placeholder="Password"]', 'notethat123');
  12 |   await page.click('button:has-text("Login")');
  13 |
  14 |   // 3. Wait for dashboard/home
  15 |   await expect(page.locator('text=Your Notes')).toBeVisible();
  16 |
  17 |   // 4. Click New Note
  18 |   await page.click('button:has-text("New Note")');
  19 |
  20 |   // 5. Fill out note fields
  21 |   await page.fill('input[placeholder="📌 Title"]', 'Pinned Note E2E');
  22 |   await page.fill('textarea[placeholder="📝 Content"]', 'This note is pinned');
  23 |
  24 |   // 6. Select category and color
  25 |   await page.selectOption('select', { label: 'Personal' }); // category dropdown
  26 |   await page.selectOption('select:nth-of-type(2)', { label: 'Blue' }); // color dropdown
  27 |
  28 |   // 7. Enter tags
  29 |   await page.fill('input[placeholder="🏷️ Tags (comma separated)"]', 'e2e,test');
  30 |
  31 |   // 8. Check pin box
  32 |   await page.check('input[type="checkbox"]');
  33 |
  34 |   // 9. Save
  35 |   await page.click('button:has-text("Save")');
  36 |
  37 |   // 10. Check for the note under the 📌 Pinned section
  38 |   await expect(page.locator('text=📌 Pinned')).toBeVisible();
  39 |   await expect(
  40 |     page.locator('div:has(h2:has-text("📌 Pinned")) >> h3', { hasText: 'Pinned Note E2E' })
> 41 |   ).toBeVisible();
     |     ^ Error: expect.toBeVisible: Error: strict mode violation: locator('div:has(h2:has-text("📌 Pinned"))').locator('h3').filter({ hasText: 'Pinned Note E2E' }) resolved to 3 elements:
  42 |     await expect(
  43 |     page.locator('p', { hasText: 'This note is pinned' }).first()
  44 |   ).toBeVisible();
  45 |   });
```