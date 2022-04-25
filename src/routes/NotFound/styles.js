import styled from "styled-components";

export const PageNotFound = styled.div`
    height: 100vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 768px) {
      display: initial;
    }

    h2 {
        font-size: 48px;
        line-height: 54px;
        font-weight: 500;

        @media screen and (max-width: 768px) {
            font-size: 20px;
            line-height: 100%;
        }
    }

    p {
        margin-top: 8px;
        font-size: 14px;
        line-height: 20px;

        @media screen and (max-width: 768px) {
            font-size: 12px;
            line-height: 100%;
        }
    }
`;