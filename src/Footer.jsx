import { FaSquareFacebook, FaXTwitter, FaSquareYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { BsQuestionSquareFill } from "react-icons/bs";
import { GrAccessibility } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-min-32 bg-slate-400 mt-auto px-20 py-5 flex justify-around">
      <ul className="flex gap-3 flex-col">
        <li className="mb-3 font-black text-xl">SOCIAL</li>
        <li className="flex gap-2 items-center	">
          <FaSquareFacebook className="inline  text-facebook" />
          <Link to={"contact"}>Contact</Link>
        </li>
        <li className="flex gap-2 items-center	">
          <FaInstagramSquare className="inline text-instagram" />
          Instagram
        </li>
        <li className="flex gap-2 items-center	">
          <FaXTwitter className="inline" />
          Twitter
        </li>
        <li className="flex gap-2 items-center	">
          <FaSquareYoutube className="inline text-red-600" />
          youtube
        </li>
      </ul>
      <ul className="flex gap-3 flex-col">
        <li className="mb-3 font-black text-xl">HELP</li>
        <li className="flex gap-2 items-center	">
          <MdContactPhone className="inline" />
          <span>Contact us</span>
        </li>
        <li className="flex gap-2 items-center	">
          <BsQuestionSquareFill className="inline text-questions" />
          FAQ
        </li>
        <li className="flex gap-2 items-center	">
          <GrAccessibility className="inline" />
          Accessibility
        </li>
      </ul>
    </div>
  );
};
export default Footer;
