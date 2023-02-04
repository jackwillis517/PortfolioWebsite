import dexSimImg from "./DexSim.png";

function DexSimProjectCard() {
  return (
    <div className="flex rounded-sm flex-col bg-zinc-800 text-white shadow-md shadow-[#171a18] hover:cursor-pointer hover:scale-99 hover:bg-[#e85b49]">
      <img
        src={dexSimImg}
        alt="dexSim"
        className="object-fit sm:h-80 md:h-96"
      />
      <div className="basis-1/6 p-8">
        <h1 className="mb-4 font-bold text-lg">Dex Sim (Coming Soon)</h1>
        <h1>
          A dapp intended to teach people the inner workings of a CPMM mechanism
          in a DEXes like Uniswap.
        </h1>
      </div>
    </div>
  );
}

export default DexSimProjectCard;
