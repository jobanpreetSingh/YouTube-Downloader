import React from 'react';
import Home from './Home'
import Navbar from './Navbar'
import showVideos  from './ShowVideos'
import { BrowserRouter,Switch,Route,Redirect } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      {/* <Home/> */}
      <Switch>
      <Route path="/" exact component={Home}/>

      {/* <Route exact path="/"   render={() => (<Redirect to="/"   component={Home}/>)} />  */}
      <Route path="/videos"  component={showVideos}/>
      </Switch>
     
     </BrowserRouter>
      
    </div>
  );
}

export default App;

