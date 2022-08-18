import axios from "axios";

export const getImgUrl = async () => {
    const res = await axios.get("/api/v1/kitty");
    return res.data.data.src;
  };

  