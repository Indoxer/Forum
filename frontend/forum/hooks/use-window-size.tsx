import { useState, useEffect, useCallback } from "react";

export default function useWindowSize() {
  const getSize = useCallback(() => {
    if (typeof window == "undefined") {
      return {
        width: 1920,
        height: 1920,
      };
    }

    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }, []);

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(getSize()));

    return () => {
      window.removeEventListener("resize", () => setWindowSize(getSize()));
    };
  }, []);

  return windowSize;
}
