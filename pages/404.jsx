import Link from "next/link";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Seo from "../components/seo";

function Custom404() {
  return (
    <div className="font-body bg-fondos">
      <Header />
      <Seo page="404 Not Found" />
      <div className="flex flex-col gap-10 justify-center items-center h-screen text-blanco">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Oh Hi, umm sorry but this page isn&#39;t available
          </h1>
          <p>Maybe go back to Home Page?</p>
        </div>
        <Link href="/">
          <a className="bg-primario w-36 h-12 rounded hover:opacity-80 transition flex justify-center items-center">
            Go to Home
          </a>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Custom404;
