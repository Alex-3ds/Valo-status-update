import type { FC } from "hono/jsx";
import { EclipseMark, Layout } from "./layout";

export const HomePage: FC = () => (
  <Layout>
    <header class="nav">
      <a href="/" class="brand-row">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <circle cx="12" cy="12" r="10" fill="#0a0014" stroke="#b066ff" stroke-width="1" />
            <circle cx="14" cy="11" r="8" fill="#0a0014" />
          </svg>
        </span>
        <span class="brand-text">aimcore</span>
      </a>
      <nav class="nav-links">
        <a href="/login">Log in</a>
        <a href="/signup" class="btn btn-ghost">Get started</a>
      </nav>
    </header>

    <main class="home">
      <div class="hero reveal d1">
        <EclipseMark />
        <h1 class="brand">AIMCORE</h1>
        <p class="tag">
          <span class="dot"></span>One link. Every channel. Built for creators.
        </p>
        <p class="lede">
          Spin up a branded link page in 60 seconds. Drop it in your TikTok and
          YouTube bios. See every click, every page view, in real time.
        </p>
        <div class="cta-row">
          <a href="/signup" class="btn btn-primary">Create your page →</a>
          <a href="/login" class="btn btn-ghost">I already have one</a>
        </div>
      </div>

      <section class="features reveal d2">
        <div class="feature">
          <div class="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#b066ff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2v20M2 12h20" />
            </svg>
          </div>
          <h3>Custom links</h3>
          <p>Discord, YouTube, TikTok, your store — drag, drop, done.</p>
        </div>
        <div class="feature">
          <div class="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#b066ff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 3v18h18" />
              <path d="M7 14l4-4 4 4 5-6" />
            </svg>
          </div>
          <h3>Real click stats</h3>
          <p>See per-link clicks, page views, and where your traffic comes from.</p>
        </div>
        <div class="feature">
          <div class="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#b066ff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
          </div>
          <h3>Edge-fast</h3>
          <p>Pages load instantly worldwide. No spinners, no waits.</p>
        </div>
      </section>

      <footer class="reveal d3">
        © <span>{new Date().getFullYear()}</span> aimcore · made for creators
      </footer>
    </main>
  </Layout>
);
