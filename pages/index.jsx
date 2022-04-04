import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Seo from "../components/seo";

export default function Home() {
  return (
    <div className="font-body bg-fondos">
      <Seo page="" />
      <Header />
      <main className="text-blanco mx-4 my-28">
        <h1 className="text-center text-3xl leading-relaxed">
          Hi I&#39;m <span className="text-primario">Ditya Athallah.</span>
          <br />
          Frontend Developer
        </h1>
        <p className="text-center my-1">
          Welcome to my Web Portofolio! <span>👋</span>
        </p>
        <div className="flex flex-col justify-center items-center gap-5 mt-5">
          <button className="bg-primario w-36 h-12 rounded hover:opacity-80 transition">
            See Projects
          </button>
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
      </main>
      <div className="mx-4 mt-40 mb-5">
        <div className="bg-rellenos border border-bordes w-full rounded text-blanco p-4 flex flex-col gap-4">
          <div className="relative w-[294px] h-[297px] overflow-hidden rounded justify-self-center self-center">
            <Image
              src="/foto-diri/foto.jpeg"
              alt="Ditya's Photo"
              layout="fill"
            />
          </div>
          <h2 className="text-xl mt-6">About Me</h2>
          <article>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            voluptas saepe odio nisi. Voluptate magni recusandae harum quaerat
            omnis eligendi dolores placeat. Accusamus repellendus rem odio
            eveniet dolore, doloremque vel.
          </article>
          <a className="border w-36 h-12 rounded hover:opacity-80 transition flex items-center justify-center gap-2">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
