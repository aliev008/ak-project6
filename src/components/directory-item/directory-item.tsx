import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { DirectoryCategory } from "../directory/directory.component";
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";

export type DirectoryItemProps = {
  category: DirectoryCategory;
};

export const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const directoryClickHandler = () => {
    navigate(`shop/${title.toLowerCase()}`);
  };

  return (
    <DirectoryItemContainer onClick={directoryClickHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
