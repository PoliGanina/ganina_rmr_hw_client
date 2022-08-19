import { useState } from "react";
import { ImgUrlContext } from "./useImgUrl";

export const ImgUrlProvider = ({ children }) => {
  const [imgUrl, setImgUrl] = useState("null");

  return (
    <ImgUrlContext.Provider value={{ imgUrl, setImgUrl }}>
      {children}
    </ImgUrlContext.Provider>
  );
};
