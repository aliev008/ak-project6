import { DirectoryItem } from '../directory-item/directory-item';
import './directory.styles.scss';

interface DirectoryProps {
  categories: {
    title: string;
    id: number;
    imageUrl: string;
  }[];
}

export const Directory = ({ categories }: DirectoryProps) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return (
            <DirectoryItem category={category} key={category.id}/>
        );
      })}
    </div>
  );
};
