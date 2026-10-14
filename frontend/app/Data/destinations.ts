export interface DestinationItem {
  slug: string
  name: string
  eyebrow: string
  caption: string
  image: string
  gallery: [string, string, string]
  region: string
  rating: string
  overview: string
  moreOverview: string
  activities: {
    name: string
    tag: string
  }[]
  destinationInfo: {
    timeFromAirport: string
    timeFromColombo: string
    weather: string
    bestSeason: string
    idealStay: string
  }
  tripDetails: {
    route: string
    recommendedStay: string
    vehicleType: string
    distance: string
  }
}

export const destinationsData: DestinationItem[] = [
  {
    slug: 'ella',
    name: 'Ella',
    eyebrow: 'Hill Country Escape',
    caption: 'Mountain views and scenic train rides.',
    image: '/Ella.webp',
    gallery: ['/Ella-2.webp', '/Ella-1.webp', '/Ella-3.webp'],
    region: 'Badulla District, Central Highlands',
    rating: '4.9',
    overview:
      'Tucked into Sri Lanka’s misty central highlands, Ella is surrounded by rolling tea estates, cascading waterfalls, and dramatic mountain passes. Traveling with a private driver lets you stop at scenic viewpoints, tea factories, and Ravana Falls along the winding hill-country roads at your own pace.',
    moreOverview:
      'Whether you are waking up early to catch the sunrise from Little Adam’s Peak or watching the blue train cross the Nine Arch Bridge, having a dedicated local vehicle makes connecting highland stops effortless and unhurried.',
    activities: [
      { name: 'Nine Arch Bridge Walk', tag: 'Sightseeing' },
      { name: 'Little Adam’s Peak Hike', tag: 'Trails' },
      { name: 'Ravana Falls Stop', tag: 'Waterfalls' },
      { name: 'Tea Factory Tour', tag: 'Culture' },
      { name: 'Ella Rock Viewpoint', tag: 'Trekking' },
      { name: 'Flying Ravana Zipline', tag: 'Adventure' },
    ],
    destinationInfo: {
      timeFromAirport: 'From Airport (CMB) : 5.5 – 6 hrs',
      timeFromColombo: 'From Colombo City : 5.5 hrs',
      weather: 'Weather : Cool & misty (16°C – 26°C)',
      bestSeason: 'Best Time : Dec – May',
      idealStay: 'Elevation : 1,041 m above sea level',
    },
    tripDetails: {
      route: 'Colombo / CMB  →  Ella',
      recommendedStay: '2 – 3 Days, Hill Country',
      vehicleType: 'SUV or Comfortable Saloon',
      distance: '~210 km',
    },
  },
  {
    slug: 'kandy',
    name: 'Kandy',
    eyebrow: 'Cultural Heart',
    caption: 'A lakeside city rich in culture and history.',
    image: '/kandy.webp',
    gallery: ['/Kandy-1.webp', '/Kandy-2.webp', '/Kandy-3.webp'],
    region: 'Kandy District, Central Province',
    rating: '4.8',
    overview:
      'Set around a peaceful central lake and ringed by forested hills, Kandy is Sri Lanka’s cultural capital and the gateway to the hill country. A private ride makes it easy to combine the city’s sacred heritage sites with the Royal Botanical Gardens in Peradeniya.',
    moreOverview:
      'Spend your afternoon strolling under towering royal palms, catch an evening cultural dance performance, and enjoy scenic stops at spice gardens and viewpoints along the climb from Colombo.',
    activities: [
      { name: 'Temple of the Tooth', tag: 'Sacred Site' },
      { name: 'Botanical Gardens', tag: 'Nature' },
      { name: 'Kandy Lake Walk', tag: 'Scenic' },
      { name: 'Arthur’s Seat Viewpoint', tag: 'Panorama' },
      { name: 'Cultural Dance Show', tag: 'Tradition' },
      { name: 'Ceylon Tea Museum', tag: 'Heritage' },
    ],
    destinationInfo: {
      timeFromAirport: 'From Airport (CMB) : 3 – 3.5 hrs',
      timeFromColombo: 'From Colombo City : 3.5 hrs',
      weather: 'Weather : Mild & tropical (20°C – 29°C)',
      bestSeason: 'Best Time : Dec – Apr & Jul – Aug',
      idealStay: 'Elevation : 500 m above sea level',
    },
    tripDetails: {
      route: 'Colombo / CMB  →  Kandy',
      recommendedStay: '1 – 2 Days, Cultural Hub',
      vehicleType: 'Saloon, Sedan, or SUV',
      distance: '~120 km',
    },
  },
  {
    slug: 'galle',
    name: 'Galle',
    eyebrow: 'Southern Heritage',
    caption: 'Explore the historic fort by the coast.',
    image: '/Galle.webp',
    gallery: ['/Galle-1.webp', '/Galle-2.webp', '/Galle-3.webp'],
    region: 'Galle District, Southern Province',
    rating: '4.9',
    overview:
      'Where cobblestone lanes meet the Indian Ocean, Galle blends centuries-old coastal architecture with boutique cafés, galleries, and golden southern beaches nearby. It works equally well as a relaxed day trip or the first stop on a southern coast itinerary.',
    moreOverview:
      'Via the Southern Expressway, your driver can bring you straight to the fort gates in just over two hours, with the option to take the scenic coastal road past bentota, turtle hatcheries, and stilt fishermen.',
    activities: [
      { name: 'Galle Fort Ramparts', tag: 'Heritage' },
      { name: 'Lighthouse Sunset Walk', tag: 'Views' },
      { name: 'Old Dutch Hospital', tag: 'Dining' },
      { name: 'Unawatuna Beach', tag: 'Swimming' },
      { name: 'Jungle Beach Cove', tag: 'Relaxation' },
      { name: 'Maritime Museum', tag: 'History' },
    ],
    destinationInfo: {
      timeFromAirport: 'From Airport (CMB) : 2.5 hrs',
      timeFromColombo: 'From Colombo City : 2 hrs',
      weather: 'Weather : Warm coastal (25°C – 31°C)',
      bestSeason: 'Best Time : Nov – Apr',
      idealStay: 'Highway : Southern Expressway (E01)',
    },
    tripDetails: {
      route: 'Colombo / CMB  →  Galle',
      recommendedStay: '1 – 2 Days, Coastal Fort',
      vehicleType: 'Saloon or Sedan',
      distance: '~130 km',
    },
  },
  {
    slug: 'mirissa',
    name: 'Mirissa',
    eyebrow: 'Southern Coast',
    caption: 'Relax on golden beaches by the Indian Ocean.',
    image: '/Mirissa.webp',
    gallery: ['/Mirissa-1.webp', '/Mirissa-2.webp', '/Mirissa-3.webp'],
    region: 'Matara District, Southern Coast',
    rating: '4.9',
    overview:
      'Famous for its crescent-shaped bay, palm-fringed headlands, and laid-back coastal rhythm, Mirissa is one of Sri Lanka’s signature beach stops. Having your own ride lets you hop effortlessly between secret coves, clifftop cafés, and nearby coastal towns.',
    moreOverview:
      'Start early from Mirissa Harbour for a morning whale-watching excursion, unwind by the bay in the afternoon, and head up to Coconut Tree Hill for golden-hour views over the Indian Ocean.',
    activities: [
      { name: 'Coconut Tree Hill', tag: 'Photo Spot' },
      { name: 'Whale Watching Cruise', tag: 'Ocean' },
      { name: 'Parrot Rock Climb', tag: 'Views' },
      { name: 'Secret Beach Cove', tag: 'Swimming' },
      { name: 'Weligama Surf Bay', tag: 'Surfing' },
      { name: 'Beachside Seafood', tag: 'Dining' },
    ],
    destinationInfo: {
      timeFromAirport: 'From Airport (CMB) : 3 hrs',
      timeFromColombo: 'From Colombo City : 2.5 hrs',
      weather: 'Weather : Sunny & tropical (26°C – 32°C)',
      bestSeason: 'Best Time : Nov – Apr',
      idealStay: 'Coastline : Southern Indian Ocean',
    },
    tripDetails: {
      route: 'Colombo / CMB  →  Mirissa',
      recommendedStay: '2 – 4 Days, Beach Escape',
      vehicleType: 'Saloon, Sedan, or SUV',
      distance: '~155 km',
    },
  },
  {
    slug: 'arugam-bay',
    name: 'Arugam Bay',
    eyebrow: 'East Coast Gem',
    caption: 'Ride the waves and unwind on Sri Lanka’s east coast.',
    image: '/Arugambay.webp',
    gallery: ['/Arugambay-1.webp', '/Arugambay-2.webp', '/Arugambay-3.webp'],
    region: 'Ampara District, Eastern Province',
    rating: '4.8',
    overview:
      'On Sri Lanka’s sun-drenched eastern shore, Arugam Bay pairs world-renowned point breaks with tranquil lagoons and nearby wildlife parks. It is a favorite next stop after exploring Ella in the hill country.',
    moreOverview:
      'Beyond the surf breaks at Main Point and Whiskey Point, a private vehicle lets you venture out to Kumana National Park for wildlife safaris, Pottuvil Lagoon mangrove tours, and ancient forest monasteries.',
    activities: [
      { name: 'Main Point Surfing', tag: 'Surfing' },
      { name: 'Elephant Rock Sunset', tag: 'Views' },
      { name: 'Kumana Safari Drive', tag: 'Wildlife' },
      { name: 'Pottuvil Lagoon Boat', tag: 'Nature' },
      { name: 'Whiskey Point Beach', tag: 'Coast' },
      { name: 'Muhudu Maha Viharaya', tag: 'Heritage' },
    ],
    destinationInfo: {
      timeFromAirport: 'From Airport (CMB) : 6.5 – 7 hrs',
      timeFromColombo: 'From Ella : 2.5 – 3 hrs',
      weather: 'Weather : Warm & dry (26°C – 33°C)',
      bestSeason: 'Best Time : May – Oct',
      idealStay: 'Coastline : Eastern Indian Ocean',
    },
    tripDetails: {
      route: 'Colombo / Ella  →  Arugam Bay',
      recommendedStay: '3 – 5 Days, Surf & Safari',
      vehicleType: 'SUV or Spacious Sedan',
      distance: '~320 km',
    },
  },
]