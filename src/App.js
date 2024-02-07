import { useState } from "react";
import ReviewList from "./components/ReviewList";
import mockItems from "./mock.json";

function App() {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState("createAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");
  const handleDelete = (id) => {
    const nextItems = items.filter((it) => it.id !== id);
    setItems(nextItems);
  };

  return (
    <div className="App">
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
