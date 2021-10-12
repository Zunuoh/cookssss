import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../styles/style.css';
import {Grid, Twitch, Heart, Command, Settings} from 'react-feather';
const SectionOne =()=>{
    return(
        <div>
       
                <div  className="contain">
                    <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                    <div style={{paddingTop:60, fontSize:35, paddingLeft:10, color:"#F59317"}}>eatdish._</div>
                    </div>

                    <div style={{padding:10, paddingLeft:40}}>
                    <div style={{paddingTop:40, display:"flex", flexDirection:"row"}}>
                    <Grid color="#BAB7CC" size="24"/>
                        <p style={{paddingLeft:15, fontWeight:"bold", color:"#BAB7CC"}}>Overview</p>
                    </div>
                    <div style={{paddingTop:40, display:"flex", flexDirection:"row"}}>
                    <Twitch color="#BAB7CC" size="24"/>
                        <p style={{paddingLeft:15, color:"#BAB7CC"}}>Recipes</p>
                    </div>
                    <div style={{paddingTop:40, display:"flex", flexDirection:"row"}}>
                    <Heart color="#BAB7CC" size="24"/>
                        <p style={{paddingLeft:15, color:"#BAB7CC"}}>Favourite</p>
                    </div>
                    <div style={{paddingTop:40, display:"flex", flexDirection:"row"}}>
                    <Command color="#BAB7CC" size="24"/>
                        <p style={{paddingLeft:15, color:"#BAB7CC"}}>Community</p>
                    </div>
                    <div style={{paddingTop:40, display:"flex", flexDirection:"row"}}>
                    <Settings color="#BAB7CC" size="24"/>
                        <p style={{paddingLeft:15, color:"#BAB7CC"}}>Setting</p>
                    </div>
                    </div>

          
                </div>
           
        </div>
    )
}

export default SectionOne;