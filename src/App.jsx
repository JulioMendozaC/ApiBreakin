import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./Components/Frase";

const Content = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;
const Button = styled.button`

    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    background-size: 300px;
    font-family: ' Arial, helvetica, sans-serif';
    color: #fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 1px solid black;
    transition: background-size .8s ease;
    box-shadow: 0 0 15px #313131;  
    
    :hover{

      cursor: pointer;
      background-size: 400px;
       
    }
  `;

function App() {
  const [frase, setFrase] = useState({});

  const consultaApi = async () => {
    const api = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    const frase = await api.json();
    setFrase(frase[0]);
  };

  useEffect(() => {
    consultaApi();
  }, []);

  return (
    <>
      <Content>
        <Frase frase={frase} />
        <Button onClick={consultaApi}>Obtener Frase</Button>
      </Content>
    </>
  );
}

export default App;
