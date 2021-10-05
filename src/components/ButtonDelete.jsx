import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";



const ButtonDelete = ({ task, deleteTask, opacityDel }) => {

   const ContainerImgActive = styled.div `
   width: 50px;
   height: 50px;
   `
   const ImgActive = styled.img `
   position:absolute;
   width: 45px;
   padding-top: 6px;
   padding-left: 0px;
   opacity: ${opacityDel};
   z-index: 9;
   `
   // const DelButton = styled.button `
   // width: 50px;
   // height: 50px;
   // opacity: 1;
   // background-color: white;
   // border-color: transparent;
   // z-index: 11;
   // }
   // `

   return (
      <ContainerImgActive>
        <ImgActive src="images/Del.gif" 
           onClick={() => deleteTask(task.id)}/>
      </ContainerImgActive>
   )


   
}




export default ButtonDelete;