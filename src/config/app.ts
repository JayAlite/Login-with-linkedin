export const CLIENT_ID = import.meta.env.VITE_LINKEDIN_CLIENT;
export const CLIENT_SECRET = import.meta.env.VITE_LINKEDIN_SECRET;

// LINKEDIN_STATE is a unique string value of your choice that is hard to guess. Used to prevent CSRF.
export const LINKEDIN_STATE = "random_string";
export const LINKEDIN_SCOPE = "r_basicprofile";
export const LINKEDIN_REDIRECT_URL =
  "https://test-currlybraces.netlify.app/auth/linkedin/callback";
