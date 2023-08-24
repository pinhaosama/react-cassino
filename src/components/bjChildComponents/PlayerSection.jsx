import Buttons from "./Buttons";
const {
  gameDefault,
  getDeck,
  drawCard,
  renderCard,
  drawCardP,
  stand,
} = require("../Blackjack");

export default function PlayerSection() {
  gameDefault();

  return (
    <section className="player">
      <section className="cards-inhand">
        <section className="score">
          <div>Player:</div>
          <div id="score-inhand">0</div>
        </section>
        <div id="drawn-card"></div>
      </section>
      <Buttons />
    </section>
  );
}
