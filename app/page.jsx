import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// import Social from "@/components/Social";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between 
        xl:pt-8 xl:pb-14">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <div className="xl:pb-4"><span className="text-xl">Computer Engineer</span></div>
            <h1 className="h2 mb-4 max-w-[500px]">Hello I'm <br /> <span className="text-accent">Satyam Gaikwad</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I’m Satyam Madhav Gaikwad, currently pursuing my B-Tech in Computer Engineering.
              As a second-year student, I’m passionate about web development,
              data structures.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 p-5"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                {/* <Social containerStyle="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/> */}
                social icons
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home
