"use client";
import React, { useState } from "react";
import Review from "./component/Review";
import ChatBoat from "./component/chatboat";

export default function Home() {
  const [showChatBoat, setShowChatBoat] = useState(false);
  const chatBoat = () => setShowChatBoat(!showChatBoat);

  return (
    <>
      <Review />

      {showChatBoat ? (
        <ChatBoat chatBoat={chatBoat} />
      ) : (
        <div
          onClick={chatBoat}
          className="absolute right-10 bottom-10 bg-[#222] rounded-full py-4 px-[1.1rem]"
        >
          <img src="/Logoicon.png" width={35} height={35} />
        </div>
      )}
    </>
  );
}
