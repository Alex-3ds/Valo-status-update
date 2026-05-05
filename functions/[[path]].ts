import app from "../src/app";
import type { Env } from "../src/types";

type CFContext = EventContext<Env, string, Record<string, unknown>>;

export const onRequest = (ctx: CFContext) =>
  app.fetch(ctx.request, ctx.env, ctx as unknown as ExecutionContext);
