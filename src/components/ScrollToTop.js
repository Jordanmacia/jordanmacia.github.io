import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, state } = useLocation();
  useLayoutEffect(() => {
    const position = state?.scrollPosition;
    window.scrollTo({ left: position?.x ?? 0, top: position?.y ?? 0, behavior: "instant" });
  }, [pathname, state]);
  return null;
}

export default ScrollToTop;
