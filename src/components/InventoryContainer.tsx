import React, { useState, useEffect } from "react";
import InventoryItem from "./AntiqueCard";

export default function InventoryContainer(props: any) {
    interface initialResponse {
        title: string;
        description: string;
        img: string;
      }

      console.log("here");
    
      const [toggle, setToggle] = useState(false);
      const [previewPic, setPreviewPic] = useState("");
      const [picURL, setPicURL] = useState<initialResponse>({
        title: "",
        description: "",
        img: "",
      });

       console.log("Now here");
    
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
          setPreviewPic(data["results"][0]["picture"]['thumbnail']);
        }
        someData();
      }, []);

      return (
        <>
        <InventoryItem
        title={picURL.title}
        description={picURL.description}
        img={picURL.img}
        previewPic={previewPic}
      />
      {/* <InventoryItem
        title="Antique Name"
        description="This item is from the dark ages IDK. But hey we don't like to talk about the dark ages"
        img=""
      />
      <InventoryItem
        title="Antique Name"
        description="This item is from the dark ages IDK. But hey we don't like to talk about the dark ages"
        img=""
      />
      <InventoryItem
        title="Antique Name"
        description="This item is from the dark ages IDK. But hey we don't like to talk about the dark ages"
        img=""
      /> */}
    </>
      )
    
}