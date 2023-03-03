import styled from "styled-components";

export const FormsContainer = styled.div`
    display: flex;
    width: 70%;
    margin: 0 auto;
    justify-content: space-around;

    @media screen and (max-width: 800px) {
        flex-wrap: wrap;
        
    }
`

export const GoogleSignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`
