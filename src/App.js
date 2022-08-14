//import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import SomeContents from './SomeContent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import Message from './Message';

function App() {
  return (
    <div className="App">
      <div>

        <Nav/>
        <SomeContents/>
      </div>
    </div>
  );
}

export default App;
