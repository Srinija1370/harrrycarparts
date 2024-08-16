import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'
import Billing from './Billing';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/navbar' element = {<Navbar />} />
        <Route path='/' element = {<Home />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/footer' element = {<Footer />} />
        <Route path='/billing' element = {<Billing />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
