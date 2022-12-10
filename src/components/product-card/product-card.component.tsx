import Button from "../button/button.component";

import "./product-card.styles.scss";

interface ProductCardProps {
    product: any;
}

export const ProductCard = ({product}: ProductCardProps) => {
    const {id, name, imageUrl, price} = product;
  return (
    <div className={`product-card-container`} >
        <img src={imageUrl} alt={name} />
        <div className='footer'>
            <span className="name">{name}</span> 
            <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted">ADD TO CARD</Button>  
    </div>
  )
}