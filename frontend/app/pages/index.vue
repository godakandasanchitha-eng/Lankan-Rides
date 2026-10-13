<script setup lang="ts">
const destinations = [
  {
    name: 'Ella',
    caption: 'Mountain views and scenic train rides.',
    image: '/Ella.webp',
  },
  {
    name: 'Kandy',
    caption: 'A lakeside city rich in culture and history.',
    image: '/kandy.webp',
  },
  {
    name: 'Galle',
    caption: 'Explore the historic fort by the coast.',
    image: '/Galle.webp',
  },
  {
    name: 'Mirissa',
    caption: 'Relax on golden beaches by the Indian Ocean.',
    image: '/Mirissa.webp',
  },
  {
    name: 'Arugam Bay',
    caption: 'Ride the waves and unwind on Sri Lanka’s east coast.',
    image: '/Arugambay.webp',
  },
]

const vehicles = [
  {
    name: 'Toyota Premio',
    type: 'Saloon',
    fuel: 'Petrol',
    image: '/Premio.webp',
    description: 'A comfortable choice for city trips and airport transfers.',
  },
  {
    name: 'Toyota RAV4',
    type: 'SUV',
    fuel: 'Petrol',
    image: '/RAV 4.webp',
    description: 'Extra room and a higher ride for exploring the island.',
  },
  {
    name: 'Honda Civic',
    type: 'Sedan',
    fuel: 'Petrol',
    image: '/Civic.webp',
    description: 'A refined, spacious ride for longer journeys.',
  },
]

const testimonials = [
  {
    name: 'Nadeesha P.',
    detail: 'Family holiday · Colombo',
    quote:
      'Our driver made the trip feel easy from the airport pickup to our last stop. We loved being able to take the journey at our own pace.',
  },
  {
    name: 'Daniel M.',
    detail: 'Holiday traveler · Australia',
    quote:
      'The hill country drive was a highlight of our visit. The scenery was beautiful, and having a local driver made the day much more relaxed.',
  },
  {
    name: 'Amara & James',
    detail: 'Couple’s trip · United Kingdom',
    quote:
      'We had a comfortable ride and enjoyed stopping for photos along the way. It was a lovely way to see more of Sri Lanka.',
  },
  {
    name: 'Ruwan S.',
    detail: 'Business traveler · Kandy',
    quote:
      'Booking our transfer was straightforward, and the ride was comfortable. It made getting to our destination after a long flight much easier.',
  },
  {
    name: 'Sophie L.',
    detail: 'First visit to Sri Lanka · Singapore',
    quote:
      'I appreciated the flexibility to adjust our route. We got to explore places we might have missed if we had followed a fixed schedule.',
  },
  {
    name: 'Mila T.',
    detail: 'Family holiday · Germany',
    quote:
      'A comfortable ride, a beautiful route, and a relaxed day for our family. We came away with some wonderful memories.',
  },
]
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
      <source src="/hill-country-scenic-shot.mp4" type="video/mp4" />
    </video>

    <div class="absolute inset-0 z-10 bg-black/40"></div>

    <div
      class="relative z-20 mx-auto flex min-h-[85svh] max-w-7xl items-center px-6 pt-1 pb-32 lg:px-16"
    >
      <div class="mx-auto max-w-2xl text-center text-white">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFA500]">
          Private rides · Local knowledge
        </p>

        <h1 class="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
          Discover Sri Lanka,
          <span class="text-[#FFA500]">one ride at a time.</span>
        </h1>

        <p class="mx-auto mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
          From airport pickups to island tours, explore Sri Lanka with a trusted local driver.
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="/booking"
            class="rounded-full border border-transparent bg-[#FFA500] px-6 py-4 font-semibold text-[#18392d] transition-colors hover:border-white hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:ring-offset-2"
          >
            Plan your ride
          </NuxtLink>

          <NuxtLink
            to="/destinations"
            class="rounded-full border border-white/70 px-6 py-4 font-semibold text-white transition-colors hover:border-[#FFA500] hover:bg-[#FFA500] hover:text-black"
          >
            Explore destinations
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Why travel with us -->
  <section class="bg-white px-6 py-16 text-[#20231f] md:px-10 md:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#bd6b28]">
          The Lankan Rides difference
        </p>

        <h2 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          More than just a ride
        </h2>

        <p class="mt-4 text-base leading-7 text-[#6b6d68]">
          Enjoy a smoother way to explore Sri Lanka, with thoughtful service from
          your first pickup to your final stop.
        </p>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-3">
        <!-- Feature 1 -->
        <article class="rounded-2xl border border-[#eceae4] bg-[#faf9f6] p-7">
          <div class="flex size-12 items-center justify-center rounded-xl bg-[#fff0d6] text-[#bd6b28]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z"
              />
              <circle cx="12" cy="10" r="2.25" />
            </svg>
          </div>

          <h3 class="mt-5 text-lg font-semibold">Local knowledge</h3>
          <p class="mt-2 text-sm leading-6 text-[#6b6d68]">
            Get helpful local insight and a more personal journey as you travel
            between Sri Lanka’s highlights.
          </p>
        </article>

        <!-- Feature 2 -->
        <article class="rounded-2xl border border-[#eceae4] bg-[#faf9f6] p-7">
          <div class="flex size-12 items-center justify-center rounded-xl bg-[#fff0d6] text-[#bd6b28]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
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
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.5 13h11M7 8l1-3h8l1 3"
              />
              <circle cx="7.5" cy="13.5" r=".75" fill="currentColor" />
              <circle cx="16.5" cy="13.5" r=".75" fill="currentColor" />
            </svg>
          </div>

          <h3 class="mt-5 text-lg font-semibold">Comfort for the journey</h3>
          <p class="mt-2 text-sm leading-6 text-[#6b6d68]">
            Choose a ride that suits your trip, from airport transfers to
            comfortable drives around the island.
          </p>
        </article>

        <!-- Feature 3 -->
        <article class="rounded-2xl border border-[#eceae4] bg-[#faf9f6] p-7">
          <div class="flex size-12 items-center justify-center rounded-xl bg-[#fff0d6] text-[#bd6b28]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
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
                d="M12 7v5l3.5 2"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 3.8 5.5 5.3M17 3.8l1.5 1.5"
              />
            </svg>
          </div>

          <h3 class="mt-5 text-lg font-semibold">Flexible travel plans</h3>
          <p class="mt-2 text-sm leading-6 text-[#6b6d68]">
            Plan around your schedule, add stops along the way, and make more
            time for the places you want to see.
          </p>
        </article>
      </div>
    </div>
  </section>

  <!-- Top destinations -->
  <section class="bg-[#f8f7f3] px-6 py-16 text-[#20231f] md:px-10 md:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#bd6b28]">
          Find your next stop
        </p>

        <h2 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Explore Sri Lanka’s top destinations
        </h2>

        <p class="mt-4 text-base leading-7 text-[#6b6d68]">
          From cool hill country to sunny southern shores, find a place to make
          your own.
        </p>
      </div>

      <div class="mt-10 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:auto-rows-[260px] lg:grid-cols-4">
        <NuxtLink
          v-for="(destination, index) in destinations"
          :key="destination.name"
          to="/destinations"
          class="group relative isolate overflow-hidden rounded-2xl bg-[#20231f]"
          :class="
            index === 0
              ? 'sm:row-span-2 sm:min-h-[440px] lg:col-span-2 lg:row-span-2 lg:min-h-[540px]'
              : ''
          "
        >
          <img
            :src="destination.image"
            :alt="destination.name"
            loading="lazy"
            class="absolute inset-0 -z-20 size-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div
            class="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/15 to-transparent"
          ></div>

          <div class="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
            <h3 class="text-xl font-semibold md:text-2xl">
              {{ destination.name }}
            </h3>
            <p class="mt-1 max-w-sm text-sm leading-5 text-white/85">
              {{ destination.caption }}
            </p>
          </div>
        </NuxtLink>
      </div>

      <div class="mt-8 text-center">
        <NuxtLink
          to="/destinations"
          class="inline-flex items-center justify-center rounded-full bg-[#FFA500] px-6 py-3 font-semibold text-black transition-colors hover:bg-[#e69500] focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:ring-offset-2"
        >
          Explore Destinations
          <span class="ml-2" aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- Our vehicles -->
  <section class="bg-white px-6 py-16 text-[#20231f] md:px-10 md:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#bd6b28]">
          Find your perfect ride
        </p>

        <h2 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Choose your way around the island
        </h2>

        <p class="mt-4 text-base leading-7 text-[#6b6d68]">
          From comfortable city rides to roomier adventures, choose a vehicle
          that suits your journey.
        </p>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="vehicle in vehicles"
          :key="vehicle.name"
          class="group overflow-hidden rounded-2xl border border-[#eceae4] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="relative overflow-hidden bg-[#f5f3ed]">
            <img
              :src="vehicle.image"
              :alt="vehicle.name"
              loading="lazy"
              class="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
            />

            <span
              class="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#20231f] shadow-sm"
            >
              {{ vehicle.type }}
            </span>
          </div>

          <div class="p-6">
            <div class="flex flex-wrap items-center gap-2">
              <span class="rounded-full bg-[#fff0d6] px-3 py-1 text-xs font-semibold text-[#8f4c18]">
                {{ vehicle.fuel }}
              </span>
              <span class="rounded-full bg-[#f2f2ef] px-3 py-1 text-xs font-medium text-[#5f625d]">
                Private ride
              </span>
            </div>

            <h3 class="mt-4 text-xl font-semibold">
              {{ vehicle.name }}
            </h3>

            <p class="mt-2 text-sm leading-6 text-[#6b6d68]">
              {{ vehicle.description }}
            </p>

            <NuxtLink
              to="/booking"
              class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#a85e20] transition-colors hover:text-[#754016]"
            >
              Book this vehicle
              <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </article>
      </div>

      <div class="mt-9 text-center">
        <NuxtLink
          to="/fleet"
          class="inline-flex items-center justify-center rounded-full border border-[#20231f] px-6 py-3 font-semibold text-[#20231f] transition-colors hover:bg-[#20231f] hover:text-white"
        >
          View our fleet
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="bg-[#f5f5f3] px-6 py-16 text-[#20231f] md:px-10 md:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="max-w-2xl">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#bd6b28]">
          Sample guest stories
        </p>

        <h2 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Kind words from the road
        </h2>

        <p class="mt-4 text-base leading-7 text-[#6b6d68]">
          A few sample stories about discovering Sri Lanka with Lankan Rides.
        </p>
      </div>

      <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          class="rounded-2xl border border-black/5 p-6 shadow-sm"
          :class="
            index === 2
              ? 'bg-[#18392d] text-white'
              : 'bg-white text-[#20231f]'
          "
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-center gap-3">
              <div
                class="flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                :class="
                  index === 2
                    ? 'bg-white/15 text-white'
                    : 'bg-[#fff0d6] text-[#8f4c18]'
                "
                aria-hidden="true"
              >
                {{ testimonial.name.slice(0, 1) }}
              </div>

              <div>
                <h3 class="font-semibold">{{ testimonial.name }}</h3>
                <p
                  class="mt-0.5 text-xs"
                  :class="index === 2 ? 'text-white/65' : 'text-[#777a74]'"
                >
                  {{ testimonial.detail }}
                </p>
              </div>
            </div>

            <span
              class="shrink-0 text-sm tracking-[0.12em] text-[#e6a800]"
              aria-label="5 out of 5 stars"
            >
              ★★★★★
            </span>
          </div>

          <p
            class="mt-6 text-sm leading-6"
            :class="index === 2 ? 'text-white/85' : 'text-[#555852]'"
          >
            “{{ testimonial.quote }}”
          </p>

          <span
            class="mt-5 inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
            :class="
              index === 2
                ? 'bg-white/10 text-white/70'
                : 'bg-[#f2f2ef] text-[#777a74]'
            "
          >
            Sample review
          </span>
        </article>
      </div>
    </div>
  </section>
</template>