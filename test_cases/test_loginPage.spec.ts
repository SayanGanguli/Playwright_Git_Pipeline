import {test} from 'playwright/test'

test("login page scenario", async ({page})=> {
    await page.goto('/practice/')
    await page.getByText("Test Login Page").click()
})