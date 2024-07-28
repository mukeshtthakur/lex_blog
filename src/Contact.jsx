import { useParams } from "react-router-dom";

const Contact = () => {
  let params = useParams();
  return <div>Contact {params.name}</div>;
};
export default Contact;
