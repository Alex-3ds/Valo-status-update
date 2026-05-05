import type { FC } from "hono/jsx";
import { BrandRow, Layout, Reticle } from "./layout";

export const HomePage: FC = () => (
  <Layout>
    <header class="nav">
      <BrandRow />
      <nav class="nav-links">
        <a href="/login">Log in</a>
        <a href="/signup" class="btn btn-primary">Get started</a>
      </nav>
    </header>

    <main class="home">
      <section class="hero reveal d1">
        <Reticle size={56} />
        <h1 class="wordmark">
          <span class="br">[</span>
          <span class="name">AIMCORE</span>
          <span class="br">]</span>
        </h1>
        <p class="readout">
          <span class="dot"></span>
          <span><span class="num">01</span> · System online</span>
        </p>
        <p class="lede">
          One link. Every channel. Built for creators who want a sharper edge in
          their TikTok and YouTube bios. Drop a single URL — see every click,
          every page view, in real time.
        </p>
        <div class="cta-row">
          <a href="/signup" class="btn btn-primary">Create your page →</a>
          <a href="/login" class="btn btn-ghost">I already have one</a>
        </div>
      </section>

      <div class="section-head reveal d2">
        <span class="idx">[ 02 ]</span>
        <span>What you get</span>
      </div>

      <section class="features reveal d2">
        <div class="feature">
          <div class="feature-num">001</div>
          <div class="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#d9ff00" stroke-width="1.6" stroke-linecap="square">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </div>
          <h3>Custom links</h3>
          <p>Discord, YouTube, TikTok, your store — drag, drop, done.</p>
        </div>
        <div class="feature">
          <div class="feature-num">002</div>
          <div class="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#d9ff00" stroke-width="1.6" stroke-linecap="square">
              <path d="M3 3v18h18" />
              <path d="M7 14l4-4 4 4 5-6" />
            </svg>
          </div>
          <h3>Real click stats</h3>
          <p>Per-link clicks, page views, traffic source — live.</p>
        </div>
        <div class="feature">
          <div class="feature-num">003</div>
          <div class="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#d9ff00" stroke-width="1.6" stroke-linecap="square">
              <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
            </svg>
          </div>
          <h3>Edge-fast</h3>
          <p>Pages load instantly worldwide. No spinners, no waits.</p>
        </div>
        <div class="feature">
          <div class="feature-num">004</div>
          <div class="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#d9ff00" stroke-width="1.6" stroke-linecap="square">
              <rect x="4" y="4" width="16" height="16" />
              <path d="M4 4l16 16M20 4 4 20" />
            </svg>
          </div>
          <h3>Yours, not theirs</h3>
          <p>Your handle. Your colors. No corporate branding.</p>
        </div>
      </section>

      <footer class="foot reveal d3">
        <span>aimcore.cc · v0.1</span>
        <span class="right">© <span>{new Date().getFullYear()}</span> · made for creators</span>
      </footer>
    </main>
  </Layout>
);
