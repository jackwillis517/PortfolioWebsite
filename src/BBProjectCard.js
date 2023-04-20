import BBDemoImage from "./BBDemoImage.png";

function BBProjectCard() {
  return (
    <div className="flex rounded-sm flex-col bg-zinc-800 text-white shadow-md shadow-[#171a18] hover:cursor-pointer hover:scale-99 hover:bg-[#e85b49]">
      <img
        src={BBDemoImage}
        alt="blockchainBlackjack"
        className="object-fit sm:h-80 md:h-96"
      />
      <div className="basis-1/6 p-8">
        <h1 className="mb-4 font-bold text-lg">Blockchain Blackjack</h1>
        <h1>
          The game of blackjack that utilizes Chainlink's oracle network & is
          deployed on Polygon's blockchain.
        </h1>
      </div>
    </div>
  );
}

export default BBProjectCard;
