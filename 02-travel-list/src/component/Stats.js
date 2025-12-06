export function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        🛍️<em>start adding items to your packing list </em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const precentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      🛍️{" "}
      <em>
        {precentage === 100
          ? "you got everything! ready to go ✈️"
          : `you have packed ${numPacked} out of ${numItems} items ${`(${precentage}%)`}`}
      </em>
    </footer>
  );
}
    