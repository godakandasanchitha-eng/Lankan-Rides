<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const isScrollingUp = ref(false)
const isMobileMenuOpen = ref(false)
const route = useRoute()
const { app } = useRuntimeConfig()
let previousScrollY = 0

function publicAsset(path: string) {
  return `${app.baseURL}${path.replace(/^\/+/, '')}`
}

function handleScroll() {
  const currentScrollY = window.scrollY

  isScrollingUp.value =
    currentScrollY > 0 && currentScrollY < previousScrollY

  previousScrollY = currentScrollY
}

function navLinkClass(path: string) {
  return route.path === path
    ? 'bg-[#f97316] text-black'
    : 'text-white/85 hover:bg-[#f97316] hover:text-black'
}

async function scrollToContactInfo() {
  isMobileMenuOpen.value = false
  await nextTick()
  const el = document.getElementById('contact-info')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

// Auto-scrolling CTA cards (Car rental & Destination routes)
interface CtaRideCard {
  title: string
  subtitle: string
  tag: string
  image: string
}

const ctaCards: CtaRideCard[] = [
  {
    title: 'Colombo  →  Ella',
    subtitle: 'SUV (Prado) · Private Driver',
    tag: 'Hill Country',
    image: '/Ella.webp',
  },
  {
    title: 'Airport (CMB)  →  Galle',
    subtitle: 'Comfort Sedan · Southern Coast',
    tag: '2.5 Hrs',
    image: '/Galle.webp',
  },
  {
    title: 'Kandy  →  Nuwara Eliya',
    subtitle: 'Saloon · Tea Country Route',
    tag: 'Scenic Drive',
    image: '/kandy.webp',
  },
  {
    title: 'Galle  →  Mirissa & Yala',
    subtitle: 'High-Roof Van (KDH) · Group Tour',
    tag: 'Coast & Safari',
    image: '/Mirissa.webp',
  },
  {
    title: 'Ella  →  Arugam Bay',
    subtitle: 'SUV · East Coast Transfer',
    tag: 'Beach Hop',
    image: '/Arugambay.webp',
  },
]

const activeCtaIndex = ref(0)
let ctaInterval: ReturnType<typeof setInterval> | null = null

function getCardPosition(index: number) {
  const total = ctaCards.length
  const diff = (index - activeCtaIndex.value + total) % total

  if (diff === 0) return 'center'
  if (diff === total - 1) return 'top'
  if (diff === 1) return 'bottom'
  if (diff === total - 2) return 'exit-top'
  return 'enter-bottom'
}

function getCardClasses(index: number) {
  const pos = getCardPosition(index)

  switch (pos) {
    case 'top':
      return 'z-10 -translate-y-[84px] scale-[0.94] border-[#eceae4]/80 bg-white/65 py-4 opacity-60 backdrop-blur-xs shadow-none'
    case 'center':
      return 'z-20 translate-y-0 scale-105 border-[#e2e0d8] bg-white py-5 opacity-100 shadow-xl'
    case 'bottom':
      return 'z-10 translate-y-[84px] scale-[0.94] border-[#eceae4]/80 bg-white/65 py-4 opacity-60 backdrop-blur-xs shadow-none'
    case 'exit-top':
      return 'pointer-events-none z-0 -translate-y-[145px] scale-90 border-transparent bg-white/40 py-4 opacity-0'
    default:
      return 'pointer-events-none z-0 translate-y-[145px] scale-90 border-transparent bg-white/40 py-4 opacity-0'
  }
}

onMounted(() => {
  previousScrollY = window.scrollY
  window.addEventListener('scroll', handleScroll, { passive: true })

  ctaInterval = setInterval(() => {
    activeCtaIndex.value = (activeCtaIndex.value + 1) % ctaCards.length
  }, 3000)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  if (ctaInterval !== null) {
    clearInterval(ctaInterval)
  }
})

// Close mobile menu automatically on route change & handle hash scrolling
watch(
  () => route.fullPath,
  async () => {
    isMobileMenuOpen.value = false
    if (route.hash === '#contact-info') {
      await nextTick()
      setTimeout(() => {
        const el = document.getElementById('contact-info')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 150)
    }
  },
)
</script>

<template>
  <div class="min-h-screen bg-[#242124] text-white">
    <!-- Header wrapper is relative so the mobile menu can absolute-position cleanly over the page -->
    <header class="sticky top-0 z-50 bg-transparent px-3 py-3 md:px-6">
      <div class="relative mx-auto max-w-7xl rounded-[28px]">
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
                :src="publicAsset('/lankan-rides-logo.png')"
                alt=""
                class="size-full object-contain"
              />
            </span>
          </NuxtLink>

          <!-- Center navigation (Desktop) -->
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
              to="/about"
              class="rounded-full px-4 py-2.5 text-sm font-medium transition-colors"
              :class="navLinkClass('/about')"
            >
              About Us
            </NuxtLink>
          </div>

          <!-- Right side: Plan a Ride + Contact Button (Desktop) & Hamburger Toggle (Mobile) -->
          <div class="flex items-center gap-2.5 justify-self-end">
            <NuxtLink
              to="/booking"
              class="hidden rounded-full border border-white/25 bg-[#19191b] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#f97316] hover:bg-[#f97316] hover:text-black sm:px-5 md:inline-block"
            >
              Plan a ride
            </NuxtLink>

            <NuxtLink
              :to="{ path: '/booking', hash: '#contact-info' }"
              class="hidden rounded-full bg-[#f97316] px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#ea580c] sm:px-5 md:inline-block"
              @click="scrollToContactInfo"
            >
              Contact us
            </NuxtLink>

            <!-- Hamburger Button (Mobile Only) -->
            <button
              type="button"
              aria-label="Toggle mobile menu"
              class="
                flex size-11 items-center justify-center rounded-full
                bg-[#19191b] text-white transition-colors
                hover:bg-[#f97316] hover:text-black
                md:hidden
              "
              @click="isMobileMenuOpen = !isMobileMenuOpen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  v-if="!isMobileMenuOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </nav>

        <!-- Mobile Drawer Overlay Menu (Absolute positioned to float cleanly over hero/page content) -->
        <div
          v-if="isMobileMenuOpen"
          class="
            absolute inset-x-0 top-20 z-50 overflow-hidden rounded-3xl
            border border-white/15 bg-black/95 p-6 text-white shadow-2xl
            backdrop-blur-xl
            md:hidden
          "
        >
          <div class="flex flex-col space-y-3">
            <NuxtLink
              to="/"
              class="rounded-2xl px-4 py-3 text-base font-medium transition-colors"
              :class="route.path === '/' ? 'bg-[#f97316] font-semibold text-black' : 'hover:bg-white/10'"
              @click="isMobileMenuOpen = false"
            >
              Home
            </NuxtLink>

            <NuxtLink
              to="/services"
              class="rounded-2xl px-4 py-3 text-base font-medium transition-colors"
              :class="route.path === '/services' ? 'bg-[#f97316] font-semibold text-black' : 'hover:bg-white/10'"
              @click="isMobileMenuOpen = false"
            >
              Our Services
            </NuxtLink>

            <NuxtLink
              to="/destinations"
              class="rounded-2xl px-4 py-3 text-base font-medium transition-colors"
              :class="route.path === '/destinations' ? 'bg-[#f97316] font-semibold text-black' : 'hover:bg-white/10'"
              @click="isMobileMenuOpen = false"
            >
              Destinations
            </NuxtLink>

            <NuxtLink
              to="/about"
              class="rounded-2xl px-4 py-3 text-base font-medium transition-colors"
              :class="route.path === '/about' ? 'bg-[#f97316] font-semibold text-black' : 'hover:bg-white/10'"
              @click="isMobileMenuOpen = false"
            >
              About Us
            </NuxtLink>

            <NuxtLink
              to="/booking"
              class="
                mt-2 flex items-center justify-center rounded-2xl border
                border-white/25 bg-[#19191b] px-5 py-3.5 text-base
                font-semibold text-white transition-colors
                hover:border-[#f97316] hover:bg-[#f97316] hover:text-black
              "
              @click="isMobileMenuOpen = false"
            >
              Plan a ride
            </NuxtLink>

            <NuxtLink
              :to="{ path: '/booking', hash: '#contact-info' }"
              class="
                flex items-center justify-center rounded-2xl bg-[#f97316]
                px-5 py-3.5 text-base font-semibold text-black
                transition-colors hover:bg-[#ea580c]
              "
              @click="scrollToContactInfo"
            >
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <main>
      <slot />

      <!-- Auto-Scrolling Stacked Card CTA Section -->
      <section class="bg-white px-5 py-12 md:px-8 md:py-16">
        <div
          class="
            relative isolate mx-auto max-w-7xl overflow-hidden rounded-[36px]
            border border-[#eceae4] bg-[#f7f7f5] px-6 py-14 text-[#20231f]
            shadow-sm
            md:px-14 md:py-20
          "
        >
          <!-- Subtle right-side atmospheric background image & soft fade -->
          <div class="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full lg:w-3/5">
            <img
              :src="publicAsset('/Ella.webp')"
              alt=""
              class="size-full object-cover object-center opacity-15"
            />
            <div
              class="
                absolute inset-0
                bg-gradient-to-r from-[#f7f7f5] via-[#f7f7f5]/90 to-[#f7f7f5]/60
              "
            ></div>
            <div
              class="
                absolute inset-0
                bg-gradient-to-t from-[#f7f7f5] via-transparent to-[#f7f7f5]
              "
            ></div>
          </div>

          <div class="grid items-center gap-12 lg:grid-cols-12">
            <!-- Left Column: Heading, Subtitle & Two Pill Buttons -->
            <div class="lg:col-span-6">
              <h2
                class="
                  text-3xl font-semibold tracking-tight text-[#141416]
                  sm:text-4xl
                  md:text-[44px] md:leading-[1.15]
                "
              >
                Planning a journey across Sri Lanka with Lankan Rides?
              </h2>

              <p class="mt-4 max-w-md text-sm leading-6 text-[#6b6d68] sm:text-base">
                Lankan Rides pairs comfortable private vehicles with trusted local drivers for airport transfers and custom island tours.
              </p>

              <div class="mt-8 flex flex-wrap items-center gap-3">
                <NuxtLink
                  to="/booking"
                  class="
                    inline-flex items-center justify-center rounded-full
                    bg-[#141416] px-6 py-3.5 text-xs font-semibold text-white
                    transition-colors
                    hover:bg-[#f97316] hover:text-black
                    sm:text-sm
                  "
                >
                  Book a ride
                </NuxtLink>

                <NuxtLink
                  to="/destinations"
                  class="
                    group inline-flex items-center justify-center gap-2.5
                    rounded-full border border-[#d8d7d2] bg-white/80 px-6 py-3.5
                    text-xs font-semibold text-[#20231f] transition-colors
                    hover:border-[#f97316] hover:bg-[#f97316] hover:text-black
                    sm:text-sm
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4 text-[#555852] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 5v6a3 3 0 0 0 3 3h10" />
                    <path d="m15 10 4 4-4 4" />
                  </svg>
                  <span>Explore destinations</span>
                </NuxtLink>
              </div>
            </div>

            <!-- Right Column: Smooth Auto-Scrolling 3-Card Stack + Connector & Bottom Pill -->
            <div class="flex flex-col items-center lg:col-span-6">
              <div class="relative flex h-[256px] w-full max-w-md items-center justify-center overflow-hidden px-3">
                <div
                  v-for="(card, index) in ctaCards"
                  :key="card.title"
                  class="
                    absolute inset-x-3 flex items-center justify-between gap-4
                    rounded-2xl border px-5
                    transition-all duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                  "
                  :class="getCardClasses(index)"
                >
                  <div class="flex min-w-0 items-center gap-3.5">
                    <img
                      :src="publicAsset(card.image)"
                      :alt="card.title"
                      class="
                        shrink-0 rounded-full object-cover ring-2
                        ring-[#f97316]/20 transition-all duration-700
                      "
                      :class="getCardPosition(index) === 'center' ? 'size-12' : 'size-10'"
                    />

                    <div class="min-w-0">
                      <p
                        class="truncate font-semibold text-[#141416] transition-all duration-700"
                        :class="getCardPosition(index) === 'center' ? 'text-base' : 'text-sm'"
                      >
                        {{ card.title }}
                      </p>
                      <p class="truncate text-xs text-[#6b6d68]">
                        {{ card.subtitle }}
                      </p>
                    </div>
                  </div>

                  <span
                    class="shrink-0 font-bold tracking-tight transition-all duration-700"
                    :class="
                      getCardPosition(index) === 'center'
                        ? 'text-base text-[#141416] sm:text-lg'
                        : 'text-sm text-[#6b6d68]'
                    "
                  >
                    {{ card.tag }}
                  </span>
                </div>
              </div>

              <!-- Connector Lines, Orange Car Icon Circle & Bottom Pill Badge -->
              <div class="flex flex-col items-center">
                <!-- Top horizontal bracket line + vertical stem -->
                <div class="h-3 w-44 rounded-b-lg border-x border-b border-[#d5d4ce]"></div>
                <div class="h-3 w-px bg-[#d5d4ce]"></div>

                <!-- Circular Orange Icon Badge -->
                <div
                  class="
                    flex size-8 items-center justify-center rounded-full
                    bg-[#f97316] text-black shadow-sm ring-4 ring-[#f97316]/15
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 13.5 4.5 8h15l1.5 5.5v5h-3v-2H6v2H3v-5Z"
                    />
                  </svg>
                </div>

                <div class="h-2.5 w-px bg-[#d5d4ce]"></div>

                <!-- Bottom Dark Pill -->
                <NuxtLink
                  to="/booking"
                  class="
                    rounded-full bg-[#141416] px-5 py-2 text-xs font-semibold
                    text-white shadow-md transition-colors
                    hover:bg-[#f97316] hover:text-black
                  "
                >
                  Private Island Rides
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-black px-6 pt-16 pb-8 text-white">
      <div class="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12 lg:items-start">
        <!-- Left & Middle: Navigation Links -->
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-8">
          <ul class="space-y-4 text-xs font-semibold tracking-wider text-white">
            <li><NuxtLink to="/" class="hover:text-[#f97316]">HOME</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-[#f97316]">SERVICES</NuxtLink></li>
            <li><NuxtLink to="/destinations" class="hover:text-[#f97316]">DESTINATIONS</NuxtLink></li>
            <li>
              <NuxtLink
                :to="{ path: '/booking', hash: '#contact-info' }"
                class="hover:text-[#f97316]"
                @click="scrollToContactInfo"
              >
                CONTACT US
              </NuxtLink>
            </li>
          </ul>

          <ul class="space-y-4 text-xs font-semibold tracking-wider text-white">
            <li><NuxtLink to="/about" class="hover:text-[#f97316]">PRIVACY POLICY</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-[#f97316]">TERM AND CONDITION</NuxtLink></li>
          </ul>
        </div>

        <!-- Right Column: Plan your island journey & Button -->
        <div class="lg:col-span-4">
          <h3 class="text-sm font-bold tracking-wide text-white">
            Plan your island journey
          </h3>
          <p class="mt-2 text-xs text-white/65">
            Connect with our local team to organize your private transfer or island tour.
          </p>

          <div class="mt-4">
            <NuxtLink
              to="/booking"
              class="
                inline-flex items-center justify-center rounded-full
                bg-[#f97316] px-6 py-3 text-xs font-semibold text-black
                transition-colors
                hover:bg-[#ea580c] hover:text-white
              "
            >
              Plan a ride →
            </NuxtLink>
          </div>

          <!-- Social Icons -->
          <div class="mt-6 flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              class="
                flex size-10 items-center justify-center rounded-xl
                border border-white/10 bg-[#161618] text-white transition
                hover:border-[#f97316] hover:bg-[#f97316] hover:text-black
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              class="
                flex size-10 items-center justify-center rounded-xl
                border border-white/10 bg-[#161618] text-white transition
                hover:border-[#f97316] hover:bg-[#f97316] hover:text-black
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              class="
                flex size-10 items-center justify-center rounded-xl
                border border-white/10 bg-[#161618] text-white transition
                hover:border-[#f97316] hover:bg-[#f97316] hover:text-black
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 1 0 0 20v-7h-2.5v-3H12V9.5a3.5 3.5 0 0 1 3.5-3.5h2.5v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v7a10 10 0 0 0 2.5-18z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider & Copyright -->
      <div class="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-white/50">
        LANKAN RIDES, 2026 ALL RIGHTS RESERVED.
      </div>
    </footer>
  </div>
</template>