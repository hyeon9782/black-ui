import { useState } from "react";
import { AvartarVariants, avatar, fallback, image } from "./Avatar.css";
import { FaUser } from "react-icons/fa";

type AvatarProps = AvartarVariants & {
  name?: string;
  src?: string;
};

const Avatar = ({ name, src = "", size }: AvatarProps) => {
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    setImgError(true);
  };

  const summaryName = (name: string) => {
    const list = name.split(" ");

    const length = list.length;

    if (length === 1) {
      return `${list[0][0]}`;
    }

    if (length === 2) {
      return `${list[0][0]}${list[1][0]}`;
    }

    return `${list[0][0]}${list[length - 1][0]}`;
  };

  return (
    <div className={avatar({ size })}>
      {src && !imgError ? (
        <img src={src} alt={name} className={image} onError={handleError} />
      ) : (
        <div className={fallback}>
          {name ? (
            summaryName(name)
          ) : (
            <FaUser data-testid="default-icon" className={fallback} />
          )}
        </div>
      )}
    </div>
  );
};

export default Avatar;

/*

1. name이 있고 src가 없거나 로드하는 것을 실패했다면 이름 축약
2. name이 없고 src가 없거나 로드하는 것을 살패했다면 기본 프로필
3. name이 있고 src가 있다면 로드된 이미지
4. name이 없고 src가 있다면 로드된 이미지

*/
