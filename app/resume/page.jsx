"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description: "I’m Satyam Madhav Gaikwad, currently pursuing my B-Tech in Computer Engineering",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Satyam Gaikwad"
    },
    {
      fieldName: "Phone",
      fieldValue: "7822099563"
    },
    {
      fieldName: "Experience",
      fieldValue: "Fresher"
    },
    {
      fieldName: "Skype",
      fieldValue: "Satyam@123"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "satyam.m.gaikwad@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Marathi"
    },


  ]
};

// experience
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "My goal is to stay at the forefront of technology, continually learn, and apply my expertise to real-world challenges.",
  items: [
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Devloper",
      duration: "2022 - Present",

    },
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Devloper",
      duration: "2022 - Present",

    },
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Devloper",
      duration: "2022 - Present",

    },
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Devloper",
      duration: "2022 - Present",

    },
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Devloper",
      duration: "2022 - Present",

    },
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Devloper",
      duration: "2022 - Present",

    },
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Devloper",
      duration: "2022 - Present",

    }

  ]
}

// education
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "My goal is to stay at the forefront of technology, continually learn, and apply my expertise to real-world challenges.",
  items: [
    {
      institute: "MIT Academy of Engineering, Pune",
      degree: "BTech in Computer Engineering",
      duration: "August, 2023 - May, 2027",

    },
    {
      institute: "Dayanand Science Junior College, Latur",
      degree: "HSC (Percentage: 68.00)",
      duration: "August, 2020 - Jully, 2022",

    },
    {
      institute: "Shri Sant Goroba Kaka Vidyalaya, Saundana",
      degree: "SSC (Percentage: 93.40)",
      duration: "2023",

    },
  ]
}

//skills
const skills = {
  title: 'My skills',
  description: "My goal is to stay at the forefront of technology, continually learn, and apply my expertise to real-world challenges.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "html5",
    },
    {
      icon: <FaJs />,
      name: "html5",
    },
    {
      icon: <FaReact />,
      name: "html5",
    },
    {
      icon: <SiTailwindcss />,
      name: "html5",
    },
    {
      icon: <SiNextdotjs />,
      name: "html5",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
          gap-6"
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start
                        gap-1">
                          <span className="text-decent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start
                        gap-1">
                          <span className="text-decent">{item.duration}</span>
                          <h3 className="text-xl max-w-[460px] min-h-[60px]
                          text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institute}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  
                </div>
                <ScrollArea className="h-[400px] pt-10">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-acccent
                                transition-all duration-300"
                              >
                                {skill.icon}
                              </div>
                            </TooltipTrigger >
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
                </ScrollArea>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0">
                  {about.info.map((item, index)=>{
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
