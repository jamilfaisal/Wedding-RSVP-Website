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

export const mainHotel: Hotel = {
  name: 'Rome Cavalieri, A Waldorf Astoria Hotel (Wedding Venue & Primary Stay)',
  location: 'Monte Mario / Trionfale',
  image:
    'https://images.unsplash.com/photo-1544709447-91e465a1706c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21lJTIwY2F2YWxpZXJpJTIwd2FsZG9yZiUyMGFzdG9yaWElMjBob3RlbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NTQ2NTIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  blockRate: '€250 per night (limited rooms)',
  distance: '0 km (on-site)',
  transport: [{ type: 'car' }],
  transportNotes: 'Hotel shuttle to Via Veneto (seasonal/timetabled), taxis readily available.',
  notes: 'Resort-style oasis above the city, panoramic views, classic Roman grandeur.',
  booking: 'Please mention "Faris & Zina Wedding Rate".',
  links: [
    { text: 'travellermade.com', url: '#' },
    { text: 'Hotel Rome Cavalieri', url: '#' },
  ],
};

export const signatureStays: Hotel[] = [
  {
    name: 'Hotel de Russie — Rocco Forte',
    location: 'Piazza del Popolo / Centro',
    image:
      'https://images.unsplash.com/photo-1721939555270-8a577f0607f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlJTIwcnVzc2llJTIwcm9tZSUyMHJvY2NvJTIwZm9ydGV8ZW58MXx8fHwxNzU1NDY1MjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~6.0 km to venue',
    transport: [{ type: 'car' }, { type: 'metro' }],
    transportNotes: 'Taxi (~15–20 min). Metro A (Flaminio ↔ Cipro) + short taxi.',
    notes: 'Secret garden, timeless Roman elegance.',
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
  {
    name: 'Hotel Eden — Dorchester Collection',
    location: 'Via Veneto / Spanish Steps',
    image:
      'https://images.unsplash.com/photo-1744518826762-32e916589c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGVkZW4lMjByb21lJTIwZG9yY2hlc3RlciUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzU1NDY1MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~6.5 km',
    transport: [{ type: 'car' }, { type: 'metro' }],
    transportNotes: 'Taxi; Metro A (Spagna/Barberini ↔ Cipro) + short taxi.',
    notes: 'Rooftop views, old-world glamour.',
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
  {
    name: 'Hassler Roma',
    location: 'Top of the Spanish Steps',
    image:
      'https://images.unsplash.com/photo-1561812267-ca3dd6050cbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXNzbGVyJTIwcm9tYSUyMHNwYW5pc2glMjBzdGVwcyUyMGx1eHVyeSUyMGhvdGVsfGVufDF8fHx8MTc1NTQ2NTI0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~6.0 km',
    transport: [{ type: 'car' }, { type: 'metro' }],
    transportNotes: 'Taxi; Metro A (Spagna ↔ Cipro).',
    notes: 'A Roman icon with panoramic terraces.',
    links: [{ text: 'Rome2Rio', url: '#' }],
    blockRate: undefined,
    booking: undefined,
  },
  {
    name: 'Bulgari Hotel Roma',
    location: 'Piazza Augusto Imperatore',
    image:
      'https://images.unsplash.com/photo-1677129666408-19aceac7d293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxidWxnYXJpJTIwaG90ZWwlMjByb21hJTIwbHV4dXJ5JTIwbW9kZXJufGVufDF8fHx8MTc1NTQ2NTI0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~6.0 km',
    transport: [{ type: 'car' }, { type: 'metro' }],
    transportNotes: 'Taxi; Metro A (Spagna ↔ Cipro) + short taxi.',
    notes: 'Contemporary Italian opulence with a statement spa.',
    links: [{ text: 'Vogue', url: '#' }],
    blockRate: undefined,
    booking: undefined,
  },
  {
    name: 'Hotel de la Ville — Rocco Forte',
    location: 'Spanish Steps',
    image:
      'https://images.unsplash.com/photo-1645380562442-a64c2a7695de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlJTIwbGElMjB2aWxsZSUyMHJvY2NvJTIwZm9ydGUlMjBzcGFuaXNoJTIwc3RlcHN8ZW58MXx8fHwxNzU1NDY1MjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~6.5 km',
    transport: [{ type: 'car' }, { type: 'metro' }],
    transportNotes: 'Taxi; Metro A (Spagna ↔ Cipro).',
    notes: 'Rooftop bar and grand-tour interiors.',
    links: [{ text: 'Vanity Fair', url: '#' }],
    blockRate: undefined,
    booking: undefined,
  },
];

export const timelessStays: Hotel[] = [
  {
    name: 'NH Collection Roma Giustiniano',
    location: 'Prati',
    image:
      'https://images.unsplash.com/photo-1532313944948-f7c5433f64e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaCUyMGNvbGxlY3Rpb24lMjBob3RlbCUyMHJvbWUlMjBtb2Rlcm4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTU0NjUyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~3.8 km',
    transport: [{ type: 'car' }, { type: 'metro' }],
    transportNotes: 'Taxi (~10–15 min); Metro A (Lepanto ↔ Cipro).',
    notes: "Wide rooms, easy walk to Castel Sant'Angelo & Via Cola di Rienzo.",
    links: [
      { text: 'Rome2Rio', url: '#' },
      { text: 'hotels', url: '#' },
    ],
    blockRate: undefined,
    booking: undefined,
  },
  {
    name: 'Hotel Isa',
    location: 'Prati',
    image:
      'https://images.unsplash.com/photo-1729755033606-251c462a8bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwcm9tZSUyMHRlcnJhY2UlMjByb29mdG9wfGVufDF8fHx8MTc1NTQ2NTI1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~3.5–4.0 km',
    transport: [{ type: 'car' }, { type: 'bus' }, { type: 'metro' }],
    transportNotes: 'Taxi; buses to Cavour/Prati; Metro A connections.',
    notes: 'Boutique feel with a lovely rooftop terrace.',
    links: [
      { text: 'hotels', url: '#' },
      { text: 'Rome2Rio', url: '#' },
    ],
    blockRate: undefined,
    booking: undefined,
  },
  {
    name: 'Villa Agrippina, Gran Meliá',
    location: 'Janiculum / Trastevere–Vatican',
    image:
      'https://images.unsplash.com/photo-1740896552931-4b4adffd843a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMGFncmlwcGluYSUyMGdyYW4lMjBtZWxpYSUyMHJvbWUlMjByZXNvcnR8ZW58MXx8fHwxNzU1NDY1MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~5.0 km',
    transport: [{ type: 'car' }, { type: 'bus' }, { type: 'metro' }],
    transportNotes: 'Taxi; buses via Gianicolo; Metro A (Ottaviano ↔ Cipro) + taxi.',
    notes: 'Urban resort vibe between Vatican and Trastevere.',
    links: [
      { text: 'Rome2Rio', url: '#' },
      { text: 'melia.com', url: '#' },
    ],
    blockRate: undefined,
    booking: undefined,
  },
  {
    name: 'Martis Palace Hotel',
    location: 'Navona / Pantheon',
    image:
      'https://images.unsplash.com/photo-1634316164986-3d65b05f123f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aXMlMjBwYWxhY2UlMjBob3RlbCUyMHJvbWUlMjBkZXNpZ24lMjBib3V0aXF1ZXxlbnwxfHx8fDE3NTU0NjUyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~5.0 km',
    transport: [{ type: 'car' }, { type: 'bus' }],
    transportNotes: 'Taxi; bus to Via Crescenzio then taxi.',
    notes: "Intimate design hotel steps from Rome's baroque heart.",
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
  {
    name: 'Palazzo Navona Hotel',
    location: 'Navona / Pantheon',
    image:
      'https://images.unsplash.com/photo-1718369721116-dbdc869bc64d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxhenpvJTIwbmF2b25hJTIwaG90ZWwlMjByb21lJTIwaGlzdG9yaWN8ZW58MXx8fHwxNzU1NDY1MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~5.0 km',
    transport: [{ type: 'car' }, { type: 'bus' }],
    transportNotes: 'Taxi; bus links toward Prati then short taxi/walk.',
    notes: 'Elegant minimalism with a stellar rooftop.',
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
];

export const chicStays: Hotel[] = [
  {
    name: 'The Hoxton, Rome',
    location: 'Salario–Parioli',
    image:
      'https://images.unsplash.com/photo-1572611442784-7a041f631440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3h0b24lMjBob3RlbCUyMHJvbWUlMjBtb2Rlcm4lMjBkZXNpZ258ZW58MXx8fHwxNzU1NDY1MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~4.5–5.0 km',
    transport: [{ type: 'car' }, { type: 'bus' }],
    transportNotes: 'Taxi; buses on Via Nomentana/Parioli.',
    notes: 'Cool social spaces; leafy neighborhood vibes.',
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
  {
    name: 'Hotel Smeraldo',
    location: "Campo de' Fiori",
    image:
      'https://images.unsplash.com/photo-1681740090999-8d67ffbf920f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wbyUyMGRlJTIwZmlvcmklMjBob3RlbCUyMHJvbWUlMjBoaXN0b3JpYyUyMGNlbnRlcnxlbnwxfHx8fDE3NTU0NjUyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~5.5 km',
    transport: [{ type: 'car' }, { type: 'bus' }],
    transportNotes: 'Taxi; bus to Corso Vittorio Emanuele + short taxi/walk.',
    notes: 'Heart-of-Rome location, renovated rooms.',
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
  {
    name: 'The RomeHello',
    location: 'Repubblica / Termini',
    image:
      'https://images.unsplash.com/photo-1572611442784-7a041f631440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3h0b24lMjBob3RlbCUyMHJvbWUlMjBtb2Rlcm4lMjBkZXNpZ258ZW58MXx8fHwxNzU1NDY1MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~6.5–7.0 km',
    transport: [{ type: 'car' }, { type: 'metro' }],
    transportNotes: 'Taxi; Metro A/B ↔ Cipro.',
    notes: 'Friendly, modern, surprisingly chic.',
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
  {
    name: 'Generator Rome',
    location: 'Esquilino / Termini',
    image:
      'https://images.unsplash.com/photo-1561812267-ca3dd6050cbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0b3IlMjBob3N0ZWwlMjByb21lJTIwbW9kZXJuJTIwYnVkZ2V0JTIwZGVzaWdufGVufDF8fHx8MTc1NTQ2NTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~7.5 km',
    transport: [{ type: 'car' }, { type: 'metro' }],
    transportNotes: 'Taxi; Metro A/B ↔ Cipro.',
    notes: 'Design-led budget with rooftop bar.',
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
  {
    name: "Hotel Sant'Angelo",
    location: "Prati / Castel Sant'Angelo",
    image:
      'https://images.unsplash.com/photo-1572611442784-7a041f631440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNhbnQlMjBhbmdlbG8lMjBjYXN0ZWwlMjByb21lJTIwcml2ZXJ8ZW58MXx8fHwxNzU1NDY1Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    distance: '~4.0–4.5 km',
    transport: [{ type: 'car' }, { type: 'bus' }],
    transportNotes: 'Taxi; buses along Lungotevere & Via Cavour.',
    notes: 'Classic style near the river.',
    blockRate: undefined,
    booking: undefined,
    links: [],
  },
];
