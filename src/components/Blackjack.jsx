import DealerSection from "./bjChildComponents/DealerSection";
import PlayerSection from "./bjChildComponents/PlayerSection";
import CoinSection from "./bjChildComponents/CoinSection";
import "./blackjack.css";

export default function Blackjack() {
  return (
    <section className="blackjack" id="blackjack">
      <DealerSection />
      <PlayerSection />
      <CoinSection />
    </section>
  );
}
