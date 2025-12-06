import { useState } from "react";
import { Logo } from "./component/Logo";
import { Form } from "./component/Form";
import { PackgingList } from "./component/PackgingList";
import { Stats } from "./component/Stats";

const intialItems = [
  { id: 1, description: "Passports  ", quantity: 2, packed: false },
  { id: 2, description: "Socks  ", quantity: 12, packed: false },
  { id: 3, description: "  Charger", quantity: 24, packed: true }
];

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }
  function handleDelteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearItems() {
    const confirm = window.confirm("are you sure you want to clear all items?");
    if (confirm) setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackgingList
        items={items}
        onDeleteItem={handleDelteItem}
        onToggleItem={handleToggleItem}
        handleClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
