import React from "react";
import Featured from "./featured";
import { Matches } from "../Matches/matches";
import { MeetPlayers } from "./meetplayers";
import Promotion from "./Promotion/promotion";
const Home = ()=>{

return(
    <>
     <div className="bck_blue">
    <Featured />
    <Matches />
    <MeetPlayers />
    <Promotion />
    </div>
    </>
)
    
}
export default Home