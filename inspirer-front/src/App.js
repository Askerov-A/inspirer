import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from "./components/Card";
import styled from "styled-components";
import './App.css';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #F1F2F2;
`

function App() {
  const [content, setContent] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3005/").then(res => {
      setContent(res.data);
    }).catch(err => console.error(err));
  }, [])
  return (
    <AppContainer>
    <Card {...content} />
    </AppContainer>
  );
}

export default App;
