import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";

interface CategoryProps {
  title: string;
  id: number;
  imageUrl: string;
}

export const DirectoryItem = ({ category }: { category: CategoryProps }) => {
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
