import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="./picture/DS/ssp.jpg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>Phakaphol From Sarasas Pittaya</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://phakaphol-portfolio.vercel.app/">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Another Project</a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
