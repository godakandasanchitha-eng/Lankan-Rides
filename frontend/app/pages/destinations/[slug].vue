<script setup lang="ts">
import { computed, ref } from 'vue'
import { destinationsData } from '~/Data/destinations'

const route = useRoute()
const { app } = useRuntimeConfig()

function publicAsset(path: string) {
  return `${app.baseURL}${path.replace(/^\/+/, '')}`
}

const isExpanded = ref(false)

const destination = computed(() => {
  return destinationsData.find((item) => item.slug === route.params.slug)
})

if (!destination.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Destination not found',
  })
}
</script>

<template>
  <div v-if="destination">
    <!-- Destination Hero -->
    <section
      class="relative isolate mx-0 my-5 min-h-[75svh] overflow-hidden rounded-3xl md:mx-3 xl:mx-4"
    >
      <img
        :src="publicAsset(destination.image)"
        :alt="destination.name"
        class="absolute inset-0 -z-20 block h-full w-full object-cover object-center"
      />

      <div
        class="
          absolute inset-0 -z-10
          bg-gradient-to-t from-black/80 via-black/35 to-black/20
        "
      ></div>

      <!-- Top-Left Aligned Back Button (Absolute positioning to guarantee top-left corner placement) -->
      <div class="absolute left-6 top-6 z-30 md:left-10 md:top-10 lg:left-16">
        <NuxtLink
          to="/destinations"
          class="
            inline-flex items-center gap-2 rounded-full border border-white/30
            bg-black/40 px-4 py-2 text-sm font-medium text-white
            backdrop-blur-md transition-colors
            hover:border-[#f97316] hover:bg-[#f97316] hover:text-black
          "
        >
          <span aria-hidden="true">←</span>
          All Destinations
        </NuxtLink>
      </div>

      <!-- Center-Bottom Aligned Eyebrow, Title & Caption -->
      <div
        class="
          relative z-20 mx-auto flex min-h-[75svh] max-w-7xl items-end
          justify-center px-6 pb-12
          md:pb-16
          lg:px-16
        "
      >
        <div class="mx-auto max-w-2xl text-center text-white">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#f97316]">
            {{ destination.eyebrow }}
          </p>

          <h1 class="mt-3 text-4xl font-semibold leading-tight md:text-6xl">
            {{ destination.name }}
          </h1>

          <p class="mt-4 text-base leading-7 text-white/85 md:text-lg">
            {{ destination.caption }}
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery Collage & Destination Details Section -->
    <section class="bg-white px-5 py-12 text-[#20231f] md:px-8 md:py-16">
      <div class="mx-auto max-w-7xl">
        <!-- 3-Image Collage Grid -->
        <div class="grid gap-4 md:h-[520px] md:grid-cols-12 md:grid-rows-2">
          <!-- Main Left Image -->
          <div
            class="
              relative h-[300px] min-h-0 overflow-hidden rounded-3xl bg-[#20231f]
              sm:h-[420px]
              md:col-span-8 md:row-span-2 md:h-full
            "
          >
            <img
              :src="publicAsset(destination.gallery[0])"
              :alt="destination.name"
              class="block h-full w-full object-cover object-center"
            />
          </div>

          <!-- Top Right Sample Image -->
          <div
            class="
              relative h-[220px] min-h-0 overflow-hidden rounded-3xl bg-[#20231f]
              md:col-span-4 md:row-span-1 md:h-full
            "
          >
            <img
              :src="publicAsset(destination.gallery[1])"
              :alt="`${destination.name} view 2`"
              class="block h-full w-full object-cover object-center"
            />
          </div>

          <!-- Bottom Right Sample Image -->
          <div
            class="
              relative h-[220px] min-h-0 overflow-hidden rounded-3xl bg-[#20231f]
              md:col-span-4 md:row-span-1 md:h-full
            "
          >
            <img
              :src="publicAsset(destination.gallery[2])"
              :alt="`${destination.name} view 3`"
              class="block h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <!-- Main Two-Column Content Layout -->
        <div class="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
          <!-- Left Column: Title, Overview, Activities to Do, Destination Information -->
          <div class="lg:col-span-8">
            <h2 class="text-3xl font-semibold tracking-tight text-[#20231f] sm:text-4xl">
              {{ destination.name }}
            </h2>

            <!-- Location & Rating Row -->
            <div class="mt-2.5 flex flex-wrap items-center gap-2 text-sm text-[#6b6d68]">
              <span class="inline-flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-[#6b6d68]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.8"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"
                  />
                </svg>
                {{ destination.region }}
              </span>

              <span aria-hidden="true">·</span>

              <span class="inline-flex items-center gap-1 font-semibold text-[#20231f]">
                <span class="text-[#f97316]" aria-hidden="true">★</span>
                {{ destination.rating }}
              </span>
            </div>

            <!-- Description & Read More -->
            <p class="mt-5 text-sm leading-7 text-[#6b6d68] sm:text-base">
              {{ destination.overview }}
              <span v-if="isExpanded">
                {{ ' ' + destination.moreOverview }}
              </span>
            </p>

            <button
              type="button"
              class="
                mt-3 cursor-pointer text-sm font-medium text-[#20231f]
                underline-offset-4
                hover:text-[#f97316] hover:underline
              "
              @click="isExpanded = !isExpanded"
            >
              {{ isExpanded ? 'Read Less' : 'Read More' }}
            </button>

            <!-- Activities to Do Box -->
            <div class="mt-8 rounded-2xl border border-[#eceae4] p-6">
              <h3 class="text-lg font-medium text-[#20231f]">
                Activities to Do
              </h3>

              <div class="mt-5 grid gap-x-6 gap-y-4 border-t border-[#eceae4] pt-5 sm:grid-cols-2 md:grid-cols-3">
                <div
                  v-for="activity in destination.activities"
                  :key="activity.name"
                  class="flex items-center gap-3 text-sm text-[#4a4d48]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4 shrink-0 text-[#f97316]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.828 0l-4.243-4.243a8 8 0 1 1 11.314 0z"
                    />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                  <span>
                    {{ activity.name }} :
                    <strong class="font-medium text-[#20231f]">{{ activity.tag }}</strong>
                  </span>
                </div>
              </div>
            </div>

            <!-- Destination Information Box -->
            <div class="mt-6 rounded-2xl border border-[#eceae4] p-6">
              <h3 class="text-lg font-medium text-[#20231f]">
                Destination Information
              </h3>

              <div class="mt-5 grid gap-x-8 gap-y-4 border-t border-[#eceae4] pt-5 sm:grid-cols-2">
                <div class="flex items-center gap-3 text-sm text-[#4a4d48]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4 shrink-0 text-[#6b6d68]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.8"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 2" />
                  </svg>
                  <span>{{ destination.destinationInfo.timeFromAirport }}</span>
                </div>

                <div class="flex items-center gap-3 text-sm text-[#4a4d48]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4 shrink-0 text-[#6b6d68]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.8"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <span>{{ destination.destinationInfo.weather }}</span>
                </div>

                <div class="flex items-center gap-3 text-sm text-[#4a4d48]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4 shrink-0 text-[#6b6d68]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.8"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 2" />
                  </svg>
                  <span>{{ destination.destinationInfo.timeFromColombo }}</span>
                </div>

                <div class="flex items-center gap-3 text-sm text-[#4a4d48]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4 shrink-0 text-[#6b6d68]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{{ destination.destinationInfo.bestSeason }}</span>
                </div>

                <div class="flex items-center gap-3 text-sm text-[#4a4d48]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4 shrink-0 text-[#6b6d68]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.8"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01" />
                  </svg>
                  <span>{{ destination.destinationInfo.idealStay }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Details Sidebar Card -->
          <aside class="rounded-2xl border border-[#eceae4] bg-white p-6 shadow-sm lg:col-span-4">
            <h3 class="text-lg font-medium text-[#20231f]">
              Details
            </h3>

            <div class="mt-4 divide-y divide-[#eceae4] border-t border-[#eceae4]">
              <div class="py-4">
                <div class="flex items-center justify-between text-xs text-[#6b6d68]">
                  <span class="inline-flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.8"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    Popular Route
                  </span>
                  <span aria-hidden="true">⌄</span>
                </div>
                <p class="mt-2 text-sm font-medium text-[#20231f]">
                  {{ destination.tripDetails.route }}
                </p>
              </div>

              <div class="py-4">
                <div class="flex items-center justify-between text-xs text-[#6b6d68]">
                  <span class="inline-flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.8"
                      aria-hidden="true"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Suggested Duration
                  </span>
                  <span aria-hidden="true">⌄</span>
                </div>
                <p class="mt-2 text-sm font-medium text-[#20231f]">
                  {{ destination.tripDetails.recommendedStay }}
                </p>
              </div>

              <div class="py-4">
                <div class="flex items-center justify-between text-xs text-[#6b6d68]">
                  <span class="inline-flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.8"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 13.5 4.5 8h15l1.5 5.5v5h-3v-2H6v2H3v-5Z"
                      />
                    </svg>
                    Recommended Vehicle
                  </span>
                  <span aria-hidden="true">⌄</span>
                </div>
                <p class="mt-2 text-sm font-medium text-[#20231f]">
                  {{ destination.tripDetails.vehicleType }}
                </p>
              </div>

              <div class="flex items-center justify-between py-4">
                <span class="text-xs text-[#6b6d68]">Distance from CMB</span>
                <span class="text-base font-semibold text-[#20231f]">
                  {{ destination.tripDetails.distance }}
                </span>
              </div>
            </div>

            <NuxtLink
              to="/booking"
              class="
                mt-2 flex w-full items-center justify-center rounded-xl
                bg-[#19191b] px-5 py-3.5 text-sm font-semibold text-white
                transition-colors
                hover:bg-[#f97316] hover:text-black
              "
            >
              Plan a Ride
            </NuxtLink>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>