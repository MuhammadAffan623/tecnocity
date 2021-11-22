import './App.css';
import Product from './component/Product';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Projects from './component/Projects';
import Wlink from './component/Wlink';
import Contact from './component/Contact';
import Services from './component/Services';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Scrolltotop from './component/Scrolltotop';

function App() {
 
  return (
    <div className="App">
     
      <BrowserRouter >
        <Scrolltotop/>
        <Navbar/>
        <Wlink/>
      
      <Switch >

        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/services' component={Services} />
       
      </Switch>
     <Footer/>
     </BrowserRouter>
     </div>
  );
}

export default App;
