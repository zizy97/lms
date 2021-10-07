import styled from "styled-components";

const Title = styled.h1`
  font-size:3em;
  text-align:center;
  color:palevioletred
`;

const Wrapper = styled.section`
  padding:4em;
  background:papayawhip;
`;

function App() {
  return (
    <Wrapper>
      <Title style={{textAlign:"center"}}>LMS</Title>
    </Wrapper>
    
  );
}

export default App;