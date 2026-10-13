<script setup lang="ts">
const services = [
  { title: 'Airport transfers', text: 'A smooth welcome to Sri Lanka, with pickup and drop-off planned around your flight.' },
  { title: 'Private day trips', text: 'See the highlights or follow a quieter path, with the flexibility to make stops along the way.' },
  { title: 'Multi-day journeys', text: 'Connect coast, hill country, and heritage sites in one thoughtfully paced island trip.' },
  { title: 'Custom itineraries', text: 'Share your interests and timeline; we can help shape a route that feels like yours.' },
]
</script>
<template>
  <section class="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#75835f]">Our services</p>
    <h1 class="mt-4 max-w-3xl text-5xl font-medium tracking-[-0.05em] md:text-6xl">The ride is part of the trip.</h1>
    <p class="mt-5 max-w-2xl text-lg leading-8 text-[#69716b]">From a simple airport pickup to a week exploring the island, travel with a local driver and a plan that can flex.</p>
    <div class="mt-12 grid gap-4 sm:grid-cols-2">
      <article v-for="(service, i) in services" :key="service.title" class="rounded-2xl border border-black/5 bg-white/70 p-7 md:p-9"><p class="text-sm text-[#87936f]">0{{ i + 1 }}</p><h2 class="mt-8 text-2xl font-medium">{{ service.title }}</h2><p class="mt-3 max-w-lg leading-7 text-[#69716b]">{{ service.text }}</p></article>
    </div>
    <NuxtLink to="/booking" class="mt-9 inline-flex rounded-full bg-[#1d382c] px-6 py-4 text-sm font-medium text-white">Ask about your trip ↗</NuxtLink>
  </section>
</template>
