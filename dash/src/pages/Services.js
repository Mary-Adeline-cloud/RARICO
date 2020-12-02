import React from "react";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import './login.css';
import map from "./map";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Services() {
  return (
    <div className="services">
      <div class="container">
      <div class='row'  >
          <div class="col-12" style={{backgroundColor:'white', borderRadius:'15px', position:'static'}}>
          <h5 style={{textAlign:'center'}}>Services</h5>
          </div>
        </div>
        <div class="row" style={{position:'static'}}>
          <div
            class="col-6"
            style={{ backgroundColor: "white", border: "1px", position:'static' }}
          >
            <div>
              <span>
                <h3> Get to know what is happening with your device.</h3>
                <h2> See the working sensors</h2>
                <p style={{ color: "#060b26" }}>Status:</p>
                <ol>
                  <li>
                    PH sensor<span class="badge badge-success">Active</span>
                  </li>
                  <li>
                    Oxygen sensor<span class="badge badge-success">Active</span>
                  </li>
                  <li>
                    Temperature sensor
                    <span class="badge badge-success">Active</span>
                  </li>
                </ol>
              </span>
            </div>
          </div>
          <div class="col-6" style={{ border: "1px" }} >
              

          <ul class="cal ">
  <li class="calen-title">ID </li>               
  <li class="" style={{minHeight:"40px"}}>  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
</ul>

<ul class="cal ">
  <li class="calen-title">Agent name </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
</ul>

<ul class="cal ">
  <li class="calen-title">PH  </li>
  <li class="" style={{minHeight:"40px"}}> </li>
  <li class="" style={{minHeight:"40px"}}> </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
</ul>

<ul class="cal ">
  <li class="calen-title">Oxygen sensor  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
</ul>

<ul class="cal ">
  <li class="calen-title">Temperature </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
  
</ul>
<ul class="cal ">
  <li class="calen-title">Time/date </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
  <li class="" style={{minHeight:"40px"}}>  </li>
</ul>
          

            
          
             
          </div>
        </div>

        
        <div class="row" style={{ backgroundColor: "white" }}>
         

         <a href='/map' style={{fontSize:"20px", textDecoration:"none"}}>View device location </a>

        </div>

        <div class="row" style={{ backgroundColor: "#d3d8f8" }}>
          <div class="col-sm" style={{position:'static'}}>
            <ul style={{position:'static'}}>
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
      </div>
      
    
  );
}

export default Services;
