import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project Imports
import Home from "./pages/Home";
import CallForPapers from "./pages/CallForPapers";
import Committee from "./pages/Committee";
import Header from "./components/Header";
import ContactUs from "./pages/ContactUs";
import ImportantDates from "./pages/ImportantDates";
import Registration from "./pages/Registration";
import Program from "./pages/Program";
import RegularPaperSubmission from "./pages/RegularPaperSubmission";
import Sponsorship from "./pages/Sponsorship";
import Schedule from "./pages/Schedule";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/call-for-papers" exact element={<CallForPapers />} />
          <Route path="/committee" exact element={<Committee />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
          <Route path="/important-dates" exact element={<ImportantDates />} />
          <Route path="/author-registration" exact element={<Registration />} />
          <Route path="/author-regular-paper-submission" exact element={<RegularPaperSubmission />} />
          <Route path="/program" exact element={<Program />} />
          <Route path="/sponsorship" exact element={<Sponsorship />} />
          <Route path="/program-schedule" exact element={<Schedule />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
