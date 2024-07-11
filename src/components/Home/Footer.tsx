import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 pt-6 w-full shrink-0 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-emoji-smile-upside-down"
        viewBox="0 0 16 16"
      >
        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0" />
        <path d="M4.285 6.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5m4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5" />
      </svg>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        &copy; 2024 . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
