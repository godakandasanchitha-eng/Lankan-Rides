<script setup lang="ts">
const destinations = [
  { name: 'Colombo', note: 'City energy, food, and seaside sunsets', time: '45 min from the airport' },
  { name: 'Kandy', note: 'Culture, gardens, and lake-side walks', time: 'About 3.5 hours' },
  { name: 'Ella', note: 'Tea country, trails, and mountain views', time: 'About 6 hours' },
  { name: 'Galle', note: 'Fort walls, southern coast, and cafés', time: 'About 2.5 hours' },
  { name: 'Sigiriya', note: 'Ancient history and wide-open landscapes', time: 'About 4 hours' },
  { name: 'Yala', note: 'Wildlife, wilderness, and safari country', time: 'About 5 hours' },
]
</script>
<template>
  <section class="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#75835f]">Go a little further</p>
    <h1 class="mt-4 max-w-3xl text-5xl font-medium tracking-[-0.05em] md:text-6xl">A whole island of places to find.</h1>
    <p class="mt-5 max-w-2xl text-lg leading-8 text-[#69716b]">These are just starting points. Connect a few favorites or take the long way between them.</p>
    <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <article v-for="(place, index) in destinations" :key="place.name" class="rounded-2xl bg-[#e9ebe3] p-7"><p class="text-xs uppercase tracking-[0.18em] text-[#75835f]">Destination 0{{ index + 1 }}</p><h2 class="mt-8 text-2xl font-medium">{{ place.name }}</h2><p class="mt-2 text-[#69716b]">{{ place.note }}</p><p class="mt-7 border-t border-black/10 pt-4 text-sm text-[#526a48]">{{ place.time }}</p></article>
    </div>
    <NuxtLink to="/booking" class="mt-9 inline-flex rounded-full bg-[#1d382c] px-6 py-4 text-sm font-medium text-white">Plan a route ↗</NuxtLink>
  </section>
</template>
