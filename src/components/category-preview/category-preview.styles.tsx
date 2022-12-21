import styled from "styled-components";
import { pixelsToRem } from "../../utils/styles/pixelsToRem";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: ${pixelsToRem(28)};
    margin-bottom: 25px;
    cursor: pointer;
  }

  .preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
`;
