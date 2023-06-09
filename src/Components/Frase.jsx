import styled from "@emotion/styled";

const CntFrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  opacity: 70%;
  max-width: 800px;
  box-shadow: 0 0 15px #313131;  
  

  @media (min-width: 992px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }

  p {
    font-family: Verdana, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Frase = ({ frase }) => {
  return (
    <CntFrase>
      <h1>{frase.quote}</h1>
      <p>{frase.author}</p>
    </CntFrase>
  );
};

export default Frase;
