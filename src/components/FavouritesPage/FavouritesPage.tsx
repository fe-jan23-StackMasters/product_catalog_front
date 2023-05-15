import { ItemCard } from '../ItemCard';

const product = {
  id: '3',
  category: 'phones',
  phoneId: 'apple-iphone-8-64gb-gold',
  itemId: 'apple-iphone-8-64gb-gold',
  name: 'pple iPhone 8 64GB Gold',
  fullPrice: 500,
  price: 600,
  screen: '4.7 IPS',
  capacity: '64GB',
  color: 'gold',
  ram: '2GB',
  year: 2017,
  image: 'img/phones/apple-iphone-8/gold/00.png',
};

export const FavouritesPage = () => {
  return (
    <ItemCard product={product}/>
  );
};
