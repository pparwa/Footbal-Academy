import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/Footer';
import Signin from './component/Sign-in';
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './component/Dashbord/Admin';
import Home from './component/Home/Home';
import { Adminplayer } from './component/Dashbord/Adminnav/player';
import { AddEditPlayer } from './component/Dashbord/Adminnav/player/AddEditPlayer';
import { Team } from './component/Team';
import { AdminMatches } from './component/Dashbord/Adminnav/Matches';
import { AddEditMatches } from './component/Dashbord/Adminnav/Matches/AddEditMatches';
import { NotFound } from './component/Not_Found';
import { MatchPage } from './component/Table of match';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
  <Header />
   <Switch>
<Route path='/admin_players/edit_player/:playerid' exact component={AddEditPlayer} />
<Route path='/admin_players/add_player' exact component={AddEditPlayer} />
<Route path='/admin_matches' exact component={AdminMatches} />
<Route path="/admin_matches/add_match" exact component={AddEditMatches} />
<Route path="/admin_matches/edit_match/:matchid" exact component={AddEditMatches} />
<Route path="/admin_players" exact component={Adminplayer} />
 <Route path="/login" exact component={Signin} />
 <Route path="/dashboard" exact component={Dashboard}/>
 <Route path="/the_matches" exact component={MatchPage} />
 <Route path="/the_team" exact component={Team} />
 <Route path="/" exact component={Home}/>
<Route component={NotFound} />
   </Switch>
   <ToastContainer />
   <Footer />
   </BrowserRouter>
    </div>
  );
}

export default App;
