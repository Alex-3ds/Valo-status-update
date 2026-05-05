import type { FC, PropsWithChildren } from "hono/jsx";

type Props = PropsWithChildren<{
  title?: string;
  description?: string;
  ogUrl?: string;
}>;

export const Layout: FC<Props> = ({
  title = "aimcore — your link, your way",
  description = "A sharp, fast link-in-bio for creators. Build a branded page in seconds.",
  ogUrl = "https://aimcore.cc/",
  children,
}) => (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#050507" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      <meta name="twitter:card" content="summary" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/styles.css" />
    </head>
    <body>
      <div class="bg" aria-hidden="true"></div>
      <div class="scan" aria-hidden="true"></div>
      <div class="grain" aria-hidden="true"></div>
      {children}
    </body>
  </html>
);

type ReticleProps = { size?: number; ariaHidden?: boolean };

export const Reticle: FC<ReticleProps> = ({ size = 56, ariaHidden = true }) => (
  <span
    class="mark"
    style={`width:${size}px;height:${size}px`}
    aria-hidden={ariaHidden ? "true" : undefined}
  >
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#d9ff00" stroke-width="2" stroke-linecap="square" fill="none">
        <path class="corner tl" d="M 8 8 L 8 22 M 8 8 L 22 8" />
        <path class="corner tr" d="M 56 8 L 56 22 M 56 8 L 42 8" />
        <path class="corner bl" d="M 8 56 L 8 42 M 8 56 L 22 56" />
        <path class="corner br" d="M 56 56 L 56 42 M 56 56 L 42 56" />
      </g>
      <circle class="center" cx="32" cy="32" r="2" fill="#d9ff00" />
    </svg>
  </span>
);

export const BrandRow: FC = () => (
  <a href="/" class="brand-row" aria-label="aimcore home">
    <Reticle size={20} />
    <span>aimcore</span>
  </a>
);
