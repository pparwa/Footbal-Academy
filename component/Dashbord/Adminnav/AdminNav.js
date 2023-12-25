import React from "react";
import ListItem from '@mui/material/ListItem';
import { Link, withRouter  } from 'react-router-dom';


const Adminnav = (props)=>{

       const links = [
        {
            title:'Matches',
            linkTo:'/admin_matches'
        },
        {
            title:'Players',
            linkTo:'/admin_players'
        }
    ]
  

    /*const renderitem = ()=>{
        links.map((link)=>{
            
            <Link to={link.linkTo}>
            <ListItem    className="admin_nav_link">
                {link.title}
                </ListItem>
            </Link>

        })
    }*/
    const renderItems = () => (
        links.map(link=>(
            <Link to={link.linkTo} key={link.title}>
                <ListItem button className="admin_nav_link">
                    {link.title}
                </ListItem>
            </Link>
        ))
    )

    return(
        <>
        <div>
            {renderItems()}
            <ListItem  className="admin_nav_link"> 
                log out
            </ListItem>
        </div>
        </>
    )
}
export default withRouter(Adminnav)