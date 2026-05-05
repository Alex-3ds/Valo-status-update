-- Aimcore initial schema
-- Times are stored as INTEGER unix milliseconds.
-- Booleans are INTEGER 0/1.

PRAGMA foreign_keys = ON;

CREATE TABLE users (
  id              TEXT PRIMARY KEY,
  email           TEXT NOT NULL UNIQUE,
  email_verified  INTEGER NOT NULL DEFAULT 0,
  handle          TEXT UNIQUE,
  display_name    TEXT,
  bio             TEXT,
  avatar_url      TEXT,
  theme           TEXT NOT NULL DEFAULT 'umbra',
  customer_id     TEXT,
  is_admin        INTEGER NOT NULL DEFAULT 0,
  is_suspended    INTEGER NOT NULL DEFAULT 0,
  created_at      INTEGER NOT NULL,
  updated_at      INTEGER NOT NULL
);
CREATE INDEX idx_users_handle ON users(handle);
CREATE INDEX idx_users_email  ON users(email);

CREATE TABLE auth_tokens (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  purpose     TEXT NOT NULL,
  expires_at  INTEGER NOT NULL,
  used_at     INTEGER,
  created_at  INTEGER NOT NULL
);
CREATE INDEX idx_auth_tokens_user ON auth_tokens(user_id);

CREATE TABLE sessions (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at  INTEGER NOT NULL,
  created_at  INTEGER NOT NULL,
  user_agent  TEXT,
  ip_hash     TEXT
);
CREATE INDEX idx_sessions_user ON sessions(user_id);

CREATE TABLE links (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title       TEXT NOT NULL,
  url         TEXT NOT NULL,
  icon        TEXT,
  position    INTEGER NOT NULL DEFAULT 0,
  is_visible  INTEGER NOT NULL DEFAULT 1,
  created_at  INTEGER NOT NULL,
  updated_at  INTEGER NOT NULL
);
CREATE INDEX idx_links_user ON links(user_id, position);

CREATE TABLE link_clicks (
  id          TEXT PRIMARY KEY,
  link_id     TEXT NOT NULL REFERENCES links(id) ON DELETE CASCADE,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at  INTEGER NOT NULL,
  country     TEXT,
  referrer    TEXT,
  user_agent  TEXT
);
CREATE INDEX idx_link_clicks_link ON link_clicks(link_id, created_at);
CREATE INDEX idx_link_clicks_user ON link_clicks(user_id, created_at);

CREATE TABLE page_views (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at  INTEGER NOT NULL,
  country     TEXT,
  referrer    TEXT,
  user_agent  TEXT
);
CREATE INDEX idx_page_views_user ON page_views(user_id, created_at);
