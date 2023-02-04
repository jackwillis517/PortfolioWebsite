import p1 from "./GraphicsImages/p1.png";
import p2 from "./GraphicsImages/p2.png";
import p3 from "./GraphicsImages/p3.png";
import p4 from "./GraphicsImages/p4.png";
import p5 from "./GraphicsImages/p5.png";
import { motion } from "framer-motion";

function GraphicsProjectInfo() {
  return (
    <div className="overflow-hidden no-scrollbar">
      <div className="flex m-auto bg-zinc-900 justify-center text-white">
        <div className="lg:max-w-standard font-hind">
          <div className="flex flex-col">
            <motion.div
              transition={{ y: { duration: 1 }, delay: 0.1 }}
              initial={{ y: "-100%" }}
              animate={{ y: "0vh" }}
              className="basis-1/4 p-12 pb-6 mx-64 mb-16 rounded-sm bg-zinc-800"
            >
              <div className="flex flex-col">
                <div className="basis-2/4 lg:mb-16 mb-8">
                  <h1 className="lg:text-5xl text-3xl font-bold lg:mb-10 mb-5 text-[#e85b49]">
                    Chess Game
                  </h1>
                  <p className="lg:text-xl text-md">
                    This game was my final project for a computer graphics
                    course at Syracuse University, which focused on chess. This
                    project DOESN'T play chess against you, it simply allows two
                    players to move pieces around, capturing those a player
                    places a given piece on. In addition to the game itself,
                    there are two animated clocks that rotate depending on whose
                    turn it was, a newtons cradle that could be controlled by
                    the player, and a lamp that is illuminated. Various textures
                    for the board and pieces were also options the player could
                    control. The room itself has transparent elements like glass
                    and a night sky that rotates when nighttime is triggered.
                    This game was written entirely in C++ using OpenGL.
                  </p>
                </div>
                <div className="flex flex-row basis-1/4 lg:mb-8 mb-4">
                  <h1 className="lg:text-3xl text-xl">
                    <a className="lg:text-4xl text-2xl font-bold">Stack: </a>
                    C++, OpenGL
                  </h1>
                </div>
                <div className="flex flex-col basis-1/4 lg:mb-8 mb-4">
                  <h1 className="lg:text-4xl text-2xl font-bold">
                    Topics Covered:
                  </h1>
                  <div className="lg:text-xl text-md pl-8">
                    <ol className="list-disc">
                      <li>Textures</li>
                      <li>Color Picking</li>
                      <li>Bezier Surfaces</li>
                      <li>Lighting</li>
                      <li>User Interaction</li>
                      <li>Animation</li>
                      <li>Projection of 3D Space</li>
                    </ol>
                  </div>
                </div>
                <div className="flex flex-row basis-1/4 place-self-center">
                  <a
                    href="https://github.com/jackwillis517/Graphics/blob/master/FinalProject.cpp"
                    className="bg-[#e85b49] rounded py-3 px-5 hover:-translate-y-1 hover:scale-110 hover:bg-[#d63e2a] ease-in-out duration-300 mb-1 ml-7 shadow-sm shadow-black"
                  >
                    Github
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              transition={{ x: { duration: 1 }, delay: 0.1 }}
              initial={{ x: "-100%" }}
              animate={{ x: "0vw" }}
              className="flex flex-col basis-1/4 p-12 pb-0 mx-64 lg:mb-8 mb-4 bg-[#303431]"
            >
              <h1 className="lg:text-4xl text-2xl lg:mb-6 mb-3 font-bold">
                Photo Gallary
              </h1>
              <img src={p1} alt="p1" className="lg:pb-10 pb-5" />
              <img src={p2} alt="p2" className="lg:pb-10 pb-5" />
              <img src={p3} alt="p3" className="lg:pb-10 pb-5" />
              <img src={p4} alt="p4" className="lg:pb-10 pb-5" />
              <img src={p5} alt="p5" className="lg:pb-10 pb-5" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphicsProjectInfo;
