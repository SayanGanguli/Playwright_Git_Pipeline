import {test} from 'playwright/test'

test("login page scenario", async ({page})=> {
    await page.goto('/practice/')
})