export interface Attraction {
  name: string;
  description: string;
  time: string;
  tips: string;
  image?: string;
}

interface AttractionType {
  historical: Attraction[];
  romantic: Attraction[];
  food: Attraction[];
  dayTrips: Attraction[];
}

export const attractions: AttractionType = {
  historical: [
    {
      name: 'Colosseum',
      description: 'Ancient amphitheater and iconic symbol of Imperial Rome',
      time: '2-3 hours',
      tips: 'Book skip-the-line tickets in advance',
      image:
        'https://images.unsplash.com/photo-1679161058715-201f70bbb2f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvc3NldW0lMjByb21lJTIwYW5jaWVudCUyMGFtcGhpdGhlYXRlcnxlbnwxfHx8fDE3NTU0NjM4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Roman Forum',
      description: 'Ancient Roman public square with ruins of important government buildings',
      time: '1-2 hours',
      tips: 'Visit early morning for fewer crowds',
      image:
        'https://images.unsplash.com/photo-1722694125653-18e4e8f5ef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbiUyMGZvcnVtJTIwcnVpbnN8ZW58MXx8fHwxNzU1NDYzODI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Pantheon',
      description: 'Remarkably preserved Roman temple with stunning dome',
      time: '30-45 minutes',
      tips: 'Free entry, but expect queues',
      image:
        'https://images.unsplash.com/photo-1662406427153-f9c18cf0a1c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW50aGVvbiUyMHJvbWUlMjBkb21lfGVufDF8fHx8MTc1NTQ2MzgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: "Vatican City & St. Peter's Basilica",
      description: "The world's smallest country and magnificent basilica",
      time: 'Half day',
      tips: 'Dress modestly, consider guided tours',
      image:
        'https://images.unsplash.com/photo-1667139100491-352561d4fbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXRpY2FuJTIwY2l0eSUyMHN0JTIwcGV0ZXJzJTIwYmFzaWxpY2F8ZW58MXx8fHwxNzU1NDYzODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ],
  romantic: [
    {
      name: 'Trevi Fountain',
      description: 'Baroque fountain perfect for making wishes together',
      time: '30 minutes',
      tips: 'Visit at sunset or early morning for magical lighting',
      image:
        'https://images.unsplash.com/photo-1687214020362-f37b77539b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmV2aSUyMGZvdW50YWluJTIwcm9tZSUyMGJhcm9xdWV8ZW58MXx8fHwxNzU1NDYzODMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Spanish Steps',
      description: 'Beautiful stairway perfect for romantic photos',
      time: '45 minutes',
      tips: 'Climb to the top for great city views',
      image:
        'https://images.unsplash.com/photo-1656948727580-fe50a45f1cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwc3RlcHMlMjByb21lfGVufDF8fHx8MTc1NTQ2MzgzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Villa Borghese Gardens',
      description: 'Peaceful gardens perfect for romantic strolls',
      time: '2-3 hours',
      tips: 'Rent bikes or have a picnic',
      image:
        'https://images.unsplash.com/photo-1627379329994-4d1ec1741dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMGJvcmdoZXNlJTIwZ2FyZGVucyUyMHJvbWV8ZW58MXx8fHwxNzU1NDYzODMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: "Castel Sant'Angelo",
      description: 'Historic castle with panoramic views of Rome',
      time: '1-2 hours',
      tips: 'Perfect for sunset views',
      image:
        'https://images.unsplash.com/photo-1695473095479-f7645ce648d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN0ZWwlMjBzYW50JTIwYW5nZWxvJTIwcm9tZXxlbnwxfHx8fDE3NTU0NjM4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ],
  food: [
    {
      name: 'Trastevere District',
      description: 'Charming neighborhood with authentic trattorias',
      time: 'Evening',
      tips: 'Try carbonara and cacio e pepe',
      image:
        'https://images.unsplash.com/photo-1512506398282-02897d1cbace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFzdGV2ZXJlJTIwcm9tZSUyMHN0cmVldCUyMGZvb2R8ZW58MXx8fHwxNzU1NDYzODM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: "Campo de' Fiori Market",
      description: 'Morning market with fresh produce and local specialties',
      time: '1-2 hours',
      tips: 'Visit in the morning for the best selection',
      image:
        'https://images.unsplash.com/photo-1705626407173-3f225a98cfd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wbyUyMGRlJTIwZmlvcmklMjBtYXJrZXQlMjByb21lfGVufDF8fHx8MTc1NTQ2MzgzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Testaccio Food Tour',
      description: 'Local food district with authentic Roman cuisine',
      time: '3-4 hours',
      tips: 'Book a guided food tour for the best experience',
    },
    {
      name: 'Gelato at Giolitti',
      description: "Historic gelateria serving Rome's finest gelato since 1900",
      time: '30 minutes',
      tips: "Try multiple flavors, it's tradition!",
      image:
        'https://images.unsplash.com/photo-1619787144389-7c1161c23837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwZ2VsYXRvJTIwcm9tZXxlbnwxfHx8fDE3NTU0NjM4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ],
  dayTrips: [
    {
      name: "Tivoli - Villa d'Este",
      description: 'Renaissance villa with stunning gardens and fountains',
      time: 'Half day',
      tips: 'Take the regional train from Rome',
      image:
        'https://images.unsplash.com/photo-1647674825034-9ea509ffa8a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMGVzdGUlMjB0aXZvbGklMjBmb3VudGFpbnN8ZW58MXx8fHwxNzU1NDYzODM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Ostia Antica',
      description: 'Ancient Roman port city with well-preserved ruins',
      time: 'Half day',
      tips: 'Less crowded alternative to Pompeii',
    },
    {
      name: 'Castel Gandolfo',
      description: 'Papal summer residence with beautiful lake views',
      time: 'Half day',
      tips: 'Perfect for a peaceful escape from the city',
    },
    {
      name: 'Frascati Wine Region',
      description: 'Charming hilltop town famous for white wines',
      time: 'Full day',
      tips: 'Combine wine tasting with scenic views',
    },
  ],
};
