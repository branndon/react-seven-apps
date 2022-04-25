import styled, { css } from "styled-components";

export const Content = styled.div`
  .pagination {
    display: flex;
    margin: 20px auto;

    li {
      & + .active {
        background: #1976d2;
        border: 1px solid #1976d2;

        a {
          color: #fff;
        }
      }

      &:nth-child(1) {
        background: #1976d2;
        border: 1px solid transparent;
        a {
          color: #fff;
        }
        ${(props) =>
          props.currentPage === 1 &&
          css`
            border: 1px solid #aeaeae;
            background: #aeaeae;
            &:hover {
              background: #aeaeae;
            }
          `}
      }

      &:nth-child(2) {
        background: #1976d2;
        border: 1px solid transparent;
        a {
          color: #fff;
        }
        ${(props) =>
          props.currentPage === 1 &&
          css`
            border: 1px solid #aeaeae;
            background: #aeaeae;
            &:hover {
              background: #aeaeae;
            }
          `}
      }

      &:last-child {
        background: #1976d2;
        border: 1px solid transparent;
        a {
          color: #fff;
        }
        ${(props) =>
          props.currentPage === props.lastPage &&
          css`
            border: 1px solid #aeaeae;
            background: #aeaeae;
            &:hover {
              background: #aeaeae;
            }
          `}
      }
      &:nth-last-child(2) {
        background: #1976d2;
        border: 1px solid transparent;
        a {
          color: #fff;
        }
        ${(props) =>
          props.currentPage === props.lastPage &&
          css`
            border: 1px solid #aeaeae;
            background: #aeaeae;
            &:hover {
              background: #aeaeae;
            }
          `}
      }

      border: 1px solid #1976d2;
      transition: all 0.5s ease;
      background: #fff;
      border-radius: 4px;
      width: 35px;
      height: 35px;
      margin: 0 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      &:hover {
        background: #1976d290;

        a {
          color: #fff;
        }
      }

      a {
        font-size: 12px;
        color: #1976d2;
        text-decoration: none;
      }
    }
  }
`;
