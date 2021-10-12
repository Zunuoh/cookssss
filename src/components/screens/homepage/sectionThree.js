import React from 'react';


const SectionThree = () =>{
    return(
        <div>
            <div style={{backgroundColor:" #F59317", width:60, height:60, marginTop:50, borderRadius:20, marginLeft:"80%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                ddd
            </div>

            <div>
                <p style={{fontSize:"20"}}>Report on this week</p>
                <p>From 6-13 Nov, 2021</p>
            </div>
            
            <div style={{width:150, height:150, backgroundColor:"#F59317", borderRadius:80, justifyContent:"center", alignItems:"center", display:"flex", marginTop:30, marginLeft:130, fontSize:20}}>
                7 days
            </div>

            <div style={{flexDirection:"row", display:"flex", marginTop:40}}>
                <div style={{display:"flex", flex:4, paddingLeft:60}}>
                    <div>Calories</div>
                    {/* <div>282726 calories</div> */}
                </div>
                <div style={{display:"flex", flex:4, paddingLeft:60}}>Carbohydrates</div>
            </div>

            <div style={{flexDirection:"row", display:"flex", marginTop:40}}>
                <div style={{display:"flex", flex:4, paddingLeft:60}}>
                    <div>Fats</div>
                    {/* <div>282726 calories</div> */}
                </div>
                <div style={{display:"flex", flex:4, paddingLeft:60}}>Protein</div>
            </div>

            <div style={{display:"flex", flexDirection:"row", marginTop:40, padding:30}}>
                <div style={{fontSize:20, color:" #F59317"}}> More recipe</div>
                <div style={{marginLeft:180}}> View more -</div>
            </div>


        </div>

    );
};

export default SectionThree;