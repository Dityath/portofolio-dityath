import React from "react";
import Header from "../../components/header";
import Seo from "../../components/seo";
import Link from "next/link";
import Footer from "../../components/footer";

function Detail() {
  return (
    <div className="font-body bg-fondos">
      <Seo page="Detail" />
      <Header page="projects" />
      <div className="flex flex-col gap-10 justify-center items-center h-screen text-blanco">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Sorry guys
            <br />I haven&#39;t write explanation of my projects in detail hehe
          </h1>
        </div>
        <Link href="/experience">
          <a className="bg-primario w-36 h-12 rounded hover:opacity-80 transition flex justify-center items-center">
            Back
          </a>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
