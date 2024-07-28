import { useState } from "react";
import Item from "./item";

export default function PackingList({
  items,
  onDeleteItem,
  onTogggleItem,
  ResetItems,
}) {
  const [sortBy, setSortBy] = useState("Input");
  let sortedItems;
  if (sortBy === "Input") {
    sortedItems = items;
  }
  if (sortBy === "Description") {
    sortedItems = items.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }
  if (sortBy === "Packed") {
    sortedItems = items.sort((a, b) => a.packed - b.packed);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onTogggleItem={onTogggleItem}
            ResetItems={ResetItems}
          />
        ))}
      </ul>
      <div className="actions">
        <lable>
          {" "}
          options
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="Input">Sort by input</option>
            <option value="Description">Sort by description</option>
            <option value="Packed">Sort by packed status</option>
          </select>
        </lable>
        <button onClick={ResetItems}>RESET</button>
      </div>
    </div>
  );
}
