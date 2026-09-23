import { test, expect } from '@playwright/test';

test('отправка сообщения через форму контактов', async ({ page }) => {
  await page.route('**/api/projects', async (route) => {
    expect(route.request().method()).toBe('POST');
    await route.fulfill({
      status: 201,
      contentType: 'application/json',
      body: JSON.stringify({
        _id: 'mock-id',
        title: 'Сообщение от Валерия',
        description: 'Здравствуйте, хочу обсудить проект',
        imageUrl: '',
      }),
    });
  });

  await page.goto('/#contact');

  await page.getByLabel('Имя').fill('Валерия');
  await page.getByLabel('Email').fill('valeria@studio.com');
  await page.getByLabel('Сообщение').fill('Здравствуйте, хочу обсудить проект');
  await page.getByRole('button', { name: 'Отправить' }).click();

  await expect(page.getByRole('status')).toHaveText(
    'Сообщение успешно отправлено',
  );
});
