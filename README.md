# umbraim

A multi-tenant link-in-bio platform on Cloudflare Pages + D1.

- Domain: `umbraim.win`
- Stack: Cloudflare Pages Functions, Hono, D1 (SQLite), Resend
- Theme: Umbra (purple + black, eclipse mark)

## Build status

- [x] **Phase 1** — Skeleton, D1 schema, server-rendered landing page (this commit)
- [ ] **Phase 2** — Auth (signup, email verify, magic-link login), creator dashboard, public `/<handle>` page
- [ ] **Phase 3** — Click tracking, stats, admin panel (gated to `support@umbracheats.app`)

## First-time setup

```bash
# 1. Install deps
npm install

# 2. Create the D1 database (one-time, prints a database_id)
npx wrangler d1 create umbraim
# → paste the printed `database_id` into wrangler.toml

# 3. Run migrations against the local D1 emulator
npm run db:migrate:local

# 4. Run dev
npm run dev
# → http://localhost:8788
```

## Deploy to umbraim.win

```bash
# 1. Apply migrations to the live D1
npm run db:migrate:prod

# 2. Set secrets (do NOT put these in wrangler.toml)
npx wrangler pages secret put RESEND_API_KEY
# → paste your Resend API key

# 3. First deploy
npm run deploy
# → connects this directory to a Pages project

# 4. In the Cloudflare dashboard:
#    Pages → umbraim → Custom domains → add umbraim.win
#    DNS will be auto-configured if your registrar uses Cloudflare nameservers,
#    otherwise add the CNAME shown.
```

## Project layout

```
functions/
  [[path]].ts          Catch-all that hands every request to the Hono app
src/
  app.tsx              Hono routes
  types.ts             Env / Variables types
  views/
    layout.tsx         Page shell + Umbra eclipse mark
    home.tsx           Landing page
    error.tsx          404 / 500 page
migrations/
  0001_init.sql        Initial schema (users, sessions, tokens, links, clicks, page_views)
public/
  styles.css           Global stylesheet (Umbra theme)
  favicon.svg          Eclipse favicon
wrangler.toml          CF Pages config + D1 binding + vars
```

## Schema

- `users` — creators (email, handle, display_name, bio, avatar_url, customer_id, is_admin, is_suspended)
- `auth_tokens` — email verification + magic-link tokens
- `sessions` — cookie-based sessions
- `links` — per-user link list (title, url, icon, position, is_visible)
- `link_clicks` — every click recorded server-side
- `page_views` — every public-page view

## Env vars

| Key | Where | Purpose |
|---|---|---|
| `APP_URL` | `wrangler.toml [vars]` | Base URL for outbound links/emails |
| `EMAIL_FROM` | `wrangler.toml [vars]` | "From" address for Resend |
| `ADMIN_EMAIL` | `wrangler.toml [vars]` | Email that can access `/admin` |
| `COOKIE_DOMAIN` | `wrangler.toml [vars]` | Cookie scope (`.umbraim.win`) |
| `RESEND_API_KEY` | `wrangler pages secret put` | Secret. Used to send verification emails. |

## Notes for next phases

- Auth: random 32-byte session IDs in `sessions.id`, 30-day expiry, HttpOnly+Secure+SameSite=Lax cookies.
- Admin gate: middleware that allows `/admin/**` only when `c.get("user")?.email === env.ADMIN_EMAIL`.
- Click tracking: `/r/:linkId` looks up the link, inserts a `link_clicks` row using `request.cf.country` + `Referer` header, then 302-redirects.
- Page views: insert a `page_views` row when serving `/<handle>`, dedup by session cookie within 30 min.
