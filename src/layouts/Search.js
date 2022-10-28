import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";
import { useState,useContext } from "react";
import {AiOutlineSearch} from "react-icons/ai";
import { searchUsers } from "../service/API";
import userContext from "../context/UserContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Search({setLogout,logout}){

    const [search,SetSearch] = useState([])
    const { userInfos, setUserInfos } = useContext(userContext);
    const navigate = useNavigate();

    function inputClick(){
        if(logout === false){
            setLogout(true);
        };    
    }

    function searchUser(value){

        if(value.length===0)
            return;
        
        const config = {
            headers: {
              Authorization: `Bearer ${userInfos.token}`,
            },
          }

        searchUsers(value,config)
            .then((res) =>{
                SetSearch(res.data)
            })
            .catch((res)=>{
                console.log(res)
            })
    }

    function userPage(id){
        console.log(id)
        navigate(`/user/${id}`)
    }

    return (

        <SearchContainer>
        <DebounceInput
        onClick ={inputClick}
        minLength={3}
        debounceTimeout={300}
        placeholder="Search for people"
        onChange={(e) => searchUser(e.target.value)}

        />
        <AiOutlineSearch  className="searchIcon"/>
            {
                !search.length >0?
                ""
                :
                <SearchBoxResults>{
                    search.map((result) => (
                    
                    <RowResult onClick={() => userPage(result.id)}>
                        <img src = {result.pictureUrl} alt=""/>
                        <p>{result.name}</p>
                    </RowResult>
                
                    
                ))}
                </SearchBoxResults>
            }
        </SearchContainer>
    )}

const SearchContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 60%;
    height: 100%;
    z-index: 1;

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
const SearchBoxResults = styled.div`

    width: 100%;
    height: auto;
    position: absolute;
    background: #E7E7E7;
    border-radius: 8px;
    top: 60px;
    margin-bottom: 10px;
    
    img{
    height: 42px;
    width: 42px;
    border-radius: 26.5px;
    margin: 12px;
    }

    p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 23px;
    display: flex;
    align-items: center;
    margin: 10px;
    color: #515151;
    }
`
const RowResult = styled.div`
    display: flex;
    cursor: pointer;
`