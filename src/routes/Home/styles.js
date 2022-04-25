import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 32px 0;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  row-gap: 16px;

  > * {
    flex: 1 15%;
    box-sizing: border-box;

    @media screen and (max-width: 1200px) {
      flex: 1 20%;
    }

    @media screen and (max-width: 768px) {
      flex: 1 40%;
    }

    @media screen and (max-width: 425px) {
      flex: 1 100%;
    }
  }
`;

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;

  form {
    gap: 8px;
    display: flex;

    @media screen and (max-width: 425px) {
      flex-direction: column;
      flex: 1 100%;
    }
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;