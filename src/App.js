import "./App.css";
import headshot from "./HeadshotNoBackground3.png";
import codeImage from "./CodeImage.png";
import MarqueeComponent from "./Marquee";

function App() {
  return (
    <div>
      <div className="flex m-auto bg-zinc-900 justify-center text-white">
        <div className="max-w-standard font-hind">
          <nav className="flex flex-row pt-8 ">
            <div className="basis-1/2 pl-16 font-poiret-one text-xl md:text-3xl">
              <h1>Jack Willis</h1>
            </div>
            <div className="basis-1/2 flex flex-row pr-12 max-w-4xl text-md mr-24">
              <button className="basis-1/3">About Me</button>
              <button className="basis-1/3 pr-4">Portfolio</button>
              <button className="basis-1/3 bg-[#e85b49] rounded py-2 ease-in-out duration-300 mb-1 ml-7 shadow-sm shadow-black">
                Resume
              </button>
            </div>
          </nav>
          <div className="flex flex-row pt-6 ">
            <div className="basis-1/2 pl-16 pt-40">
              <h3 className="pb-3 text-sm md:text-xl">Hello!</h3>
              <h1 className="text-3xl md:text-5xl pb-3 font-bold">
                I'm Jack Willis
              </h1>
              <h2 className="text-lg md:text-3xl pb-3">
                Computer Science Student & Web 3.0 Enthusiast
              </h2>
              <h4 className="md:text-lg">
                My goal is to use my computer science background, passion for
                coding and love of blockchain technologies to contribute to the
                next evolution of the internet.
              </h4>
              <button className="mt-10 bg-[#e85b49] rounded px-4 py-2 ease-in-out duration-300 text-lg mb-4 shadow-sm shadow-grey-300">
                My Work
              </button>
            </div>
            <div className="basis-1/2">
              <img src={headshot} alt="Headshot" className="max-w-screen-sm " />
            </div>
          </div>
        </div>
      </div>
      <div className="flex m-auto bg-[#303431]  justify-center text-white">
        <div className="max-w-standard font-hind">
          <div className="pt-32 flex flex-row">
            <div className="basis-1/2 px-16">
              <h1 className="font-bold text-2xl md:text-4xl pb-10">
                Feel free to reach out.
              </h1>
              <h4 className="font-bold text-xl pb-3">Let's Talk</h4>
              <hr className="pb-16 border-[#e85b49] " />
              <h2 className="text-[#e85b49] text-2xl font-bold pb-6">
                jackwillis517@gmail.com
              </h2>
              <h2 className="bold text-xl">Phone: 315 663 1705</h2>
            </div>
            <div className="basis-1/2 px-16">
              <h1 className="font-bold text-2xl md:text-4xl pb-10">About Me</h1>
              <h4 className="md:text-lg pb-8">
                I'm an aspiring full-stack blockchain developer finishing my
                last semester at Syracuse University, College of Engineering &
                Computer Science. After graduation, I hope to pursue a Masters
                in Computer Science specializing in Enterprise and Web
                Computing.
              </h4>
              <h4 className="md:text-lg pb-3">
                LinkedIn | www.linkedin.com/in/jack-willis-3b0b18127
              </h4>
              <h4 className="md:text-lg pb-3">
                Github | github.com/jackwillis517
              </h4>
              <h4 className="md:text-lg pb-8">GPA | 3.5</h4>
              <button className="bg-[#e85b49] rounded px-5 py-3 text-lg mb-4 shadow-sm ease-in-out duration-300 shadow-black">
                Download Resume{" "}
                <span class="material-symbols-outlined">download</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="basis-1/2 pl-28 pr-16 pt-32">
              <div className="flex flex-row h-96">
                <div className="basis-1/2">
                  <img
                    src={codeImage}
                    alt="etherCoins"
                    className="scale-75 md:scale-175 pl-3"
                  />
                </div>
                <div className="basis-1/2">
                  <h1 className="text-2xl md:text-4xl font-bold pb-8 z-3">
                    Learning Blockchain & Web Development
                  </h1>
                  <h1 className="text-lg">
                    My main focus currently is growing both my web development
                    skills, as well as my knowledge of blockchain development.
                    To achieve this, I've been concentrating heavily on creating
                    projects centered around decentralized finanace using
                    frontend frameworks like React and Next.js. I've also been
                    learning about smart contracts and Ethereum through
                    contributions to blockchain research & open-source
                    blockchain initiatives.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex m-auto bg-zinc-900 justify-center text-white">
        <div className="max-w-standard font-hind">
          <div className="pb-1 flex flex-row basis-1/2 ">
            <div className="basis-1/2">
              <h1 className="font-bold text-2xl md:text-4xl pr-6 pl-16 pt-72">
                Technologies I've Been Working With
              </h1>
              <span class="material-symbols-outlined">
                keyboard_double_arrow_down
              </span>
            </div>
            <div className="grid grid-cols-2 pr-16 pl-6 basis-1/2 gap-8">
              <div className="basis-1/2 bg-[#e85b49] py-5 px-9 rounded-sm shadow-md shadow-black">
                <h1 className="text-xl font-bold text-center">Full-Stack</h1>
                <h1 className="pt-3 text-center">
                  I seek to understand all aspects of a stack, from the frontend
                  framework to the on-chain smart contracts.
                </h1>
              </div>
              <div className="basis-1/2 bg-zinc-800 py-5 px-9 rounded-sm shadow-md shadow-black">
                <h1 className="text-xl font-bold text-center">Research</h1>
                <h1 className="pt-3 text-center">
                  While at SU, I conducted research in a group focused on
                  blockchain security, I built new security focused programming
                  labs for future students.
                </h1>
              </div>
              <div className="basis-1/2 bg-zinc-800 py-5 px-9 rounded-sm shadow-md shadow-black">
                <h1 className="text-xl font-bold text-center">Dapps</h1>
                <h1 className="pt-3 text-center">
                  I currently have one application deployed on IPFS and will be
                  developing/deploying more of them exploring different topics
                  in blockchain.
                </h1>
              </div>
              <div className="basis-1/2 bg-zinc-800 py-5 px-9 rounded-sm shadow-md shadow-black">
                <h1 className="text-xl font-bold text-center">
                  Cuse Blockchain
                </h1>
                <h1 className="pt-3 text-center">
                  I'm a member of a student run blockchain club, we meet weekly
                  discussing topics in blockchain and networking with
                  professionals in industry.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex m-auto bg-[#303431] justify-center text-white">
        <div className="max-w-standard font-hind">
          <MarqueeComponent />
        </div>
      </div>
      <div className="flex flex-row m-auto bg-[#303431] justify-center text-white">
        <div className="max-w-standard font-hind">
          <div className="basis-1/2">
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
