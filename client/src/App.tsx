import { useState } from "react";
import "./App.css";
import InventoryItem from "./components/inventory-item.tsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <InventoryItem />
    </>
  );
}



export default App;
