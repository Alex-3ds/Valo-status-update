import type { FC, PropsWithChildren } from "hono/jsx";

type Props = PropsWithChildren<{
  title?: string;
  description?: string;
  ogUrl?: string;
}>;

export const Layout: FC<Props> = ({
  title = "umbraim — your link, your way",
  description = "A sharp, fast link-in-bio for creators. Build a branded page in seconds.",
  ogUrl = "https://umbraim.win/",
  children,
}) => (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#0a0010" />
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
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/styles.css" />
    </head>
    <body>
      <div class="bg" aria-hidden="true"></div>
      <div class="aurora" aria-hidden="true">
        <span class="a1"></span>
        <span class="a2"></span>
        <span class="a3"></span>
      </div>
      <div class="grain" aria-hidden="true"></div>
      {children}
    </body>
  </html>
);

export const EclipseMark: FC<{ size?: number }> = ({ size = 116 }) => (
  <div class="mark" style={`width:${size}px;height:${size}px`} aria-hidden="true">
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="corona" cx="50%" cy="50%" r="50%">
          <stop offset="40%" stop-color="#b066ff" stop-opacity="0" />
          <stop offset="62%" stop-color="#b066ff" stop-opacity="0.85" />
          <stop offset="78%" stop-color="#8a2bff" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#8a2bff" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#b066ff" stop-opacity="0.2" />
        </linearGradient>
        <mask id="crescent">
          <rect width="120" height="120" fill="black" />
          <circle cx="60" cy="60" r="40" fill="white" />
          <circle cx="66" cy="58" r="37" fill="black" />
        </mask>
      </defs>
      <circle cx="60" cy="60" r="56" fill="url(#corona)" />
      <circle cx="60" cy="60" r="40" fill="#05000a" stroke="url(#ring)" stroke-width="1" />
      <rect width="120" height="120" fill="#ece6ff" mask="url(#crescent)" opacity="0.95" />
    </svg>
  </div>
);
