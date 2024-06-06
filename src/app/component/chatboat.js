import React, { useState } from "react";
import Image from "next/image";

function Chatboat({ chatBoat }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <>
      <section className="font-HelveticaNeueLtd fixed inset-0 z-50 flex justify-end items-end p-2 bg-opacity-50">
        <div className="h-full w-full sm:w-[50%] md:w-[40%] xl:w-[25%] flex flex-col border justify-between rounded-md bg-[#fff] shadow-md">
          <div className="bg-[#f3f5f8] p-5 flex justify-between rounded-t-md items-center">
            <div className="flex gap-4">
              <img
                src="/chat-boat.svg"
                width={30}
                height={35}
                onClick={chatBoat}
              />
              <h1 className="text-[#019ed1] text-base md:text-xl lg:text-2xl font-semibold">
                Let's Chat!
              </h1>
            </div>
            <img src="/close.svg" width={25} height={25} onClick={chatBoat} />
          </div>

          <div
            className="p-3 overflow-y-scroll"
            style={{ scrollbarWidth: "none" }}
          >
            {messages.map((msg, index) => (
              <div key={index} className="p-4 grid justify-end">
                <span className="h-auto bg-[#019ed1] shadow-lg text-white text-[14px] md:text-[16px] break-words inline-block max-w-[250px] p-3 rounded-2xl rounded-tr-none">
                  {msg}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-[#f3f5f8] border-t rounded-b-md p-5 flex justify-between">
            <input
              type="text"
              placeholder="Type a message..."
              className="bg-[#f3f5f8] text-[#61666c] text-[14px] md:text-[16px] outline-none flex-grow"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            {message.trim() && (
              <button onClick={handleSendMessage} className="ml-2">
                <Image src="/send.svg" alt="send" width={25} height={25} />
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Chatboat;
