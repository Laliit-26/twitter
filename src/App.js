import logo from './logo.svg';
import './App.css';
import TwitterRegistrationForm from './Registration/TwitterRegistrationForm';
import {BrowserRouter as Router ,Routes  ,Route} from "react-router-dom";
import Home from './Home';
import TwitterHome from './twitterComponents/TwitterHome';



function App() {
  return (
  
<Router>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/feed" element={localStorage.getItem("userId")?<TwitterHome/>: <Home/>}/>
  </Routes>
</Router>

  );
}

export default App;
