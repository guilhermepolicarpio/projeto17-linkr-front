import styled from "styled-components"
import { VscChevronDown } from "react-icons/vsc";

export default function Header(){

    return(

        <HeaderContainer>
            <h1>linkr</h1>
            <VscChevronDown/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
 

    width: 100%;
    height: 72px;
    background-color: #151515;
    position: fixed;
    top:0;
    right: 0;
    font-size: 29px;
    color: #fff;
       

    h1{
        font-family: 'Passion One', cursive;
        height:100%;
        cursor: pointer;
        padding-left: 28px;
    }
`