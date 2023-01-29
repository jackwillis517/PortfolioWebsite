import timeVaultImg from './timeVault1.png';

function TimeVaultProjectCard() {
    return (
      <div className="flex rounded-sm flex-col bg-zinc-800 text-white shadow-md shadow-[#171a18] hover:cursor-pointer hover:scale-99 hover:bg-[#e85b49]">
        <div className="basis-5/6">
          <img src={timeVaultImg} alt="timeVault"/>
        </div>
        <div className="basis-1/6 p-4">
          <h1 className="mb-4 mt-2 font-bold text-lg">Time Vault</h1>
          <h1>A decentralized Ethereum storage application, designed to store users ETH in case of emergency</h1>
        </div>
      </div>
    )
}

export default TimeVaultProjectCard;
  