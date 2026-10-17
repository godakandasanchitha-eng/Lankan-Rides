<script setup lang="ts">
import { reactive, ref } from 'vue'

const { app } = useRuntimeConfig()

function publicAsset(path: string) {
  return `${app.baseURL}${path.replace(/^\/+/, '')}`
}

const form = reactive({
  pickup: '',
  dropoff: '',
  startDate: '',
  endDate: '',
  passengers: '2 adults',
  vehicle: '',
  name: '',
  email: '',
  phone: '',
  notes: '',
})

const state = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')
const errorMessage = ref('')

// Map Popup State: 'pickup' | 'dropoff' | null
const activeMapModal = ref<'pickup' | 'dropoff' | null>(null)
const tempSelectedAddress = ref('')
const searchQuery = ref('')

// Dynamic Google Maps Embed URL based on search/selection
const googleMapEmbedUrl = ref('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467104337!2d79.8612!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnMzguNiJOIDc5wrA1MS40IkU!5e0!3m2!1sen!2slk!4f13.1')

const presetLocations = [
  { name: 'Bandaranaike International Airport (CMB)', query: 'Bandaranaike+International+Airport+Sri+Lanka' },
  { name: 'Colombo City Center', query: 'Colombo+Sri+Lanka' },
  { name: 'Kandy', query: 'Kandy+Sri+Lanka' },
  { name: 'Ella', query: 'Ella+Sri+Lanka' },
  { name: 'Galle Fort', query: 'Galle+Fort+Sri+Lanka' },
  { name: 'Mirissa', query: 'Mirissa+Sri+Lanka' },
  { name: 'Arugam Bay', query: 'ArugamBay+Sri+Lanka' },
]

function openMapModal(type: 'pickup' | 'dropoff') {
  activeMapModal.value = type
  searchQuery.value = ''

  if (type === 'pickup') {
    tempSelectedAddress.value = form.pickup || 'Colombo, Sri Lanka'
  } else {
    tempSelectedAddress.value = form.dropoff || 'Ella, Sri Lanka'
  }

  updateMapQuery(tempSelectedAddress.value)
}

function updateMapQuery(locationName: string) {
  const encodedQuery = encodeURIComponent(`${locationName}, Sri Lanka`)
  googleMapEmbedUrl.value = `https://www.google.com/maps?q=${encodedQuery}&output=embed`
}

function searchLocationOnMap() {
  if (!searchQuery.value.trim()) return
  tempSelectedAddress.value = searchQuery.value
  updateMapQuery(searchQuery.value)
}

function selectPreset(preset: { name: string; query: string }) {
  tempSelectedAddress.value = preset.name
  googleMapEmbedUrl.value = `https://www.google.com/maps?q=${preset.query}&output=embed`
}

function confirmMapSelection() {
  if (activeMapModal.value === 'pickup') {
    form.pickup = tempSelectedAddress.value
  } else if (activeMapModal.value === 'dropoff') {
    form.dropoff = tempSelectedAddress.value
  }
  closeMapModal()
}

function closeMapModal() {
  activeMapModal.value = null
}

async function submitBooking() {
  state.value = 'sending'
  errorMessage.value = ''
  try {
    const { request } = useApi()
    await request('/bookings', { method: 'POST', body: form })
    state.value = 'sent'
  } catch {
    state.value = 'error'
    errorMessage.value = 'We could not send that just now. Please check the API URL and booking endpoint.'
  }
}
</script>

<template>
  <!-- Contact Us Hero Section (Laptop viewport optimized height) -->
  <section
    class="relative isolate mx-0 my-4 h-[78vh] min-h-[550px] overflow-hidden rounded-3xl md:mx-3 xl:mx-4"
  >
    <img
      :src="publicAsset('/Contact-us.webp')"
      alt="Contact Lankan Rides"
      class="absolute inset-0 -z-20 block h-full w-full object-cover object-center"
    />

    <div
      class="
        absolute inset-0 -z-10
        bg-gradient-to-t from-black/80 via-black/35 to-black/20
      "
    ></div>

    <!-- Top-Left Aligned Back Button -->
    <div class="absolute left-6 top-6 z-30 md:left-10 md:top-10 lg:left-16">
      <NuxtLink
        to="/"
        class="
          inline-flex items-center gap-2 rounded-full border border-white/30
          bg-black/40 px-4 py-2 text-sm font-medium text-white
          backdrop-blur-md transition-colors
          hover:border-[#f97316] hover:bg-[#f97316] hover:text-black
        "
      >
        <span aria-hidden="true">←</span>
        Back to Home
      </NuxtLink>
    </div>

    <!-- Center-Bottom Aligned Eyebrow & Title -->
    <div
      class="
        relative z-20 mx-auto flex h-full max-w-7xl items-end
        justify-center px-6 pb-12
        md:pb-16
        lg:px-16
      "
    >
      <div class="mx-auto max-w-2xl text-center text-white">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#f97316]">
          Contact Us
        </p>

        <h1 class="mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
          Let’s plan your ride across Sri Lanka.
        </h1>
      </div>
    </div>
  </section>

  <!-- Form + Side Video + 3 Contact Info Columns -->
  <section class="bg-white px-5 py-16 text-[#20231f] md:px-8 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-6 lg:grid-cols-12 lg:items-stretch">
        <!-- Left Form Card -->
        <form
          class="
            rounded-3xl bg-[#fafafa] p-6 shadow-sm border border-[#eceae4]
            sm:p-8
            lg:col-span-8 lg:p-10
          "
          @submit.prevent="submitBooking"
        >
          <div class="grid gap-5 sm:grid-cols-2">
            <!-- Name -->
            <label class="block text-xs font-medium text-[#3b3e3a]">
              Name
              <input
                v-model="form.name"
                required
                autocomplete="name"
                placeholder="Your full name"
                class="
                  mt-2 w-full rounded-xl bg-[#f1f1ef] px-4 py-3.5 text-sm
                  font-normal text-[#20231f] placeholder-[#9a9d98] outline-none
                  transition focus:ring-2 focus:ring-[#f97316]
                "
              />
            </label>

            <!-- Email -->
            <label class="block text-xs font-medium text-[#3b3e3a]">
              Email
              <input
                v-model="form.email"
                type="email"
                required
                autocomplete="email"
                placeholder="you@example.com"
                class="
                  mt-2 w-full rounded-xl bg-[#f1f1ef] px-4 py-3.5 text-sm
                  font-normal text-[#20231f] placeholder-[#9a9d98] outline-none
                  transition focus:ring-2 focus:ring-[#f97316]
                "
              />
            </label>

            <!-- Phone Number -->
            <label class="block text-xs font-medium text-[#3b3e3a]">
              Phone Number
              <input
                v-model="form.phone"
                type="tel"
                required
                autocomplete="tel"
                placeholder="+94 77 123 4567"
                class="
                  mt-2 w-full rounded-xl bg-[#f1f1ef] px-4 py-3.5 text-sm
                  font-normal text-[#20231f] placeholder-[#9a9d98] outline-none
                  transition focus:ring-2 focus:ring-[#f97316]
                "
              />
            </label>

            <!-- Select Your Vehicle / Tour -->
            <label class="block text-xs font-medium text-[#3b3e3a]">
              Select Your Ride
              <div class="relative mt-2">
                <select
                  v-model="form.vehicle"
                  required
                  class="
                    w-full appearance-none rounded-xl bg-[#f1f1ef] px-4 py-3.5
                    pr-10 text-sm font-normal text-[#20231f] outline-none
                    transition focus:ring-2 focus:ring-[#f97316]
                  "
                >
                  <option value="" disabled>Choose your ride...</option>
                  <option value="Saloon">Saloon (City & Airport Transfer)</option>
                  <option value="SUV">SUV (Island & Hill Country Tour)</option>
                  <option value="Sedan">Sedan (Long-Distance Comfort)</option>
                  <option value="Custom Multi-Day Tour">Custom Multi-Day Island Tour</option>
                </select>
                <span
                  class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6b6d68]"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </label>

            <!-- Starting Location (Pickup) -->
            <div class="block text-xs font-medium text-[#3b3e3a]">
              <span>Starting Location (Pickup)</span>
              <div class="relative mt-2">
                <input
                  v-model="form.pickup"
                  required
                  readonly
                  placeholder="Click to select pickup on map..."
                  class="
                    w-full cursor-pointer rounded-xl bg-[#f1f1ef] py-3.5 pr-11
                    pl-4 text-sm font-normal text-[#20231f]
                    placeholder-[#9a9d98] outline-none transition
                    hover:bg-[#eaeae6] focus:ring-2 focus:ring-[#f97316]
                  "
                  @click="openMapModal('pickup')"
                />
                <button
                  type="button"
                  aria-label="Choose starting location on map"
                  class="
                    absolute right-2.5 top-1/2 flex size-8 -translate-y-1/2
                    cursor-pointer items-center justify-center rounded-lg
                    bg-white text-[#f97316] shadow-xs transition
                    hover:bg-[#f97316] hover:text-black
                  "
                  @click="openMapModal('pickup')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.828 0l-4.243-4.243a8 8 0 1 1 11.314 0z"
                    />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Destination (Drop-off) -->
            <div class="block text-xs font-medium text-[#3b3e3a]">
              <span>Destination (Drop-off)</span>
              <div class="relative mt-2">
                <input
                  v-model="form.dropoff"
                  required
                  readonly
                  placeholder="Click to select destination on map..."
                  class="
                    w-full cursor-pointer rounded-xl bg-[#f1f1ef] py-3.5 pr-11
                    pl-4 text-sm font-normal text-[#20231f]
                    placeholder-[#9a9d98] outline-none transition
                    hover:bg-[#eaeae6] focus:ring-2 focus:ring-[#f97316]
                  "
                  @click="openMapModal('dropoff')"
                />
                <button
                  type="button"
                  aria-label="Choose destination on map"
                  class="
                    absolute right-2.5 top-1/2 flex size-8 -translate-y-1/2
                    cursor-pointer items-center justify-center rounded-lg
                    bg-white text-[#f97316] shadow-xs transition
                    hover:bg-[#f97316] hover:text-black
                  "
                  @click="openMapModal('dropoff')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.828 0l-4.243-4.243a8 8 0 1 1 11.314 0z"
                    />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Start Date -->
            <label class="block text-xs font-medium text-[#3b3e3a]">
              Start Date
              <input
                v-model="form.startDate"
                type="date"
                required
                class="
                  mt-2 w-full rounded-xl bg-[#f1f1ef] px-4 py-3.5 text-sm
                  font-normal text-[#20231f] outline-none transition
                  focus:ring-2 focus:ring-[#f97316]
                "
              />
            </label>

            <!-- End Date -->
            <label class="block text-xs font-medium text-[#3b3e3a]">
              End Date
              <input
                v-model="form.endDate"
                type="date"
                required
                class="
                  mt-2 w-full rounded-xl bg-[#f1f1ef] px-4 py-3.5 text-sm
                  font-normal text-[#20231f] outline-none transition
                  focus:ring-2 focus:ring-[#f97316]
                "
              />
            </label>

            <!-- Number of Travelers -->
            <label class="block text-xs font-medium text-[#3b3e3a] sm:col-span-2">
              Number of Travelers
              <input
                v-model="form.passengers"
                type="text"
                required
                placeholder="2 adults, 1 child"
                class="
                  mt-2 w-full rounded-xl bg-[#f1f1ef] px-4 py-3.5 text-sm
                  font-normal text-[#20231f] placeholder-[#9a9d98] outline-none
                  transition focus:ring-2 focus:ring-[#f97316]
                "
              />
            </label>

            <!-- Message / Special Requests -->
            <label class="block text-xs font-medium text-[#3b3e3a] sm:col-span-2">
              Message / Special Requests
              <textarea
                v-model="form.notes"
                rows="4"
                placeholder="Anything else we should know?"
                class="
                  mt-2 w-full rounded-xl bg-[#f1f1ef] px-4 py-3.5 text-sm
                  font-normal text-[#20231f] placeholder-[#9a9d98] outline-none
                  transition focus:ring-2 focus:ring-[#f97316]
                "
              ></textarea>
            </label>
          </div>

          <!-- Submit Button Pair -->
          <div class="mt-7 flex items-center gap-2">
            <button
              type="submit"
              :disabled="state === 'sending'"
              class="
                cursor-pointer rounded-full bg-[#141416] px-7 py-3.5 text-xs
                font-semibold text-white transition-colors
                hover:bg-[#f97316] hover:text-black disabled:opacity-60
              "
            >
              {{ state === 'sending' ? 'Sending…' : 'Reserve Your Spot' }}
            </button>

            <button
              type="submit"
              :disabled="state === 'sending'"
              aria-label="Submit reservation"
              class="
                flex size-11 cursor-pointer items-center justify-center
                rounded-full bg-[#141416] text-white transition-colors
                hover:bg-[#f97316] hover:text-black disabled:opacity-60
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 17L17 7M17 7H9M17 7V15"
                />
              </svg>
            </button>
          </div>

          <p v-if="state === 'sent'" class="mt-4 text-sm text-green-800" role="status">
            Request sent. We’ll be in touch to confirm your trip.
          </p>
          <p v-if="state === 'error'" class="mt-4 text-sm text-red-700" role="alert">
            {{ errorMessage }}
          </p>
        </form>

        <!-- Right Video Card -->
        <div
          class="
            relative min-h-[380px] overflow-hidden rounded-3xl bg-[#20231f]
            shadow-sm
            lg:col-span-4
          "
        >
          <video
            class="block h-full w-full object-cover object-center"
            autoplay
            muted
            loop
            playsinline
            aria-hidden="true"
          >
            <source :src="publicAsset('/Contact-us.mp4')" type="video/mp4" />
          </video>

          <div class="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30"></div>

          <span
            class="
              absolute right-5 top-5 rounded-full border border-white/60
              bg-white/10 px-4 py-1.5 text-xs font-medium text-white
              backdrop-blur-md
            "
          >
            Your Journey
          </span>
        </div>
      </div>

      <!-- 3 Contact Info Columns -->
      <div class="mt-20 grid gap-10 text-center sm:grid-cols-3">
        <div class="flex flex-col items-center">
          <div
            class="
              flex size-12 items-center justify-center rounded-full
              bg-[#f7f7f5] text-[#20231f]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.7"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>

          <h2 class="mt-4 text-base font-semibold text-[#20231f]">
            Call & WhatsApp
          </h2>
          <p class="mt-2 text-xs leading-6 text-[#6b6d68]">
            +94 11 234 5678<br />
            +94 77 123 4567
          </p>
        </div>

        <div class="flex flex-col items-center">
          <div
            class="
              flex size-12 items-center justify-center rounded-full
              bg-[#f7f7f5] text-[#20231f]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.7"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 2" />
            </svg>
          </div>

          <h2 class="mt-4 text-base font-semibold text-[#20231f]">
            Working Hours
          </h2>
          <p class="mt-2 text-xs leading-6 text-[#6b6d68]">
            Daily: 6am – 10pm<br />
            24/7 Airport Transfers
          </p>
        </div>

        <div class="flex flex-col items-center">
          <div
            class="
              flex size-12 items-center justify-center rounded-full
              bg-[#f7f7f5] text-[#20231f]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.7"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path stroke-linecap="round" stroke-linejoin="round" d="m3 7 9 6 9-6" />
            </svg>
          </div>

          <h2 class="mt-4 text-base font-semibold text-[#20231f]">
            Write to Us
          </h2>
          <p class="mt-2 text-xs leading-6 text-[#6b6d68]">
            hello@lankanrides.lk<br />
            bookings@lankanrides.lk
          </p>
        </div>
      </div>
    </div>

    <!-- On-Page Google Maps Embed Popup Modal -->
    <div
      v-if="activeMapModal"
      class="
        fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4
        backdrop-blur-xs
      "
      role="dialog"
      aria-modal="true"
      @click.self="closeMapModal"
    >
      <div
        class="
          w-full max-w-2xl overflow-hidden rounded-3xl bg-white p-6
          text-[#20231f] shadow-2xl
        "
      >
        <div class="flex items-center justify-between border-b border-[#eceae4] pb-4">
          <div>
            <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f97316]">
              {{ activeMapModal === 'pickup' ? 'Starting Location' : 'Destination Location' }}
            </p>
            <h3 class="mt-0.5 text-xl font-bold">
              {{
                activeMapModal === 'pickup'
                  ? 'Select Pickup Location on Google Maps'
                  : 'Select Drop-off Destination on Google Maps'
              }}
            </h3>
          </div>

          <button
            type="button"
            aria-label="Close map popup"
            class="
              flex size-9 cursor-pointer items-center justify-center
              rounded-full bg-[#f1f1ef] text-[#20231f] transition
              hover:bg-[#f97316] hover:text-black
            "
            @click="closeMapModal"
          >
            ✕
          </button>
        </div>

        <div class="mt-4">
          <div class="flex gap-2">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search town, hotel, or landmark in Sri Lanka..."
              class="
                flex-1 rounded-xl bg-[#f1f1ef] px-4 py-2.5 text-sm outline-none
                focus:ring-2 focus:ring-[#f97316]
              "
              @keyup.enter="searchLocationOnMap"
            />
            <button
              type="button"
              class="
                cursor-pointer rounded-xl bg-[#141416] px-4 py-2.5 text-xs
                font-semibold text-white transition
                hover:bg-[#f97316] hover:text-black
              "
              @click="searchLocationOnMap"
            >
              Search
            </button>
          </div>

          <div class="mt-3 flex flex-wrap gap-1.5">
            <button
              v-for="preset in presetLocations"
              :key="preset.name"
              type="button"
              class="
                cursor-pointer rounded-full border border-[#eceae4] bg-[#fafafa]
                px-3 py-1 text-xs text-[#4a4d48] transition
                hover:border-[#f97316] hover:bg-[#ffedd5] hover:text-black
              "
              @click="selectPreset(preset)"
            >
              {{ preset.name }}
            </button>
          </div>
        </div>

        <!-- Google Maps iframe Embed Container -->
        <div class="mt-4 overflow-hidden rounded-2xl border border-[#eceae4]">
          <iframe
            :src="googleMapEmbedUrl"
            class="h-72 w-full sm:h-80 border-0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div class="min-w-0 flex-1">
            <p class="text-xs text-[#6b6d68]">Selected location:</p>
            <input
              v-model="tempSelectedAddress"
              type="text"
              placeholder="Type location name or select from presets above..."
              class="
                mt-1 w-full rounded-lg border border-[#eceae4] bg-[#fafafa]
                px-3 py-1.5 text-sm font-medium text-[#20231f] outline-none
                focus:border-[#f97316]
              "
            />
          </div>

          <div class="flex shrink-0 items-center gap-2">
            <button
              type="button"
              class="
                cursor-pointer rounded-full border border-[#eceae4] px-4 py-2.5
                text-xs font-semibold text-[#6b6d68] transition
                hover:bg-[#f1f1ef]
              "
              @click="closeMapModal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="
                cursor-pointer rounded-full bg-[#f97316] px-5 py-2.5 text-xs
                font-semibold text-black transition
                hover:bg-[#ea580c] hover:text-white
              "
              @click="confirmMapSelection"
            >
              Confirm Location
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>