import React from "react";
import Card from "../../components/card";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Seo from "../../components/seo";

function Projects() {
  return (
    <div className="font-body bg-fondos">
      <Seo page="Projects" />
      <Header page="projects" />
      <div className="mx-4 lg:px-10 mt-20 mb-4 text-blanco flex justify-center">
        <div className="max-w-lg md:max-w-2xl lg:max-w-5xl w-full">
          <h2 className="text-4xl mt-6 font-bold">My Projects</h2>
          <p>My latest projects</p>
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
          <Card
            title="Wangsaff.js"
            subtitle="Chatbot Automation at Whatsapp - As Software Engineer"
            photoSrc="/porto/Whatsapp js.png"
            photoAlt="Portofolio 1"
            href="/projects/detail"
          />
          <Card
            title="Curio"
            subtitle="Mobile App - As UI/UX Designer"
            photoSrc="/porto/Curio.png"
            photoAlt="Portofolio 1"
            href="/projects/detail"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
