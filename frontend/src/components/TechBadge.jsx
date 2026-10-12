export default function TechBadge({ name, core = false }) {
  return <span className={`badge${core ? ' badge-core' : ''}`}>{name}</span>;
}
