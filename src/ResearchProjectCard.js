import researchImg from "./ResearchImages/research1.png";

function ResearchProjectCard() {
  return (
    <div className="flex rounded-sm flex-col bg-zinc-800 text-white shadow-md shadow-[#171a18] hover:cursor-pointer hover:scale-99 hover:bg-[#e85b49]">
      <img
        src={researchImg}
        alt="research"
        className="object-fit sm:h-80 md:h-96"
      />
      <div className="basis-1/6 p-8">
        <h1 className="mb-4 font-bold text-lg">Blockchain Security Research</h1>
        <h1>
          A collection of the work I completed as a Blockchain Research
          Assistant at Syracuse University.
        </h1>
      </div>
    </div>
  );
}

export default ResearchProjectCard;
