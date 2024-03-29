import { Key } from 'react';
import { DirectoryItem } from '../directory-item/directory-item';
import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
}
const categories: DirectoryCategory[] = [
  {
    "id": 1,
    "title": "Hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "Jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "Sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "Womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "Mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  }
];

export const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return (
            <DirectoryItem category={category} key={category.id}/>
        );
      })}
    </DirectoryContainer>
  );
};
