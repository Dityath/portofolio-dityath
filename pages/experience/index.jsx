import React from "react";
import Card from "../../components/card";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Seo from "../../components/seo";

function Experience() {
  return (
    <div className="font-body bg-fondos">
      <Seo page="About" />
      <Header page="experience" />
      <div className="mx-4 lg:px-10 mt-20 mb-4 text-blanco flex justify-center">
        <div className="max-w-lg md:max-w-2xl lg:max-w-5xl w-full">
          <h2 className="text-4xl mt-6 font-bold">My Experiences</h2>
          <p>My working experience and internship experience</p>
          <Card
            title="Mechtech.idn, Surabaya"
            subtitle="As Web Designer Intern, November 2021 - February 2022"
            photoSrc="/porto/default.png"
            photoAlt="Portofolio 1"
          />
          <Card
            title="Motion Laboratory, Bandung"
            subtitle="As Frontend Developer, August 2021 - March 2022"
            photoSrc="/porto/default.png"
            photoAlt="Portofolio 1"
          />
          <Card
            title="RPL-GDC Laboratory, Bandung"
            subtitle="As Frontend Developer, September 2021 - Present"
            photoSrc="/porto/default.png"
            photoAlt="Portofolio 1"
          />
          <Card
            title="Proclub Telkom University, Bandung"
            subtitle="As Product Designer Intern, October 2020 - February 2021"
            photoSrc="/porto/default.png"
            photoAlt="Portofolio 1"
          />
          <Card
            title="Motion Laboratory, Bandung"
            subtitle="As UI/UX Designer Intern, October 2021 - March 2021"
            photoSrc="/porto/default.png"
            photoAlt="Portofolio 1"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
