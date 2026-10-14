"use client";

import { useEffect, useRef } from "react";

const COOKIEBOT_ID = "c0b07f5a-61d3-43dd-9ece-fb7b259ca910";

export default function CookieDeclaration() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Cookiebot is only authorised on the live website.
    if (window.location.hostname !== "www.1stresponsedrainage.co.uk") {
      return;
    }

    // Prevent duplicate script insertion.
    if (container.querySelector("#CookieDeclaration")) {
      return;
    }

    const script = document.createElement("script");

    script.id = "CookieDeclaration";
    script.src = `https://consent.cookiebot.com/${COOKIEBOT_ID}/cd.js`;
    script.async = true;

    container.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div ref={containerRef} className="font-light">
      {process.env.NODE_ENV !== "production" && (
        <p className="text-sm italic text-fr-primary/60">
          The cookie declaration will appear here on the live website.
        </p>
      )}
    </div>
  );
}
