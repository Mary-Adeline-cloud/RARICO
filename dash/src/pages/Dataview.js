import React from "react";
import "./login.css";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

function Dataview() {
  return (
    <div className="dataview">
      <>
        <div class="container">
        <div class='row'  >
          <div class="col-12" style={{backgroundColor:'white', borderRadius:'15px', position:'static'}}>
          <h5>DataView</h5>
          </div>
        </div>
          <div class="row">
            <h3>View all data here</h3>


            <div class="row" >
            <div class="card" style={{width: '18rem', position:'static'}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
<div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

<div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
<div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

            
          </div>




           
            <Link to="#" className="menu-bars">
              <IoIcons.IoMdArrowRoundForward />
            </Link>
          </div>
        
      
      <div class="row" style={{ backgroundColor: "#d3d8f8" }}>
          <div class="col-sm">
            <ul>
              <dt>
                {" "}
                <a href="/Services" style={{ color: "#060b26" }}>
                  Device status!
                </a>
              </dt>
              <dt>
                <a href="/Signup" style={{ color: "#060b26" }}>
                  New Account
                </a>
              </dt>
              <dt>
                <a href="/Services" style={{ color: "#060b26" }}>
                  reports
                </a>
              </dt>
              <dt>
                <a href="/Dataview" style={{ color: "#060b26" }}>
                  Monthly data
                </a>
              </dt>
            </ul>
          </div>
          <div class="col-sm">
            <ul>
              <dt style={{ color: "#060b26" }}>
                <img
                  src="/logo.png"
                  alt="image"
                  className="logo1"
                  style={{ textAlign: "start" }}
                />
              </dt>

              <dt style={{ color: "#060b26" }}>
                <p>Rwanda Animal Ressources Improvement Cooperative</p>
              </dt>
              <dt style={{ color: "#060b26" }}>
                <p style={{ color: "red", textAlign: "start" }}>"RARICO"</p>
              </dt>
              <dt style={{ color: "#060b26" }}>@copyright</dt>
            </ul>
          </div>
          <div class="col-sm">
            <ul>
              <dt style={{ color: "#060b26" }}>
                <Link to="#" className="menu-bars">
                  <AiIcons.AiFillPhone />
                </Link>
                +250788443388
              </dt>
              <dt style={{ color: "#060b26" }}>
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineMail />
                </Link>
                info@rarico.com
              </dt>
              <dt style={{ color: "#060b26" }}>
                <Link to="#" className="menu-bars">
                  <IoIcons.IoLogoFacebook />
                </Link>
                rarico
              </dt>
              <dt style={{ color: "#060b26" }}>
                <Link to="#" className="menu-bars">
                  <IoIcons.IoLogoInstagram />
                </Link>
                rarico
              </dt>
            </ul>
          </div>
        </div>
        </div>
        </>
    </div>
  );
}

export default Dataview;
