import React from "react";
import { useEffect } from "react";

import SmallCard from "../smallCard";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutGridSkill() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
      });
    }
  }, [animation, inView]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5"
    >
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={animation}
        transition={{
          type: "spring",
          duration: 2.6,
          bounce: 0,
          delay: 0,
        }}
        className="w-full h-full"
      >
        <SmallCard
          image="/skills/html.png"
          title="Html 5"
          desc="HTML is the standard markup language for documents designed to be displayed in a web browser. Using html, we can create a skeleton (or basic) from website page. I have mastered html version 5, or it can be said as the basis of a modern website."
        />
      </motion.div>
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={animation}
        transition={{
          type: "spring",
          duration: 2.6,
          bounce: 0,
          delay: 0.5,
        }}
        className="w-full h-full"
      >
        <SmallCard
          image="/skills/css.png"
          title="Css"
          desc="Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. With css I can beautify a website skeleton from html. And of course knowledge about CSS is very much needed to become a frontend developer."
        />
      </motion.div>
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={animation}
        transition={{
          type: "spring",
          duration: 2.6,
          bounce: 0,
          delay: 1,
        }}
        className="w-full h-full"
      >
        <SmallCard
          image="/skills/js.png"
          title="Vanilla Javascript"
          desc="VanillaJS is a name to refer to using plain JavaScript without any additional libraries, or basically we can say it just a normal javascript. JavaScript itself is a programming language that is commonly used for website applications to make websites more interactive."
        />
      </motion.div>
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={animation}
        transition={{
          type: "spring",
          duration: 2.6,
          bounce: 0,
          delay: 1.5,
        }}
        className="w-full h-full"
      >
        <SmallCard
          image="/skills/node.png"
          title="Node js"
          desc="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. So basically, it just a javascript but you dont need any browser to run the program."
        />
      </motion.div>
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={animation}
        transition={{
          type: "spring",
          duration: 2.6,
          bounce: 0,
          delay: 2,
        }}
        className="w-full h-full"
      >
        <SmallCard
          image="/skills/react.png"
          title="React js"
          desc="React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. Personally, this is my favorite things in programming world, with React, creating a website feels so easy."
        />
      </motion.div>
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={animation}
        transition={{
          type: "spring",
          duration: 2.6,
          bounce: 0,
          delay: 2.5,
        }}
        className="w-full h-full"
      >
        <SmallCard
          image="/skills/next.png"
          title="Next js"
          desc="Next.js is an open-source web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites. Or you can say it is a React app but its a server rendering site. Also, this is the framework that usually I use."
        />
      </motion.div>
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={animation}
        transition={{
          type: "spring",
          duration: 2.6,
          bounce: 0,
          delay: 3,
        }}
        className="w-full h-full"
      >
        <SmallCard
          image="/skills/sass.png"
          title="Sass"
          desc="Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets(CSS). SassScript is the scripting language itself. I personally, more comfortable use SASS when styling a website than use css."
        />
      </motion.div>
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={animation}
        transition={{
          type: "spring",
          duration: 2.6,
          bounce: 0,
          delay: 3.5,
        }}
        className="w-full h-full"
      >
        <SmallCard
          image="/skills/tailwind.png"
          title="Tailwind css"
          desc="Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. Well simply it is a Css framework."
        />
      </motion.div>
    </div>
  );
}

export default AboutGridSkill;
