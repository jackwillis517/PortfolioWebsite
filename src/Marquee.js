import React from "react";
import Marquee from "react-fast-marquee";
import HtmlImage from "./HtmlImage";
import CssImage from "./CssImage";
import TailwindImage from "./TailwindImage";
import UbuntuImage from "./UbuntuImage";
import JavaImage from "./JavaImage";
import JavascriptImage from "./JavascriptImage";
import EthersImage from "./EthersImage";
import SolidityImage from "./SolidityImage";
import ReactImage from "./ReactImage";
import HardhatImage from "./HardhatImage";
import SqlImage from "./SqlImage";

function MarqueeComponent() {
  return (
    <Marquee
      speed={45}
      className=""
      gradientColor={[48, 52, 49]}
      pauseOnHover={true}
    >
      <HtmlImage />
      <CssImage />
      <TailwindImage />
      <UbuntuImage />
      <JavaImage />
      <JavascriptImage />
      <EthersImage />
      <SolidityImage />
      <ReactImage />
      <HardhatImage />
      <SqlImage />
    </Marquee>
  );
}

export default MarqueeComponent;
