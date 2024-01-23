import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./Componets/Home";
import Users from "./Componets/Users";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <NavLink to="/" className="btn btn-dark" activeclassname="active">
            Inicio
          </NavLink>
          <NavLink to="users" className="btn btn-dark" activeclassname="active">
            Users
          </NavLink>
        </div>
        <hr />
        <Routes>
          <Route path="users/:id" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
