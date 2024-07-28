export default function Item({ item, onDeleteItem, onTogggleItem }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onTogggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <div className="outer" onClick={() => onDeleteItem(item.id)}>
          <div className="inner">
            <label>DEL</label>
          </div>
        </div>
      </li>
    </div>
  );
}
