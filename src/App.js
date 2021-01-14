import { useState } from "react";
import { List } from "./Components/List"

function App() {
  const [description,setDescription] = useState('クリック前');

  const changeDeskription = () => {
    setDescription('クリック後');
  }
  return (
<div>
  { description }
  <List title="取扱言語一覧" />
  <button onClick={changeDeskription}>ボタン</button>
</div>
  );
}

export default App;
