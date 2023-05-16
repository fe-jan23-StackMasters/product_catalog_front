import { Phone } from '../types/Phone';
import { PhoneCard } from '../types/PhoneCard';

export const getShortInfo = (detailed: Phone): PhoneCard => {
  return {
    id: detailed.productId,
    category: 'category',
    year: 2023,
    phoneId: detailed.id,
    itemId: detailed.id,
    name: detailed.name,
    fullPrice: detailed.priceRegular,
    price: detailed.priceDiscount,
    screen: detailed.screen,
    capacity: detailed.capacity,
    color: detailed.color,
    ram: detailed.ram,
    image: detailed.images[0],
  };
};
