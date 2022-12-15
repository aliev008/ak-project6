export interface ProductInterface {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
}

export interface CartItemInterface {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

