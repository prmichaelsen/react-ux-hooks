/**
 * https://github.com/alex-cory/use-ssr
 * https://github.com/alex-cory/use-ssr/blob/master/useSSR.ts
 */
export const isBrowser: () => boolean = () =>
  !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
