import React from "react";

import { useRouter } from "next/router";

import Header from "../header";
import Footer from "../footer";
import Seo from "../seo";

import { motion } from "framer-motion";

function Layout({ page, children }) {
  const router = useRouter();

  return (
    <div className="font-body bg-fondos">
      <Seo page={page} />
      <Header page={page} />
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  );
}

export default Layout;
