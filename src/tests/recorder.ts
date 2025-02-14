import { chromium } from "@playwright/test";


export async function createPageWithRecording() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 640, height: 480 },
        }
    });
    const page = await context.newPage();
    return { browser, context, page };
}