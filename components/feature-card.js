export function FeatureCard({ title, body }) {
  return (
    <article className="glass-card feature-card">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}
