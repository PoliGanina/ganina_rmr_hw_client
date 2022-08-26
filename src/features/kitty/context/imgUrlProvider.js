import { useState } from "react";
import { ImgUrlContext } from "./useImgUrl";
import PropTypes from "prop-types";

export const ImgUrlProvider = ({ children }) => {
  const [imgUrl, setImgUrl] = useState("null");
  const [loadingImg, setLoadingImg] = useState(false);

  return (
    <ImgUrlContext.Provider
      value={{ imgUrl, setImgUrl, loadingImg, setLoadingImg }}
    >
      {children}
    </ImgUrlContext.Provider>
  );
};

ImgUrlProvider.propTypes = {
  children: PropTypes.node,
};
