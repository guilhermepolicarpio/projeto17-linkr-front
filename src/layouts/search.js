import styled from "styled-components"
import { DebounceInput } from "react-debounce-input"

export default function Search(){


    return (

        <SearchContainer>
        <DebounceInput
        minLength={3}
        debounceTimeout={300}
        placeholder="Search for people"
        //onChange para buscar
        
        />

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
        height: 50%;
        font-family: 'Lato', sans-serif;
        padding-left: 17px;
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        border-radius: 8px;
        background-color: #ffffff;
    }
`