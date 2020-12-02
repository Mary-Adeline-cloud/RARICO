import React from "react";
import "./login.css";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import GaugeChart from 'react-gauge-chart';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

function Dashboard() {

  return (
    <div className="dashboard" >
      <div class="container">
        <div class='row'  >
          <div class="col-12" style={{backgroundColor:'white', borderRadius:'15px', position:'static'}}>
          <h5 style={{textAlign:'center'}}>Dashboard</h5>
          </div>
        </div>
        <p style={{color:'white'}}>
          
        </p>
        
        <div class='row' style={{position:'static'}}>
        <div class='col-8'style={{position:'static'}}>
        <div class="card" style={{width: '15rem', position:'static'}}>
          <div class="card-body">
            <h5 class="card-title">PH sensor</h5>
            <IoIcons. IoMdThermometer/>
            <p>pH is a scale used to specify the acidity or basicity of an aqueous solution. </p>
              
               
             <GaugeChart style={{background:'#009900'}} id="gauge-chart5" 
               animate={true} 
                nrOfLevels={15} 
                percent={0.10} 
                 needleColor="#345243"/>
           </div>
          </div> 

        <div class="card" style={{width: '15rem', position:'static'}}>
          <div class="card-body">
            <h5 class="card-title">Temperature</h5>
            <IoIcons. IoMdThermometer/>
            <p>Temperature is a physical quantity that expresses hot and cold in a substance.</p>
              
            <GaugeChart style={{background:' #99ff99'}} id="gauge-chart5"
              nrOfLevels={420}
              arcsLength={[0.3, 0.5, 0.2]}
              colors={['#5BE12C', '#F5CD19', '#EA4228']}
              percent={0.37}
              arcPadding={0.02}/>
           </div>
        </div> 

        <div class="card" style={{width: '15rem', position:'static'}}>
          <div class="card-body">
            <h5 class="card-title">Oxygen level</h5>
            <IoIcons. IoMdThermometer/>
            <p>Oxygen is the essential thing for existance in this World. Fishes need oxygen for respiration.</p>
              
            <GaugeChart id="gauge-chart6" 
               animate={true} 
                nrOfLevels={15} 
                percent={0.10} 
                 needleColor="#345243"/>
              </div>
          </div> 

        </div>
        <div class="col-4" style={{backgroundColor:'#e6fff2'}}> 
            
              
                 <h5><FaIcons. FaFish /></h5>
                   <h6 >Internet of things(IoT)based device</h6>
                    <p>Check the status of your device. View the oxygen, temperature and PH to sustain aqua life</p>
                     <div style={{fontSize:"17px"}}>Current Date:<Datetime /></div>
                      <div style={{fontSize:"17px", color:"green"}}>Location:</div>
            </div>
          </div>
              <div class="row">
                 <p style={{color:'white'}}>.</p>
               </div>
          <div class="row">
          <div class="col-8" style={{position:'static'}}> 
          <p style={{textAlign:'center'}}><strong>Device level</strong></p>   
              <GaugeChart style={{background:'black'}} id="gauge-chart6" 
               animate={true} 
               nrOfLevels={30} 
               percent={0.10} 
               needleColor="#345243"/>

          </div>
          <div class="col-4">
          <form>
             <div class="form-group">
             <label for="exampleInputEmail1">
             Email address
             </label>
             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <div class="form-group">
            <label for="exampleInputPassword1">
Write your issue
</label>
            <input
type="text"
class="form-control"
id="exampleInputPassword1"
placeholder="message"
></input>
            </div>

               <button type="submit" class="btn btn-primary" style={{background:'green'}}>
                 Send Help Stipend
               </button>
          </form>

        </div>


         </div>
         <div class="row" style={{ backgroundColor: "lightgray" }}>
<div class="col-sm" style={{position:'static'}}>
<ul>
<dt >
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

export default Dashboard;

const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value * 100
  )}%`;
}
