import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between 
        xl:pt-8 xl:pb-6">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <div className="xl:pb-4"><span className="text-xl">Computer Engineer</span></div>
            <h1 className="h2 mb-3 max-w-[800px]">Hello I'm <br /> <span className="text-accent">Satyam Gaikwad</span></h1>
            <p className="max-w-[700px] mb-6 text-white/80">
              A second-year B-Tech Computer Engineering student with a strong foundation in C++, Python, and Java. Passionate about web development and data structures, I thrive on solving real-world challenges and contributing to innovative projects.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8 mb-2">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 p-5"
              >
                <a href="https://1drv.ms/w/c/fc1755c51a0b0c9f/EZ8MCxrFVRcggPz1AgAAAAABYeTDLPuVtOxjD0CwBZBKgA" download>
                  <span>Download CV</span>
                </a>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-5"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex 
                justify-center items-center text-accent text-base hover:bg-accent 
                hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />

      {/* Copyright Section */}
<div>
  <Footer />
</div>

    </section>
  );
}

export default Home
