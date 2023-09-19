import React from "react";
import plateImage from "../images/plateImage.jpeg";

export default function AntiqueItem(props: any) {
  function closeModal() {
    props.toggle();
  }

  const urlsearchparams: any = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlsearchparams.entries());
  console.log("params", params);
  const imageToUse = JSON.parse(params["img"]);
  const actualImageToUse = imageToUse["thumbnail"];
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10 backdrop-blur-sm">
      <div className="w-screen h-screen rounded-md text-black flex flex-col shadow-lg bg-white items-center justify-center">
        <div className="flex flex-col w-screen h-screen shadow-lg md:px-48 md:py-16 justify-between text-center">
          <img src={actualImageToUse} alt="alt" className="h-3/6" />
          <ul className="flex flex-row justify-center gap-4">
            <li>
              <div className="h-6 w-6 bg-black"></div>
            </li>
            <li>
              <div className="h-6 w-6 bg-black"></div>
            </li>
            <li>
              <div className="h-6 w-6 bg-black"></div>
            </li>
            <li>
              <div className="h-6 w-6 bg-black"></div>
            </li>
          </ul>
          <h1 className="text-5xl">{params["title"]}</h1>
          <p className="text-lg">$100</p>
          <p>{params["description"]}</p>
          <div className="flex flex-row gap-4 justify-center">
            <button className="bg-black border border-black py-1 text-white px-5">
              Purchase
            </button>
            <button className="border-black border py-1 text-black px-5">
              Inquire
            </button>
          </div>
          <button onClick={() => closeModal()}>X</button>
        </div>
      </div>
    </div>
  );
}
