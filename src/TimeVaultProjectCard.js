import timeVaultImg from "./timeVault1.png";

function TimeVaultProjectCard() {
  return (
    <div className="flex rounded-sm flex-col bg-zinc-800 text-white shadow-md shadow-[#171a18] hover:cursor-pointer hover:scale-99 hover:bg-[#e85b49]">
      <img
        src={timeVaultImg}
        alt="timeVault"
        className="object-fit sm:h-80 md:h-96"
      />
      <div className="basis-1/6 p-8">
        <h1 className="mb-4 font-bold text-lg">Time Vault</h1>
        <h1>
          A decentralized Ethereum storage application, designed to store users
          ETH in case of emergency.
        </h1>
      </div>
    </div>
  );
}

export default TimeVaultProjectCard;
