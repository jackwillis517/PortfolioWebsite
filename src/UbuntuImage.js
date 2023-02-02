import ubuntu from "./ubuntu.png";

function UbuntuImage() {
  return (
    <div>
      <img
        src={ubuntu}
        alt="ubuntu"
        className=" lg:h-32 lg:w-32 lg:mx-16 h-20 w-20 mx-12"
      />
    </div>
  );
}

export default UbuntuImage;
