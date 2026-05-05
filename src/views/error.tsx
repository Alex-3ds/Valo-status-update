import type { FC } from "hono/jsx";
import { Layout } from "./layout";

export const ErrorPage: FC<{ status: number; message: string }> = ({ status, message }) => (
  <Layout title={`${status} — umbraim`}>
    <main class="home">
      <div class="hero">
        <h1 class="brand" style="font-size:clamp(48px,10vw,96px)">{status}</h1>
        <p class="lede">{message}</p>
        <div class="cta-row">
          <a href="/" class="btn btn-primary">Back home</a>
        </div>
      </div>
    </main>
  </Layout>
);
