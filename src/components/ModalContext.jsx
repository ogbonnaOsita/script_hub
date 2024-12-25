import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const openModal = (url) => {
      setVideoUrl(url);
      setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, videoUrl}}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);