import React, { Component } from 'react';
import './App.css'
import image1 from './images/ss1.png'
import image2 from './images/ss4.png'
import image3 from './images/ss5.png'
import image4 from './images/ss6.png'
import image5 from './images/ss7.png'
import image6 from './images/ss8.png'
import image7 from './images/ss9.png'
import image8 from './images/ss10.png'
import image9 from './images/ss11.png'

class MyComponent extends Component {
  render() {
    return (
      <div><div>
        <header>
          <nav style={{display:"flex"}}><div className="app-title">Discover Plots</div>
            <ul style={{display:"flex",justifyContent:"space-between",marginLeft:"190px",marginTop:"43px"}}>
              <li style={{marginLeft:"40px",   "margin-top": "-7px"}}>
              <select>
    <option value="option1">Projects</option>

  </select>
              </li>
              <li style={{marginLeft:"40px"}}><a className='nav-link' href="#">Agents</a></li>
              <li style={{marginLeft:"40px"}}><a className='nav-link'href="#">Amenities</a></li>
              <span style={{borderLeft:"1px",listStyle: 'none'}} className='ab'></span>
              <li style={{marginLeft:"40px"}}><a className='nav-link' href="#">Sign In</a></li>
              <li style={{marginLeft:"40px"}}><a className='nav-link' href="#">Schedule a Call</a></li>
            </ul>
            <button className='schedule-call'>Schedule a Call</button>
          </nav>
        </header>
       <div style={{"display":"flex",flexDirection:"row"}}><div> <img style={{display:"inline"}}src={image1}/> </div>
        <div className='dyp'>Discover Your Perfect  <span className='pol'>Plot of Land.</span>         <span className='St ' color=' #FE6D3F'>Strating at </span> <span className='St '></span>  
 </div>
   
             <div className='Three666'><span className='Fr' color=' #FE6D3F'>₹3999</span>per.sqft <span className='Three666'></span>  </div>
            
             <div class="sb" >
              <img src={image9}></img>
    
   
  </div>    
      </div>
      </div>
          {/* <h1>Discover Your Perfect Plot of Land.</h1>
          <p>Starting at ₹3999 per sqft</p> */}
      <div style={{display:"flex",flexDirection:"column"}}>  <span class="k1" >340k+ </span>
          <span class="lm">Landmark near chennai</span> </div>
          <div style={{display:"flex",flexDirection:"column",marginLeft: "2%"}}>  <span class="k2" >437k+ </span>
          <span class="lm2"> Happy Customers</span> </div> 
          <div style={{display:"flex",flexDirection:"column","margin-bottom": "136px "}}>  <span class="k3" >4.3m+ </span>
          <span class="lm3">Sq. feet Developed</span> </div>    


          <div className='lm4' style={{border:"1px solid black", padding:"16px",marginTop:"25px "}}> Loreum  ispum is the dummy text used to fill the contest and the loreum
used to fill the content and the loreum.</div>
        
          <div className='lm5'><div className='tp'>Trendig Projects</div>
          <div>
            <img src={image2} />
          </div>
          </div>
          <ul style={{display:"flex",justifyContent:"space-between",width:"72%"}} >
          <li>Internatioal Business Times</li>
          <li>Market Watch</li>
          <li>Forbes</li>
          <li>yahoo</li>
            <li>Tech Bullion</li>
          </ul>
          <div style={{display:"flex",width:"78%"}}>
            
            <div style={{width:"85%"}}><img src={image3} ></img> </div>
          </div>

          <ul  >
          <li><img src={image4} ></img></li>
          <li><img src={image5} ></img></li>
          <li><img src={image6} ></img></li>
          <li><img src={image7} ></img></li>
          <li><img src={image8} ></img></li>
          </ul>
          
          
            
        </div>
    )}}
    export default  MyComponent
