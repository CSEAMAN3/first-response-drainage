"use client";
import { useState } from "react";
import { IoShareSocial } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

interface CopyButtonProps {
  link: string;
}

export default function CopyButton({ link }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("failed to copy", error);
    }
  };

  return (
    <button onClick={copyToClipboard} className="group cursor-pointer">
      <div className="inline-block mr-4 mt-8">
        <div className="p-2 flex justify-center">
          <IoShareSocial
            className={`text-fr-white group-hover:text-fr-accent-two transition-colors duration-300 ${copied ? "hidden" : "block"}`}
          />
          <TiTick className={`text-fr-white ${copied ? "block" : "hidden"}`} />
        </div>
      </div>
      <span className="font-bold text-fr-white group-hover:text-fr-accent-two transition-colors duration-300">
        {copied ? "Copied" : "Share"}
      </span>
    </button>
  );
}
