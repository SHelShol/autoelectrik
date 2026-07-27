import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the auto electrician landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Автоэлектрик и компьютерная диагностика в Петропавловске/);
  assert.match(html, /Автоэлектрик и компьютерная диагностика в Петропавловске/);
  assert.match(html, /ISTA/);
  assert.match(html, /Techstream/);
  assert.match(html, /ODIS/);
  assert.match(html, /Stage 1 для АвтоВАЗ/);
  assert.match(html, /iProg Pro/);
  assert.match(html, /Выезд автоэлектрика/);
  assert.match(html, /Петропавловск, СКО/);
  assert.match(html, /\+7 708 502 00 79/);
  assert.match(html, /https:\/\/wa\.me\/77085020079/);
  assert.match(html, /avto_electrik_petropavlovsk_15/);
  assert.match(html, /Жамбыла 12, Петропавловск, СКО/);
  assert.doesNotMatch(html, /\[Ваш Телефон \/ WhatsApp\]|\[Адрес бокса\]/);
  assert.doesNotMatch(html, /кофейной|гущ|гада|наугад|копеечн|полигон/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton|Your site is taking shape/i);
});
