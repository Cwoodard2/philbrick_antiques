import React, { useEffect, useState } from "react";

export default function AntiqueItem(props: any) {

  const [currentPic, setCurrentPic] = useState("");
  const [allPics, setAllPics] = useState([]);
  const urlsearchparams: any = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlsearchparams.entries());

  useEffect(() => {
    const imageToUse = JSON.parse(params["img"]);
    setAllPics(Object.values(imageToUse));
    setCurrentPic(imageToUse["thumbnail"]);
  }, []);

  return (
    <div className="w-screen h-screen rounded-md text-black flex flex-col shadow-lg bg-white items-center justify-center">
      <div className="flex flex-col w-screen h-screen shadow-lg md:px-48 md:py-16 text-center">
        <img src={currentPic} alt="alt" className="h-3/6" />
        <ul className="flex flex-row justify-center gap-4">
          {allPics.map((pic: any) => (
            <li>
              <img src={pic} className="h-6 w-6 cursor-pointer" onClick={() => setCurrentPic(pic)}/>
            </li>
          ))}
        </ul>
        <h1 className="text-5xl">{params["title"]}</h1>
        <p className="text-lg">{params['price']}</p>
        <p>{params["description"]}</p>
        <div className="flex flex-row gap-4 justify-center">
          <a href="https://www.etsy.com/?ref=lgo">
            <button className="bg-black border border-black py-1 text-white px-5">
              Purchase
            </button>
          </a>
          <a href={`./contact?item=${params['title']}`}>
            <button className="border-black border py-1 text-black px-5">
              Inquire
            </button>
          </a>
        </div>
        <p>Powered By Etsy</p>
        {/* <button onClick={() => closeModal()}>X</button> */}
      </div>
    </div>
  );
}
