import { useEffect } from "react";
import { useImgUrl } from "../../features/kitty/context/useImgUrl";
import { useLogin } from "../login/context/useLogin";
import { getImgUrl } from "./kitty.api";

import "./kitty.scss";

const Kitty = () => {
  const { imgUrl, setImgUrl } = useImgUrl();
  const { user } = useLogin();

  useEffect(() => {
    const fetchUrl = async () => {
      const url = await getImgUrl();
      setImgUrl(url);
    };
    fetchUrl();
  }, [user]);

  return (
    <div className="content__box">
      <img src={imgUrl} alt="the cat" className="content__box" />
    </div>
  );
};
export default Kitty;
