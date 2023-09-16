import { useState, useCallback, useLayoutEffect, useEffect } from "react";
import { isBrowser } from "./isBrowser";

export function useDimensions(deps: any[], trackWindowResize = true) {
  // can't measure the DOM on server side renders
  if (!isBrowser()) {
    return { ref: null, dimensions: null };
  }
  const [dimensions, setDimensions] = useState(new DOMRect());
  const [node, setNode] = useState<HTMLElement | null>(null);
  const ref = useCallback((node: any) => {
    setNode(node);
  }, []);
  const captureDimensions = () =>
    node && setDimensions(node.getBoundingClientRect());
  useEffect(() => {
    if (trackWindowResize) {
      window.addEventListener("resize", captureDimensions);
      return () => window.removeEventListener("resize", captureDimensions);
    }
    return () => null;
  }, [node, trackWindowResize]);
  useLayoutEffect(() => {
    captureDimensions();
  }, [node, ...deps]);
  return { ref, dimensions };
}
