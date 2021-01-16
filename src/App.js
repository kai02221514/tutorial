import { useState,useContext } from "react";
import { List } from "./Components/List"
import { Form } from "./Components/Form"
import { Header } from "./Components/Header";
import { ThemeContext } from "./Components/ThemeContext";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`

function App({ data }) {
const [tab,setTab] = useState('list');
const [langs,setLangs] = useState(data);

const [theme] = useContext(ThemeContext);

const addLang = (lang) => {
  setLangs([...langs,lang]);
  setTab('list');
}

  return (
<Container theme={theme}>
 <Header tab={tab} setTab={setTab} />
  {
    tab === 'list' ? <List langs={langs}/> : <Form onAddLang={addLang}/>
  }
</Container>
  );
}


export default App;
