import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";
import { useState } from "react";
import {AiOutlineSearch} from "react-icons/ai";

export default function Search({setLogout,logout}){

    const [value,setValue] = useState([]);
    const [search,SetSearch] = useState(false);

    console.log(value);

    function inputClick(){
        if(logout === false){
            setLogout(true);
        };    
    }

    // Fazer comunicação com servidor para efetuar as buscas
    return (

        <SearchContainer>
        <DebounceInput
        onClick ={inputClick}
        minLength={3}
        debounceTimeout={300}
        placeholder="Search for people"
        onChange={(e) => setValue(e.target.value)}

        />
        <AiOutlineSearch  className="searchIcon"/>

       

        </SearchContainer>
    )
}

const SearchContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50%;
    height: 100%;

    input{
        position: relative;
        width: 100%;
        height: 67%;
        font-family: 'Lato', sans-serif;
        padding-left: 17px;
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        border-radius: 8px;
        background-color: #ffffff;
    }

    .searchIcon{
        position: absolute;
        right: 15px;
        z-index: 1;
        color:#C6C6C6;
    }
`