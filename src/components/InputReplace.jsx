import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";
  

  
function InputReplace ({replaceText, EnterClickReplace,handleChangeReplace}) {

    const ReplacingArea = styled.input `
width: 450px;
min-height: 60px;
font-size: 24px;
position: absolute;
opacity: 0;
z-index:1;
`
   
    return (
    <ReplacingArea
    value={replaceText}
    onChange={handleChangeReplace}
    onKeyDown={EnterClickReplace}
    type="text" 
    />
   )
}

export default InputReplace;