import React from "react";
import { IoMdVideocam } from "react-icons/io";
import { MdOutlineLogin } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useModal } from "./ModalContext";

const ScriptCard = ({
  imageUrl,
  title = "Product Title",
  bought = false,
  price,
  demoVideoUrl,
}) => {
  const navigate = useNavigate();
  const { openModal } = useModal();
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleDemoClick = () => {
    if (demoVideoUrl) {
      openModal(demoVideoUrl);
    }
  };
  return (
    <div className="flex w-full flex-col overflow-hidden border border-gray- bg-white shadow-md h-full">
      <div className="relative h-44">
        <img
          className="w-full h-full object-cover"
          src={imageUrl || "https://via.placeholder.com/300"}
          alt={title || "Product Image"}
        />
        {!bought && (
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-sm text-sm font-medium">
            ${price}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col px-4 pb-4 mt-4 gap-2 justify-between">
        <h5 className=" tracking-tight text-slate-900 font-medium mb-2">
          {title}
        </h5>
        {/* Spacer to push the buttons down */}
        <div className="flex items-center justify-between gap-2 mt-auto">
          {bought ? (
            <button
              onClick={handleLoginClick}
              className="flex items-center justify-center bg-black px-3 py-2 text-sm text-white transition border border-black hover:border-gray-700 hover:bg-gray-700 w-full"
            >
              Login
              <MdOutlineLogin className="text-white ml-2" />
            </button>
          ) : (
            <button className="flex items-center justify-center bg-orange-400 px-3 py-2 text-sm text-white transition border border-orange-400 hover:border-orange-300 hover:bg-orange-300 w-full">
              Unlock
              <RiLock2Fill className="text-white ml-2" />
            </button>
          )}
          <button
            onClick={handleDemoClick}
            className="flex items-center justify-center border border-black px-3 py-2 text-sm text-black transition hover:bg-gray-200 w-full"
          >
            Demo
            <IoMdVideocam className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScriptCard;
