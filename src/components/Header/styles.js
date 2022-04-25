import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    padding: 16px;
    position: relative;
    background: #101820;
    box-sizing: border-box;
    border-bottom: 1px solid #e9eaec;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    h1 {
        color: white;
        text-align: center;
        font-family: 'Inter', sans-serif;
    }

    select {
        top: 0;
        bottom: 0;
        right: 16px;
        width: 100px;
        height: 25px;
        margin: auto;
        position: absolute;

        @media screen and (max-width: 768px) {
            margin-top: 16px;
            position: initial;
        }
    }
`;
