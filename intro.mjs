import puppeteer from "puppeteer";
import { setTimeout } from "timers/promises";

const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: { width: 1920, height: 1080 },
  //   slowMo: 250,
  userDataDir: "temporary",
});

const page = await browser.newPage();
// await page.goto("https://example.com/", {
//   waitUntil: "networkidle2",
//   timeout: 60000,
// });
// await page.screenshot({ path: "example.com.png" });

// await page.goto("https://intwins.com/");
// await page.screenshot({ path: "intiwns.com.png" });

// await page.goto("https://devconfbd.com/");
// await page.waitForSelector("img[alt='guest']");
// await page.click("img[alt='guest']");
// await setTimeout(1000);
// await page.screenshot({ path: "guest.png" });

await page.goto("https://devconfbd.com/");
const guestElement = await page.waitForSelector(
  "img[alt='FlexyMama - A beginner-friendly game to learn CSS Flexbox']"
);
await guestElement.scrollIntoView();
await guestElement.click(
  "img[alt='FlexyMama - A beginner-friendly game to learn CSS Flexbox']"
);
// await setTimeout(4000);
await setTimeout(4000);
await page.screenshot({ path: "MAMA.png" });

await browser.close();
