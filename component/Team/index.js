import React from "react";
import { useEffect ,useState } from "react";
import { Slide } from "react-awesome-reveal";
import { PlayerCard } from "../Utils/PlayerCard";
export const Team= ()=>{


    let [Players,SetPlayers] = useState(null)
useEffect(()=>{
if(!Players){
    (async()=>{
      let res = await fetch(`http://localhost:5000/players`)
      let data = await res.json()
      SetPlayers(data)
    })();
}
console.log(Players)
},[Players])
const showPlayerByCategory = (category)=>(
Players?
    Players.map((player,i)=>{
           return  player.position === category ?    
                    <Slide left key={player.id} triggerOnce>
                        <div className="item">
                            <PlayerCard
                                 number={player.number}
                                 name={player.name}
                                 lastname={player.lastname}
                            />
                        </div>
                    </Slide>

:null


}):null


)
return(
   <>
    <div className="the_team_container">
                <div>
                    <div className="team_category_wrapper">
                        <div className="title">Keepers</div>
                        <div className="team_cards">
                            {showPlayerByCategory('Keeper')}

                        </div>
                    </div>

                    <div className="team_category_wrapper">
                        <div className="title">Defence</div>
                        <div className="team_cards">
                            {showPlayerByCategory('Defence')}
                        </div>
                    </div>

                    <div className="team_category_wrapper">
                        <div className="title">Midfield</div>
                        <div className="team_cards">
                            {showPlayerByCategory('Midfield')}
                        </div>
                    </div>

                    <div className="team_category_wrapper">
                        <div className="title">Strikers</div>
                        <div className="team_cards">
                            {showPlayerByCategory('Striker')}
                        </div>
                    </div>


                </div>
        </div>
   </>
    
)


}