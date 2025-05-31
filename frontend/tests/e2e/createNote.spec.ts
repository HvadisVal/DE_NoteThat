import { test, expect } from '@playwright/test';

test('user can log in and create a note', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // 1: Click Login on landing page
  await page.click('text=Login');

  // 2: Fill in login
  await page.fill('input[placeholder="Email"]', 'valion@example.com');
  await page.fill('input[placeholder="Password"]', 'notethat123');

  // 3: Submit and wait for redirect to /home
  await Promise.all([
    page.waitForURL('**/home'),
    page.click('button:has-text("Login")'),
  ]);

  // 4: Verify dashboard is visible
  await expect(page.locator('text=Your Notes')).toBeVisible();

  // Generate unique values
  const uniqueId = Date.now();
  const noteTitle = `E2E Note Title ${uniqueId}`;
  const noteContent = `E2E Note Content ${uniqueId}`;

  // 5: Open modal and fill
  await page.click('button:has-text("New Note")');
  await page.fill('input[placeholder="📌 Title"]', noteTitle);
  await page.fill('textarea[placeholder="📝 Content"]', noteContent);
  await page.selectOption('select', { label: 'Development' });
  await page.selectOption('select:nth-of-type(2)', { label: 'Blue' });

  // 6: Submit note
  await page.click('button:has-text("Save")');

  // 7: Verify result
  await expect(page.locator(`text=${noteTitle}`)).toBeVisible();
  await expect(page.locator(`text=${noteContent}`)).toBeVisible();
});
