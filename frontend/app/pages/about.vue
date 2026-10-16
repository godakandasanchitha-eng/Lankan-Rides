<script setup lang="ts">
import { ref } from 'vue'

const { app } = useRuntimeConfig()

function publicAsset(path: string) {
  return `${app.baseURL}${path.replace(/^\/+/, '')}`
}

const activeFaq = ref<number | null>(0)

const faqList = [
  {
    question: 'How do I book a private ride or island tour?',
    answer:
      'It is simple and quick to get started. Submit your travel details (pickup location, destination, dates, and vehicle preference) through our booking page. Our team confirms your reservation within 24 hours to ensure a seamless driver match.',
  },
  {
    question: 'Can I customize my itinerary or add stops along the way?',
    answer:
      'Yes! All our private rides are fully flexible. You can request custom stops for photos, meals, or sightseeing along your route across Sri Lanka.',
  },
  {
    question: 'What types of vehicles are available for hire?',
    answer:
      'We offer comfortable options ranging from fuel-efficient saloons and sedans for city transfers to spacious SUVs built for hill-country and island adventures.',
  },
  {
    question: 'Are driver fees and fuel included in the booking?',
    answer:
      'Yes, all standard bookings include an experienced professional local driver, vehicle costs, and fuel for the agreed-upon route with zero hidden fees.',
  },
  {
    question: 'How far in advance should I reserve my ride?',
    answer:
      'We recommend booking at least a few days ahead—especially during peak holiday seasons—to secure your preferred vehicle and ensure availability.',
  },
]
</script>

<template>
  <!-- Hero Section -->
  <section
    class="relative isolate mx-0 my-5 min-h-[75svh] overflow-hidden rounded-3xl md:mx-3 xl:mx-4"
  >
    <img
      :src="publicAsset('/About-us-hero.jpg')"
      :alt="''"
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
        relative z-20 mx-auto flex min-h-[75svh] max-w-7xl items-end
        justify-center px-6 pb-12
        md:pb-16
        lg:px-16
      "
    >
      <div class="mx-auto max-w-2xl text-center text-white">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#f97316]">
          A local perspective
        </p>

        <h1 class="mt-3 text-4xl font-semibold leading-tight md:text-6xl">
          Good journeys begin with good people.
        </h1>
      </div>
    </div>
  </section>

  <!-- 2nd Section: About Lankan Rides Collage Section -->
  <section class="bg-white px-5 py-16 text-[#20231f] md:px-8 md:py-24">
    <div class="mx-auto max-w-7xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-[#20231f] md:text-4xl lg:text-5xl">
        About Lankan Rides
      </h2>
      <p class="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#6b6d68] md:text-base">
        Lankan Rides is a team of passionate local drivers dedicated to sharing Sri Lanka through safe, comfortable, and unhurried private journeys.
      </p>

      <!-- 3-Column Grid (Left images, Center dark card, Right images) -->
      <div class="mt-12 grid gap-6 md:grid-cols-3 lg:items-center">
        <!-- Left Column (2 Stacked Images) -->
        <div class="flex flex-col gap-6">
          <div class="relative h-64 overflow-hidden rounded-3xl bg-[#20231f] shadow-sm sm:h-72">
            <img
              :src="publicAsset('/Services-1.webp')"
              alt="Coastal road trip SUV transfer"
              class="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
            />
          </div>
          <div class="relative h-64 overflow-hidden rounded-3xl bg-[#20231f] shadow-sm sm:h-72">
            <img
              :src="publicAsset('/Services-2.webp')"
              alt="Friendly local driver greeting guests"
              class="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        <!-- Center Column (Dark Card with Grid Pattern) -->
        <div
          class="
            relative isolate flex flex-col justify-between overflow-hidden
            rounded-3xl bg-[#141416] p-8 text-white shadow-xl
            md:min-h-[580px] md:p-10
          "
        >
          <!-- Subtle Grid Background Pattern -->
          <div
            class="absolute inset-0 -z-10 opacity-15"
            style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 40px 40px;"
          ></div>

          <!-- Top Icon -->
          <div class="mx-auto flex size-12 items-center justify-center rounded-full bg-white/10 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
              />
            </svg>
          </div>

          <!-- Center Content -->
          <div class="my-auto py-6">
            <h3 class="text-2xl font-bold tracking-tight md:text-3xl">
              Local Drivers Committed to Real Hospitality
            </h3>
            <p class="mt-4 text-sm leading-6 text-white/80 md:text-base">
              Lankan Rides is built by experienced local drivers and travel hosts who care deeply about helping guests experience the real Sri Lanka. With a focus on comfort, flexibility, and genuine warmth, we turn every transfer and island tour into a memorable part of your holiday.
            </p>
          </div>

          <!-- Bottom Button -->
          <div>
            <NuxtLink
              to="/booking"
              class="
                inline-flex items-center justify-center rounded-full
                bg-[#f97316] px-6 py-3.5 text-sm font-semibold text-black
                transition-colors
                hover:bg-[#ea580c] hover:text-white
              "
            >
              More about us →
            </NuxtLink>
          </div>
        </div>

        <!-- Right Column (2 Stacked Images) -->
        <div class="flex flex-col gap-6">
          <div class="relative h-64 overflow-hidden rounded-3xl bg-[#20231f] shadow-sm sm:h-72">
            <img
              :src="publicAsset('/Services-3.webp')"
              alt="Sigiriya Rock Fortress"
              class="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
            />
          </div>
          <div class="relative h-64 overflow-hidden rounded-3xl bg-[#20231f] shadow-sm sm:h-72">
            <img
              :src="publicAsset('/Services-4.webp')"
              alt="Wildlife safari park excursion"
              class="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 3rd Section: Our Vision Section (Before FAQ, Matching Reference Layout) -->
  <section class="bg-[#f8f7f3] px-5 py-16 text-[#20231f] md:px-8 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <!-- Left Column: 2 Top Images + 1 Wide Bottom Image -->
        <div class="grid grid-cols-2 gap-4 sm:gap-5 lg:col-span-6">
          <!-- Top Left Image -->
          <div class="relative h-48 overflow-hidden rounded-2xl bg-[#20231f] sm:h-60">
            <img
              :src="publicAsset('/Driver-showing-route.webp')"
              alt="Comfortable private saloon"
              class="block h-full w-full object-cover object-center transition duration-500 hover:scale-105"
            />
          </div>

          <!-- Top Right Image -->
          <div class="relative h-48 overflow-hidden rounded-2xl bg-[#20231f] sm:h-60">
            <img
              :src="publicAsset('/Loading-luggage.webp')"
              alt="Spacious SUV for island tours"
              class="block h-full w-full object-cover object-center transition duration-500 hover:scale-105"
            />
          </div>

          <!-- Bottom Full-Width Image -->
          <div class="relative col-span-2 h-56 overflow-hidden rounded-2xl bg-[#20231f] sm:h-64">
            <img
              :src="publicAsset('/SUV-Hill-country.webp')"
              alt="Scenic coastal drive in Sri Lanka"
              class="block h-full w-full object-cover object-center transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        <!-- Right Column: Eyebrow, Heading, Sample Paragraphs & Contact Button -->
        <div class="lg:col-span-6">
          <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#20231f]">
            <span class="size-2 rounded-full bg-[#f97316]" aria-hidden="true"></span>
            Our Vision
          </div>

          <h2 class="mt-4 text-3xl font-semibold tracking-tight text-[#20231f] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Guiding Every Island Journey With Confidence
          </h2>

          <p class="mt-5 text-sm leading-7 text-[#6b6d68] sm:text-base">
            Our vision is to connect travelers with the right vehicles and trusted local drivers through thoughtful route planning, transparent pricing, and genuine island insight.
          </p>

          <p class="mt-4 text-sm leading-7 text-[#6b6d68] sm:text-base">
            We focus on comfort, reliability, and flexibility—so every transfer and multi-day tour feels effortless, safe, and rewarding from your first airport greeting to your final destination.
          </p>

          <!-- Pill Button with Inner White Circle Arrow linking to Contact Us (/booking) -->
          <div class="mt-8">
            <NuxtLink
              to="/booking"
              class="
                group inline-flex items-center gap-3 rounded-full bg-[#19191b]
                py-1.5 pr-1.5 pl-6 text-sm font-medium text-white
                transition-colors
                hover:border-[#f97316] hover:bg-[#f97316] hover:text-black
              "
            >
              <span>Contact Us</span>
              <span
                class="
                  flex size-9 items-center justify-center rounded-full bg-white
                  text-[#19191b] transition-transform duration-200
                  group-hover:translate-x-0.5
                "
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
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4th Section: Smooth FAQ Section -->
  <section class="bg-white px-5 py-16 text-[#20231f] lg:px-8 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-12 lg:grid-cols-12 lg:items-start">
        <!-- Left Column: Title & FAQ Tag -->
        <div class="lg:col-span-5">
          <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b6d68]">
            <span class="size-1.5 rounded-full bg-[#f97316]" aria-hidden="true"></span>
            FAQ
          </div>
          <h2 class="mt-4 text-4xl font-bold tracking-tight text-[#20231f] sm:text-5xl lg:text-6xl leading-[1.1]">
            Clear Answers.<br />
            No Confusion.
          </h2>
        </div>

        <!-- Right Column: Smooth Interactive FAQ Accordion List -->
        <div class="lg:col-span-7">
          <div class="divide-y divide-[#dfddd6] border-t border-b border-[#dfddd6]">
            <div
              v-for="(faq, index) in faqList"
              :key="faq.question"
              class="py-6"
            >
              <button
                type="button"
                class="flex w-full cursor-pointer items-center justify-between gap-4 text-left focus:outline-none"
                :aria-expanded="activeFaq === index"
                @click="activeFaq = activeFaq === index ? null : index"
              >
                <h3 class="text-lg font-semibold text-[#20231f] transition-colors hover:text-[#f97316] md:text-xl">
                  {{ faq.question }}
                </h3>
                <span
                  class="
                    flex size-8 shrink-0 items-center justify-center rounded-lg
                    bg-[#e5e4df] text-lg font-medium text-[#20231f]
                    transition-all duration-300
                  "
                  :class="activeFaq === index ? 'bg-[#f97316] text-black' : ''"
                >
                  {{ activeFaq === index ? '−' : '+' }}
                </span>
              </button>

              <!-- Smooth height & opacity transition container -->
              <div
                class="grid transition-all duration-300 ease-in-out"
                :class="
                  activeFaq === index
                    ? 'mt-4 grid-rows-[1fr] opacity-100'
                    : 'mt-0 grid-rows-[0fr] opacity-0'
                "
              >
                <div class="overflow-hidden">
                  <p class="pr-8 text-sm leading-7 text-[#6b6d68] md:text-base">
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>