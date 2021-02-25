import React from 'react';
import './App.css';
import Main from './Components/Main/Main';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import PostDetail from './Components/PostDetail/PostDetail';
import Comment from './Components/Comment/Comment';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"> <Main/> </Route>
          <Route exact path="/post">  <Main/> </Route>
          <Route path="/post/:Id"> <PostDetail/> </Route>
          
          <Route path="*"> <NotFound/> </Route>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
