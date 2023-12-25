import React,{useState,useEffect} from "react";
import { Tag } from "../Utils/Citylogo";
import { Block } from "./Block";
export const Matches = ()=>{

return(
     <div className="home_matches_wrapper">
            <div className="container">

                <Tag
                  bck="#0e1731"  
                  size="50px"
                  color="#ffffff"
                >
                    Matches
                </Tag>

                    <Block/>

                <Tag
                  size="22px"
                  color="#0e1731"
                  link={true}
                  linkTo="/the_team"
                >
                    Matches
                </Tag>


            </div>
        </div>
)

}

