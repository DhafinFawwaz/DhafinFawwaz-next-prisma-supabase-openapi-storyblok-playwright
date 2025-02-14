import { createUser, DANGEROUSLY_deleteAllUsers, getAllUsers } from '@/repository/database/user.repository';
import { test, expect, chromium } from '@playwright/test';
import { createPageWithRecording } from './recorder';

test.beforeEach(async ({ page }) => {
  await DANGEROUSLY_deleteAllUsers();
});
test.afterEach(async ({ page }) => {
  await DANGEROUSLY_deleteAllUsers();
});

test('openapi page should contain GIM in title', async ({  }) => {

  // Uncomment if you dont want to record video
  const { page, context, browser } = await createPageWithRecording();

  await page.goto('/doc');
  await expect(page).toHaveTitle(/GIM/);

  // Uncomment if you dont want to record video
  await context.close();
});


test('should user created', async ({  }) => {

  await createUser("Kodok", "kodok@gmail.com");
  const allUsers = await getAllUsers();
  expect(allUsers.length).toBe(1);
  expect(allUsers[0].name).toBe("Kodok");

});
