import Image from "next/image";

interface ErrorProps {
  type?: "no-results";
}
export const Error = ({ type }: ErrorProps) => (
  <div className="flex flex-col items-center">
    <Image
      src="/error-rick.png"
      width="230px"
      height="200px"
      alt="annoyed Rick"
    />
    {type === "no-results" ? (
      <h3>
        I haven&apos;t heard of such a being. And I know everything, mind you.
      </h3>
    ) : (
      <h3>Something went wrong.</h3>
    )}
  </div>
);
