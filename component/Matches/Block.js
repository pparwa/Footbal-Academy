import React from "react";
import { Slide } from "react-awesome-reveal";
import { useState,useEffect } from "react";
import { MatchesBlock } from "../Utils/MatchBlock";

export const Block = () =>{

let[matches,setmatches] = useState([])
useEffect(()=>{
     //if(matches.length != 0){
    (async()=>{
       let res = await fetch('http://localhost:5000/matches',{
        method:'GET'
       })
       console.log(res)
       let data =await res.json();
       setmatches(data)
       console.log(matches)
       //setmatches(data)
      // console.log(matches)

    })()//}

    
},[matches])
 const showMatches = (matches) => (
        matches ?
            matches.map((match)=>(
                <Slide bottom key={match.id} className="item" triggerOnce>
                    <div>
                        <div className="wrapper">
                           <MatchesBlock match={match}/>
                        </div>
                    </div>
                </Slide>
            ))
        :
        null
    )   
 return(
        <div>
            {showMatches(matches)}
        </div>
    )



}