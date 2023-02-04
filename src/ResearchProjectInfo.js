import r1 from "./ResearchImages/r1.png";
import r2 from "./ResearchImages/r2.png";
import r3 from "./ResearchImages/r3.png";
import r4 from "./ResearchImages/r4.png";
import presentation from "./Documents/Preventing Transaction Reording Manipulations in DeFi Summary.pdf";
import { motion } from "framer-motion";

function HRDatabaseProjectInfo() {
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
                    Blockchain Security Research
                  </h1>
                  <p className="lg:text-xl text-md">
                    From the beginning of the summer after my Junior year at SU
                    to the middle of my final year I was a research assistant
                    for Dr. Yuzhe Tang and his group of Ph.D. students. I
                    focused on researching decentralized exchanges, summarizing
                    research papers, and creating new labs for future graduate
                    students. My research focused on security flaws, potential
                    fixes, and attacks that can be performed on DEXes. I created
                    two lab prototypes, one of which was iterated further upon
                    by myself and the group, later becoming a part of the
                    curriculum for the Computer Science department's
                    graduate-level blockchain course. In the repository, it's
                    listed as Lab B2. This lab became part of the Blockchain and
                    Dapp Development Labs project, which is an open-source
                    repository of blockchain labs created by this lab group.
                    There are links to the project's website and GitHub below.
                    My other lab focused on reordering attacks on Ethereum and I
                    also created a presentation on potential fixes for this type
                    of attack, I've linked that below as well.
                  </p>
                </div>
                <div className="flex flex-row basis-1/4 lg:mb-8 mb-4">
                  <h1 className="lg:text-3xl text-xl">
                    <a className="lg:text-4xl text-2xl font-bold">Stack: </a>
                    Solidity
                  </h1>
                </div>
                <div className="flex flex-col basis-1/4 lg:mb-8 mb-4">
                  <h1 className="lg:text-4xl text-2xl font-bold">
                    Topics Covered:
                  </h1>
                  <div className="lg:text-xl text-md pl-8">
                    <ol className="list-disc">
                      <li>Solidity Programming</li>
                      <li>Arbitrage on Decentralized Exchanges</li>
                      <li>Transaction Manipulation Attacks on Ethereum</li>
                      <li>MEV Mitigation Methods</li>
                    </ol>
                  </div>
                </div>
                <div className="flex flex-row basis-1/4 place-self-center">
                  <a
                    href="https://badd-labs.github.io/"
                    className="bg-[#e85b49] lg:mr-0 mr-5 rounded py-3 px-5 hover:-translate-y-1 hover:scale-110 hover:bg-[#d63e2a] ease-in-out duration-300 mb-1 ml-7 shadow-sm shadow-black"
                  >
                    BaDD Website
                  </a>
                  <a
                    href="https://github.com/badd-labs/badd-labs"
                    className="bg-[#e85b49] lg:mr-0 mr-5 rounded py-3 px-5 hover:-translate-y-1 hover:scale-110 hover:bg-[#d63e2a] ease-in-out duration-300 mb-1 ml-7 shadow-sm shadow-black"
                  >
                    BaDD Github
                  </a>
                  <a
                    href={presentation}
                    download="Presentation.pdf"
                    className="bg-[#e85b49] lg:mr-0 mr-5 rounded py-3 px-5 hover:-translate-y-1 hover:scale-110 hover:bg-[#d63e2a] ease-in-out duration-300 mb-1 ml-7 shadow-sm shadow-black"
                  >
                    Presentation
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
                Arbitrage Lab
              </h1>
              <hr className="lg:pb-10 pb-5 border-[#e85b49]" />
              <h1 className="lg:text-xl text-md lg:pb-10 pb-5">
                Arbitrage is a problem in traditional finance and is protected
                against by financial law, but because of the decentralized
                nature of DEXes and the lack of regulation in the blockchain
                space (at the time of writing this...), arbitrage is possible
                and very important to protect against. Below is a code snippet
                of the DEX I created for students to perform arbitrage against.
                Later on in the lab, students have to implement a technique
                known as routing, which is a popular defense against this type
                of attack. In the code below the user can provide the name of
                the token they wish to trade for in the swap function. This
                function calls the calculateReturn() function which uses a
                constant product function based on the liquidity pools of both
                mToken and tToken to figure out the return on a specific trade.
                Looking back, and if you look at the released version of the
                lab, this DEX is overcomplicated and was later refactored into a
                much more readable version. I highlighted this snippet since it
                was my first real application of Solidity programming and I
                wanted to document the evolution of this lab. The second image
                shows the released version of this lab on BaDD.
              </h1>
              <img src={r1} alt="r1" className="lg:pb-10 pb-5" />
              <img src={r2} alt="r2" className="lg:pb-10 pb-5" />
            </motion.div>
            <motion.div
              transition={{ x: { duration: 1 }, delay: 0.1 }}
              initial={{ x: "100%" }}
              animate={{ x: "0vw" }}
              className="flex flex-col rounded-l-md basis-1/4 p-12 pb-0 mx-64 lg:mb-8 mb-4 bg-[#303431]"
            >
              <h1 className="lg:text-4xl text-2xl lg:mb-6 mb-3 font-bold">
                Presentation Example
              </h1>
              <hr className="lg:pb-10 pb-5 border-[#e85b49]" />
              <h1 className="lg:text-xl text-md lg:pb-10 pb-5">
                This is a slide from my presentation on Preventing Transaction
                Manipulation on DeFi presentation that highlights a method of
                preventing miner extractable value from Ethereum. Miner
                extractable value or MEV is the profit a miner could make by
                mining transactions from Ethereums mempool in an unnatural
                order. The diagram highlights how a system like Flashbots works
                at a high level, Flashbots takes in a bunch of transactions and
                bundles them, ordering transactions themselves and then sending
                the bundle to a miner for block inclusion. There is a trade-off
                here, you decrease decentralization for increased security. In
                the rest of this presentation and in popular blockchain
                literature you'll notice these tradeoffs occurring a lot between
                decentralization, security, and scalability.
              </h1>
              <img src={r3} alt="test" className="lg:pb-10 pb-5" />
            </motion.div>
            <motion.div
              transition={{ x: { duration: 1 }, delay: 0.1 }}
              initial={{ x: "-100%" }}
              animate={{ x: "0vw" }}
              className="flex flex-col rounded-r-md basis-1/4 p-12 pb-0 mx-64 lg:mb-8 mb-4 bg-[#303431]"
            >
              <h1 className="lg:text-4xl text-2xl lg:mb-6 mb-3 font-bold">
                Reordering Lab
              </h1>
              <hr className="lg:pb-10 pb-5 border-[#e85b49]" />
              <h1 className="lg:text-xl text-md lg:pb-10 pb-5">
                The reordering attack lab is meant to teach students about
                frontrunning, back-running, and sandwich attacks on Ethereum.
                These all relate to the presentation example above, in that the
                manipulation of transaction ordering in Ethereum can negatively
                affect others' profit. An example would be on a DEX like
                Uniswap, if an attacker sees a trade about to be included from
                the mempool and gets their own trade mined before the victims
                they can shift the liquidity pools to their favor. They could
                then follow up the victims' transaction with another malicious
                one, selling their previously purchased tokens for a profit.
                This is an example of a sandwich attack, performing a
                frontrunning attack and back running attack, "sandwiching" a
                victim's transaction for profit. In the code snippet below, Bob
                is the attacker, he sandwiches Alice's trade with two of his own
                for a profit. This example is obviously oversimplified, but it
                serves the purpose of teaching the general security flaws in
                transaction ordering on Ethereum. Decentralization and security
                are NOT the same things.
              </h1>
              <img src={r4} alt="CI" className="lg:pb-10 pb-5" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HRDatabaseProjectInfo;
