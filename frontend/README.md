# Lankan Rides frontend

Multi-page frontend starter built with Nuxt 4, Vue 3, TypeScript, and Tailwind CSS 4. This folder is separate from the existing backend.

## Open and run

Open this `frontend` folder in VS Code. Install Node.js, then run:

```sh
npm install
cp .env.example .env
npm run dev
```

On Windows PowerShell, copy the environment file with `Copy-Item .env.example .env`.

Set `NUXT_PUBLIC_API_BASE` in `.env` to the existing backend API base URL. The booking form currently posts to `/bookings`; adjust that path and the payload in `app/pages/booking.vue` to match the backend's actual API contract. Browser requests may also require the backend to allow this frontend's origin through CORS.

## Pages

- `/` home
- `/services` services
- `/destinations` destinations
- `/fleet` fleet
- `/about` about
- `/booking` booking form

The shared navigation and footer are in `app/layouts/default.vue`. Shared API configuration is in `nuxt.config.ts` and `app/composables/useApi.ts`.
