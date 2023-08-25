const {
  gameDefault,
  drawCardP,
  stand,
} = require("../Blackjack");

export default function Buttons() {
  return (
    <section className="buttons">
      <button id="card-draw" onClick={drawCardP}>
        Hit
      </button>
      <button
        id="stand"
        onClick={() => {
          document.querySelector("#card-draw").disabled = true;
          document.querySelector("#stand").disabled = true;
          stand();
        }}
      >
        Stand
      </button>
      <button
        id="next-game"
        onClick={() => {
          gameDefault();
          document.querySelector("#card-draw").disabled = false;
          document.querySelector("#stand").disabled = false;
        }}
      >
        Next Game
      </button>
    </section>
  );
}
