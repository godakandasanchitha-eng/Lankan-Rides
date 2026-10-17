import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Default to port 5000 (or set PORT=3000 if Nuxt dev runs on another port)
const PORT = process.env.PORT || 5000
const DATA_FILE = path.join(__dirname, 'bookings.json')

// Allowed frontend origins (Local Nuxt dev + GitHub Pages)
const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://127.0.0.1:3000',
  'https://godakandasanchitha-eng.github.io',
]

// Seed data matching your frontend files (index.vue & services.vue)
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
]

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
]

// Helper: Read bookings from bookings.json
function readBookings() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf8')
      return []
    }
    const raw = fs.readFileSync(DATA_FILE, 'utf8')
    return JSON.parse(raw || '[]')
  } catch (err) {
    console.error('Error reading bookings.json:', err)
    return []
  }
}

// Helper: Save bookings to bookings.json
function writeBookings(bookings) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(bookings, null, 2), 'utf8')
  } catch (err) {
    console.error('Error writing bookings.json:', err)
  }
}

// Helper: Parse JSON request body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })
    req.on('end', () => {
      if (!body) return resolve({})
      try {
        resolve(JSON.parse(body))
      } catch (err) {
        reject(new Error('Invalid JSON payload'))
      }
    })
    req.on('error', reject)
  })
}

// Helper: Send JSON response with CORS headers
function sendJson(req, res, statusCode, payload) {
  const origin = req.headers.origin
  const allowedOrigin =
    origin && ALLOWED_ORIGINS.includes(origin) ? origin : '*'

  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  })
  res.end(JSON.stringify(payload))
}

const server = http.createServer(async (req, res) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return sendJson(req, res, 204, {})
  }

  const parsedUrl = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`)
  // Strip optional /api prefix so both /api/bookings and /bookings work seamlessly
  const routePath = parsedUrl.pathname.replace(/^\/api(?=\/|$)/, '') || '/'

  // 1. Health Check (GET / or GET /api)
  if (req.method === 'GET' && routePath === '/') {
    return sendJson(req, res, 200, {
      status: 'ok',
      service: 'Lankan Rides Backend API',
      endpoints: [
        'GET /api/bookings',
        'POST /api/bookings',
        'PATCH /api/bookings/:id',
        'DELETE /api/bookings/:id',
        'GET /api/vehicles',
        'GET /api/services',
      ],
    })
  }

  // 2. Get All Bookings for Back-Office (GET /bookings or GET /api/bookings)
  if (req.method === 'GET' && routePath === '/bookings') {
    const bookings = readBookings()
    return sendJson(req, res, 200, {
      total: bookings.length,
      bookings,
    })
  }

  // 3. Create a New Booking from booking.vue (POST /bookings or POST /api/bookings)
  if (req.method === 'POST' && routePath === '/bookings') {
    try {
      const body = await parseBody(req)

      const pickup = String(body.pickup || '').trim()
      const dropoff = String(body.dropoff || '').trim()
      const startDate = String(body.startDate || body.date || '').trim()
      const endDate = String(body.endDate || '').trim()
      const passengers = String(body.passengers || '1').trim()
      const vehicle = String(body.vehicle || '').trim()
      const name = String(body.name || '').trim()
      const email = String(body.email || '').trim()
      const phone = String(body.phone || '').trim()
      const notes = String(body.notes || '').trim()

      // Validate required fields from booking.vue
      if (!name || !email || !phone || !pickup || !dropoff || !startDate) {
        return sendJson(req, res, 400, {
          error: 'Please fill in all required booking fields (name, email, phone, pickup, dropoff, startDate).',
        })
      }

      const bookings = readBookings()

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
        status: 'pending', // Useful for your back-office (pending | confirmed | completed | cancelled)
        createdAt: new Date().toISOString(),
      }

      bookings.unshift(newBooking)
      writeBookings(bookings)

      console.log(`[NEW BOOKING] ${newBooking.id} | ${name} | ${pickup} -> ${dropoff} (${startDate})`)

      return sendJson(req, res, 201, {
        message: 'Request sent. We’ll be in touch to confirm your trip.',
        booking: newBooking,
      })
    } catch (err) {
      return sendJson(req, res, 400, {
        error: err.message || 'Could not process booking request.',
      })
    }
  }

  // 4. Update Booking Status from Back-Office (PATCH /bookings/:id)
  if (req.method === 'PATCH' && routePath.startsWith('/bookings/')) {
    try {
      const bookingId = decodeURIComponent(routePath.replace('/bookings/', ''))
      const body = await parseBody(req)
      const bookings = readBookings()
      const index = bookings.findIndex((b) => String(b.id) === bookingId)

      if (index === -1) {
        return sendJson(req, res, 404, { error: 'Booking not found' })
      }

      bookings[index] = {
        ...bookings[index],
        ...body,
        updatedAt: new Date().toISOString(),
      }

      writeBookings(bookings)
      return sendJson(req, res, 200, {
        message: 'Booking updated',
        booking: bookings[index],
      })
    } catch (err) {
      return sendJson(req, res, 400, { error: 'Failed to update booking' })
    }
  }

  // 5. Delete a Booking from Back-Office (DELETE /bookings/:id)
  if (req.method === 'DELETE' && routePath.startsWith('/bookings/')) {
    const bookingId = decodeURIComponent(routePath.replace('/bookings/', ''))
    const bookings = readBookings()
    const filtered = bookings.filter((b) => String(b.id) !== bookingId)

    if (filtered.length === bookings.length) {
      return sendJson(req, res, 404, { error: 'Booking not found' })
    }

    writeBookings(filtered)
    return sendJson(req, res, 200, { message: 'Booking deleted', id: bookingId })
  }

  // 6. Get Vehicles (GET /vehicles or GET /api/vehicles)
  if (req.method === 'GET' && routePath === '/vehicles') {
    return sendJson(req, res, 200, { vehicles })
  }

  // 7. Get Services (GET /services or GET /api/services)
  if (req.method === 'GET' && routePath === '/services') {
    return sendJson(req, res, 200, { services })
  }

  // 404 Fallback
  return sendJson(req, res, 404, { error: `Route ${req.method} ${parsedUrl.pathname} not found` })
})

server.listen(PORT, () => {
  console.log(`=================================================`)
  console.log(`Lankan Rides Backend running on http://localhost:${PORT}`)
  console.log(`Bookings endpoint: http://localhost:${PORT}/api/bookings`)
  console.log(`=================================================`)
})