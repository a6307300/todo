import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";



const ButtonDelete = ({ task, deleteTask, opacityDel }) => {
   return (
      <ContainerImgActive>
        <ImgActive src="images/Del.gif" 
        opacityDel={opacityDel}
           onClick={() => deleteTask(task.id)}/>
      </ContainerImgActive>
   )
}

const ContainerImgActive = styled.div `
width: 50px;
height: 50px;
`
const ImgActive = styled.img `
position:absolute;
width: 45px;
padding-top: 6px;
padding-left: 0px;
opacity: ${props => props.opacityDel};
z-index: 9;
`


export default ButtonDelete;