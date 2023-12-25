import React,{ useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@mui/material";
export const MatchTable = ()=>{
  let [position , setposition] = useState(null)
 useEffect(()=>{

    (async()=>{
      let res =await fetch("http://localhost:5000/positions")
      let data = await res.json()
      setposition(data)


    })()
 },[position])

 const Teamstate = ()=>(
        position ?
         position.map((pos,i)=>(
                 <TableRow key={i}>
                    <TableCell>{i+1}</TableCell>
                    <TableCell>{pos.team}</TableCell>
                    <TableCell>{pos.w}</TableCell>
                    <TableCell>{pos.d}</TableCell>
                    <TableCell>{pos.l}</TableCell>
                    <TableCell>{pos.pts}</TableCell>
                </TableRow>
         ))

        :
        null

 )

    return(
        <>
         <div className="league_table_wrapper">
            <div className="title">
                League Table 
            </div>
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pos</TableCell>
                            <TableCell>Team</TableCell>
                            <TableCell>W</TableCell>
                            <TableCell>L</TableCell>
                            <TableCell>D</TableCell>
                            <TableCell>Pts</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { Teamstate()}
                    </TableBody>
                </Table>
            </div>
        </div>
        </>
    )}