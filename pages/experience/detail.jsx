import React from "react";

import Link from "next/link";
import Footer from "../../components/footer";
import Layout from "../../components/layout";

function Detail() {
  return (
    <Layout page="Experience">
      <div className="flex flex-col gap-10 justify-center items-center h-screen text-blanco">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Sorry guys, I haven&#39;t write my experience in detail
          </h1>
        </div>
        <Link href="/experience">
          <a className="bg-primario w-36 h-12 rounded hover:opacity-80 transition flex justify-center items-center">
            Back
          </a>
        </Link>
      </div>
    </Layout>
  );
}

export default Detail;
