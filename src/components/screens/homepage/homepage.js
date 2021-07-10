import React from 'react';
import './index.css';
import {Grid, } from 'react-feather';
const Homepage =()=>{
    return(
        <div className="container">
           <div className="sectionOne">
           <div>eastdish._</div>  

           <div>
           <div style={{flex:1}}>
           <Grid
           size={24}/> 
           </div>
         
           <div style={{flex:2}}>
               Overview
           </div>
           </div>
          
           </div>

           <div className="sectionTwo">hi there</div>

           <div className="sectionThree">nice</div>
        </div>
    )
}

export default Homepage;