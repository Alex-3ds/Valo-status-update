export type Env = {
  DB: D1Database;
  APP_URL: string;
  EMAIL_FROM: string;
  ADMIN_EMAIL: string;
  COOKIE_DOMAIN: string;
  RESEND_API_KEY?: string;
};

export type SessionUser = {
  id: string;
  email: string;
  handle: string | null;
  displayName: string | null;
  isAdmin: boolean;
};

export type Variables = {
  user: SessionUser | null;
};
