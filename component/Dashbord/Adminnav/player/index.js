import React from "react";
import AdminLayout from "../Adminlayout";
import { useEffect,useState } from "react";
import { Button } from "@mui/material";
import { 
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    CircularProgress
} from "@mui/material";
import { Link } from 'react-router-dom'

export const Adminplayer = ()=>{
const [players,setPlayers] = useState(null)

useEffect(()=>{

    (async()=>{
        let res = await fetch(`http://localhost:5000/players`,{
            method:'GET'
        })
        let data =await res.json();
        console.log(data)
        setPlayers(data)






    })()
},[])
 return(
    <>
   <AdminLayout title="The players">
       <div className="mb-5">
                <Button
                    disableElevation
                    variant="outlined"
                    component={Link}
                    to={'/admin_players/add_player'}
                >
                    Add player
                </Button>
            </div>

            <Paper className="mb-5">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>First name</TableCell>
                            <TableCell>Last name</TableCell>
                            <TableCell>Number</TableCell>
                            <TableCell>Position</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { players ?
                            players.map((player,i)=>(
                            <TableRow key={player.id}>
                                <TableCell>
                                    <Link className="pointer" to={`/admin_players/edit_player/${player.id}`}>
                                        {player.name}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link className="pointer" to={`/admin_players/edit_player/${player.id}`}>
                                        {player.lastname}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {player.number}
                                </TableCell>
                                <TableCell>
                                    {player.position}
                                </TableCell>
                            </TableRow>  
                            ))
                        :null}
                    </TableBody>
                </Table>
            </Paper>
  </AdminLayout>
    </>
 )


}