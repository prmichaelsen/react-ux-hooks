import { useEffect } from "react";
import { isBrowser } from "./isBrowser";

/**
 * Disables the auto input zoom
 * iOS safari executes on text input focus
 * for input fields with font size smaller
 * than 12.
 *
 * Note: this also breaks manual zooming
 * for chrome mobile/desktop browsers.
 *
 * Use only where necessary.
 */
export const useDisableAutoInputZoom = (disable: boolean) =>
  useEffect(() => {
    // can't manipulate DOM on server side render
    if (!isBrowser()) {
      return () => null;
    }
    if (!disable) {
      return () => null;
    }
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = [
      "width=device-width",
      "initial-scale=1",
      "maximum-scale=1",
    ].join(", ");
    document.head.appendChild(meta);
    return () => {
      // document.removeChild(meta);
    };
  }, [disable]);
