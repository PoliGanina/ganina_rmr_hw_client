import "./kitty.scss";

const Kitty = ({ url }) => {
  return (
    <div className="content__box">
      <img src={url} alt="the cat" className="content__box" />
    </div>
  );
};
export default Kitty;
