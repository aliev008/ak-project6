import styled from "styled-components";
import { pixelsToRem } from "../../utils/styles/pixelsToRem";

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: ${pixelsToRem(24)};
  width: 70%;

  table {
    width: 70%;
    height: 100%;
    white-space: nowrap;
    border-collapse: collapse;
    margin-left: auto;

    th {
      padding-bottom: 30px;
    }

    td {
      text-align: center;
      padding: 30px 0;
    }

    th,
    td {
      border-bottom: 1px solid black;
    }

    img {
      width: 200px;
    }

    .remove-button {
      width: 22px;
      text-align: center;
      cursor: pointer;
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: ${pixelsToRem(36)};
  }
`;
