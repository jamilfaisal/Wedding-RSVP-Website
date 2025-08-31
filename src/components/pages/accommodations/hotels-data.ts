export interface TransportationMode {
  type: 'car' | 'metro' | 'bus' | 'walk';
}

export interface HotelLink {
  text: string;
  url: string;
}

export interface Hotel {
  name: string;
  location: string;
  image: string;
  blockRate: string | undefined;
  distance: string;
  transport: TransportationMode[];
  transportNotes: string;
  notes: string;
  booking: string | undefined;
  links: HotelLink[];
}

export const mainHotelStatic = {
  location: 'Monte Mario / Trionfale',
  image:
    'https://images.unsplash.com/photo-1544709447-91e465a1706c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21lJTIwY2F2YWxpZXJpJTIwd2FsZG9yZiUyMGFzdG9yaWElMjBob3RlbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NTQ2NTIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  blockRate: '€250 per night (limited rooms)',
  distance: '0 km (on-site)',
  transport: [{ type: 'car' }] as TransportationMode[],
  links: [
    { text: 'travellermade.com', url: '#' },
    { text: 'Hotel Rome Cavalieri', url: '#' },
  ],
};

export function getMainHotel(t: (key: string) => string): Hotel {
  return {
    ...mainHotelStatic,
    name: t('hotels.mainHotel.name'),
    transportNotes: t('hotels.mainHotel.transportNotes'),
    notes: t('hotels.mainHotel.notes'),
    booking: t('hotels.mainHotel.booking'),
  };
}

export const signatureStaysStatic = [
  {
    key: 'hotelDeRussie',
    location: 'Piazza del Popolo / Centro',
    image: '/images/hotels/hotel-de-russie.jpg',
    distance: '~6.0 km to venue',
    transport: [{ type: 'car' }, { type: 'metro' }] as TransportationMode[],
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
  {
    key: 'hotelEden',
    location: 'Via Veneto / Spanish Steps',
    image: '/images/hotels/hotel-eden.jpg',
    distance: '~6.5 km',
    transport: [{ type: 'car' }, { type: 'metro' }] as TransportationMode[],
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
  {
    key: 'hasslerRoma',
    location: 'Top of the Spanish Steps',
    image: '/images/hotels/hassler-roma.jpg',
    distance: '~6.0 km',
    transport: [{ type: 'car' }, { type: 'metro' }] as TransportationMode[],
    links: [{ text: 'Rome2Rio', url: '#' }],
    blockRate: undefined,
    booking: undefined,
  },
  {
    key: 'bulgariHotel',
    location: 'Piazza Augusto Imperatore',
    image:
      'https://images.unsplash.com/photo-1677129666408-19aceac7d293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxidWxnYXJpJTIwaG90ZWwlMjByb21hJTIwbHV4dXJ5JTIwbW9kZXJufGVufDF8fHx8MTc1NTQ2NTI0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~6.0 km',
    transport: [{ type: 'car' }, { type: 'metro' }] as TransportationMode[],
    links: [{ text: 'Vogue', url: '#' }],
    blockRate: undefined,
    booking: undefined,
  },
  {
    key: 'hotelDelaVille',
    location: 'Spanish Steps',
    image: '/images/hotels/hotel-de-la-ville.jpg',
    distance: '~6.5 km',
    transport: [{ type: 'car' }, { type: 'metro' }] as TransportationMode[],
    links: [{ text: 'Vanity Fair', url: '#' }],
    blockRate: undefined,
    booking: undefined,
  },
];

export function getSignatureStays(t: (key: string) => string): Hotel[] {
  return signatureStaysStatic.map((hotel) => ({
    ...hotel,
    name: t(`hotels.signatureStays.${hotel.key}.name`),
    transportNotes: t(`hotels.signatureStays.${hotel.key}.transportNotes`),
    notes: t(`hotels.signatureStays.${hotel.key}.notes`),
  }));
}

export const timelessStaysStatic = [
  {
    key: 'nhCollection',
    location: 'Prati',
    image:
      'https://images.unsplash.com/photo-1532313944948-f7c5433f64e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaCUyMGNvbGxlY3Rpb24lMjBob3RlbCUyMHJvbWUlMjBtb2Rlcm4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTU0NjUyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~3.8 km',
    transport: [{ type: 'car' }, { type: 'metro' }] as TransportationMode[],
    links: [
      { text: 'Rome2Rio', url: '#' },
      { text: 'hotels', url: '#' },
    ],
    blockRate: undefined,
    booking: undefined,
  },
  {
    key: 'hotelIsa',
    location: 'Prati',
    image: '/images/hotels/hotel-isa.jpg',
    distance: '~3.5–4.0 km',
    transport: [{ type: 'car' }, { type: 'bus' }, { type: 'metro' }] as TransportationMode[],
    links: [
      { text: 'hotels', url: '#' },
      { text: 'Rome2Rio', url: '#' },
    ],
    blockRate: undefined,
    booking: undefined,
  },
  {
    key: 'villaAgrippina',
    location: 'Janiculum / Trastevere–Vatican',
    image:
      'https://images.unsplash.com/photo-1740896552931-4b4adffd843a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMGFncmlwcGluYSUyMGdyYW4lMjBtZWxpYSUyMHJvbWUlMjByZXNvcnR8ZW58MXx8fHwxNzU1NDY1MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~5.0 km',
    transport: [{ type: 'car' }, { type: 'bus' }, { type: 'metro' }] as TransportationMode[],
    links: [
      { text: 'Rome2Rio', url: '#' },
      { text: 'melia.com', url: '#' },
    ],
    blockRate: undefined,
    booking: undefined,
  },
  {
    key: 'martisPalace',
    location: 'Navona / Pantheon',
    image:
      'https://images.unsplash.com/photo-1634316164986-3d65b05f123f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aXMlMjBwYWxhY2UlMjBob3RlbCUyMHJvbWUlMjBkZXNpZ24lMjBib3V0aXF1ZXxlbnwxfHx8fDE3NTU0NjUyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~5.0 km',
    transport: [{ type: 'car' }, { type: 'bus' }] as TransportationMode[],
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
  {
    key: 'palazzoNavona',
    location: 'Navona / Pantheon',
    image:
      'https://images.unsplash.com/photo-1718369721116-dbdc869bc64d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxhenpvJTIwbmF2b25hJTIwaG90ZWwlMjByb21lJTIwaGlzdG9yaWN8ZW58MXx8fHwxNzU1NDY1MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~5.0 km',
    transport: [{ type: 'car' }, { type: 'bus' }] as TransportationMode[],
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
];

export function getTimelessStays(t: (key: string) => string): Hotel[] {
  return timelessStaysStatic.map((hotel) => ({
    ...hotel,
    name: t(`hotels.timelessStays.${hotel.key}.name`),
    transportNotes: t(`hotels.timelessStays.${hotel.key}.transportNotes`),
    notes: t(`hotels.timelessStays.${hotel.key}.notes`),
  }));
}

export const chicStaysStatic = [
  {
    key: 'hoxtonRome',
    location: 'Salario–Parioli',
    image:
      'https://images.unsplash.com/photo-1572611442784-7a041f631440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3h0b24lMjBob3RlbCUyMHJvbWUlMjBtb2Rlcm4lMjBkZXNpZ258ZW58MXx8fHwxNzU1NDY1MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~4.5–5.0 km',
    transport: [{ type: 'car' }, { type: 'bus' }] as TransportationMode[],
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
  {
    key: 'hotelSmeraldo',
    location: "Campo de' Fiori",
    image:
      'https://images.unsplash.com/photo-1681740090999-8d67ffbf920f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wbyUyMGRlJTIwZmlvcmklMjBob3RlbCUyMHJvbWUlMjBoaXN0b3JpYyUyMGNlbnRlcnxlbnwxfHx8fDE3NTU0NjUyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~5.5 km',
    transport: [{ type: 'car' }, { type: 'bus' }] as TransportationMode[],
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
  {
    key: 'romeHello',
    location: 'Repubblica / Termini',
    image:
      'https://images.unsplash.com/photo-1572611442784-7a041f631440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3h0b24lMjBob3RlbCUyMHJvbWUlMjBtb2Rlcm4lMjBkZXNpZ258ZW58MXx8fHwxNzU1NDY1MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~6.5–7.0 km',
    transport: [{ type: 'car' }, { type: 'metro' }] as TransportationMode[],
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
  {
    key: 'generatorRome',
    location: 'Esquilino / Termini',
    image:
      'https://images.unsplash.com/photo-1561812267-ca3dd6050cbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0b3IlMjBob3N0ZWwlMjByb21lJTIwbW9kZXJuJTIwYnVkZ2V0JTIwZGVzaWdufGVufDF8fHx8MTc1NTQ2NTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~7.5 km',
    transport: [{ type: 'car' }, { type: 'metro' }] as TransportationMode[],
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
  {
    key: 'hotelSantAngelo',
    location: "Prati / Castel Sant'Angelo",
    image:
      'https://images.unsplash.com/photo-1572611442784-7a041f631440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNhbnQlMjBhbmdlbG8lMjBjYXN0ZWwlMjByb21lJTIwcml2ZXJ8ZW58MXx8fHwxNzU1NDY1Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~4.0–4.5 km',
    transport: [{ type: 'car' }, { type: 'bus' }] as TransportationMode[],
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
];

export function getChicStays(t: (key: string) => string): Hotel[] {
  return chicStaysStatic.map((hotel) => ({
    ...hotel,
    name: t(`hotels.chicStays.${hotel.key}.name`),
    transportNotes: t(`hotels.chicStays.${hotel.key}.transportNotes`),
    notes: t(`hotels.chicStays.${hotel.key}.notes`),
  }));
}
