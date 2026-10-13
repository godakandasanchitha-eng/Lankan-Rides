<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const isScrollingUp = ref(false)
const route = useRoute()
let previousScrollY = 0

function handleScroll() {
  const currentScrollY = window.scrollY

  isScrollingUp.value =
    currentScrollY > 0 && currentScrollY < previousScrollY

  previousScrollY = currentScrollY
}

function navLinkClass(path: string) {
  return route.path === path
    ? 'bg-[#FFA500] text-black'
    : 'text-white/85 hover:bg-[#FFA500] hover:text-black'
}

onMounted(() => {
  previousScrollY = window.scrollY
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="min-h-screen bg-[#242124] text-white">
    <header class="sticky top-0 z-50 bg-transparent px-3 py-3 md:px-6">
      <div class="mx-auto max-w-7xl rounded-[28px]">
        <nav
          class="grid min-h-14 grid-cols-[1fr_auto] items-center rounded-full bg-black px-5 py-3 transition-shadow duration-200 md:grid-cols-[1fr_auto_1fr] md:px-6"
          :class="isScrollingUp ? 'shadow-md shadow-black/30' : 'shadow-none'"
          aria-label="Main navigation"
        >
          <!-- Logo -->
          <NuxtLink
            to="/"
            class="flex min-w-0 items-center gap-2 justify-self-start"
            aria-label="Lankan Rides home"
          >
            <span class="flex size-13 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
              <img
                src="/lankan-rides-logo.png"
                alt=""
                class="size-full object-contain"
              />
            </span>
          </NuxtLink>

          <!-- Center navigation -->
          <div class="hidden items-center gap-1 rounded-full bg-[#19191b] p-1 md:flex">
            <NuxtLink
              to="/"
              class="rounded-full px-4 py-2.5 text-sm font-medium transition-colors"
              :class="navLinkClass('/')"
            >
              Home
            </NuxtLink>

            <NuxtLink
              to="/services"
              class="rounded-full px-4 py-2.5 text-sm font-medium transition-colors"
              :class="navLinkClass('/services')"
            >
              Our Services
            </NuxtLink>

            <NuxtLink
              to="/destinations"
              class="rounded-full px-4 py-2.5 text-sm font-medium transition-colors"
              :class="navLinkClass('/destinations')"
            >
              Destinations
            </NuxtLink>

            <NuxtLink
              to="/fleet"
              class="rounded-full px-4 py-2.5 text-sm font-medium transition-colors"
              :class="navLinkClass('/fleet')"
            >
              Our Fleet
            </NuxtLink>

            <NuxtLink
              to="/about"
              class="rounded-full px-4 py-2.5 text-sm font-medium transition-colors"
              :class="navLinkClass('/about')"
            >
              About Us
            </NuxtLink>
          </div>

          <!-- Contact button -->
          <NuxtLink
            to="/booking"
            class="justify-self-end rounded-full bg-[#FFA500] px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#e69500] sm:px-5"
          >
            Contact us
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main>
      <slot />

      <!-- Car rental CTA -->
      <section class="overflow-visible bg-[#eaf1ff] px-5 py-16 md:px-8">
        <div
          class="relative mx-auto mt-28 min-h-[300px] max-w-6xl rounded-3xl bg-[#242124] px-6 pb-8 pt-24 text-white md:mt-0 md:flex md:min-h-[3px] md:items-center md:px-10 md:py-10"
        >
          <!-- Larger SUV overlaps the top and left edges of the banner -->
          <img
            src="/SUV-CTA.png"
            alt="SUV packed and ready for a Sri Lankan road trip"
            class="absolute left-1/2 top-0 z-10 h-64 w-80 -translate-x-1/2 -translate-y-1/2 object-contain md:left-[-150px] md:top-1/2 md:h-[500px] md:w-[620px] md:translate-x-0 md:-translate-y-[55%]"
          />

          <div class="relative z-20 text-center md:ml-[430px] md:flex-1 md:text-left">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Your island journey starts here
            </p>

            <h2 class="mt-2 text-2xl font-semibold leading-tight sm:text-3xl">
              Ready to explore Sri Lanka?
            </h2>

            <p class="mt-3 text-sm leading-6 text-white/85 sm:text-base">
              Find a comfortable ride for your next airport pickup, scenic drive,
              or island adventure.
            </p>

            <NuxtLink
              to="/booking"
              class="mt-5 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#20231f] transition-colors hover:bg-[#FFA500] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#242124]"
            >
              Book Now
              <span class="ml-2" aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-black px-6 text-white">
      <div class="mx-auto grid max-w-7xl gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Brand -->
        <div>
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-3"
            aria-label="Lankan Rides home"
          >
            <span class="flex size-12 items-center justify-center overflow-hidden rounded-full bg-white">
              <img
                src="/lankan-rides-logo.png"
                alt="Lankan Rides"
                class="size-full object-contain"
              />
            </span>
            <span class="text-lg font-semibold">Lankan Rides</span>
          </NuxtLink>

          <p class="mt-4 max-w-xs text-sm leading-6 text-white/65">
            Your local ride for discovering Sri Lanka, from airport pickups to
            scenic island journeys.
          </p>
        </div>

        <!-- Company -->
        <div>
          <h2 class="text-sm font-semibold">Company</h2>
          <ul class="mt-4 space-y-3 text-sm text-white/65">
            <li><NuxtLink to="/about" class="hover:text-[#FFA500]">About Us</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-[#FFA500]">Our Services</NuxtLink></li>
            <li><NuxtLink to="/fleet" class="hover:text-[#FFA500]">Our Fleet</NuxtLink></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h2 class="text-sm font-semibold">Support</h2>
          <ul class="mt-4 space-y-3 text-sm text-white/65">
            <li><NuxtLink to="/booking" class="hover:text-[#FFA500]">Contact Us</NuxtLink></li>
            <li><NuxtLink to="/booking" class="hover:text-[#FFA500]">Plan a Ride</NuxtLink></li>
            <li><NuxtLink to="/destinations" class="hover:text-[#FFA500]">Travel Information</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact details -->
        <div>
          <h2 class="text-sm font-semibold">Contact Us</h2>
          <ul class="mt-4 space-y-3 text-sm text-white/65">
            <li>
              <a href="tel:+94112345678" class="hover:text-[#FFA500]">
                +94 11 234 5678
              </a>
            </li>
            <li>
              <a href="mailto:hello@lankanrides.lk" class="hover:text-[#FFA500]">
                hello@lankanrides.lk
              </a>
            </li>
            <li>Colombo, Sri Lanka</li>
          </ul>
        </div>
      </div>

      <!-- Copyright and credit -->
      <div class="border-t border-white/15">
        <div
          class="mx-auto flex max-w-7xl flex-col gap-3 py-5 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>Web Design by <span class="font-semibold text-white">IS Studio</span></p>
          <p class="font-bold text-white">Copyright 2026</p>
        </div>
      </div>
    </footer>
  </div>
</template>