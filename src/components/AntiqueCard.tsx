import React, { useState, useEffect } from "react";

export default function InventoryItem(props: any) {

  return (
    <div className="flex flex-col md:flex-row border-black border-2">
      {/* {toggle && <AntiqueItem toggle={setToggle} />} */}
      <img src={props.previewPic} alt="Image of a plate" className="md:w-1/2 md:h-full h-1/2" />
      <div className="p-6 text-center w-full">
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
