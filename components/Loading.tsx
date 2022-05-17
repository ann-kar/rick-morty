import Image from "next/image";

export const Loading = () => (
  <div className="flex flex-col items-center">
    <Image src="/portal-loader.png" width="100px" height="100px" className="animate-spin" alt="annoyed Rick" />
  </div>
);
