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


function ButtonActive({ id, changeStatus, active }) {  



    if (active) {
        return (
            <ContainerImgActive>
                <ImgActive
                    src="/images/circle.gif"
                    onClick={()=> changeStatus(id)} 
                    />
            </ContainerImgActive>
        )
    } else {
        return (
            <ContainerImgActive>
                <ImgActive
                    src="images/circleDone.gif"
                    onClick={() => changeStatus(id)}
                />
            </ContainerImgActive>
        )
    }
}
export default ButtonActive;