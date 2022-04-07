import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Seo from "../components/seo";
import Footer from "../components/footer";

function About() {
  return (
    <div className="font-body bg-fondos">
      <Seo page="About" />
      <Header page="about" />
      <main className="mx-4 my-10 text-blanco flex justify-center">
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
            <h1 className="font-semibold my-5 text-2xl">Ditya Athallah</h1>
            <article>
              Hi, I&#39;m Ditya Athallah. I&#39;m 21th years old Frontend
              Developer base in Indonesia (Semarang and Bandung), with
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
          <div className=""></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
