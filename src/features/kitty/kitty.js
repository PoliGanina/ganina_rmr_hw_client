import { useEffect } from "react";
import { useImgUrl } from "../../features/kitty/context/useImgUrl";
import { useLogin } from "../login/context/useLogin";
import { getImgUrl } from "./kitty.api";
import { PulseLoader } from "react-spinners";

import "./kitty.scss";

const Kitty = () => {
  const { imgUrl, setImgUrl, loadingImg, setLoadingImg } = useImgUrl();
  const { user } = useLogin();

  useEffect(() => {
    setLoadingImg(true);
    const fetchUrl = async () => {
      const url = await getImgUrl();
      setImgUrl(url);
      setLoadingImg(false);
    };
    fetchUrl();
  }, [user]);


  return (
    <>
      {loadingImg ? (
        <PulseLoader />
      ) : (
        <img src={imgUrl} alt="the cat" className="content__box" />
      )}
    </>
  );
};

export default Kitty;
