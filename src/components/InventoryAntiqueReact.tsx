import React, { useState, useEffect } from "react";
import plateImage from "../images/plateImage.jpeg";
import AntiqueItem from "./Item";
import { Image } from "astro:assets";

export default function InventoryItem(props: any) {
  interface initialResponse {
    title: string;
    description: string;
    img: string;
  }

  const [toggle, setToggle] = useState(false);
  const [picURL, setPicURL] = useState<initialResponse>({
    title: "",
    description: "",
    img: "",
  });

  async function getData() {
    return await fetch("https://randomuser.me/api/").then((response) =>
      response.json()
    );
  }

  useEffect(() => {
    async function someData() {
      const data: any = await getData();
      console.log(data["results"][0]["picture"]["thumbnail"]);
      setPicURL({
        title: data["results"][0]["name"]["first"],
        description: data["results"][0]["email"],
        img: JSON.stringify(data["results"][0]["picture"]),
      });
    }
    someData();
  }, []);

  return (
    <div className="flex flex-row border-black border-2">
      {toggle && <AntiqueItem toggle={setToggle} />}
      <img src={picURL["img"]} alt="Image of a plate" className="w-1/2" />
      <div className="p-6 text-center">
        <h2 className="text-2xl">{picURL.title}</h2>
        <p>{picURL.description}</p>
        <br />
        {/* <button className="bg-black py-1 text-white px-5" onClick={() => setToggle(true)}>View</button> */}
        <a
          href={`./antiqueItem?title=${picURL.title}&description=${picURL.description}&img=${picURL.img}`}
        >
          <button className="bg-black py-1 text-white px-5">View</button>
        </a>
      </div>
    </div>
  );
}
