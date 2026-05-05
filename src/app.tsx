import { Hono } from "hono";
import type { Env, Variables } from "./types";
import { HomePage } from "./views/home";
import { ErrorPage } from "./views/error";

const app = new Hono<{ Bindings: Env; Variables: Variables }>();

app.get("/", (c) => c.html(<HomePage />));

// Phase 2 will add: /signup, /login, /verify, /logout, /dashboard, /<handle>
// Phase 3 will add: /r/:linkId, /admin, stats endpoints

app.get("/healthz", (c) => c.text("ok"));

app.notFound((c) =>
  c.html(<ErrorPage status={404} message="That page slipped into the void." />, 404),
);

app.onError((err, c) => {
  console.error("unhandled:", err);
  return c.html(<ErrorPage status={500} message="Something glitched on our end." />, 500);
});

export default app;
