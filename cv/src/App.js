import {FaApple} from 'react-icons/fa';
import './App.css';
import Cv from './Cv';
import Footer from './Footer';
import Header from './Header';

function App() {

  return (
    <div className="App">

      <header style={{height: 50, backgroundColor: '#5e8fc2', opacity: 0.65}}> 
        <Header />
      </header>
      
      <Cv />

      <footer style={{height: 50, backgroundColor: '#5e8fc2', opacity: 0.8}}> 
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
