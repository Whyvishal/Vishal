/**
 * Resolves a path in /public against the deploy base.
 *
 * GitHub Pages serves this repo from /Vishal/, so a bare "/plates/x.jpg"
 * would resolve to the domain root and 404. Vite exposes the configured base
 * as BASE_URL ("/" in dev, "/Vishal/" in the Pages build).
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
