"use client";

declare global {
  interface Window {
    Cookiebot?: {
      renew: () => void;
    };
  }
}

export default function CookieSettingsButton() {
  const openCookieSettings = () => {
    window.Cookiebot?.renew();
  };

  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="font-light text-sm text-fr-white hover:text-fr-accent-two transition-colors duration-150 tracking-tight cursor-pointer w-fit"
    >
      Cookie Settings
    </button>
  );
}
