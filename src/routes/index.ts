import { lazy } from "react";

export const Checkout = lazy(() => import("./checkout/checkout.component"));
export const Shop = lazy(() => import("./shop/shop.components"));
export const Navigation = lazy(() => import("./navigation/navigation.component"));
export const Authentification = lazy(() => import("./authentification/authentification.component"));
export const Home = lazy(() => import("./home/home.component"));


