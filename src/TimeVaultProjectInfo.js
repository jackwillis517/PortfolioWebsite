import scImg from "./TimeVaultImages/TimeVaultSC.png";
import testImg from "./TimeVaultImages/TimeVaultTests.png";
import interactionImg from "./TimeVaultImages/TimeVaultCI.png";
import { motion } from "framer-motion";

function TimeVaultProjectInfo() {
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
                    Time Vault
                  </h1>
                  <p className="lg:text-xl text-md">
                    This application is my first dapp, the purpose is to allow
                    users to lock away their ether in case of emergency. I used
                    hardhat to develop my smart contract and write my deploy
                    scripts while using NextJS to create a fully responsive
                    frontend. Additionally, I used Moralis for contract
                    interaction and wallet management. This dapp is deployed on
                    IPFS you can get to the live deployment below.
                  </p>
                </div>
                <div className="flex flex-row basis-1/4 lg:mb-8 mb-4">
                  <h1 className="lg:text-3xl text-xl">
                    <a className="lg:text-4xl text-2xl font-bold">Stack: </a>
                    Solidity, Next.js, HardHat, Tailwind CSS, Ethers.js, React
                    Moralis
                  </h1>
                </div>
                <div className="flex flex-col basis-1/4 lg:mb-8 mb-4">
                  <h1 className="lg:text-4xl text-2xl font-bold">
                    Topics Covered:
                  </h1>
                  <div className="lg:text-xl text-md pl-8">
                    <ol className="list-disc">
                      <li>Solidity Programming</li>
                      <li>Smart Contract Interaction with React Moralis</li>
                      <li>Async JavaScript Programming</li>
                      <li>Unit Testing with Chai</li>
                    </ol>
                  </div>
                </div>
                <div className="flex flex-row basis-1/4 place-self-center">
                  <a
                    href="https://github.com/jackwillis517/time-vault"
                    className="bg-[#e85b49] rounded py-3 px-5 hover:-translate-y-1 hover:scale-110 hover:bg-[#d63e2a] ease-in-out duration-300 mb-1 ml-7 shadow-sm shadow-black"
                  >
                    Github
                  </a>
                  <a
                    href="https://mute-darkness-8535.on.fleek.co/"
                    className="bg-[#e85b49] lg:mr-0 mr-5 rounded py-3 px-5 hover:-translate-y-1 hover:scale-110 hover:bg-[#d63e2a] ease-in-out duration-300 mb-1 ml-7 shadow-sm shadow-black"
                  >
                    Deployment
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
                Smart Contract
              </h1>
              <hr className="lg:pb-10 pb-5 border-[#e85b49]" />
              <h1 className="lg:text-xl text-md lg:pb-10 pb-5">
                The smart contract for this app is fairly simple, it allows a
                simple deposit to withdraw from workflow and records the time a
                deposit is made using the timestamp of the block this
                transaction is included on. A user can increase the time their
                ETH is locked away for using the increaseTime() function.
                Mappings and fallback/receive functions are also used to store
                data on the chain and accept payments, respectively. This
                contract DOES NOT protect against reentrancy attacks and doesn't
                use a call to transfer value which is something I improved upon
                in the JToken project.
              </h1>
              <img src={scImg} alt="SC" className="lg:pb-10 pb-5" />
            </motion.div>
            <motion.div
              transition={{ x: { duration: 1 }, delay: 0.1 }}
              initial={{ x: "100%" }}
              animate={{ x: "0vw" }}
              className="flex flex-col rounded-l-md basis-1/4 p-12 pb-0 mx-64 lg:mb-8 mb-4 bg-[#303431]"
            >
              <h1 className="lg:text-4xl text-2xl lg:mb-6 mb-3 font-bold">
                Testing
              </h1>
              <hr className="lg:pb-10 pb-5 border-[#e85b49]" />
              <h1 className="lg:text-xl text-md lg:pb-10 pb-5">
                I used the Chai testing library to perform unit tests on the
                smart contract for this app. Below is a snippet showing some of
                the tests I ran on the deposit and increaseTime functions,
                towards the top is a beforeEach statement which deploys the
                smart contract on HardHats local network before testing each
                describe clause.
              </h1>
              <img src={testImg} alt="test" className="lg:pb-10 pb-5" />
            </motion.div>
            <motion.div
              transition={{ x: { duration: 1 }, delay: 0.1 }}
              initial={{ x: "-100%" }}
              animate={{ x: "0vw" }}
              className="flex flex-col rounded-r-md basis-1/4 p-12 pb-0 mx-64 lg:mb-8 mb-4 bg-[#303431]"
            >
              <h1 className="lg:text-4xl text-2xl lg:mb-6 mb-3 font-bold">
                Blockchain Interaction
              </h1>
              <hr className="lg:pb-10 pb-5 border-[#e85b49]" />
              <h1 className="lg:text-xl text-md lg:pb-10 pb-5">
                For interacting with the on-chain contract, I used a React
                library called React Moralis which comes with hooks that can be
                used to query the smart contract. Below you can see four calls
                to different contract functions using the useWeb3Contract hook
                from Moralis. Beyond this image, I would call these functions
                with an async function tied to an onClick event.
              </h1>
              <img src={interactionImg} alt="CI" className="lg:pb-10 pb-5" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeVaultProjectInfo;
