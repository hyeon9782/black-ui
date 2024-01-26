import { useState } from "react";
import { AvartarVariants, avatar, fallback, image } from "./Avatar.css";
import { FaUser } from "react-icons/fa";

type AvatarProps = AvartarVariants & {
  name: string;
  src: string;
};

const Avatar = ({ name, src, size }: AvatarProps) => {
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    setImgError(true);
  };
  return (
    <div className={avatar({ size })}>
      {!imgError ? (
        <img src={src} alt={name} className={image} onError={handleError} />
      ) : (
        <div className={fallback}>
          <FaUser className={fallback} />
        </div>
      )}
    </div>
  );
};

export default Avatar;
