import { useState } from "react";
import { List } from "./Components/List"
import { Form } from "./Components/Form"
import { Language } from "./Components/lang"

function App() {
  const [tab,setTab] = useState('list');
  const [langs,setLangs] = useState(Language);

const addLang = (lang) => {
  setLangs([...langs,lang]);
  setTab('list');
}

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
    tab === 'list' ? <List langs={langs}/> : <Form onAddLang={addLang}/>
  }
</div>
  );
}


export default App;
