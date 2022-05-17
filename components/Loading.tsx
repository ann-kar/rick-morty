import Image from "next/image";

export const Loading = () => (
  <div className="flex flex-col items-center">
    <Image src="/thinking-rick.png" width="345px" height="200px" alt="annoyed Rick" />
    <h3>Let me think!</h3>
  </div>
);
