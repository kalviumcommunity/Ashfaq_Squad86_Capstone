function DestinationCard({ name, location, description }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{location}</p>
      <p>{description}</p>
      <button>Explore</button>
    </div>
  );
}

export default DestinationCard;