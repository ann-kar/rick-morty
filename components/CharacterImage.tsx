import Image from "next/image";

interface CharacterImageProps {
  alt: string;
  src: string;
  type: "avatar" | "profile";
}

export const CharacterImage = ({ alt, src, type }: CharacterImageProps) => {
  let size, classes;
  switch (type) {
    case "avatar":
      size = "150px";
      classes = "rounded-full mx-auto";
      break;
    case "profile":
      size = "250px";
      classes = "rounded-lg mx-auto";
      break;
  }

  return (
    <div>
      <Image
        src={src}
        alt={`${type}: ${alt}`}
        width={size}
        height={size}
        className={classes}
      />
    </div>
  );
};
