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

export interface CategoryInterface {
  title: string;
  items?: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }[];
  products?: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export type DirectoryType = {
  title: string;
  id: number;
  imageUrl: string;
}[];
