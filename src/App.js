import { useState } from "react";
import { List } from "./Components/List"
import { Form } from "./Components/Form"

function App() {
  const [tab,setTab] = useState('list');


  return (
<div>
  <header>
    <ul>
      <li onClick={() => setTab('list')}>list</li>
      <li onClick={() => setTab('form')}>form</li>
    </ul>
  </header>
  <hr/>
  {
    tab === 'list' ? <List /> : <Form />
  }
</div>
  );
}


export default App;
