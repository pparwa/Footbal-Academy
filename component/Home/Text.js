import React from "react";
import { Animate } from "react-move";
import { easePolyOut } from "d3-ease";
import player from '../../Resources/images/featured_player.png'
const Text = ()=>{
    const Adminnumber = ()=>(
        <Animate
        show={true}
        start={
        {
             opacity:0,
             rotate:0
        }
        }
        enter={{
            opacity:[1],
            rotate:[360],
            timing:{ duration: 1000, ease:easePolyOut}
        }}
    >
        {({ opacity,rotate})=>(
             <div className="featured_number"
                    style={{
                        opacity,
                        transform:`translate(260px,170px) rotateY(${rotate}deg)`
                    }}
                >
                    5
                </div>

        )}
    </Animate>
    )
    const AdminFirstText=()=>(

          <Animate
            show={true}
            start={{
                opacity:0,
                x:503,
                y:480
            }}
            enter={{
                opacity:[1],
                x:[273],
                y:[480],
                timing:{ duration: 500, ease:easePolyOut}
            }}
        >
            {({opacity,x,y})=>(
                <div className="featured_first"
                    style={{
                        opacity,
                        transform:`translate(${x}px,${y}px)`
                    }}
                >
                    League
                </div>
            )}
        </Animate>
    )
    const AdminSecondText = ()=>(
          <Animate
            show={true}
            start={{
                opacity:0,
                x:503,
                y:620
            }}
            enter={{
                opacity:[1],
                x:[273],
                y:[620],
                timing:{ delay:400,duration: 500, ease:easePolyOut}
            }}
        >
            {({opacity,x,y})=>(
                <div className="featured_first"
                    style={{
                        opacity,
                        transform:`translate(${x}px,${y}px)`
                    }}
                >
                    Championships
                </div>
            )}
        </Animate>
    )
 const AdminPlayer = ()=>(
 <Animate
         show={true}
         start={{
             opacity:0
         }}
         enter={{
            opacity:[1],
            timing:{ delay:800,duration: 500, ease:easePolyOut}
         }}
        >
            {({opacity})=>(
                <div className="featured_player"
                    style={{
                        opacity,
                        background:`url(${player}) no-repeat`,
                        transform:`translate(550px,201px)`
                    }}
                >

                </div>
            )}
        </Animate>
 )
 return(
    <div className="featured_text">
        {AdminPlayer()}
        {Adminnumber()}
        {AdminFirstText()}
        {AdminSecondText()}
    </div>
 )

                }
export default Text;