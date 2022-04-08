import React from "react";
import Link from "next/link";

function Header({ page }) {
  return (
    <header className="flex justify-center sticky top-0 text-blanco px-4 lg:px-10 py-5 border-b border-bordes bg-fondos z-50">
      <div className="flex justify-between items-center max-w-lg md:max-w-2xl lg:max-w-5xl w-full">
        <p className="text-xl font-medium lg:text-2xl">Dityath</p>
        <button className="lg:hidden">
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
        <div className="items-center gap-5 hidden lg:flex">
          <Link href="/">
            <a
              className={
                page == "Home"
                  ? "underline decoration-primario decoration-2 underline-offset-8 hover:opacity-80 transition"
                  : "hover:opacity-80 transition"
              }
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              className={
                page == "About"
                  ? "underline decoration-primario decoration-2 underline-offset-8 hover:opacity-80 transition"
                  : "hover:opacity-80 transition"
              }
            >
              About Me
            </a>
          </Link>
          <Link href="/experience">
            <a
              className={
                page == "Experience"
                  ? "underline decoration-primario decoration-2 underline-offset-8 hover:opacity-80 transition"
                  : "hover:opacity-80 transition"
              }
            >
              Experience
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={
                page == "Projects"
                  ? "underline decoration-primario decoration-2 underline-offset-8 hover:opacity-80 transition"
                  : "hover:opacity-80 transition"
              }
            >
              Projects
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={
                page == "Blog"
                  ? "underline decoration-primario decoration-2 underline-offset-8 hover:opacity-80 transition"
                  : "hover:opacity-80 transition"
              }
            >
              Blog
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
