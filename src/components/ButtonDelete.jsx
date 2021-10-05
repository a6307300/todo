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
width: 50px;
padding-top: 6px;
padding-left: 0px;
opacity: 0;
&:hover {
   opacity: 1;
}
`
const DelButton = styled.button `
width: 50px;
height: 50px;
opacity: 1;
background-color: white;
border-color: transparent;


&:hover {
   opacity: 1;
}
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