import tailwind from "./tailwind.png";

function TailwindImage() {
  return (
    <div>
      <img
        src={tailwind}
        alt="tailwind"
        className=" lg:h-32 lg:w-32 lg:mx-16 h-20 w-20 mx-12"
      />
    </div>
  );
}

export default TailwindImage;
