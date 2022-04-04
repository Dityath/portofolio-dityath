import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center sticky top-0 text-blanco px-4 py-5 border-b border-bordes bg-fondos z-50">
      <p className="text-xl font-medium">Dityath</p>
      <button>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M13 18H20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </header>
  );
}

export default Header;
