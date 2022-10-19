import styled from "styled-components";
import Header from "../layouts/Header";

export default function Home(){
    return(
        <Wrapper>
            <Header />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	align-items: center;
	justify-content: center;
`
