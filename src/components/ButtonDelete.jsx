import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";

const ContainerImgActive = styled.div `
width: 50px;
height: 50px;
`
const ImgActive = styled.img `
position:absolute;
width: 32px;
padding-top: 6px;
padding-left: 10px;
`
const DelButton = styled.button `
width: 50px;
height: 50px;
opacity: 0;
`

function ButtonDelete({ task, deleteTask }) {
   return (
      <ContainerImgActive>
         <ImgActive src="images/Del.gif" />
         <DelButton
            onClick={() => deleteTask(task.id)}>
         </DelButton>
      </ContainerImgActive>
   )
}
export default ButtonDelete;