import './category-item.styles.scss';

interface CategoryProps {
    title: string;
    id: number;
    imageUrl: string;
}

export const Category = ({ category }: {category: CategoryProps}) => {
  const { id, imageUrl, title} = category;
  return (
    <div className="category-container" key={id}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="category-body-container">
      <h2>{title}</h2>
      <p>Shop now</p>
    </div>
  </div>
  );
};
