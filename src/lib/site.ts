export const site = {
  name: 'THE GREAT ROTALE',
  phoneDisplay: '0763 048 068',
  phoneInternational: '255763048068',
  mapsUrl: 'https://maps.app.goo.gl/nUbzRJSb5noK5nyCA',
  images: {
    hero: '/images/hotel/home.jpg',
    logo: '/images/hotel/logo.jpg',
    room: '/images/hotel/room.jpg',
    luxury: '/images/hotel/luxury-room.jpg',
    deluxe: '/images/hotel/deluxe-room.jpg',
    kisinia: '/images/food/kisinia.webp',
    // Supplied image: provenance unverified; always label as illustrative.
    // See docs/image-credits.md before replacing with a licensed or hotel photograph.
    biriani: '/images/food/biriani-supplied.jpeg',
    // Existing illustrative Unsplash photos; no real pizza image was supplied.
    pizza: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1300&q=82',
    burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1300&q=82',
    breakfast: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1300&q=82'
  }
};

export const rooms = [
  { id: 'luxury', name: { en: 'Luxury Room', sw: 'Chumba cha Luxury' }, price: 50_000, image: site.images.luxury },
  { id: 'deluxe', name: { en: 'Deluxe Room', sw: 'Chumba cha Deluxe' }, price: 70_000, image: site.images.deluxe },
] as const;

export function roomPrice(price: number) {
  return `TZS ${price.toLocaleString('en-US')}`;
}

export function roomInquiry(room: (typeof rooms)[number], lang: 'en' | 'sw') {
  return lang === 'en'
    ? `Hello THE GREAT ROTALE, I would like to inquire about booking a ${room.name.en} at ${roomPrice(room.price)} per night. Please confirm availability.`
    : `Habari THE GREAT ROTALE, ningependa kuulizia nafasi ya ${room.name.sw} kwa ${roomPrice(room.price)} kwa usiku. Tafadhali thibitisha upatikanaji.`;
}
export function whatsappUrl(message: string) {
  return `https://wa.me/${site.phoneInternational}?text=${encodeURIComponent(message)}`;
}
