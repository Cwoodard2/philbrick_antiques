import React, { useState, useEffect } from "react";
import AntiqueItem from "./AntiqueItem";

export default function InventoryItem(props: any) {
  interface initialResponse {
    title: string;
    description: string;
    img: string;
  }

  // const [toggle, setToggle] = useState(false);
  // const [previewPic, setPreviewPic] = useState("");
  // const [picURL, setPicURL] = useState<initialResponse>({
  //   title: "",
  //   description: "",
  //   img: "",
  // });

  // async function getData() {
  //   return await fetch("https://randomuser.me/api/").then((response) =>
  //     response.json()
  //   );
  // }

  // useEffect(() => {
  //   async function someData() {
  //     const data: any = await getData();
  //     console.log(data["results"][0]["picture"]["thumbnail"]);
  //     setPicURL({
  //       title: data["results"][0]["name"]["first"],
  //       description: data["results"][0]["email"],
  //       img: JSON.stringify(data["results"][0]["picture"]),
  //     });
  //     setPreviewPic(data["results"][0]["picture"]['thumbnail']);
  //   }
  //   someData();
  // }, []);

  return (
    <div className="flex flex-row border-black border-2">
      {/* {toggle && <AntiqueItem toggle={setToggle} />} */}
      <img src={props.previewPic} alt="Image of a plate" className="w-1/2" />
      <div className="p-6 text-center">
        <h2 className="text-2xl">{props.title}</h2>
        <p>{props.description}</p>
        <br />
        <a
          href={`/antique-item?title=${props.title}&description=${props.description}&img=${props.img}&price=${"$100"}`}
        >
          <button className="bg-black py-1 text-white px-5">View</button>
        </a>
      </div>
    </div>
  );
}
