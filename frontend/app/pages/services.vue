<script setup lang="ts">
import { ref } from 'vue'

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

const routeHighlights = [
  {
    name: 'Ella',
    caption: 'Misty tea estates, mountain passes, and iconic valley views.',
    image: '/Ella.webp',
  },
  {
    name: 'Kandy',
    caption: 'Sacred heritage, botanical gardens, and scenic hill country roads.',
    image: '/kandy.webp',
  },
  {
    name: 'Galle',
    caption: 'Cobblestone fort streets, ocean breezes, and southern coastal drives.',
    image: '/Galle.webp',
  },
  {
    name: 'Mirissa',
    caption: 'Palm-fringed bays, whale watching, and relaxed seaside stops.',
    image: '/Mirissa.webp',
  },
  {
    name: 'Arugam Bay',
    caption: 'Laid-back surf breaks, lagoons, and eastern coastal adventures.',
    image: '/Arugambay.webp',
  },
  {
    name: 'Sigiriya',
    caption: 'Ancient rock fortresses, royal gardens, and cultural heartlands.',
    image: '/Ella.webp',
  },
]

const carouselRef = ref<HTMLElement | null>(null)

function scrollCarousel(direction: 'left' | 'right') {
  if (!carouselRef.value) return
  const container = carouselRef.value
  const cardWidth = container.querySelector('a')?.clientWidth || 300
  const scrollAmount = (cardWidth + 20) * 2 // Scrolls 2 cards at a time smoothly

  if (direction === 'right') {
    const maxScroll = container.scrollWidth - container.clientWidth
    if (container.scrollLeft >= maxScroll - 10) {
      container.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  } else {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  }
}

const { app } = useRuntimeConfig()

function publicAsset(path: string) {
  return `${app.baseURL}${path.replace(/^\/+/, '')}`
}
</script>

<template>
  <!-- Hero -->
  <section
    class="relative isolate mx-0 my-5 min-h-[85svh] overflow-hidden rounded-3xl md:mx-3 xl:mx-4"
  >
    <video
      class="absolute inset-0 z-0 size-full object-cover"
      autoplay
      muted
      loop
      playsinline
      aria-hidden="true"
    >
      <source
        :src="publicAsset('/our-services.mp4')"
        type="video/mp4"
      />
    </video>

    <div class="absolute inset-0 z-10 bg-black/40"></div>

    <div
      class="relative z-20 mx-auto flex min-h-[85svh] max-w-7xl items-end justify-center px-6 pb-12 pt-16 md:pb-16 lg:px-16"
    >
      <div class="mx-auto max-w-2xl text-center text-white">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#f97316]">
          Our services
        </p>

        <h1 class="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
          The ride is <span class="text-[#f97316]">part of the trip.</span>
        </h1>

        <p class="mx-auto mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
          From a simple airport pickup to a week exploring the island, travel with a local driver and a plan that can flex.
        </p>
      </div>
    </div>
  </section>

  <!-- Our Services Section -->
  <section class="bg-white px-6 py-16 text-[#20231f] md:px-10 md:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-[#20231f] md:text-4xl">
          Our Services
        </h2>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(service, i) in services"
          :key="service.title"
          class="group rounded-3xl p-8 transition-all duration-300 md:p-10"
          :class="
            i === 0
              ? 'bg-[#f97316] text-white shadow-lg shadow-[#f97316]/20'
              : 'bg-[#f8f8f7] text-[#20231f] hover:bg-[#f97316] hover:text-white hover:shadow-lg hover:shadow-[#f97316]/20'
          "
        >
          <!-- Circular Icon Badge -->
          <div
            class="flex size-14 items-center justify-center rounded-full transition-colors duration-300"
            :class="
              i === 0
                ? 'bg-white text-[#f97316]'
                : 'bg-[#f97316] text-white group-hover:bg-white group-hover:text-[#f97316]'
            "
          >
            <!-- Plane Icon -->
            <svg
              v-if="service.icon === 'plane'"
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1.2 3.6c-.1.4.1.9.5 1.1L9 15l-4 4-3-1-1 1 4 2 2 4 1-1-1-3 4-4 3.4 6c.2.4.7.6 1.1.5l3.6-1.2c.5-.2.8-.6.7-1.1Z" />
            </svg>

            <!-- Sun / Day Trip Icon -->
            <svg
              v-else-if="service.icon === 'sun'"
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>

            <!-- Map / Multi-Day Icon -->
            <svg
              v-else-if="service.icon === 'map'"
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
              <path d="M15 5.764v15" />
              <path d="M9 3.236v15" />
            </svg>

            <!-- Compass / Custom Icon -->
            <svg
              v-else-if="service.icon === 'compass'"
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>

            <!-- Building / Hotel Icon -->
            <svg
              v-else-if="service.icon === 'building'"
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
              <path d="M9 22v-4h6v4" />
              <path d="M8 6h.01" />
              <path d="M16 6h.01" />
              <path d="M12 6h.01" />
              <path d="M12 10h.01" />
              <path d="M12 14h.01" />
              <path d="M16 10h.01" />
              <path d="M16 14h.01" />
              <path d="M8 10h.01" />
              <path d="M8 14h.01" />
            </svg>

            <!-- Camera / Safari Icon -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
          </div>

          <!-- Service Title -->
          <h3 class="mt-7 text-xl font-bold tracking-tight">
            {{ service.title }}
          </h3>

          <!-- Service Description -->
          <p
            class="mt-3 text-sm leading-6 transition-colors duration-300"
            :class="
              i === 0
                ? 'text-white/90'
                : 'text-[#69716b] group-hover:text-white/90'
            "
          >
            {{ service.text }}
          </p>
        </article>
      </div>
    </div>
  </section>

  <!-- 4-Card Row Destination Showcase with Bottom-Right Side Navigation Arrows -->
  <section class="bg-[#efede6] px-6 py-16 text-[#20231f] md:px-10 md:py-24">
    <div class="mx-auto max-w-7xl">
      <!-- Section Header with Different Caption -->
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#bd6b28]">
          Popular Routes & Stops
        </p>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#20231f] md:text-4xl">
          Where our rides can take you
        </h2>
        <p class="mt-4 text-base leading-7 text-[#6b6d68]">
          Whether you are booking a direct transfer or a multi-day tour, our drivers connect you to Sri Lanka’s most iconic landscapes at your own pace.
        </p>
      </div>

      <!-- Horizontal Carousel: 4 Smaller Cards per Row on Desktop -->
      <div
        ref="carouselRef"
        class="mt-12 flex gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <NuxtLink
          v-for="item in routeHighlights"
          :key="item.name"
          to="/destinations"
          class="group relative isolate h-[340px] w-[78%] shrink-0 overflow-hidden rounded-3xl bg-[#20231f] sm:w-[calc(50%-10px)] lg:h-[360px] lg:w-[calc(25%-15px)]"
        >
          <img
            :src="publicAsset(item.image)"
            :alt="item.name"
            loading="lazy"
            class="absolute inset-0 -z-20 size-full object-cover transition duration-500 group-hover:scale-105"
          />

          <!-- Bottom Dark Gradient Overlay -->
          <div
            class="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
          ></div>

          <!-- Bottom Content & Circular Arrow Badge -->
          <div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
            <div>
              <h3 class="text-xl font-bold tracking-tight">
                {{ item.name }}
              </h3>
              <p class="mt-1 text-xs leading-5 text-white/85 line-clamp-2">
                {{ item.caption }}
              </p>
            </div>

            <!-- Circular Arrow Icon on Card (Fixed: normal state is translucent white, turns orange on hover) -->
            <span
              class="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-sm transition-colors duration-300 group-hover:border-[#f97316] group-hover:bg-[#f97316]"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </div>
        </NuxtLink>
      </div>

      <!-- Bottom Right Navigation Arrows Below the 4th Card -->
      <div class="mt-6 flex justify-end gap-3">
        <button
          type="button"
          @click="scrollCarousel('left')"
          class="flex size-12 items-center justify-center rounded-full border-2 border-white bg-transparent text-[#20231f] shadow-sm ring-1 ring-black/10 transition-all duration-300 hover:border-[#f97316] hover:bg-[#f97316] hover:text-white hover:ring-[#f97316] focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          aria-label="Previous destinations"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          @click="scrollCarousel('right')"
          class="flex size-12 items-center justify-center rounded-full border-2 border-white bg-transparent text-[#20231f] shadow-sm ring-1 ring-black/10 transition-all duration-300 hover:border-[#f97316] hover:bg-[#f97316] hover:text-white hover:ring-[#f97316] focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          aria-label="Slide to next destinations"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  </section>

  <!-- About Lankan Rides Section -->
  <section class="bg-white px-6 py-16 text-[#20231f] md:px-10 md:py-24">
    <div class="mx-auto max-w-7xl">
      <!-- Top Centered Heading & Subtitle -->
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-[#20231f] md:text-5xl">
          About Lankan Rides
        </h2>
        <p class="mt-4 text-base leading-7 text-[#6b6d68] md:text-lg">
          Lankan Rides is a team of passionate local drivers dedicated to sharing Sri Lanka through safe, comfortable, and unhurried private journeys.
        </p>
      </div>

      <!-- 3-Column Bento Grid: 2 Stacked Images | Center Dark Card | 2 Stacked Images -->
      <div class="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
        <!-- Left Column: Two Stacked Images -->
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
          <div class="overflow-hidden rounded-3xl">
            <img
              :src="publicAsset('/Ella.webp')"
              alt="Scenic hill country in Ella"
              loading="lazy"
              class="h-60 w-full object-cover transition duration-500 hover:scale-105 lg:h-full"
            />
          </div>
          <div class="overflow-hidden rounded-3xl">
            <img
              :src="publicAsset('/kandy.webp')"
              alt="Cultural lakeside views in Kandy"
              loading="lazy"
              class="h-60 w-full object-cover transition duration-500 hover:scale-105 lg:h-full"
            />
          </div>
        </div>

        <!-- Center Column: Tall Dark Feature Card with Button -->
        <div
          class="relative isolate flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#14171a] px-8 py-12 text-center text-white shadow-xl md:px-10 lg:py-16"
        >
          <!-- Subtle geometric line pattern overlay -->
          <div
            class="pointer-events-none absolute inset-0 -z-10 opacity-15"
            style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 48px 48px;"
          ></div>
          <div
            class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#14171a]/50 to-[#14171a]"
          ></div>

          <!-- Top Icon Circle -->
          <div
            class="flex size-14 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>

          <h3 class="mt-7 text-2xl font-bold leading-snug tracking-tight md:text-3xl">
            Local Drivers Committed to Real Hospitality
          </h3>

          <p class="mt-4 text-sm leading-6 text-white/75 md:text-base">
            Lankan Rides is built by experienced local drivers and travel hosts who care deeply about helping guests experience the real Sri Lanka. With a focus on comfort, flexibility, and genuine warmth, we turn every transfer and island tour into a memorable part of your holiday.
          </p>

          <!-- Button linking to About Us page -->
          <NuxtLink
            to="/about"
            class="mt-8 inline-flex items-center justify-center rounded-full bg-[#f97316] px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white hover:text-[#14171a] focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:ring-offset-2 focus:ring-offset-[#14171a]"
          >
            More about us →
          </NuxtLink>
        </div>

        <!-- Right Column: Two Stacked Images -->
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
          <div class="overflow-hidden rounded-3xl">
            <img
              :src="publicAsset('/Galle.webp')"
              alt="Historic coastal fort in Galle"
              loading="lazy"
              class="h-60 w-full object-cover transition duration-500 hover:scale-105 lg:h-full"
            />
          </div>
          <div class="overflow-hidden rounded-3xl">
            <img
              :src="publicAsset('/Mirissa.webp')"
              alt="Sunny beaches in Mirissa"
              loading="lazy"
              class="h-60 w-full object-cover transition duration-500 hover:scale-105 lg:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>