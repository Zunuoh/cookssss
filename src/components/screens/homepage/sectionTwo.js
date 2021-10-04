import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../styles/style.css';
import {Search, Filter} from 'react-feather';
import {Button} from 'react-bootstrap';
const SectionOne =()=>{
    return(
        <div style={{padding:30}}>
            <div style={{display:"flex", flexDirection:"row"}}>
          <div style={{backgroundColor:"white", width:"60%", height:40, borderRadius:20, marginTop:30, display:"flex", alignItems:"center", padding:20, marginLeft:10}}>
              <Search color="black" size={24}/>
              <p style={{marginTop:15, marginLeft:10}}>Search by full name</p>
          </div>
          <div style ={{marginTop:30, marginLeft:70}}>
          <Button variant="white" style={{borderWidth:1, borderColor:"black"}}>
          <Filter color="black" size={20} style={{marginRight:8}}/>
             Primary
          </Button>
          </div>
          </div>
          <div style={{backgroundColor:"#F59317", marginTop:40, height:160, borderRadius:20, display:"flex",padding:30, width:"90%", marginLeft:5, display:"flex", flexDirection:"column"}}>
             <h1 style={{color:"white"}}> Add your own recipe</h1>
             <p style={{color:"white"}}>Upload your own home-made recipe and share it with other members of our community</p>
          </div>

          <div style={{display:"flex", flexDirection:"row", marginTop:30}}>
              <h1>Based on the type of food you like</h1>
              {/* <p style={{marginLeft:90}}>View more</p> */}
          </div>

          <div>
              
          </div>
           
        </div>
    )
}

export default SectionOne;