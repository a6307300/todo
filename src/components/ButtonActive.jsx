import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { changeStatus } from '../store/tasksSlice';

const ButtonActive = ({ id, active }) => {  

const dispatch = useDispatch();

    if (active) {
        return (
            <ContainerImgActive>
                <ImgActive
                    src="/images/circle.gif"
                    onClick={() => dispatch(changeStatus(id))} 
                    />
            </ContainerImgActive>
        )
    } else {
        return (
            <ContainerImgActive>
                <ImgActive
                    src="images/circleDone.gif"
                    onClick={() => dispatch(changeStatus(id))} 
                />
            </ContainerImgActive>
        )
    }
}


const ContainerImgActive = styled.div `
width: 50px;
height: 50px;
`
const ImgActive = styled.img `
position:absolute;
width: 32px;
padding-top: 12px;
padding-left: 10px;
`


export default ButtonActive;