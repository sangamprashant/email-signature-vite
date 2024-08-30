import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <div className="w-full md:w-2/3 flex flex-col mb-10 items-center text-center">
          <img src="/title-dark.png" width={500} />
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
            Create and Share Professional Email Signatures
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700">
            Build a unique email signature that reflects your personal brand.
            Easily create, copy, and share your signature across all your email
            platforms.
          </p>
          <div className="flex w-full justify-center items-center gap-4">
            <button className="inline-flex items-center text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded-full text-lg">
              <GitHubIcon className="mr-2" />
              Contribute
            </button>
            <Link
              to="/editor"
              className="inline-flex items-center text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded-full text-lg"
            >
              Get Started
              <ArrowRightAltIcon className="ml-2" />
            </Link>
          </div>
        </div>
        <img
          className="w-full  mb-10 object-cover object-center rounded-lg"
          alt="hero"
          src="/hero.png"
        />
      </div>
    </section>
  );
};

export default Home;
