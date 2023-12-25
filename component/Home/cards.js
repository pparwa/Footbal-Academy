import React from "react";
import { Animate } from "react-move";
import { easePolyOut } from "d3-ease";
import otamendi from '../../Resources/images/players/Otamendi.png'
import { PlayerCard } from "../Utils/PlayerCard";




let cards = [
  
    {
        bottom:30,
        left:100,
        player:otamendi
    },
   
]
export const Cards = (props)=>{
    
    const showAnimateCards = () => (
        cards.map((card,i)=>(
            <Animate
             key={i}
                show={props.show}
                start={{
                    left:0,
                    bottom:0
                }}
                enter={{
                    left:[card.left],
                    bottom:[card.bottom],
                    timing:{ delay:500,duration: 500, ease:easePolyOut}
                }}>
                {({left,bottom})=>(
                    <div
                        style={{
                            position:'absolute',
                            left,
                            bottom
                        }}
                    >
                       <PlayerCard
                            number="30"
                            name="Nicolas"
                            lastname="Otamendi"
                            bck={card.player}
                       />
                    
                    </div>
                )}
            </Animate>
        ))
    )


    return(
        <div>
            {showAnimateCards()}
        </div>
    )
}
