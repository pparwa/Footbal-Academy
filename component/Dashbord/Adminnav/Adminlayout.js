import React from 'react';
import Adminnav from './AdminNav';

const AdminLayout = (props) => {
    return(
        <div className="admin_container">
            <div className="admin_left_nav">
                <Adminnav/>
            </div>
            <div className="admin_right">
                <h2>{props.title}</h2>
                {props.children}
            </div>
        </div>
    )

}


export default AdminLayout