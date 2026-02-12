export default function Hearts() {
  return (
    <div className="hearts">
      {Array.from({ length: 100 }).map((_, i) => (
        <span key={i}>💖</span>
      ))}
    </div>
  );
}
