import React, { useState, useEffect } from "react";
import InventoryItem from "./AntiqueCard";

export default function InventoryContainer(props: any) {
    interface initialResponse {
        title: string;
        description: string;
        price: string;
        listingUrl: string;
        img: string;
      }
    
      const [previewPic, setPreviewPic] = useState("");
      const [picURL, setPicURL] = useState<initialResponse>({
        title: "",
        description: "",
        price: "",
        listingUrl: "",
        img: "",
      });

    async function getActualData() {
        await fetch("https://api.etsy.com/v3/application/openapi-ping", {method: "GET", mode: 'no-cors', headers: {'x-api-key': '1aa2bb33c44d55eeeeee6fff',}, credentials: 'include'}).then((response) => {
            if (response.ok) {
                console.log("yay")
                console.log(response.json());
            } else {
                console.log("nope");
                console.log(response.json());
            }
        })
    }

    async function getListings(listingType: string) {
      const response = await fetch(`https://openapi.etsy.com/v3/application/shops/{shop_id}/listings?state=${listingType}`, {method: "GET", mode: 'no-cors', headers: {'x-api-key': '1aa2bb33c44d55eeeeee6fff',}, credentials: 'include'});
      if (response.ok) {
        console.log("This worked (it wont)");
        return response.json();
      } else {
        console.log("This is where I want this");
      }
    }
    
      async function getData() {
        return await fetch("https://randomuser.me/api/").then((response) =>
          response.json()
        );
      }
    
      useEffect(() => {
        async function someData() {
          const data: any = await getData();
          // getActualData();
          getListings("active");
          console.log(data["results"][0]["picture"]["thumbnail"]);
          setPicURL({
            title: data["results"][0]["name"]["first"],
            description: data["results"][0]["email"],
            price: "100",
            listingUrl: "https://developers.etsy.com/documentation/reference#operation/createDraftListing",
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
        price={picURL.price}
        listingUrl={picURL.listingUrl}
        img={picURL.img}
        previewPic={previewPic}
      />
    </>
      )
    
}