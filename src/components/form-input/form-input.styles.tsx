import styled, { css } from "styled-components";
import { pixelsToRem } from "../../utils/styles/pixelsToRem";

const mainColor = "black";
const subColor = "grey";

const shrinkLabel = css`
  top: -14px;
  font-size: toRem(12);
  color: ${mainColor};
`;

type FormInputLabelProps = {
  shrink?: boolean;
}

export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: ${subColor};
  font-size: ${pixelsToRem(16)};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabel}
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: ${pixelsToRem(18)};
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabel}
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
