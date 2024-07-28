export default function Stats({ items }) {
  if (!items.length) return <p className="stats">ADD ITEMS ! </p>;
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked * 100) / numItems);
  console.log(numPacked);
  console.log(numItems);
  return (
    <footer className={percentage !== 100 ? "stats" : "statsdone"}>
      {percentage !== 100 ? (
        <em>
          {`YOU HAVE ${
            numItems === 1 ? `${numItems} ITEM` : `${numItems} ITEMS`
          } ON YOUR LIST AND YOU ALREADY PACKED ${percentage}%
          OF EM`}
        </em>
      ) : (
        <em> YOU'RE READY TO GO ✈️! </em>
      )}
    </footer>
  );
}
