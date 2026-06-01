const corridors = [
  "USD to INR",
  "GBP to EUR",
  "AED to PHP",
  "CAD to NGN",
  "AUD to SGD",
  "USD to MXN"
];

export function CorridorTicker() {
  return (
    <section className="corridor-strip" aria-label="Popular payment corridors">
      {corridors.map((corridor) => (
        <span key={corridor}>{corridor}</span>
      ))}
    </section>
  );
}
