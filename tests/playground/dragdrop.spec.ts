import { test, expect } from "@playwright/test";

test("draggable can be dragged to droppable", async ({ page }) => {
  await page.goto("/xyzzy/practice_drag_and_drop.html");

  const draggable = await page.locator(".ui-draggable");
  const droppable = await page.locator(".ui-droppable");

  await draggable.dragTo(droppable);
  await expect(droppable).toContainText("Dropped!");
});
