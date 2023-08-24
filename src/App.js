import './App.css';
import Slot from "./components/Slot";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Roulette from './components/roulette.jsx'

function App() {
  return (
    <div className="App">
      <Header />

      <Slot />

      <Roulette />

      <Footer />
    </div>
  );
}

export default App;
