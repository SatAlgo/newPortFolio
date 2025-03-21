"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "KitUp",
    title: "project 1",
    description: "KitUp is a student-centric platform designed to simplify campus life by providing essential resources in one place. With an intuitive interface, KitUp helps students manage their academic and personal needs efficiently.",
    stack: [
      { name: "Express.js" }, { name: "React.js" }, { name: "Node.js" }, { name: "HTML/CSS" }, { name: "Tailwind CSS" },
    ],
    image: "/assets/kitup1.png",
    live: "http://kitup.netlify.app/",
    github: "https://github.com/SatAlgo/SetUp",

  },
  {
    num: "02",
    category: "frontend",
    title: "project 1",
    description: "verujf eeeeeeeee tttttttttt eeeeeeeeeeee sjdknsd",
    stack: [
      { name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" },
    ],
    image: "/assets/kitup1.png",
    live: "",
    github: "",

  },
  {
    num: "03",
    category: "Time Table Viewer",
    title: "Time Table",
    description: "The College Timetable Viewer is a web application designed to help students easily access their college schedule. It provides real-time class time on which lecture is currently in progress and allows students to view their complete day-wise timetable at a glance.",
    stack: [
      { name: "Javascript" }, { name: "HTML" }, { name: "React (JSX/JS)" },
    ],
    image: "/assets/tt.png",
    live: "https://kitup.netlify.app/TT",
    github: "https://github.com/SatAlgo/SetUp",

  },
  {
    num: "04",
    category: "frontend",
    title: "project 1",
    description: "verujf eeeeeeeee tttttttttt eeeeeeeeeeee sjdknsd",
    stack: [
      { name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" },
    ],
    image: "/assets/kitup.png",
    live: "",
    github: "",

  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,  
      transition:{delay:2.4, duration: 0.4, ease:"easeIn"}, 
    }}
      className="min-h-[80vh] flex flex-col justify-center py-1 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
          xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white
          group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}

                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                      bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                      bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Gihub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1}
            className="xl:h-[520px] md-12"
            onSlideChange={handleSlideChange}>
              {projects.map((project, index)=>{
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[460px] relative group flex justify-center 
                    items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                      </div>
                      <div className="relative w-full h-full">
                        <Image 
                        src={project.image} 
                        fill 
                        className="object-cover" 
                        alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 
              bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max
              xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover
              text-primary text-[22px] w-[44px] h-[44px] flex justify-center
              items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
