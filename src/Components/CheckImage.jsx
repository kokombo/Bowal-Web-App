import { checkImageUrl } from "../Utilities";

const CheckImage = ({ img, size }) => {
  return (
    <div
      className={`h-[${size}px] w-[${size}px] rounded-full flex items-center bg-black`}
    >
      <img
        src={checkImageUrl(img) ? img : "https://i.ibb.co/TqsQ2Nj/logo1.png "}
        className="h-full w-full rounded-full border-none"
      />
    </div>
  );
};

export default CheckImage;
