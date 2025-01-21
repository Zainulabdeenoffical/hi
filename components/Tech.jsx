import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const tech = [
  [
    { name: "C#", link: "https://learn.microsoft.com/en-us/dotnet/csharp/", icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/C_Sharp_Icon.png" },
    { name: "PHP", link: "https://www.php.net/", icon: "https://www.php.net/images/logos/new-php-logo.svg" },
    { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { name: "C++", link: "https://en.wikipedia.org/wiki/C%2B%2B", icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
    { name: "Python", link: "https://www.python.org/", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/172px-Python-logo-notext.svg.png" },
  ],
  [
    { name: ".NET Core", link: "https://dotnet.microsoft.com/", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/800px-.NET_Core_Logo.svg.png" },
    { name: "ASP.NET", link: "https://dotnet.microsoft.com/apps/aspnet", icon: "https://upload.wikimedia.org/wikipedia/de/thumb/5/5b/Microsoft_.NET_Logo.svg/315px-Microsoft_.NET_Logo.svg.png" },
    { name: ".NET MAUI", link: "https://learn.microsoft.com/en-us/dotnet/maui/", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/225px-Microsoft_.NET_logo.svg.png" },
    { name: "Angular", link: "https://angular.dev/", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png" },
  ],
  [
   
    { name: "Bootstrap", link: "https://getbootstrap.com/", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
    { name: "JQuery", link: "https://en.wikipedia.org/wiki/JQuery", icon: "https://upload.wikimedia.org/wikipedia/en/9/9e/JQuery_logo.svg" },
  ],
  [
    { name: "MySQL", link: "https://www.mysql.com/", icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
    { name: "SQL Server", link: "https://www.microsoft.com/en-us/sql-server", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
  ],
  [
    { name: "Git", link: "https://git-scm.com/", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
    { name: "Visual Studio", link: "https://visualstudio.microsoft.com/", icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/Visual_Studio_Icon_2019.svg" },
    { name: "XAMPP", link: "https://www.apachefriends.org/", icon: "https://upload.wikimedia.org/wikipedia/commons/0/03/Xampp_logo.svg" },
    { name: "PostMan", link: "https://www.postman.com/", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Postman_%28software%29.png/330px-Postman_%28software%29.png" },
  ],
  [
    { name: "Windows", link: "https://www.microsoft.com/en-us/windows", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Windows_logo_-_2012_flags_blue.svg/1161px-Windows_logo_-_2012_flags_blue.svg.png" },
    { name: "Linux", link: "https://www.linux.org/", icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" },
  ],
];


const techVariants = [
  "Languages",
  "Frameworks",
  "Libraries",
  "Databases",
  "Tools",
  "Environments",
];

function Tech() {
  const languages = tech.map((technology, index) => (
    <div className="w-full h-fit flex gap-2 md:flex-row flex-col" key={index}>
      <h3 className="md:hidden">{techVariants[index]}</h3>
      <motion.div
        className="w-full flex flex-row flex-wrap gap-2"
        variants={fadeIn("right", "spring", 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {technology.map((tech, index) => (
          <Link
            href={tech.link}
            key={tech.name}
            target="_blank"
            className="flex flex-row"
          >
            <div className="w-[40px] h-[40px] relative flex flex-row items-center group cursor-pointer">
              <Image
                src={tech.icon}
                alt={tech.name}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                onError={(e) => {
                  e.target.onerror = null; // prevents looping
                  e.target.src = '/public/assets/fallback-image.png'; // fallback image
                }}
              />

              <div className="opacity-0 w-fit min-w-[80px] bg-bgPrimaryLight dark:bg-bgPrimaryDark text-ctnPrimaryLight dark:text-ctnPrimaryDark text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 -top-3/4 -left-1/3 pointer-events-none">
                {tech.name}
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  ));

  const techNames = techVariants.map((tech, index) => (
    <h3 className="h-[50px] md:flex items-center hidden" key={index}>
      {tech}
    </h3>
  ));

  return (
    <section className="w-full h-fit p-8 mt-20" id="skills">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mx-auto"
      >
        <p className={"sectionSubText"}>What I have learnt so far</p>
        <h2 className={"sectionHeadText"}>Skills.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-ctnSecondaryLight dark:bg-bgSecondaryDark bg-bgSecondaryLight text-[17px] md:w-fit md:min-w-[60%] w-full h-full leading-[30px] flex md:flex-row flex-col gap-4 p-8 md:px-16 mx-auto rounded-lg justify-between backdrop-filter backdrop-blur-xl bg-opacity-10 shadow-sm shadow-primary"
      >
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full gap-5"
        >
          {techNames}
        </motion.div>
        <div className="w-[2px] h-[400px] dark:bg-ctnSecondaryDark bg-ctnSecondaryLight rounded-lg md:flex hidden mx-8" />
        <div className="md:w-[80%] w-full pl-2 h-full flex flex-col gap-8">
          {languages}
        </div>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Tech, "tech");

