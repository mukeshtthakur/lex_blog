import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import Home from "./Home.jsx";
import Form from "./Form.jsx";
import Contact from "./Contact.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound.jsx";
import Quiz from "./Quiz.jsx";
import Counter from "./Counter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="home" element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="/contact/:name" element={<Contact />} />
          <Route path="contact" element={<Contact />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="counter" element={<Counter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
