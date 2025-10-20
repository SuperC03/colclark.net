import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const theme = event.cookies.get('theme');

  // Preload/cache fonts as well as the default JS and CSS files
  const response = await resolve(event, {
    preload: ({ type }) => type === 'font' || type === 'js' || type === 'css',
    transformPageChunk: ({ html }) => {
      return html.replace('data-theme=""', `data-theme="${theme}"`);
    }
  });
  return response;
};
