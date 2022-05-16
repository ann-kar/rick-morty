import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full flex bg-gray-100 ">
      <div className="w-full flex flex-wrap justify-end items-center">
        <div className="w-4/5">
          <div className="md:hidden text-xl sm:text-2xl w-full font-getSchwifty text-zinc-600 font-bold my-3">
            who is who on
          </div>
          <div className="hidden md:block text-6xl w-full font-getSchwifty text-zinc-600 font-bold my-3">
            look up who is who on
          </div>
          <Image
            src="/logo.svg"
            className="m-6"
            alt="Rick and Morty"
            width="600px"
            height="120px"></Image>
        </div>
      </div>
      <div className="w-full">
        <Image
          src="/open-your-eyes.png"
          width="538px"
          height="416px"
          alt="main graphic: Open your eyes, Morty!"
        />
      </div>
    </div>
  );
};
