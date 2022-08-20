import { useState } from "react";
import { ImgUrlContext } from "./useImgUrl";

export const ImgUrlProvider = ({ children }) => {
  const [imgUrl, setImgUrl] = useState("null");
  const [loadingImg, setLoadingImg] = useState(false);

  return (
    <ImgUrlContext.Provider value={{ imgUrl, setImgUrl, loadingImg, setLoadingImg }}>
      {children}
    </ImgUrlContext.Provider>
  );
};
