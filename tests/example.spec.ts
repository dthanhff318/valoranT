import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("http://localhost:5173/login");

	await page.fill("#username", "admin");
	await page.fill("#password", "123");
	await page.waitForTimeout(1000);
	await page.click("#login-button");
	await page.waitForTimeout(3000);

	// Expect a title "to contain" a substring.
	await expect(page.locator("span")).toHaveText("NGAHAHAHAHAhA");
});
