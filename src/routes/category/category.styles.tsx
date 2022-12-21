import styled from "styled-components";
import { pixelsToRem } from "../../utils/styles/pixelsToRem";

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
`
export const Title = styled.h2`
    font-size: ${pixelsToRem(38)};
    margin-bottom: 25px;
    text-align: center;
`
