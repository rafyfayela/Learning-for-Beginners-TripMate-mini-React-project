import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./pachingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App() {
  const [items, setItem] = useState([]);
  function HandleAddItems(item) {
    setItem((items) => [...items, item]);
  }
  function HandleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function HandleTogggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function Reset() {
    const confirm = window.confirm(
      "Are you sure you want to delete all items ?"
    );

    if (confirm) setItem([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={HandleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={HandleDeleteItem}
        onTogggleItem={HandleTogggleItem}
        ResetItems={Reset}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
