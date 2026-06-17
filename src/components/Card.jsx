export default function Card({ item }) {
  return (
    <div className="card">
      <img src={`${item.sprite}`} alt={`${item.name}`} />
      <p>{item.name}</p>
    </div>
  );
}
