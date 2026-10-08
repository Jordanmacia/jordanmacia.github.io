import React, { useEffect, useRef, useState } from "react";

// Lightweight Animated Content and Decrypted Text interactions, compatible with React 17.

export function AnimatedContent({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const reveal = () => {
      element.classList.remove("pf-reveal-pending");
      observer.disconnect();
    };
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) reveal();
    }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });
    element.classList.add("pf-reveal-pending");
    observer.observe(element);
    const preferenceChanged = () => { if (motion.matches) reveal(); };
    motion.addEventListener("change", preferenceChanged);
    element.addEventListener("focusin", reveal);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", preferenceChanged);
      element.removeEventListener("focusin", reveal);
      element.classList.remove("pf-reveal-pending");
    };
  }, []);
  return <div ref={ref} className="pf-reveal">{children}</div>;
}

function DecryptedText({ text }) {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    let timer;
    let start;
    const finish = () => { clearInterval(timer); setDisplay(text); };
    const delay = setTimeout(() => {
      start = performance.now();
      timer = setInterval(() => {
        const progress = Math.min((performance.now() - start) / 1400, 1);
        if (progress === 1) { finish(); return; }
        const revealed = Math.floor(progress * text.length);
        const symbols = "01#$%<>";
        setDisplay(Array.from(text, (letter, index) => index < revealed ? letter : symbols[Math.floor(Math.random() * symbols.length)]).join(""));
      }, 45);
    }, 650);
    const preferenceChanged = () => { if (motion.matches) { clearTimeout(delay); finish(); } };
    motion.addEventListener("change", preferenceChanged);
    return () => {
      clearTimeout(delay);
      clearInterval(timer);
      motion.removeEventListener("change", preferenceChanged);
    };
  }, [text]);
  return <span className="pf-decrypted"><span className="pf-sr-only">{text}</span><span className="pf-decrypted-size" aria-hidden="true">{text}</span><span className="pf-decrypted-display" aria-hidden="true">{display}</span></span>;
}

export function HeroStrong({ children }) {
  const text = React.Children.toArray(children).join("");
  return <strong>{text === "Pentester" ? <DecryptedText text={text} /> : children}</strong>;
}
