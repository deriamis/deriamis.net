import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "https://9a167615c511e20a640155100628a25d@o4510107541635072.ingest.us.sentry.io/4510107545042944",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
