import CommonForm from "./components/CommonForm";
import './style.css';
import styled from "styled-components";

const HeaderStyle = styled.div `
    height: 120px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #ead7d7;
    font-size: 100px;
  `
  const BodyStyle = styled.body `
    background-color: #f5f5f5;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    font-family: Helvetica, Arial, sans-serif;
  `
  
function App() {

  return (
    <body>
    <HeaderStyle>
        todos
    </HeaderStyle>
    <CommonForm />
    </body>
  );
}

export default App;