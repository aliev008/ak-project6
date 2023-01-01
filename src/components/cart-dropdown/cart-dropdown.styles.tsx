import styled from "styled-components";
import { pixelsToRem } from "../../utils/styles/pixelsToRem";
import {
  BasicButton,
  GoogleSigninButton,
  InvertedButton,
} from "../button/button.style";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BasicButton},
  ${GoogleSigninButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: ${pixelsToRem(18)};
  margin: 50px auto;
`;

export const CartItems = styled.span`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
