const express = require('express');
const cors = require('cors');
const fs = require('node:fs');
const path = require('node:path');

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, 'bookings.json');

// Allowed frontend origins (Local Nuxt dev + GitHub Pages)
const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://127.0.0.1:3000',
  'https://godakandasanchitha-eng.github.io',
];

// Enable CORS
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || ALLOWED_ORIGINS.includes(origin) || origin.endsWith('.github.io')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
}));

app.use(express.json());

// Seed data matching your frontend files
const vehicles = [
  {
    name: 'Sedan',
    subtitle: 'Long Distance Comfort',
    type: 'Sedan',
    fuel: 'Petrol',
    transmission: 'Automatic',
    class: 'Comfort',
    seats: '4 Seats',
    rating: '5.0',
    reviews: '120+',
    image: '/Sedan.webp',
    description: 'A refined, spacious ride for smooth highway journeys and city cruising.',
  },
  {
    name: 'SUV',
    subtitle: 'Island Explorer (Prado style)',
    type: 'SUV',
    fuel: 'Diesel / Petrol',
    transmission: 'Automatic',
    class: 'Premium',
    seats: '7 Seats',
    rating: '4.9',
    reviews: '145+',
    image: '/SUV.webp',
    description: 'Extra room, robust 4x4 capability, and a high ride for hill country trails.',
  },
  {
    name: 'Hatchback',
    subtitle: 'City & Coastal Hopper',
    type: 'Hatchback',
    fuel: 'Petrol / Hybrid',
    transmission: 'Automatic',
    class: 'Economy',
    seats: '4 Seats',
    rating: '4.8',
    reviews: '90+',
    image: '/Hatchback.webp',
    description: 'Compact, fuel-efficient, and ideal for navigating narrow colonial streets.',
  },
  {
    name: 'Van',
    subtitle: 'Group & Family Travel (KDH)',
    type: 'Van',
    fuel: 'Diesel',
    transmission: 'Automatic',
    class: 'Spacious',
    seats: '10 Seats',
    rating: '4.9',
    reviews: '210+',
    image: '/Van.webp',
    description: 'High-roof comfort with ample luggage space for family tours and groups.',
  },
];

const services = [
  {
    title: 'Airport Transfers',
    text: 'A smooth welcome to Sri Lanka, with punctual pickup and drop-off planned directly around your flight schedule.',
    icon: 'plane',
  },
  {
    title: 'Private Day Trips',
    text: 'See the main highlights or follow a quieter path, with the flexibility to make scenic stops along the way.',
    icon: 'sun',
  },
  {
    title: 'Multi-Day Journeys',
    text: 'Connect the southern coast, misty hill country, and ancient heritage sites in one thoughtfully paced island trip.',
    icon: 'map',
  },
  {
    title: 'Custom Itineraries',
    text: 'Share your travel interests and timeline with us; we will help shape a personalized route that feels like yours.',
    icon: 'compass',
  },
  {
    title: 'City & Hotel Transfers',
    text: 'Travel comfortably between towns, beach resorts, and boutique stays without the stress of navigating public transit.',
    icon: 'building',
  },
  {
    title: 'Safari & Park Rides',
    text: 'Arrive early and relaxed at national park gates for wildlife safaris, hikes, and nature excursions across the island.',
    icon: 'camera',
  },
];

// Helper: Read bookings from bookings.json
function readBookings() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf8');
      return [];
    }
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (err) {
    console.error('Error reading bookings.json:', err);
    return [];
  }
}

// Helper: Save bookings to bookings.json
function writeBookings(bookings) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(bookings, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing bookings.json:', err);
  }
}

// --- API ROUTES (Supports both /bookings and /api/bookings) ---

const router = express.Router();

// 1. Health Check
router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Lankan Rides Backend API',
  });
});

// 2. Get All Bookings
router.get('/bookings', (req, res) => {
  const bookings = readBookings();
  res.json({ total: bookings.length, bookings });
});

// 3. Create New Booking
router.post('/bookings', (req, res) => {
  try {
    const body = req.body || {};

    const pickup = String(body.pickup || '').trim();
    const dropoff = String(body.dropoff || '').trim();
    const startDate = String(body.startDate || body.date || '').trim();
    const endDate = String(body.endDate || '').trim();
    const passengers = String(body.passengers || '1').trim();
    const vehicle = String(body.vehicle || '').trim();
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const notes = String(body.notes || '').trim();

    if (!name || !email || !phone || !pickup || !dropoff || !startDate) {
      return res.status(400).json({
        error: 'Please fill in all required booking fields (name, email, phone, pickup, dropoff, startDate).',
      });
    }

    const bookings = readBookings();

    const newBooking = {
      id: `LR-${Date.now()}`,
      name,
      email,
      phone,
      vehicle: vehicle || 'Standard Ride',
      pickup,
      dropoff,
      startDate,
      endDate: endDate || startDate,
      passengers,
      notes,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    bookings.unshift(newBooking);
    writeBookings(bookings);

    console.log(`[NEW BOOKING] ${newBooking.id} | ${name} | ${pickup} -> ${dropoff}`);

    return res.status(201).json({
      message: 'Request sent. We’ll be in touch to confirm your trip.',
      booking: newBooking,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message || 'Could not process booking request.' });
  }
});

// 4. Get Vehicles
router.get('/vehicles', (req, res) => {
  res.json({ vehicles });
});

// 5. Get Services
router.get('/services', (req, res) => {
  res.json({ services });
});

// Mount router on both root and /api prefixes
app.use('/', router);
app.use('/api', router);

// 404 Fallback
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.originalUrl} not found` });
});

app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`Lankan Rides Backend running on http://localhost:${PORT}`);
  console.log(`Bookings endpoint: http://localhost:${PORT}/api/bookings`);
  console.log(`=================================================`);
});