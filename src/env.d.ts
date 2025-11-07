/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  // Note: 'import {} from ""' syntax does not work in .d.ts files.
  interface Locals {
    isAuthed: import('better-auth').betterAuth;
    user: import('better-auth').User | null;
    welcomeTitle: () => string;
    session: import('better-auth').Session | null;
  }
}
