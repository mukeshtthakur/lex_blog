import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-slate-700 px-10">
      <div className="max-w-screen-xl mx-auto tracking-wider font-semibold text-white h-14 flex justify-between place-items-center uppercase">
        <Link to={"home"}>Home</Link>
        <Link to={"home"}>Blog</Link>
        <Link to={"quiz"}>Quiz</Link>
        <Link to={"counter"}>Counter</Link>
        <Link to={"contact/:name"}>Contact</Link>
        <Link to={"form"} className="border rounded-xl py-1 px-3 border-tail-blue">
          LOGIN
        </Link>
      </div>
    </div>
  );
};
export default Header;
