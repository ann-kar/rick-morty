import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-emerald-200">
      <Link href={"./characters"}>
        <a>
          If you are not redirected automatically, click here to access the main
          page
        </a>
      </Link>
    </div>
  );
};

export default Home;
