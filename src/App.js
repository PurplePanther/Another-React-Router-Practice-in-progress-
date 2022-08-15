//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Nav';
//import SomeContents from './SomeContent';
import About from './About';
import Message from './Message';
import NotFound from './NotFound';

//Route not working
//is there a new react-router-dom version?
//version 6 now

//NOTES FOR MYSELF ABOUT v6:
//Switch is now Routes
//Route format is now <Route path='/about' element={<About/>}/> instead of <Route path='/about' component={About}>
//element instead of component
//what about 'exact'? Not needed anymore

function App() {
  return (
    <Router>
      <div>
          <Message/>
          <Nav/>
          {/*<SomeContents/>*/}
          <Routes>
            <Route path='/about' element={<About/>}/>
            {/*<Route path='/minkydinkred' element={<MinkydinkRed/>}/>*/}
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          
        </div>
    </Router>
  );
}

export default App;
