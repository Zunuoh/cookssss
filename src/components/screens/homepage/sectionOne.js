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
                    <div style={{paddingTop:60, fontSize:35, paddingLeft:10}}>eatdish._</div>
                    </div>

                    <div style={{padding:10}}>
                    <div style={{paddingTop:40, display:"flex", flexDirection:"row"}}>
                    <Grid color='black' size="24"/>
                        <p>Overview</p>
                    </div>
                    <div style={{paddingTop:20, display:"flex", flexDirection:"row"}}>
                    <Twitch color='black' size="24"/>
                        <p>Recipes</p>
                    </div>
                    <div style={{paddingTop:20, display:"flex", flexDirection:"row"}}>
                    <Heart color='black' size="24"/>
                        <p>Favourite</p>
                    </div>
                    <div style={{paddingTop:20, display:"flex", flexDirection:"row"}}>
                    <Command color='black' size="24"/>
                        <p>Community</p>
                    </div>
                    <div style={{paddingTop:20, display:"flex", flexDirection:"row"}}>
                    <Settings color='black' size="24"/>
                        <p>Setting</p>
                    </div>
                    </div>

          
                </div>
           
        </div>
    )
}

export default SectionOne;