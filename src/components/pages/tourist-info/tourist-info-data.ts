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

export const historicalAttractionsStatic = [
  {
    key: 'colosseum',
    image:
      'https://images.unsplash.com/photo-1679161058715-201f70bbb2f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvc3NldW0lMjByb21lJTIwYW5jaWVudCUyMGFtcGhpdGhlYXRlcnxlbnwxfHx8fDE3NTU0NjM4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    key: 'romanForum',
    image:
      'https://images.unsplash.com/photo-1722694125653-18e4e8f5ef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbiUyMGZvcnVtJTIwcnVpbnN8ZW58MXx8fHwxNzU1NDYzODI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    key: 'pantheon',
    image:
      'https://images.unsplash.com/photo-1662406427153-f9c18cf0a1c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW50aGVvbiUyMHJvbWUlMjBkb21lfGVufDF8fHx8MTc1NTQ2MzgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    key: 'vatican',
    image:
      'https://images.unsplash.com/photo-1667139100491-352561d4fbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXRpY2FuJTIwY2l0eSUyMHN0JTIwcGV0ZXJzJTIwYmFzaWxpY2F8ZW58MXx8fHwxNzU1NDYzODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export const romanticAttractionsStatic = [
  {
    key: 'treviFountain',
    image:
      'https://images.unsplash.com/photo-1687214020362-f37b77539b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmV2aSUyMGZvdW50YWluJTIwcm9tZSUyMGJhcm9xdWV8ZW58MXx8fHwxNzU1NDYzODMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    key: 'spanishSteps',
    image:
      'https://images.unsplash.com/photo-1656948727580-fe50a45f1cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwc3RlcHMlMjByb21lfGVufDF8fHx8MTc1NTQ2MzgzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    key: 'villaBorghese',
    image:
      'https://images.unsplash.com/photo-1627379329994-4d1ec1741dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMGJvcmdoZXNlJTIwZ2FyZGVucyUyMHJvbWV8ZW58MXx8fHwxNzU1NDYzODMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    key: 'castelSantAngelo',
    image:
      'https://images.unsplash.com/photo-1695473095479-f7645ce648d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN0ZWwlMjBzYW50JTIwYW5nZWxvJTIwcm9tZXxlbnwxfHx8fDE3NTU0NjM4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export const foodAttractionsStatic = [
  {
    key: 'trastevere',
    image:
      'https://images.unsplash.com/photo-1512506398282-02897d1cbace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFzdGV2ZXJlJTIwcm9tZSUyMHN0cmVldCUyMGZvb2R8ZW58MXx8fHwxNzU1NDYzODM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    key: 'campoFiori',
    image:
      'https://images.unsplash.com/photo-1705626407173-3f225a98cfd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wbyUyMGRlJTIwZmlvcmklMjBtYXJrZXQlMjByb21lfGVufDF8fHx8MTc1NTQ2MzgzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    key: 'testaccio',
    image: undefined,
  },
  {
    key: 'giolitti',
    image:
      'https://images.unsplash.com/photo-1619787144389-7c1161c23837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwZ2VsYXRvJTIwcm9tZXxlbnwxfHx8fDE3NTU0NjM4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export const dayTripsAttractionsStatic = [
  {
    key: 'tivoliVillaEste',
    image:
      'https://images.unsplash.com/photo-1647674825034-9ea509ffa8a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMGVzdGUlMjB0aXZvbGklMjBmb3VudGFpbnN8ZW58MXx8fHwxNzU1NDYzODM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    key: 'ostiaAntica',
    image: undefined,
  },
  {
    key: 'castelGandolfo',
    image: undefined,
  },
  {
    key: 'frascati',
    image: undefined,
  },
];

export function getHistoricalAttractions(t: (key: string) => string): Attraction[] {
  return historicalAttractionsStatic.map((attraction) => ({
    ...attraction,
    name: t(`attractions.historical.${attraction.key}.name`),
    description: t(`attractions.historical.${attraction.key}.description`),
    time: t(`attractions.historical.${attraction.key}.time`),
    tips: t(`attractions.historical.${attraction.key}.tips`),
  }));
}

export function getRomanticAttractions(t: (key: string) => string): Attraction[] {
  return romanticAttractionsStatic.map((attraction) => ({
    ...attraction,
    name: t(`attractions.romantic.${attraction.key}.name`),
    description: t(`attractions.romantic.${attraction.key}.description`),
    time: t(`attractions.romantic.${attraction.key}.time`),
    tips: t(`attractions.romantic.${attraction.key}.tips`),
  }));
}

export function getFoodAttractions(t: (key: string) => string): Attraction[] {
  return foodAttractionsStatic.map((attraction) => ({
    ...attraction,
    name: t(`attractions.food.${attraction.key}.name`),
    description: t(`attractions.food.${attraction.key}.description`),
    time: t(`attractions.food.${attraction.key}.time`),
    tips: t(`attractions.food.${attraction.key}.tips`),
  }));
}

export function getDayTripsAttractions(t: (key: string) => string): Attraction[] {
  return dayTripsAttractionsStatic.map((attraction) => ({
    ...attraction,
    name: t(`attractions.dayTrips.${attraction.key}.name`),
    description: t(`attractions.dayTrips.${attraction.key}.description`),
    time: t(`attractions.dayTrips.${attraction.key}.time`),
    tips: t(`attractions.dayTrips.${attraction.key}.tips`),
  }));
}

export function getAttractions(t: (key: string) => string): AttractionType {
  return {
    historical: getHistoricalAttractions(t),
    romantic: getRomanticAttractions(t),
    food: getFoodAttractions(t),
    dayTrips: getDayTripsAttractions(t),
  };
}
