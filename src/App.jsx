import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="flex text-lg flex-col min-h-screen font-mono ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
