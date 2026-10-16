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
  // 1. Ella (Top Favorite)
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
  // 2. Kandy
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
  // 3. Galle
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
  // 4. Mirissa
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
  // 5. Sigiriya
  {
    slug: 'sigiriya',
    name: 'Sigiriya',
    eyebrow: 'Ancient Wonder',
    caption: 'Ancient history and wide-open landscapes.',
    image: '/Sigiriya.webp',
    gallery: ['/Sigiriya-3.webp', '/Sigiriya-1.webp', '/Sigiriya-2.webp'],
    region: 'Matale District, Central Province',
    rating: '4.9',
    overview:
      'Rise above the jungle canopy by scaling the legendary 5th-century rock fortress of Sigiriya, featuring ancient frescoes, water gardens, and breathtaking panoramic views.',
    moreOverview:
      'A private ride makes exploring the Cultural Triangle smooth and comfortable, allowing easy connections between Sigiriya, Dambulla Cave Temple, and ancient Polonnaruwa.',
    activities: [
      { name: 'Lion Rock Climb', tag: 'History' },
      { name: 'Water Gardens', tag: 'Architecture' },
      { name: 'Pidurangala Rock Sunrise', tag: 'Views' },
      { name: 'Village Safari Tour', tag: 'Culture' },
    ],
    destinationInfo: {
      timeFromAirport: 'From Airport (CMB) : 3.5 hrs',
      timeFromColombo: 'From Colombo City : 4 hrs',
      weather: 'Weather : Warm & dry (24°C – 32°C)',
      bestSeason: 'Best Time : Jan – April',
      idealStay: 'Elevation : 370 m above sea level',
    },
    tripDetails: {
      route: 'Colombo / CMB  →  Sigiriya',
      recommendedStay: '1 – 2 Days, Cultural Triangle',
      vehicleType: 'SUV or Sedan',
      distance: '~170 km',
    },
  },
  // 6. Nuwara Eliya
  {
    slug: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    eyebrow: 'Little England',
    caption: 'Rolling tea hills, colonial architecture, and crisp mountain air.',
    image: '/Nuwara-eliya.webp',
    gallery: ['/Nuwara-eliya-1.webp', '/Nuwara-eliya-2.webp', '/Nuwara-eliya-3.webp'],
    region: 'Nuwara Eliya District, Central Province',
    rating: '4.8',
    overview:
      'Known as Little England, Nuwara Eliya boasts colonial-era bungalows, manicured gardens, waterfalls, and endless emerald tea plantations wrapped in cool mountain mist.',
    moreOverview:
      'Enjoy a scenic highland drive through waterfalls like Ramboda and tour historic tea factories with a knowledgeable local driver.',
    activities: [
      { name: 'Horton Plains & World’s End', tag: 'Hiking' },
      { name: 'Gregory Lake Walk', tag: 'Scenic' },
      { name: 'Tea Factory Visit', tag: 'Culture' },
      { name: 'Victoria Park Stroll', tag: 'Nature' },
    ],
    destinationInfo: {
      timeFromAirport: 'From Airport (CMB) : 5 hrs',
      timeFromColombo: 'From Colombo City : 4.5 hrs',
      weather: 'Weather : Cool & crisp (12°C – 20°C)',
      bestSeason: 'Best Time : Feb – May',
      idealStay: 'Elevation : 1,868 m above sea level',
    },
    tripDetails: {
      route: 'Colombo / CMB  →  Nuwara Eliya',
      recommendedStay: '2 Days, Hill Country',
      vehicleType: 'SUV or Saloon',
      distance: '~160 km',
    },
  },
  // 7. Yala National Park
  {
    slug: 'yala',
    name: 'Yala National Park',
    eyebrow: 'Wildlife Safari',
    caption: 'Spot majestic leopards and wild elephants in their natural habitat.',
    image: '/Yala-national-park.webp',
    gallery: ['/Yala-3.webp', '/Yala-1.webp', '/Yala-2.webp'],
    region: 'Southern & Uva Provinces',
    rating: '4.9',
    overview:
      'Yala is Sri Lanka’s premier national park, renowned for having one of the highest leopard densities in the world alongside elephants, sloth bears, and vibrant birdlife.',
    moreOverview:
      'A private transfer brings you straight to your safari lodge or park gates for morning and evening game drives in 4x4 jeeps.',
    activities: [
      { name: 'Leopard Safari Game Drive', tag: 'Wildlife' },
      { name: 'Bird Watching Lagoons', tag: 'Nature' },
      { name: 'Camping & Luxury Lodges', tag: 'Stay' },
    ],
    destinationInfo: {
      timeFromAirport: 'From Airport (CMB) : 5 hrs',
      timeFromColombo: 'From Colombo City : 4.5 hrs',
      weather: 'Weather : Hot & dry (28°C – 34°C)',
      bestSeason: 'Best Time : Feb – July (Park open)',
      idealStay: 'Region : Southeastern Coast',
    },
    tripDetails: {
      route: 'Colombo / Galle  →  Yala',
      recommendedStay: '1 – 2 Days, Safari',
      vehicleType: 'SUV or Sedan',
      distance: '~250 km',
    },
  },
  // 8. Colombo
  {
    slug: 'colombo',
    name: 'Colombo',
    eyebrow: 'Capital Energy',
    caption: 'City energy, world-class dining, and seaside sunsets.',
    image: '/Colombo.webp',
    gallery: ['/Colombo-1.webp', '/Colombo-2.webp', '/Colombo-3.webp'],
    region: 'Western Province',
    rating: '4.7',
    overview:
      'Sri Lanka’s vibrant commercial capital blends modern skyscrapers, colonial heritage architecture, bustling street markets, and golden sunset views along Galle Face Green.',
    moreOverview:
      'Your ideal starting or ending hub for airport transfers, city shopping, and coastal dining.',
    activities: [
      { name: 'Galle Face Green Sunset', tag: 'Coastal' },
      { name: 'Pettah Bazaar Shopping', tag: 'Culture' },
      { name: 'Gangaramaya Temple', tag: 'Heritage' },
      { name: 'Ministry of Crab Dining', tag: 'Food' },
    ],
    destinationInfo: {
      timeFromAirport: 'From Airport (CMB) : 45 min',
      timeFromColombo: 'From Colombo City : 0 min',
      weather: 'Weather : Tropical & humid (26°C – 32°C)',
      bestSeason: 'Best Time : Year-round',
      idealStay: 'Hub : Western Seaboard',
    },
    tripDetails: {
      route: 'Airport (CMB)  →  Colombo City',
      recommendedStay: '1 Day, City Stop',
      vehicleType: 'Saloon or Sedan',
      distance: '~35 km',
    },
  },
  // 9. Arugam Bay
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
      'On Sri Lanka’s sun-drenched eastern shore, Arugam Bay pairs world-renowned point breaks with tranquil lagoons and nearby wildlife parks.',
    moreOverview:
      'A favorite surf and beach destination, easily accessible via scenic drives from Ella or the cultural triangle.',
    activities: [
      { name: 'Main Point Surfing', tag: 'Surfing' },
      { name: 'Elephant Rock Sunset', tag: 'Views' },
      { name: 'Kumana Safari Drive', tag: 'Wildlife' },
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
  // 10. Adam’s Peak
  {
    slug: 'adams-peak',
    name: 'Adam’s Peak',
    eyebrow: 'Sacred Mountain',
    caption: 'Hike up the sacred mountain trail to catch a breathtaking sunrise.',
    image: "/Adam's-peak.webp",
    gallery: ["/Adam's-peak.webp", '/Ella.webp', '/Nuwara-eliya.webp'],
    region: 'Ratnapura / Maskeliya',
    rating: '4.7',
    overview:
      'A sacred pilgrimage mountain where thousands climb thousands of stone steps under starlight to witness the legendary sunrise shadow from the summit.',
    moreOverview:
      'Best climbed during pilgrimage season (December to May). Our drivers provide comfortable overnight transfers to the base trail.',
    activities: [
      { name: 'Night Summit Climb', tag: 'Trekking' },
      { name: 'Sunrise Shadow Viewing', tag: 'Panorama' },
      { name: 'Waterfall & Valley Stops', tag: 'Nature' },
    ],
    destinationInfo: {
      timeFromAirport: 'From Airport (CMB) : 4.5 hrs',
      timeFromColombo: 'From Colombo City : 4 hrs',
      weather: 'Weather : Very cold at night (8°C – 18°C)',
      bestSeason: 'Best Time : Dec – May (Full Moon Poya)',
      idealStay: 'Elevation : 2,243 m',
    },
    tripDetails: {
      route: 'Colombo  →  Maskeliya Base',
      recommendedStay: '1 Night / Early Climb',
      vehicleType: 'SUV or Saloon',
      distance: '~140 km',
    },
  },
  // 11. Trincomalee
  {
    slug: 'trincomalee',
    name: 'Trincomalee',
    eyebrow: 'Eastern Paradise',
    caption: 'Discover crystal-clear blue bays and pristine white-sand shores.',
    image: '/Trincomalee.webp',
    gallery: ['/Trincomalee-1.webp', '/Trincomalee-2.webp', '/Trincomalee-3.webp'],
    region: 'Eastern Province',
    rating: '4.8',
    overview:
      'Home to natural deep-water harbors, pristine white-sand beaches at Nilaveli, and ancient cliffside temples like Koneswaram.',
    moreOverview:
      'Ideal for dolphin watching, snorkeling around Pigeon Island, and relaxing on uncrowded eastern beaches.',
    activities: [
      { name: 'Nilaveli Beach Relaxing', tag: 'Beach' },
      { name: 'Pigeon Island Snorkeling', tag: 'Marine' },
      { name: 'Koneswaram Temple Visit', tag: 'Culture' },
    ],
    destinationInfo: {
      timeFromAirport: 'From Airport (CMB) : 5 hrs',
      timeFromColombo: 'From Colombo City : 5.5 hrs',
      weather: 'Weather : Tropical sunshine (27°C – 33°C)',
      bestSeason: 'Best Time : April – October',
      idealStay: 'Coastline : Northeast Bay',
    },
    tripDetails: {
      route: 'Colombo / CMB  →  Trincomalee',
      recommendedStay: '3 Days, East Coast',
      vehicleType: 'SUV or Sedan',
      distance: '~260 km',
    },
  },
  // 12. Udawalawe
  {
    slug: 'udawalawe',
    name: 'Udawalawe',
    eyebrow: 'Elephant Transit',
    caption: 'Witness majestic wild elephants roaming free across open grasslands.',
    image: '/Udawalawe.webp',
    gallery: ['/Udawalawe-1.webp', '/Udawalawe-2.webp', '/Udawalawe-3.webp'],
    region: 'Sabaragamuwa & Uva Provinces',
    rating: '4.8',
    overview:
      'Famous for guaranteed wild elephant sightings, Udawalawe National Park surrounds the scenic reservoir and hosts the Elephant Transit Home.',
    moreOverview:
      'An incredible safari alternative with open grasslands ensuring unobstructed wildlife photography.',
    activities: [
      { name: 'Elephant Transit Home Visit', tag: 'Wildlife' },
      { name: 'Jeep Safari Tour', tag: 'Adventure' },
      { name: 'Reservoir Birdwatching', tag: 'Nature' },
    ],
    destinationInfo: {
      timeFromAirport: 'From Airport (CMB) : 4 hrs',
      timeFromColombo: 'From Colombo City : 3.5 hrs',
      weather: 'Weather : Warm & dry (27°C – 33°C)',
      bestSeason: 'Best Time : Year-round',
      idealStay: 'Region : Southern Plains',
    },
    tripDetails: {
      route: 'Colombo / Galle  →  Udawalawe',
      recommendedStay: '1 Day Safari Stop',
      vehicleType: 'SUV or Saloon',
      distance: '~160 km',
    },
  },
  // 13. Tangalle
  {
    slug: 'tangalle',
    name: 'Tangalle',
    eyebrow: 'Secluded Shores',
    caption: 'Relax on secluded, dramatic southern beaches framed by coconut palms.',
    image: '/Tangalle.webp',
    gallery: ['/Tangalle.webp', '/Mirissa.webp', '/Tangalle-1.webp'],
    region: 'Hambantota District, Southern Province',
    rating: '4.8',
    overview:
      'Tangalle offers dramatic rocky coves, tranquil lagoons, and expansive golden beaches far away from busy tourist crowds.',
    moreOverview:
      'Perfect for couples and travelers seeking quiet luxury boutique resorts along the deep south coast.',
    activities: [
      { name: 'Rekawa Turtle Watching', tag: 'Wildlife' },
      { name: 'Silent Beach Relaxation', tag: 'Beach' },
      { name: 'Lagoon Kayaking', tag: 'Nature' },
    ],
    destinationInfo: {
      timeFromAirport: 'From Airport (CMB) : 3.5 hrs',
      timeFromColombo: 'From Colombo City : 3 hrs',
      weather: 'Weather : Coastal warmth (25°C – 31°C)',
      bestSeason: 'Best Time : November – April',
      idealStay: 'Coastline : Deep South',
    },
    tripDetails: {
      route: 'Colombo / Galle  →  Tangalle',
      recommendedStay: '2 Days, Secluded Coast',
      vehicleType: 'SUV or Sedan',
      distance: '~195 km',
    },
  },
  // 14. Bentota
  {
    slug: 'bentota',
    name: 'Bentota',
    eyebrow: 'Water Sports Hub',
    caption: 'Unwind on golden resort beaches and tranquil river estuaries.',
    image: '/Bentota.webp',
    gallery: ['/Bentota-3.webp', '/Bentota-2.webp', '/Bentota-1.webp'],
    region: 'Galle District, Southern Province',
    rating: '4.7',
    overview:
      'Renowned for luxury beach resorts, jet skiing, windsurfing on the Bentota River lagoon, and turtle conservation hatcheries.',
    moreOverview:
      'A convenient first or last beach stop just down the expressway from Colombo.',
    activities: [
      { name: 'River Safari & Mangroves', tag: 'Nature' },
      { name: 'Jet Skiing & Watersports', tag: 'Adventure' },
      { name: 'Brief Garden Tour', tag: 'Art' },
    ],
    destinationInfo: {
      timeFromAirport: 'From Airport (CMB) : 2 hrs',
      timeFromColombo: 'From Colombo City : 1.5 hrs',
      weather: 'Weather : Tropical coastal (26°C – 31°C)',
      bestSeason: 'Best Time : November – April',
      idealStay: 'Coastline : Southwest Resort Coast',
    },
    tripDetails: {
      route: 'Colombo / CMB  →  Bentota',
      recommendedStay: '2 Days, Beach & Watersports',
      vehicleType: 'Saloon or Sedan',
      distance: '~85 km',
    },
  },
]