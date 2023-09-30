import React, { useEffect, useState } from "react";

export default function AntiqueItem(props: any) {

  const [currentPic, setCurrentPic] = useState<string>("");
  const [allPics, setAllPics] = useState<string[]>([]);
  const urlsearchparams: any = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlsearchparams.entries());

  useEffect(() => {
    const imageToUse = JSON.parse(params["img"]);
    setAllPics(Object.values(imageToUse));
    setCurrentPic(imageToUse["thumbnail"]);
  }, []);

  return (
      <div className="flex flex-col h-screen mx-12 my-8 md:px-48 md:py-16 text-center justify-between">
        <img src={currentPic} alt="alt" className="h-3/6" />
        <ul className="flex flex-row justify-center gap-4">
          {allPics.map((pic: any) => (
            <li>
              <img src={pic} className="h-6 w-6 cursor-pointer object-cover" onClick={() => setCurrentPic(pic)} alt="Antique Item"/>
            </li>
          ))}
        </ul>
        <h1 className="text-5xl">{params["title"]}</h1>
        <p className="text-lg">{params['price']}</p>
        <p>{params["description"]}</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href={params['listingURL']}>
            <button className="bg-black border border-black py-1 text-white px-5">
              Purchase
            </button>
          </a>
          <a href={`/contact?item=${params['title']}`}>
            <button className="border-black border py-1 text-black px-5">
              Inquire
            </button>
          </a>
        </div>
        <p>Powered By Etsy</p>
      </div>
  );
}
