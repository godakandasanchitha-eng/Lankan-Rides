<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { destinationsData as destinations } from '~/Data/destinations'

const { app } = useRuntimeConfig()

function publicAsset(path: string) {
  return `${app.baseURL}${path.replace(/^\/+/, '')}`
}

const currentSlide = ref(0)
let autoSlideInterval: ReturnType<typeof setInterval> | null = null

interface Tour {
  slug: string
  name: string
  eyebrow: string
  description: string
  image: string
}

const topTours: Tour[] = [
  {
    slug: 'ella-mountain-escape',
    name: 'Ella Mountain Escape',
    eyebrow: '/ Top Tours',
    description: 'Explore breathtaking mountain trails, Nine Arch Bridge, and scenic lookouts with an expert local driver.',
    image: '/Ella.webp',
  },
  {
    slug: 'mirissa-sunset-escape',
    name: 'Mirissa Sunset Escape',
    eyebrow: '/ Top Tours',
    description: 'Visit iconic coastal landmarks, whale watching spots, and golden beaches with an expert guide.',
    image: '/Mirissa.webp',
  },
  {
    slug: 'kandy-cultural-journey',
    name: 'Kandy Cultural Journey',
    eyebrow: '/ Top Tours',
    description: 'Discover historic temples of the tooth, botanical gardens, and traditional tea plantations on a relaxed cultural tour.',
    image: '/kandy.webp',
  },
  {
    slug: 'galle-heritage-expedition',
    name: 'Galle Heritage Expedition',
    eyebrow: '/ Top Tours',
    description: 'Stroll along historic fort walls and golden ocean bays with flexible stops throughout the southern coast.',
    image: '/Galle.webp',
  },
  {
    slug: 'sigiriya-ancient-wonder',
    name: 'Sigiriya Ancient Wonder',
    eyebrow: '/ Top Tours',
    description: 'Scale the legendary rock fortress, tour ancient water gardens, and experience cultural heritage up close.',
    image: '/Sigiriya.webp',
  },
  {
    slug: 'nuwara-eliya-highlands',
    name: 'Nuwara Eliya Highlands',
    eyebrow: '/ Top Tours',
    description: 'Breathe in crisp mountain air, stroll through emerald tea estates, and enjoy colonial-era charm.',
    image: '/Nuwara-eliya.webp',
  },
]

const prevIndex = computed(() => (currentSlide.value - 1 + topTours.length) % topTours.length)
const nextIndex = computed(() => (currentSlide.value + 1) % topTours.length)

const prevTour = computed(() => (topTours[prevIndex.value] ?? topTours[0]) as Tour)
const currentTour = computed(() => (topTours[currentSlide.value] ?? topTours[0]) as Tour)
const nextTour = computed(() => (topTours[nextIndex.value] ?? topTours[0]) as Tour)

function showPrev() {
  currentSlide.value = prevIndex.value
}

function showNext() {
  currentSlide.value = nextIndex.value
}

function startAutoSlide() {
  stopAutoSlide()
  autoSlideInterval = setInterval(() => {
    showNext()
  }, 6000)
}

function stopAutoSlide() {
  if (autoSlideInterval !== null) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

function prevSlide() {
  showPrev()
  startAutoSlide()
}

function nextSlide() {
  showNext()
  startAutoSlide()
}

onMounted(() => {
  startAutoSlide()
})

onBeforeUnmount(() => {
  stopAutoSlide()
})

// Show More / Show Less Destinations Toggle Logic
const showAllDestinations = ref(false)

const displayedDestinations = computed(() => {
  return showAllDestinations.value ? destinations : destinations.slice(0, 6)
})

function toggleShowMore() {
  showAllDestinations.value = !showAllDestinations.value
}
</script>

<template>
  <!-- Hero Carousel (Laptop viewport optimized height without unnecessary scroll) -->
  <section
    class="relative isolate mx-0 my-4 h-[78vh] min-h-[550px] overflow-hidden rounded-3xl md:mx-3 xl:mx-4"
  >
    <div class="absolute inset-0 z-0 h-full w-full">
      <img
        v-for="(slide, index) in destinations"
        :key="slide.slug"
        :src="publicAsset(slide.image)"
        :alt="slide.name"
        class="
          absolute inset-0 block h-full w-full max-w-none object-cover
          object-center transition-opacity duration-700
        "
        :class="index === currentSlide ? 'opacity-100' : 'pointer-events-none opacity-0'"
      />
    </div>

    <div
      class="
        absolute inset-0 z-10
        bg-gradient-to-t from-black/75 via-black/30 to-black/20
      "
    ></div>

    <button
      type="button"
      aria-label="Previous destination"
      class="
        group absolute left-4 top-1/2 z-30 flex size-12 -translate-y-1/2
        cursor-pointer items-center justify-center rounded-full border
        border-white bg-white text-black transition-colors
        hover:border-[#f97316] hover:bg-[#f97316] hover:text-white
        md:left-8 md:size-14
        lg:left-12
      "
      @click="prevSlide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-5 md:size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      type="button"
      aria-label="Next destination"
      class="
        group absolute right-4 top-1/2 z-30 flex size-12 -translate-y-1/2
        cursor-pointer items-center justify-center rounded-full border
        border-white bg-white text-black transition-colors
        hover:border-[#f97316] hover:bg-[#f97316] hover:text-white
        md:right-8 md:size-14
        lg:right-12
      "
      @click="nextSlide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-5 md:size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>

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
          {{ destinations[currentSlide]?.eyebrow }}
        </p>

        <h1 class="mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
          {{ destinations[currentSlide]?.name }}
        </h1>
      </div>
    </div>
  </section>

  <!-- Destination Cards Grid (With Show More / Show Less Button in Bottom Center) -->
  <section class="bg-[#f8f7f3] px-5 py-16 text-[#20231f] lg:px-8 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#f97316]">
        Go a little further
      </p>
      <h2 class="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
        A whole island of places to find.
      </h2>
      <p class="mt-4 max-w-2xl text-base leading-7 text-[#6b6d68] md:text-lg">
        These are just starting points. Connect a few favorites or take the long way between them.
      </p>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="place in displayedDestinations"
          :key="place.slug"
          :to="`/destinations/${place.slug}`"
          class="
            group relative isolate aspect-[4/5] overflow-hidden rounded-[28px]
            bg-[#20231f] shadow-md transition duration-300
            hover:-translate-y-1 hover:shadow-xl
          "
        >
          <img
            :src="publicAsset(place.image)"
            :alt="place.name"
            loading="lazy"
            class="
              absolute inset-0 -z-20 block h-full w-full object-cover
              object-center transition duration-500
              group-hover:scale-105
            "
          />

          <div
            class="
              absolute inset-0 -z-10
              bg-gradient-to-t from-black/85 via-black/25 to-transparent
            "
          ></div>

          <div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-7">
            <div class="min-w-0 text-white">
              <h3 class="text-2xl font-bold tracking-tight sm:text-3xl">
                {{ place.name }}
              </h3>
              <p class="mt-1.5 text-sm leading-5 text-white/85 sm:text-base">
                {{ place.caption }}
              </p>
            </div>

            <span
              class="
                flex size-11 shrink-0 items-center justify-center rounded-full
                border border-white/30 bg-white/20 text-white backdrop-blur-sm
                transition-colors duration-200
                group-hover:border-[#f97316] group-hover:bg-[#f97316]
                group-hover:text-white
              "
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 17L17 7M17 7H8M17 7V16"
                />
              </svg>
            </span>
          </div>
        </NuxtLink>
      </div>

      <!-- Show More / Show Less Button in Bottom Center -->
      <div class="mt-12 text-center">
        <button
          type="button"
          class="
            inline-flex cursor-pointer items-center justify-center rounded-full
            bg-[#141416] px-8 py-4 text-sm font-semibold text-white
            transition-colors duration-200
            hover:bg-[#f97316] hover:text-black
          "
          @click="toggleShowMore"
        >
          {{ showAllDestinations ? 'Show Less' : 'Show More Destinations' }}
          <span class="ml-2" aria-hidden="true">{{ showAllDestinations ? '↑' : '↓' }}</span>
        </button>
      </div>
    </div>
  </section>

  <!-- Top Tours Carousel Section -->
  <section class="bg-white px-5 py-16 text-[#20231f] lg:px-8 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <!-- Section Header -->
      <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div class="lg:col-span-5">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b6d68]">
            / Top Tours
          </p>
        </div>
        <div class="lg:col-span-7">
          <h2 class="text-3xl font-bold tracking-tight text-[#20231f] md:text-5xl">
            Top tours to spark your wanderlust
          </h2>
          <p class="mt-4 text-sm leading-6 text-[#6b6d68] md:text-base">
            Explore our curated selection of must-visit destinations, complete with detailed itineraries, and unforgettable experiences. Your next adventure starts here!
          </p>
        </div>
      </div>

      <!-- Progress Line & Counter Bar -->
      <div class="mt-10 flex items-center justify-between border-b border-[#eceae4] pb-6">
        <div class="flex items-center gap-4">
          <div class="h-0.5 w-32 bg-[#20231f] relative overflow-hidden">
            <div
              class="absolute inset-y-0 left-0 bg-[#f97316] transition-all duration-300"
              :style="{ width: `${((currentSlide + 1) / topTours.length) * 100}%` }"
            ></div>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <span class="text-xs font-semibold tracking-wider text-[#6b6d68]">
            0{{ currentSlide + 1 }} / 0{{ topTours.length }}
          </span>
        </div>
      </div>

      <!-- 3-Card Carousel Layout (Middle Highlighted & Larger) -->
      <div class="mt-10 grid gap-6 md:grid-cols-3 items-center">
        <!-- Card 1: Previous Tour Preview -->
        <div class="group relative overflow-hidden rounded-3xl bg-[#f8f7f3] p-6 border border-[#eceae4] transition-all duration-300 opacity-80 hover:opacity-100">
          <div class="relative h-60 overflow-hidden rounded-2xl">
            <img
              :src="publicAsset(prevTour.image)"
              :alt="prevTour.name"
              loading="lazy"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <h3 class="mt-5 text-xl font-bold tracking-tight text-[#20231f]">
            {{ prevTour.name }}
          </h3>
        </div>

        <!-- Card 2: Active Highlighted Tour (Center & Expanded) -->
        <div class="group relative overflow-hidden rounded-3xl bg-[#f8f7f3] p-6 border border-[#eceae4] shadow-xl ring-1 ring-[#f97316]/20 transition-all duration-300 scale-105 z-10">
          <div class="relative h-64 overflow-hidden rounded-2xl">
            <img
              :src="publicAsset(currentTour.image)"
              :alt="currentTour.name"
              loading="lazy"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div class="mt-5">
            <h3 class="text-xl font-bold tracking-tight text-[#20231f]">
              {{ currentTour.name }}
            </h3>
          </div>

          <p class="mt-2 text-sm leading-6 text-[#6b6d68]">
            {{ currentTour.description }}
          </p>

          <div class="mt-6 flex items-center justify-between pt-4 border-t border-[#eceae4]">
            <span class="text-xs font-semibold uppercase tracking-wider text-[#6b6d68]">
              Private Journey
            </span>
            <NuxtLink
              to="/booking"
              class="inline-flex items-center justify-center rounded-full bg-[#19191b] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#f97316] hover:text-black"
            >
              Booking Now
            </NuxtLink>
          </div>
        </div>

        <!-- Card 3: Next Tour Preview -->
        <div class="group relative overflow-hidden rounded-3xl bg-[#f8f7f3] p-6 border border-[#eceae4] transition-all duration-300 opacity-80 hover:opacity-100">
          <div class="relative h-60 overflow-hidden rounded-2xl">
            <img
              :src="publicAsset(nextTour.image)"
              :alt="nextTour.name"
              loading="lazy"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <h3 class="mt-5 text-xl font-bold tracking-tight text-[#20231f]">
            {{ nextTour.name }}
          </h3>
        </div>
      </div>

      <!-- Carousel Direction Arrows Below Cards (Centered) -->
      <div class="mt-12 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous tour"
          class="flex size-12 cursor-pointer items-center justify-center rounded-full border border-[#20231f] bg-white text-[#20231f] transition-colors hover:border-[#f97316] hover:bg-[#f97316] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          @click="prevSlide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Next tour"
          class="flex size-12 cursor-pointer items-center justify-center rounded-full border border-[#20231f] bg-[#20231f] text-white transition-colors hover:border-[#f97316] hover:bg-[#f97316] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          @click="nextSlide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>