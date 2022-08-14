//import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import SomeContents from './SomeContent';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import Message from './Message';

function App() {
  return (
    <Router>
      <div className="App">
          <div>
            <Nav/>
            <SomeContents/>
          </div>
      </div>
    </Router>
  );
}

export default App;
