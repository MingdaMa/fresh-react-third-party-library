import { FreshContext } from "$fresh/server.ts";

// Jokes courtesy of https://punsandoneliners.com/randomness/programmer-jokes/
const PHONE_NUMBERS = [
  "812-913-4991",
  "319-466-0443"
];

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  const randomIndex = Math.floor(Math.random() * PHONE_NUMBERS.length);
  const body = PHONE_NUMBERS[randomIndex];
  return new Response(body);
};
