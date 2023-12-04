import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/routing/About";
import Home from "./components/routing/Home";
import Me from "./components/routing/Me";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router><nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">Home</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/state">State</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/data">Data</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/requests">Requests</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/about' element={<Me />} />
  </Routes>
</Router>
);
}

export default App;