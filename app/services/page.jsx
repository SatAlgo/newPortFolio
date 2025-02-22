
"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web Devlopment',
    description: "Full-Stack Development (React.js, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB) || Frontend Development (HTML, CSS, JavaScript, React.js) || Backend Development (Node.js, Express.js, API Development) || UI/UX Enhancements (Responsive Design, Dark Mode, Tailwind CSS) || Bug Fixing & Code Optimization",
    href: ""
  },
  {
    num: '02',
    title: 'Freelance & Consulting Services',
    description: "Portfolio Website Development (For Individuals & Startups) || Tech Blogging & Documentation || Website Performance Optimization || Website Development for New Startups || Fixing Presentation Issues (Text Visibility, Correct Padding, UI Improvements)",
    href: ""
  },
  {
    num: '03',
    title: 'Academic & Student Support',
    description: "Project & Assignment Assistance (Web Development, Python, C++, Java) || Automation Scripts for Students (Attendance Management, Form Filling)",
    href: ""
  },
  
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline 
                  text-transparent group-hover:text-outline-hover
                  transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[40px] h-[40px] rounded-full
                  bg-white group-hover:bg-accent transition-all duration-500 flex
                  justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white 
                group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                {/* <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div> */}

                {/* description */}
<ul className="text-white/60 list-none space-y-2">
  {service.description.split('||').map((point, index) => (
    <li key={index} className="flex items-start">
      <span className="text-lg mr-2 text-accent">•</span> {point}
    </li>
  ))}
</ul>
<div className="border-b border-white/20 w-full"></div>


              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services
