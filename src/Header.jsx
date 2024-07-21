import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-slate-700 ">
      <div className="max-w-screen-xl mx-auto tracking-wider font-semibold text-white h-14 flex justify-between place-items-center uppercase">
        <Link to={"home"}>Home</Link>
        <Link to={"home"}>Blog</Link>
        <Link to={"contact"}>About</Link>
        <Link to={"contact"}>Contact</Link>
        <Link
          to={"form"}
          className="border rounded-xl py-1 px-3 border-tail-blue"
        >
          LOGIN
        </Link>
      </div>
    </div>
  );
};
export default Header;
