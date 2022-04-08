import React from "react";
import Card from "../../components/card";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

function Experience() {
  return (
    <Layout page="Experience">
      <div className="mx-4 lg:px-10 mt-20 mb-4 text-blanco flex justify-center">
        <div className="max-w-lg md:max-w-2xl lg:max-w-5xl w-full">
          <h2 className="text-4xl mt-6 font-bold">My Experiences</h2>
          <p>My working experience and internship experience</p>
          <Card
            title="Mechtech.idn, Surabaya"
            subtitle="As Web Designer Intern, November 2021 - February 2022"
            photoSrc="/porto/MechTech.png"
            photoAlt="Portofolio 1"
            href="/experience/detail"
          />
          <Card
            title="Motion Laboratory, Bandung"
            subtitle="As Frontend Developer, August 2021 - March 2022"
            photoSrc="/porto/Motion.png"
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
          <Card
            title="Proclub Telkom University, Bandung"
            subtitle="As Product Designer Intern, October 2020 - February 2021"
            photoSrc="/porto/Proclub.png"
            photoAlt="Portofolio 1"
            href="/experience/detail"
          />
          <Card
            title="Motion Laboratory, Bandung"
            subtitle="As UI/UX Designer Intern, October 2020 - March 2021"
            photoSrc="/porto/Motion.png"
            photoAlt="Portofolio 1"
            href="/experience/detail"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Experience;
