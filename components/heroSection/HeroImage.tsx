import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
}

export const HeroImage = ({ src, alt }: HeroImageProps) => {
  return <Image src={src} width="288" height="288" alt={alt} />;
};
