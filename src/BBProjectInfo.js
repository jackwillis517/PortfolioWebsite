import sc1Img from "./JTokenImages/JTokenSC1.png";
import sc2Img from "./JTokenImages/JTokenSC2.png";
import testImg from "./JTokenImages/JTokenTest.png";
import interactionImg1 from "./JTokenImages/JTokenInteraction1.png";
import interactionImg2 from "./JTokenImages/JTokenInteraction2.png";
import interactionImg3 from "./JTokenImages/JTokenInteraction3.png";
import BBSC1 from "./BBImages/BBSC1.png";
import BBSC2 from "./BBImages/BBSC2.png";
import BBSC3 from "./BBImages/BBSC3.png";
import BBSC4 from "./BBImages/BBSC4.png";
import BBSC5 from "./BBImages/BBSC5.png";
import { motion } from "framer-motion";

function BBProjectInfo() {
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
                    Blockchain Blackjack
                  </h1>
                  <p className="lg:text-xl text-md">
                    My main goal in building this was to learn about Chainlink
                    and to gain exposure to their verifiably random number
                    interfaces. For this dapp, I used Wagmi for wallet
                    connection so I could support more wallets than just
                    Metamask. I did attempt to use Wagmi's React hooks for
                    contract interaction but found using Wagmi to create an
                    Ethers.js contract instance and using Ethers.js contract
                    interaction functions to be easier. I intend on using other
                    libraries similar to Wagmi, like Third Web, in the future.
                    Using Chainlink, when a player places a bet, a request is
                    made for random numbers which are then transformed into
                    cards. Using logic baked in the smart contract a winner is
                    determined. This dapp is deployed on IPFS, check out the
                    deployment below. You will need test MATIC to play.
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
                      <li>Chainlink VRF</li>
                      <li>Wagmi Wallet Interaction</li>
                      <li>Async JavaScript Programming</li>
                      <li>Unit Testing with Chai</li>
                    </ol>
                  </div>
                </div>
                <div className="flex flex-row basis-1/4 place-self-center">
                  <a
                    href="https://github.com/jackwillis517/blockchainblackjack"
                    className="bg-[#e85b49] rounded py-3 px-5 hover:-translate-y-1 hover:scale-110 hover:bg-[#d63e2a] ease-in-out duration-300 mb-1 ml-7 shadow-sm shadow-black"
                  >
                    Github
                  </a>
                  <a
                    href="https://wispy-salad-4842.on.fleek.co/"
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
                For this project, there is one smart contract deployed on
                Polygon's Mumbai testnet. The contract implements Chainlink VRF
                v2's subscription method, you can see the subscription below.
                The subscription is provided LINK which is Chainlinks native
                token. When a new player is added, a bet is placed, and I make a
                request for 52 random numbers which represent a deck of cards.
                When the callback function fulfillRandomWords is triggered by
                the completion of requestRandomWords, the dealInitialCards
                function is called giving the player the first two cards and the
                dealer the second two cards. When I say "cards" I mean a number
                between 1 and 52 which is determined by applying modulo 52 to
                the very large returned numbers. A player can then decide to hit
                or stand, at which point the cards are analyzed, and if the
                dealer has a sum of 16 or below they draw another card. From
                here, a winner is determined, and if the player won they receive
                double their initial bet back.
              </h1>
              <img src={BBSC1} alt="BBSC1" className="lg:pb-10 pb-5" />
              <img src={BBSC5} alt="BBSC5" className="lg:pb-10 pb-5" />
              <img src={BBSC2} alt="BBSC2" className="lg:pb-10 pb-5" />
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
                Like my previous dapp projects, I used the Chai testing library
                to perform unit tests on the smart contracts for this dapp.
                Before each test, I deploy a VRFCoordinator mock to use for
                local testing and supply it with some fake funds. Once this is
                done I write tests as I normally would ensuring the contract
                functions and errors where it should.
              </h1>
              <img src={BBSC3} alt="BBSC3" className="lg:pb-10 pb-5" />
            </motion.div>
            <motion.div
              transition={{ x: { duration: 1 }, delay: 0.1 }}
              initial={{ x: "-100%" }}
              animate={{ x: "0vw" }}
              className="flex flex-col rounded-r-md basis-1/4 p-12 pb-0 mx-64 lg:mb-8 mb-4 bg-[#303431]"
            >
              <h1 className="lg:text-4xl text-2xl lg:mb-6 mb-3 font-bold">
                Wagmi
              </h1>
              <hr className="lg:pb-10 pb-5 border-[#e85b49]" />
              <h1 className="lg:text-xl text-md lg:pb-10 pb-5">
                Below you can see how I setup Wagmi to use for wallet connection
                & connecting with the deployed smart contract. I set my chain to
                polygonMumbai and provide Alchemy as my default provider with a
                public provider as a backup should Alchemy go down for some
                reason. I then provide the connectors (wallets) I want to use
                including MetaMask, and WalletConnect as well as a generic
                injected connector that also works with MetaMask but can also be
                used for other web-enabled wallets. Finally, I wrap my entire
                app in the Wagmi client I created previously.
              </h1>
              <img src={BBSC4} alt="BBSC4" className="lg:pb-10 pb-5" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BBProjectInfo;
