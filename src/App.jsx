// import reactLogo from './assets/react.svg'
import styled from '@emotion/styled'

const Content = styled.div`

    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;

`
const Button = styled.button`

    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    background-size: 300px;
    font-family: ' Arial, helvetica, sans-serif';
    color: #fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
  `;

const consultaApi  = async () => {

  const api = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
  const frase = await api.json()
  console.log(frase[0])
}

function App() {
 

  return (
    <>
    <Content>
      <Button
      onClick={consultaApi}
      >
          Obtener Frase
        </Button>
    </Content>
       
    </>
  )
}

export default App
