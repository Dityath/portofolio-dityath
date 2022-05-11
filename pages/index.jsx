import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Card from "../components/card";

import Layout from "../components/layout";
import { Scroll } from "scrollex";

const springs = {
  translateY: {
    damping: 100,
    stiffness: 1200,
    mass: 8,
  },
};

const keyframes = {
  container: ({ maxScrollPosition }) => ({
    12000: {
      translateY: 50,
    },
    10: {
      translateY: -50,
    },
  }),
  item: ({ data }) => ({
    [data.index * 350]: {
      translateY: 35,
    },
    [data.index * 350 + 400]: {
      translateY: -35,
    },
  }),
  heading: ({ section, container }) => ({
    [section.topAt("container-bottom")]: {
      translateX: -container.width,
    },
    [section.topAt("container-top") - container.height / 4]: {
      translateX: 0,
    },
    [section.topAt("container-top") + container.height / 4]: {
      translateX: 0,
    },
    [section.bottomAt("container-top")]: {
      translateX: container.width,
    },
  }),
};

const skillItems = [
  "React Js",
  "TailwindCss",
  "Next Js",
  "Express Js",
  "Mongo DB",
];

export default function Home() {
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
    <Scroll.Container className="h-screen text-blanco">
      <Layout page={"Home"}>
        <motion.main
          initial={{ y: "10vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1, bounce: 0.5 }}
        >
          <Scroll.Section className="text-blanco mx-4 lg:mx-10 my-28 h-60 lg:mt-48">
            <Scroll.Item keyframes={keyframes.heading}>
              <h1 className="text-center md:font-bold text-3xl lg:text-7xl leading-relaxed lg:leading-normal">
                Hi I&#39;m{" "}
                <span className="text-primario">Ditya Athallah.</span>
                <br />
              </h1>
            </Scroll.Item>
          </Scroll.Section>
        </motion.main>

        <Scroll.Section className="text-blanco mx-4 lg:mx-10 my-28 lg:mt-60 lg:mb-60">
          <Scroll.Item keyframes={keyframes.heading}>
            <h1 className="text-center md:font-bold text-3xl lg:text-7xl leading-relaxed lg:leading-normal">
              I&#39;m a <span className="text-primario">Frontend</span>{" "}
              Developer
            </h1>
          </Scroll.Item>
        </Scroll.Section>
        <Scroll.Section className="text-blanco mx-4 lg:mx-10 my-28 lg:mt-60 lg:mb-60">
          <Scroll.Item keyframes={keyframes.heading}>
            <h1 className="text-center md:font-bold text-3xl lg:text-7xl leading-relaxed lg:leading-normal">
              Also a Software <span className="text-primario">Engineer</span>
            </h1>
          </Scroll.Item>
        </Scroll.Section>
        <Scroll.Section className="text-blanco mx-4 lg:mx-10 my-28 lg:mt-60 lg:mb-60">
          <Scroll.Item keyframes={keyframes.heading}>
            <h1 className="text-center md:font-bold text-3xl lg:text-7xl leading-relaxed lg:leading-normal">
              With several <span className="text-primario">TechStack</span> such
              as
            </h1>
          </Scroll.Item>
        </Scroll.Section>

        <Scroll.Section showOverflow className="h-[200vh]">
          <div className="flex justify-center items-center sticky top-0">
            <Scroll.Item keyframes={keyframes.container}>
              <div className="flex flex-col gap-4">
                {skillItems.map((item, index) => (
                  <Scroll.Item
                    key={item}
                    keyframes={keyframes.item}
                    springs={springs}
                    data={{ index }}
                  >
                    <h3 className="text-5xl text-center font-bold">{item}</h3>
                  </Scroll.Item>
                ))}
              </div>
            </Scroll.Item>
          </div>
        </Scroll.Section>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 my-5 lg:my-10">
          <Link href="/projects">
            <a className="bg-primario w-36 h-12 rounded hover:opacity-80 transition flex justify-center items-center">
              See Projects
            </a>
          </Link>
          <a
            className="border w-36 h-12 rounded hover:opacity-80 transition flex items-center justify-center gap-2"
            target="_blank"
            href="https://docs.google.com/document/d/17l-AKEoQ4VcIav7urKfjdIU5s1q1Gc3kNICPABb6C84/edit?usp=sharing"
            rel="noreferrer"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.5 15C0.5 14.4477 0.947715 14 1.5 14H13.5C14.0523 14 14.5 14.4477 14.5 15C14.5 15.5523 14.0523 16 13.5 16H1.5C0.947715 16 0.5 15.5523 0.5 15ZM3.79289 7.29289C4.18342 6.90237 4.81658 6.90237 5.20711 7.29289L6.5 8.58579L6.5 1C6.5 0.447716 6.94771 2.41411e-08 7.5 0C8.05228 -2.41411e-08 8.5 0.447715 8.5 1L8.5 8.58579L9.79289 7.29289C10.1834 6.90237 10.8166 6.90237 11.2071 7.29289C11.5976 7.68342 11.5976 8.31658 11.2071 8.70711L8.20711 11.7071C8.01957 11.8946 7.76522 12 7.5 12C7.23478 12 6.98043 11.8946 6.79289 11.7071L3.79289 8.70711C3.40237 8.31658 3.40237 7.68342 3.79289 7.29289Z"
                fill="white"
              />
            </svg>
            Download CV
          </a>
        </div>

        <motion.section
          ref={ref}
          initial={{ y: "10vh", opacity: 0 }}
          animate={animation}
          transition={{ type: "spring", duration: 2.6, bounce: 0 }}
          className="mx-4 lg:mx-10 mb-40 flex justify-center items-center"
        >
          <div className="bg-rellenos border border-bordes w-full sm:max-w-lg md:max-w-xl lg:max-w-4xl rounded text-blanco p-4 flex flex-col gap-4 md:flex-row">
            <div className="relative w-full sm:w-[294px] h-[297px] overflow-hidden rounded justify-self-center self-center">
              <Image
                src="/foto-diri/foto.jpeg"
                alt="Ditya's Photo"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="md:w-3/4">
              <h2 className="text-xl mt-6 md:mt-0 md:mb-6">About Me</h2>
              <article>
                Hi, I&#39;m Ditya Athallah. I&#39;m a ungraduate college student
                at Telkom University majoring in Informatics International
                Class. Interested in software engineering since 2018, especially
                in web development. I have learned web development for 2 years.
                I usually work on the front-end side of the development...
              </article>
              <Link href="/about">
                <a className="mt-6 border w-36 h-12 rounded hover:opacity-80 transition flex items-center justify-center gap-2">
                  Read More
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.16667 0.916626L11.25 4.99996M11.25 4.99996L7.16667 9.08329M11.25 4.99996L0.75 4.99996"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </motion.section>
        <section className="mx-4 lg:px-10 mt-20 mb-4 text-blanco flex justify-center">
          <div className="max-w-lg md:max-w-2xl lg:max-w-5xl w-full">
            <h2 className="text-xl mt-6">My Experiences</h2>
            <Card
              title="Mechtech.idn, Surabaya"
              subtitle="As Web Designer Intern, November 2021 - February 2022"
              photoSrc="/porto/MechTech.png"
              photoAlt="Portofolio 1"
              href="/experience/detail"
            />
            <Card
              title="RPL-GDC Laboratory, Bandung"
              subtitle="As Frontend Developer, September 2021 - Present"
              photoSrc="/porto/RPLGDC.png"
              photoAlt="Portofolio 1"
              href="/experience/detail"
            />
            <div className="w-full flex justify-center items-center">
              <Link href="experience">
                <a className="bg-primario w-full lg:w-64 h-12 mt-6 rounded hover:opacity-80 transition flex gap-5 justify-center items-center">
                  See all my experiences
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.16667 1.50366L11.25 5.587M11.25 5.587L7.16667 9.67033M11.25 5.587L0.75 5.587"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="mx-4 lg:px-10 mt-20 mb-4 text-blanco flex justify-center">
          <div className="max-w-lg md:max-w-2xl lg:max-w-5xl w-full">
            <h2 className="text-xl mt-6">My Projects</h2>
            <Card
              title="Motion Website"
              subtitle="Website Development - As Frontend Developer"
              photoSrc="/porto/Motionweb.png"
              photoAlt="Portofolio 1"
              href="/projects/detail"
            />
            <Card
              title="Testcov.id"
              subtitle="Website Development - As UI/UX Designer"
              photoSrc="/porto/Testcovid.png"
              photoAlt="Portofolio 1"
              href="/projects/detail"
            />
            <div className="w-full flex justify-center items-center">
              <Link href="/projects">
                <a className="bg-primario w-full lg:w-64 h-12 mt-6 rounded hover:opacity-80 transition flex gap-5 justify-center items-center">
                  See my other projects
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.16667 1.50366L11.25 5.587M11.25 5.587L7.16667 9.67033M11.25 5.587L0.75 5.587"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </Scroll.Container>
  );
}
