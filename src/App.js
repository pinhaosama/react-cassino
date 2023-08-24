import './App.css';
import Slot from "./components/Slot";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Roulette from './components/roulette.jsx'
import Blackjack from './components/Blackjack.jsx';

function App() {
  return (
    <div className="App">
      <Header />

      <Slot />

      <Roulette />
    
      <Blackjack />

      <Footer />  
    </div>
  );
}

export default App;
