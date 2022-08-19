import { createContext, useContext } from "react";

export const ImgUrlContext = createContext();

export const useImgUrl = () => {
  const context = useContext(ImgUrlContext);
  if (!context) {
    throw new Error("useLogin must be used within LoginProvider");
  }
  return context;
};
