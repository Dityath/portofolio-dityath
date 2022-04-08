import React from "react";
import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "../components/header";
import Seo from "../components/seo";
import Footer from "../components/footer";
import SmallCard from "../components/smallCard";

function About() {
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
    <div className="font-body bg-fondos">
      <Seo page="About" />
      <Header page="about" />
      <motion.main
        initial={{ y: "10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 2.6, bounce: 0 }}
        className="mx-4 my-10 text-blanco flex justify-center"
      >
        <div className="max-w-lg md:max-w-2xl lg:max-w-5xl w-full flex flex-col lg:flex-row lg:gap-5">
          <div className="relative w-full sm:w-[294px] h-[297px] overflow-hidden rounded justify-self-center self-center lg:self-start lg:mt-6">
            <Image
              src="/foto-diri/foto.jpeg"
              alt="Ditya's Photo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="lg:w-3/4">
            <h1 className="font-semibold my-5 text-2xl lg:text-4xl">
              Ditya Athallah
            </h1>
            <article>
              Hi, I&#39;m Ditya Athallah. I&#39;m 21th years old Frontend
              Developer based in Indonesia (Semarang and Bandung), with
              javascript and React.js speciality. I was a college student at
              Telkom University majoring in Informatics International Class. But
              unfortunately, I can&#39;t graduate and have my degree there due
              to economic situation. Kinda sad but I need to move on and keep
              improving myself to go further. I have big Interest in software
              engineering since 2018, especially in web development. I have
              learned web development for 2 years. Well, actually I have falling
              in love with programming language since I was in elementary
              school, I love it so much much.
              <br />
              <br />
              Besides being Interested in software engineering, I also like
              doing graphic design and UI/UX stuff. I have been in UI/UX and
              Graphic Design since 2017. I don&#39;t know why but I love it tho.
              Oh well, due to my highly competitive spirit, I do usually compete
              in hackathons or innovative competitions. And also I already won
              several achievement in hackathon or other competition. Such as:{" "}
              <br />
              <br />
              <ul className="list-disc list-inside">
                <li>
                  Become finalist of National Hackathon & Collaboration in
                  Padjadjaran University Indonesia
                </li>
                <li>Become first place in Devday: Hackathon 2021</li>
                <li>
                  And many others.. (kindly check my cv{" "}
                  <a
                    target="_blank"
                    href="https://docs.google.com/document/d/17l-AKEoQ4VcIav7urKfjdIU5s1q1Gc3kNICPABb6C84/edit?usp=sharing"
                    rel="noreferrer"
                    className="text-primario"
                  >
                    here
                  </a>{" "}
                  for other achievements)
                </li>
              </ul>{" "}
              <br />
              That&#39;s my achievement, and actually I&#39;m looking forward to
              find another opportunities and new challenges. So, if you have an
              interesting challenge for me, hit me up...
              <br />
              <br />
              <a
                href="mailto:dityaathallah107@gmail.com"
                className="text-primario"
              >
                dityaathallah107@gmail.com
              </a>
            </article>
          </div>
        </div>
      </motion.main>
      <section className="mx-4 my-10 text-blanco flex justify-center">
        <div className="max-w-lg md:max-w-2xl lg:max-w-5xl w-full text-blanco">
          <div className="mt-12">
            <h2 className="text-xl text-center">My Skills</h2>
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
            <h2 className="text-xl text-center mt-20">My Tools</h2>
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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
