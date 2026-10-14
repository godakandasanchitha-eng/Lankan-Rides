<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { destinationsData as destinations } from '~/Data/destinations'

const { app } = useRuntimeConfig()

function publicAsset(path: string) {
  return `${app.baseURL}${path.replace(/^\/+/, '')}`
}

const currentSlide = ref(0)
let autoSlideInterval: ReturnType<typeof setInterval> | null = null

function showPrev() {
  currentSlide.value =
    (currentSlide.value - 1 + destinations.length) % destinations.length
}

function showNext() {
  currentSlide.value = (currentSlide.value + 1) % destinations.length
}

function startAutoSlide() {
  stopAutoSlide()
  autoSlideInterval = setInterval(() => {
    showNext()
  }, 5000)
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
</script>

<template>
  <!-- Hero Carousel -->
  <section
    class="relative isolate mx-0 my-5 min-h-[85svh] overflow-hidden rounded-3xl md:mx-3 xl:mx-4"
  >
    <!-- Background slides -->
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

    <!-- Dark gradient overlay for readability -->
    <div
      class="
        absolute inset-0 z-10
        bg-gradient-to-t from-black/75 via-black/30 to-black/20
      "
    ></div>

    <!-- Previous button (Left Center) -->
    <button
      type="button"
      aria-label="Previous destination"
      class="
        group absolute left-4 top-1/2 z-30 flex size-12 -translate-y-1/2
        cursor-pointer items-center justify-center rounded-full border
        border-white bg-white text-black transition-colors
        hover:border-[#f97316] hover:bg-[#f97316] hover:text-white
        active:border-[#f97316] active:bg-[#f97316] active:text-white
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
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <!-- Next button (Right Center) -->
    <button
      type="button"
      aria-label="Next destination"
      class="
        group absolute right-4 top-1/2 z-30 flex size-12 -translate-y-1/2
        cursor-pointer items-center justify-center rounded-full border
        border-white bg-white text-black transition-colors
        hover:border-[#f97316] hover:bg-[#f97316] hover:text-white
        active:border-[#f97316] active:bg-[#f97316] active:text-white
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
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>

    <!-- Eyebrow and Destination placed center bottom -->
    <div
      class="
        relative z-20 mx-auto flex min-h-[85svh] max-w-7xl items-end
        justify-center px-6 pb-12
        md:pb-16
        lg:px-16
      "
    >
      <div class="mx-auto max-w-2xl text-center text-white">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#f97316]">
          {{ destinations[currentSlide]?.eyebrow }}
        </p>

        <h1 class="mt-3 text-4xl font-semibold leading-tight md:text-6xl">
          {{ destinations[currentSlide]?.name }}
        </h1>
      </div>
    </div>
  </section>

  <!-- Destination Cards -->
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
          v-for="place in destinations"
          :key="place.slug"
          :to="`/destinations/${place.slug}`"
          class="
            group relative isolate aspect-[4/5] overflow-hidden rounded-[28px]
            bg-[#20231f] shadow-md transition duration-300
            hover:-translate-y-1 hover:shadow-xl
          "
        >
          <!-- Background image -->
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

          <!-- Bottom gradient overlay -->
          <div
            class="
              absolute inset-0 -z-10
              bg-gradient-to-t from-black/85 via-black/25 to-transparent
            "
          ></div>

          <!-- Bottom content: Title + Caption on left, Right-aligned upward-tilted arrow button on right -->
          <div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-7">
            <div class="min-w-0 text-white">
              <h3 class="text-2xl font-bold tracking-tight sm:text-3xl">
                {{ place.name }}
              </h3>
              <p class="mt-1.5 text-sm leading-5 text-white/85 sm:text-base">
                {{ place.caption }}
              </p>
            </div>

            <!-- Right-aligned circular button with upward-tilted arrow -->
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
    </div>
  </section>
</template>