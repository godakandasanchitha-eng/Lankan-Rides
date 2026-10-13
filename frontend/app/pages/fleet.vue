<script setup lang="ts">
const vehicles = [
  { name: 'Comfort sedan', people: 'Up to 3 passengers', use: 'Airport transfers, couples, and small groups' },
  { name: 'Family van', people: 'Up to 8 passengers', use: 'Families, groups, and extra luggage' },
]
</script>
<template>
  <section class="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#75835f]">The fleet</p><h1 class="mt-4 text-5xl font-medium tracking-[-0.05em] md:text-6xl">Room for the way you travel.</h1>
    <p class="mt-5 max-w-2xl text-lg leading-8 text-[#69716b]">Tell us who’s coming and what you’re bringing. We’ll help match your trip with the right vehicle.</p>
    <div class="mt-12 grid gap-4 md:grid-cols-2"><article v-for="car in vehicles" :key="car.name" class="rounded-2xl bg-[#e9ebe3] p-8 md:p-10"><div class="grid size-12 place-items-center rounded-full bg-[#1d382c] text-xl text-white">↗</div><h2 class="mt-8 text-2xl font-medium">{{ car.name }}</h2><p class="mt-3 text-[#526a48]">{{ car.people }}</p><p class="mt-2 text-[#69716b]">{{ car.use }}</p></article></div>
    <NuxtLink to="/booking" class="mt-9 inline-flex rounded-full bg-[#1d382c] px-6 py-4 text-sm font-medium text-white">Find the right ride ↗</NuxtLink>
  </section>
</template>
