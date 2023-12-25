
import React from 'react';
import AdminLayout from "./Adminnav/Adminlayout";

const Dashboard = (props) => {

    return(
        <AdminLayout>
           <div className="user_dashboard">
                <div>
                    This is your dashboard
                </div>
           </div>
        </AdminLayout> 
    )
}

export default Dashboard;

