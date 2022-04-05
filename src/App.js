import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import login1 from "../src/Components/Deskone/1images/login1.png";
import { Container, Row, Col } from "react-bootstrap";
import Deskone from "./Components/Deskone/Page0ne/Deskone";
import Navbar from "./Components/Deskone/Navbar/Navbar";
import PageTwo from "./Components/Deskone/PageTwo/PageTwo";
import Product from "./Components/Deskone/Product/Product";
import Sunflower from "./Components/Deskone/Sunflower/Sunflower";
import Elig from "./Components/Deskone/Elig/Elig";
import Suggetion from "./Components/Deskone/Suggetion/Suggetion";
import Entry from "./Components/Deskone/Entry/Entry";
import Bonus from "./Components/Deskone/Bonus/Bonus";
import Policies from "./Components/Deskone/Policies/Policies";
import "./Components/Deskone/Page0ne/Deskone.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Router>
          {/* <Sidebar /> */}
          <Routes>
            <Route path="/123" exact element={<Deskone />}></Route>
            <Route path="/456" exact element={<PageTwo />}></Route>
            <Route path="/sunf" exact element={<Sunflower />}></Route>
            <Route path="/product" exact element={<Product />}></Route>
            <Route path="/elig" exact element={<Elig />}></Route>
            <Route path="/suggs" exact element={<Suggetion />}></Route>
            <Route path="/entry" exact element={<Entry />}></Route>
            <Route path="/bonus" exact element={<Bonus />}></Route>
            <Route path="/policies" exact element={<Policies />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
