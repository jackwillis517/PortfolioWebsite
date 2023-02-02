import HungryImage from "./hungry.png";

function HungryProjectCard() {
  return (
    <div className="flex rounded-sm flex-col bg-zinc-800 text-white shadow-md shadow-[#171a18] hover:cursor-pointer hover:scale-99 hover:bg-[#e85b49]">
      <img
        src={HungryImage}
        alt="hungry"
        className="object-fit sm:h-80 md:h-96"
      />
      <div className="basis-1/6 p-8">
        <h1 className="mb-4 font-bold text-lg">Hungry</h1>
        <h1>
          A food suggestion CRUD application was designed and implemented by
          myself and a team of five other students.
        </h1>
      </div>
    </div>
  );
}

export default HungryProjectCard;
