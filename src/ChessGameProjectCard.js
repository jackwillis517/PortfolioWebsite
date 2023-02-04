import chessGameImage from "./chessgame.png";

function ChessGameProjectCard() {
  return (
    <div className="flex rounded-sm flex-col bg-zinc-800 text-white shadow-md shadow-[#171a18] hover:cursor-pointer hover:scale-99 hover:bg-[#e85b49]">
      <img
        src={chessGameImage}
        alt="chessGame"
        className="object-fit sm:h-80 md:h-96"
      />
      <div className="basis-1/6 p-8">
        <h1 className="mb-4 font-bold text-lg">Chess Game</h1>
        <h1>
          A project focused around the game of chess using C++ and OpenGl,
          exploring topics in computer graphics.
        </h1>
      </div>
    </div>
  );
}

export default ChessGameProjectCard;
