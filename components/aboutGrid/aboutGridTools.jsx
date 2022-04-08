import React from "react";
import { useEffect } from "react";

import SmallCard from "../smallCard";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutGridTools() {
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
          image="/tools/figma.png"
          title="Figma"
          desc="Figma is a vector graphics editor and prototyping tool, usually used for creating a prototype of website or UI/UX design. I use Figma a lot when implementing Ui design to code. Not only while coding, I also use Figma when design a website, including this website."
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
          image="/tools/vscode.png"
          title="Visual Studio Code"
          desc="Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. So, basically it is a code editor."
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
          image="/tools/vim.png"
          title="Vim or Neovim"
          desc="Vim is a free and open-source, screen-based text editor program. And Neovim is a forked, more feature-rich version of the Vim text editor developed to make Vim simpler, flexible, and easier to maintain. Personally i prefer Neovim because it is for users who want to make the best of Vim through a new plug-in system, better GUI architecture, first-class embedding support, and more. Both Vim and Neovim is still code editor."
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
          image="/tools/notion.png"
          title="Notion App"
          desc="Notion is a project management and note-taking software. For me, notion is help a lot to maintain an organization, or to coordinate deadlines, objectives, and assignments for the sake of efficiency and productivity."
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
          image="/tools/trello.png"
          title="Trello"
          desc="Basically, Trello is still same like Notion. But sometimes, some people more prefered Trello over Notion. That's why I also know about Trello."
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
          image="/tools/ubuntu.png"
          title="Linux Ubuntu"
          desc="Ubuntu is a Linux distribution based on Debian and composed mostly of free and open-source software. I use Ubuntu because of it is free, easy to maintenance, and perfect for software developing. Besides of that, Ubuntu is also having a lightweight architecture."
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
          image="/tools/postman.png"
          title="Postman"
          desc="Postman is an application used for API testing. I usually use it to test my backend api's, to check its endpoint, and to strategize how to use it perfectly in my frontend application. Sometimes, I use GraphQl and Postman is also suitable with it."
        />
      </motion.div>
    </div>
  );
}

export default AboutGridTools;
