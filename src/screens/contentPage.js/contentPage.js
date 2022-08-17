import Kitty from "../../features/kitty/kitty";
import "./contentPage.scss";
const ContentPage = ({ url }) => {
  return (
    <div className="content">
      <Kitty url={url} />
    </div>
  );
};

export default ContentPage;
