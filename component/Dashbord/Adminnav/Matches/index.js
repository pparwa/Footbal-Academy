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

export const AdminMatches =()=>{
let [matches , setmatches] = useState(null)
useEffect(()=>{
    (async()=>{

     let res = await fetch('http://localhost:5000/matches')
     let data = await res.json()
     setmatches(data)

    })()
},[matches])
    return(
        
         <AdminLayout title="The matchs">
       <div className="mb-5">
                <Button
                    disableElevation
                    variant="outlined"
                    component={Link}
                    to={'/admin_matches/add_match'}
                >
                    Add Match
                </Button>
            </div>

            <Paper className="mb-5">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Match</TableCell>
                            <TableCell>Result</TableCell>
                            <TableCell>Final</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { matches ?
                            matches.map((match,i)=>(
                            <TableRow key={match.id}>
                                <TableCell>
                                    {match.date}
                                </TableCell>
                                <TableCell>
                                    <Link className="pointer" to={`/admin_matches/edit_match/${match.id}`}>
                                       { match.away} <strong>-</strong> {match.local}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                      <Link className="pointer" to={`/admin_matches/edit_match/${match.id}`}>
                                    {match.resultLocal}<strong>-</strong>{match.resultAway}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {match.final  === 'Yes'?
                                    <span className="matches_tag_red">Final</span>:
                                    <span className="matches_tag_green">NOT PLAYED YET</span>}
                                </TableCell>
                            </TableRow>  
                            ))
                        :null}
                    </TableBody>
                </Table>
            </Paper>
  </AdminLayout>
    )
}