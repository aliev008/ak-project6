import styled from "styled-components";
import { pixelsToRem } from "../../utils/styles/pixelsToRem";

import { ReactComponent as CartSvg } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CartLogo = styled(CartSvg)`
  width: 24px;
  height: 24px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: ${pixelsToRem(10)};
  font-weight: bold;
  bottom: 12px;
`;
