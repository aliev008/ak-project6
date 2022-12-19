import './directory-item.styles.scss';

interface CategoryProps {
    title: string;
    id: number;
    imageUrl: string;
}

export const DirectoryItem = ({ category }: {category: CategoryProps}) => {
  const { id, imageUrl, title} = category;
  return (
    <div className="directory-item-container" key={id}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="body">
      <h2>{title}</h2>
      <p>Shop now</p>
    </div>
  </div>
  );
};
