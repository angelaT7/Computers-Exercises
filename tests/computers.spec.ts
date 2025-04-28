import { test, expect } from '@playwright/test';

test("Navigation", async ({ page }) => {
await page.goto('https://computer-database.gatling.io/computers')
})