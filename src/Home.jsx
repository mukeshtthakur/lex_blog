import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-32 p-10">
      <div className="grid grid-cols-3 gap-10">
        <div className="flex flex-col gap-10 col-span-2">
          <p className="font-bold text-5xl uppercase leading-[1.3]">
            Insights and Ideas for the Curious Mind
          </p>
          <p className="text-2xl">
            Dive into deep discussions, explore innovative concepts, and discover fresh
            perspectives. Join our community of thinkers and learners, and satisfy your curiosity
            with every post
          </p>
          <div className="flex gap-5">
            <Link className="border-2 px-5 py-1.5 border-tail-blue font-bold" to={"form"}>
              LOGIN
            </Link>
            <Link className="inline bg-tail-blue px-5 py-1.5 text-white font-bold" to={"form"}>
              SIGN UP
            </Link>
          </div>
        </div>
        <div className="">
          <img src="../public/blogs.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Home;
