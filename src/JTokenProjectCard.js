import jtokenImg from "./jtoken.png";

function JTokenProjectCard() {
  return (
    <div className="flex rounded-sm flex-col bg-zinc-800 text-white shadow-md shadow-[#171a18] hover:cursor-pointer hover:scale-99 hover:bg-[#e85b49]">
      <img
        src={jtokenImg}
        alt="JToken"
        className="object-fit sm:h-80 md:h-96"
      />
      <div className="basis-1/6 p-8">
        <h1 className="mb-4 font-bold text-lg">JToken</h1>
        <h1>
          A decentralized ERC20 token exchange built on ethereum using
          OpenZeppelin, HardHat and Ethers.js.
        </h1>
      </div>
    </div>
  );
}

export default JTokenProjectCard;
