import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { deleteTask } from '../store/tasksSlice';



const ButtonDelete = ({ id, opacityDel }) => {

const dispatch = useDispatch();
 
   return (
      <ContainerImgActive>
        <ImgActive src="images/Del.gif" 
        opacityDel={opacityDel}
           onClick={() => dispatch(deleteTask(id))}/>
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