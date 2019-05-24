import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home.js'
import Game from './components/game/Game.js'
import List from './components/article/List.js'

// ========================================

const App = () => <div className="App">
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/list" component={List} />
    </div>
  </Router>
</div>;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



