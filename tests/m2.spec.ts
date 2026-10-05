import { test, expect } from '@playwright/test';

test.describe('Milestone 2 Tests', () => {

  test('landing page journey works', async ({ page, isMobile }) => {
    await page.goto('/');

    if (!isMobile) {
      await expect(page.getByRole('navigation').first()).toBeVisible();
      // Ensure spine links exist
      await expect(page.getByText('01 //')).toBeVisible();
    }

    // Hero GSAP fallback (since reduced motion is on) ensures all sections are visible or positioned.
    await expect(page.getByRole('heading', { name: 'Raw System', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Transform', exact: true })).toBeVisible();
  });

  test('BUILD / ServicePulse Case Study layout', async ({ page }) => {
    await page.goto('/projects/build');

    await expect(page).toHaveTitle(/ServicePulse | Kishan R/);

    // Assert Problem and Architecture structure
    await expect(page.getByText('01 // Problem')).toBeVisible();
    await expect(page.getByText('02 // System Architecture')).toBeVisible();
    await expect(page.getByText('03 // Decisions Ledger')).toBeVisible();

    // Check evidence visualization
    await expect(page.getByText('EVIDENCE // Architecture Topology')).toBeVisible();
  });

});
