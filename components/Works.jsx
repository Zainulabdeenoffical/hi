import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import GithubLogo from "./../public/assets/icons/github.svg";
import RocketLogo from "./../public/assets/icons/rocket.svg";

// Define the project data
export const projects = [
  {
    name: "Contact List Using .NET Web API & Angular",
    description: "A contact list application built using .NET Web API and Angular, providing CRUD functionality.",
    tags: [{ name: "Angular-19", color: "text-blue-500" }, { name: ".NET", color: "text-green-500" },{ name: ".NET CORE WEB APIS", color: "text-blue-500" }],
    image: "/assets/icons/contactlist.jpeg",  // Add image path for this project
    source_code_link: "https://github.com/Zainulabdeenoffical/ContactListUsing.netwebapi-Angular",
  deployed_link: "https://link-to-deployed-app.com"  // Add the live demo link if available
  },
  {
    name: "User Management System",
    description: "A user management system that allows administrators to manage users, with functionalities like adding, updating, and deleting users.",
    tags: [{ name: "JavaScript", color: "text-yellow-500" },{ name: ".NET CORE MVC", color: "text-red-500" }],
    image: "/assets/usermangmentsystem.webp",  // Add image path for this project
    source_code_link: "https://github.com/Zainulabdeenoffical/UserManagementSystem",
    deployed_link: "https://link-to-deployed-app.com"  // Add the live demo link if available
  },
  {
    name: "User Management System Using JSON",
    description: "A user management system using JSON for data storage, with functionality for managing users.",
    tags: [{ name: "JavaScript", color: "text-red-500" },{ name: "html", color: "text-green-400" },{ name: "CSS", color: "text-green-400" },{ name: "Jquery", color: "text-green-400" },{ name: "Mysql", color: "text-green-400" }],
    image: "/assets/usermangmentsystem.webp",  // Add image path for this project
    source_code_link: "https://github.com/Zainulabdeenoffical/UserManagmentSystemUsingJson",
    deployed_link: "https://link-to-deployed-app.com"  // Add the live demo link if available
  },
  {
    name: "User Management System in Windows Form",
    description: "A user management system developed using Windows Forms with C# for desktop application development.",
    tags: [{ name: "C#", color: "text-purple-500" },{ name: "MySQL", color: "text-red-400" }],
    image: "/assets/windowform.webp",  // Add image path for this project
    source_code_link: "https://github.com/Zainulabdeenoffical/usermanagementSysetminWindowForm",
    deployed_link: "https://link-to-deployed-app.com"  // Add the live demo link if available
  },
  {
    name: "Techstore Gaming Store",
    description: "An e-commerce platform for gaming products, offering a variety of games and game-related merchandise.",
    tags: [{ name: "PHP", color: "text-blue-400" }, { name: "JavaScript", color: "text-green-400" },{ name: "html", color: "text-green-400" },{ name: "CSS", color: "text-green-400" },{ name: "Jquery", color: "text-green-400" },{ name: "Mysql", color: "text-green-400" }],
    image: "/assets/techstoreproject.PNG",  // Add image path for this project
    source_code_link: "https://github.com/Zainulabdeenoffical/Techstore-Gamming-Store",
    deployed_link: "https://techstore.freesite.online/techstore/login.php"  // Add the live demo link if available
  }
];

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_link,
}) {
  const CHAR_LIMIT = 280;

  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Tilt
        tiltMaxAngleX="10"
        tiltMaxAngleY="10"
        className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-5 rounded-2xl sm:w-[370px] w-full h-fit min-h-[590px] shadow-sm shadow-primary"
      >
        <div className="relative w-full h-[230px]">
          <div className="w-full h-full object-cover rounded-2xl relative">
            <Image
              src={image}
              alt="project_image"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
            <div
              onClick={() => window.open(deployed_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <RocketLogo className="w-1/2 h-1/2 mr-[2px] z-10" />
            </div>
          </div>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <GithubLogo className="w-2/3 h-2/3 z-10" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px]">
            {description.length > CHAR_LIMIT ? description.substring(0, CHAR_LIMIT) + "..." : description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

function Works() {
  return (
    <section className="xl:my-36 md:mx-36 p-8 " id="projects">
      <motion.div
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="sectionSubText">My work</p>
        <h2 className="sectionHeadText">Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          These projects showcase my practical skills and experience, each with descriptions and links to code repositories and live demos. They demonstrate my ability to handle complex challenges, adapt to different technologies, and oversee projects from start to finish.
        </motion.p>
      </div>

      <div className="md:mt-20 mt-10 flex justify-center flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Works;

