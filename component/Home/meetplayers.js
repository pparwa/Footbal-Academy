import React, { useState } from "react";
import { Tag } from "../Utils/Citylogo";
import { Fade } from "react-awesome-reveal";
import { Cards } from "./cards";
export const MeetPlayers = ()=>{


let [show,setShow] = useState(true)
    let tagDefault = {
    bck:'#0e1731',
    size:'100px',
    color:'#ffffff'
}
 const ShowText = (text)=>(
    <Tag
            {...tagDefault}
            add={{
                display:'inline-block',
                marginBottom:'20px'
            }}
        >
            {text}
        </Tag>
    

 )

    return(
        <Fade 
        triggerOnce
          onVisibilityChange={(inView)=>{
                if(inView) { setShow(true)}
            }}
            >
            <div className="home_meetplayers">
            <div className="container">
                <div className="home_meetplayers_wrapper">
                    <div className="home_card_wrapper">
                        <Cards
                         show={show}
                        />
                    </div>
                    <div className="home_text_wrapper">
                        <div>
                            {ShowText('Meet')}
                        </div>
                        <div>
                            {ShowText('The')}
                        </div>
                        <div>
                            {ShowText('Players')}
                        </div>
                        <div>
                            <Tag
                                bck="#ffffff"
                                size="27px"
                                color="#0e1731"
                                link={true}
                                linkTo="/the_team"
                                add={{
                                    display:'inline-block',
                                    marginBottom:'27px',
                                    border:'1px solid #0e1731'
                                }}
                            >
                                Meet them here
                            </Tag>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </Fade>
    )
}