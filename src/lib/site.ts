export const site = {
  name: 'THE GREAT ROTALE',
  phoneDisplay: '0763 048 068',
  phoneInternational: '255763048068',
  mapsUrl: 'https://maps.app.goo.gl/nUbzRJSb5noK5nyCA',
  // Replace placeholders with files in /public/images/ when you have the real photographs.
  images: {
    hero: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=82',
    room: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1400&q=82',
    kisinia: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1400&q=82',
    biriani: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=1400&q=82',
    pizza: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1300&q=82',
    burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1300&q=82',
    breakfast: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1300&q=82'
  }
};
export function whatsappUrl(message: string) {
  return `https://wa.me/${site.phoneInternational}?text=${encodeURIComponent(message)}`;
}
