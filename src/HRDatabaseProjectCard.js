import hrdbImg from "./HRImages/hr1.png";

function HRDatabaseProjectCard() {
  return (
    <div className="flex rounded-sm flex-col bg-zinc-800 text-white shadow-md shadow-[#171a18] hover:cursor-pointer hover:scale-99 hover:bg-[#e85b49]">
      <img src={hrdbImg} alt="hrdb" className="object-fit sm:h-80 md:h-96" />
      <div className="basis-1/6 p-8">
        <h1 className="mb-4 font-bold text-lg">Human Resources Database</h1>
        <h1>
          A database created with Microsoft SQL Server that support the hiring
          process for a Human Resources Department.
        </h1>
      </div>
    </div>
  );
}

export default HRDatabaseProjectCard;
