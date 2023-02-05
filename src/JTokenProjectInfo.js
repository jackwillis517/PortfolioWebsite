import sc1Img from "./JTokenImages/JTokenSC1.png";
import sc2Img from "./JTokenImages/JTokenSC2.png";
import testImg from "./JTokenImages/JTokenTest.png";
import interactionImg1 from "./JTokenImages/JTokenInteraction1.png";
import interactionImg2 from "./JTokenImages/JTokenInteraction2.png";
import interactionImg3 from "./JTokenImages/JTokenInteraction3.png";
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
                    JToken
                  </h1>
                  <p className="lg:text-xl text-md">
                    My main goal in building this was learning about ERC20
                    tokens and gain exposure to OpenZeppelin smart contract
                    interfaces. For this dapp, I moved away from using a library
                    like Moralis to perform contract interaction and access
                    users' wallets. Moving forward, I'd probably use Moralis
                    again for speed, wider wallet support, and removing
                    boilerplate code. This would let me quickly support any
                    wallet and talk to contracts, allowing me to focus on the
                    project itself. I wanted to learn more about contract
                    interaction using Ethers.js so I elected to do it manually
                    which was more time-consuming but helped me understand what
                    was really going on behind the scenes. This dapp is now
                    deployed on IPFS, check out the deployment below.
                  </p>
                </div>
                <div className="flex flex-row basis-1/4 lg:mb-8 mb-4">
                  <h1 className="lg:text-3xl text-xl">
                    <a className="lg:text-4xl text-2xl font-bold">Stack: </a>
                    Solidity, React, HardHat, Tailwind CSS, Ethers.js
                  </h1>
                </div>
                <div className="flex flex-col basis-1/4 lg:mb-8 mb-4">
                  <h1 className="lg:text-4xl text-2xl font-bold">
                    Topics Covered:
                  </h1>
                  <div className="lg:text-xl text-md pl-8">
                    <ol className="list-disc">
                      <li>Solidity Interfaces, Events & Constructors</li>
                      <li>ERC20 Tokens</li>
                      <li>Smart Contract Interaction with Ethers.js</li>
                      <li>Async JavaScript Programming</li>
                      <li>Unit Testing with Chai</li>
                    </ol>
                  </div>
                </div>
                <div className="flex flex-row basis-1/4 place-self-center">
                  <a
                    href="https://github.com/jackwillis517/JToken"
                    className="bg-[#e85b49] rounded py-3 px-5 hover:-translate-y-1 hover:scale-110 hover:bg-[#d63e2a] ease-in-out duration-300 mb-1 ml-7 shadow-sm shadow-black"
                  >
                    Github
                  </a>
                  <a
                    href="https://tight-scene-4021.on.fleek.co/"
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
                Smart Contracts
              </h1>
              <hr className="lg:pb-10 pb-5 border-[#e85b49]" />
              <h1 className="lg:text-xl text-md lg:pb-10 pb-5">
                For this project, there are two smart contracts in play, one
                contract mints the ERC20 token called JToken and the other
                contract is the exchange itself. I implement OpenZeppelin's
                ERC20 interface in the first image below, minting a token with
                an initial supply provided to the constructor. In the
                Exchange.sol file, I pass in the Token to its constructor and
                have a function for giving all the tokens in existence to the
                exchange itself. Later on, I have a buy and sell function
                allowing users to buy JToken for ETH and sell them for ETH.
                OpenZeppelin's ERC20 smart contract does require the user to
                approve their tokens before the exchange takes them so a call to
                the approve function is needed inside of the sell function.
              </h1>
              <img src={sc2Img} alt="SC2" className="lg:pb-10 pb-5" />
              <img src={sc1Img} alt="SC" className="lg:pb-10 pb-5" />
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
                Like the Time Vault project, I used the Chai testing library to
                perform unit tests on the smart contracts for this dapp. Before
                each test, I use the ethers getContractFactory() function and
                deploy() functions to deploy both the contracts. First I test
                the giveExchangeTokens() function, ensuring that the Token
                contract can approve the Exchange contract to take all the
                tokens. I then check the token balance of each contract address
                afterward ensuring the transfer took place. In the last part of
                the image, I test the buy function, sending 1000 Wei with the
                message to the exchange for a JToken. I then test that the
                contract reverts if a user attempts to sell tokens they haven't
                approved yet.
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
                Interacting with the smart contracts is a bit more involved
                since I did it manually using Ethers.js. The first snippet shows
                where I stored the contract ABIs and Addresses, information that
                is needed to talk with the specific contracts. Below that is a
                connect function that requests MetaMask for an array of accounts
                and then returns by calling the function below it
                getContracts(), which does what the name says, it gets the
                contracts using a signer and the information mentioned early.
                The next photo displays three functions used to connect to
                MetaMask and get the contract objects. A useEffect automatically
                checks If a user is already in their wallet if they are the
                handleInitialization() function is called, returning the
                contracts and putting them into the state. The last function,
                connectCallback, is a callback function used if a user isn't
                logged into MetaMask. It calls the connect() function from the
                previous image and then puts the contracts into the state.
                Lastly, there is an image showing an example of an async
                function that calls the Exchange.sol buy() function in a
                try/catch block and updates the user's balance on screen when
                the smart contract emits a Transfer event.
              </h1>
              <img src={interactionImg1} alt="CI" className="lg:pb-10 pb-5" />
              <img src={interactionImg2} alt="CI2" className="lg:pb-10 pb-5" />
              <img src={interactionImg3} alt="CI3" className="lg:pb-10 pb-5" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeVaultProjectInfo;
