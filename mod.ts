import { Application } from "https://deno.land/x/oak/mod.ts";
import * as log from "https://deno.land/x/std/log/mod.ts";

const port = 8000;

// Create instance of web server
const app = new Application();

// Middlewares
app.use(async (ctx, next) => {
  const { method, url } = ctx.request;
  log.info(`The method is ${method} and the URL is ${url}!`);
  await next();
});

app.use((ctx) => {
  const { response } = ctx;

  ctx.response.body = "hello world!";
});

if (import.meta.main) {
  log.info(`Server is listening on port ${port}!`);
  // Listen to web server
  await app.listen({ port });
}
