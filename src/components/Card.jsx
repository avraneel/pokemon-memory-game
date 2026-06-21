import playRound from "../game/game";

import "../styles/card.css";

export default function Card({ item, setScore, setBestScore }) {
  const nameToDisplay = `${item.name[0].toUpperCase() + item.name.substring(1)}`;

  function handleClick() {
    playRound(item.name, setScore, setBestScore);
    // update score and best score here
  }

  return (
    <div className={`card ${item.name}`} onClick={handleClick}>
      <img
        src={`${item.sprite}`}
        alt={`${item.name}`}
        className={`sprite ${item.name}-sprite ${item.type}`}
      />
      <p className="pokemon-name">{nameToDisplay}</p>
    </div>
  );
}
