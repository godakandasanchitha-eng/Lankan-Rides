<script setup lang="ts">
const form = reactive({ pickup: '', dropoff: '', date: '', passengers: 1, name: '', email: '', phone: '', notes: '' })
const state = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')
const errorMessage = ref('')

async function submitBooking() {
  state.value = 'sending'
  errorMessage.value = ''
  try {
    // Replace this path with the booking endpoint from the existing backend.
    const { request } = useApi()
    await request('/bookings', { method: 'POST', body: form })
    state.value = 'sent'
  } catch {
    state.value = 'error'
    errorMessage.value = 'We could not send that just now. Please check the API URL and booking endpoint.'
  }
}
</script>

<template>
  <section class="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">
    <div><p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#75835f]">Let’s get you there</p><h1 class="mt-4 text-5xl font-medium tracking-[-0.05em] md:text-6xl">Start with a few details.</h1><p class="mt-5 max-w-md text-lg leading-8 text-[#69716b]">Share the outline of your trip. We’ll confirm the details with you directly.</p><div class="mt-10 rounded-2xl bg-[#e9ebe3] p-6 text-sm leading-7 text-[#526057]"><p class="font-medium text-[#1d382c]">Prefer to talk?</p><p>Connect your existing contact details here, or add a direct WhatsApp link.</p></div></div>
    <form class="rounded-3xl border border-black/5 bg-white/70 p-6 md:p-9" @submit.prevent="submitBooking">
      <div class="grid gap-5 sm:grid-cols-2">
        <label class="text-sm font-medium">Pickup location<input v-model="form.pickup" required class="mt-2 w-full rounded-xl border border-[#d9ded1] bg-transparent px-4 py-3 font-normal outline-none focus:border-[#526a48]" placeholder="e.g. Colombo Airport" /></label>
        <label class="text-sm font-medium">Drop-off location<input v-model="form.dropoff" required class="mt-2 w-full rounded-xl border border-[#d9ded1] bg-transparent px-4 py-3 font-normal outline-none focus:border-[#526a48]" placeholder="e.g. Ella" /></label>
        <label class="text-sm font-medium">Pickup date<input v-model="form.date" type="date" required class="mt-2 w-full rounded-xl border border-[#d9ded1] bg-transparent px-4 py-3 font-normal outline-none focus:border-[#526a48]" /></label>
        <label class="text-sm font-medium">Passengers<input v-model.number="form.passengers" type="number" min="1" max="14" class="mt-2 w-full rounded-xl border border-[#d9ded1] bg-transparent px-4 py-3 font-normal outline-none focus:border-[#526a48]" /></label>
        <label class="text-sm font-medium">Your name<input v-model="form.name" required autocomplete="name" class="mt-2 w-full rounded-xl border border-[#d9ded1] bg-transparent px-4 py-3 font-normal outline-none focus:border-[#526a48]" /></label>
        <label class="text-sm font-medium">Email<input v-model="form.email" type="email" required autocomplete="email" class="mt-2 w-full rounded-xl border border-[#d9ded1] bg-transparent px-4 py-3 font-normal outline-none focus:border-[#526a48]" /></label>
        <label class="text-sm font-medium sm:col-span-2">Phone / WhatsApp<input v-model="form.phone" type="tel" required autocomplete="tel" class="mt-2 w-full rounded-xl border border-[#d9ded1] bg-transparent px-4 py-3 font-normal outline-none focus:border-[#526a48]" /></label>
        <label class="text-sm font-medium sm:col-span-2">Anything else we should know?<textarea v-model="form.notes" rows="3" class="mt-2 w-full rounded-xl border border-[#d9ded1] bg-transparent px-4 py-3 font-normal outline-none focus:border-[#526a48]" placeholder="Stops, luggage, flight details…"></textarea></label>
      </div>
      <button :disabled="state === 'sending'" class="mt-6 rounded-full bg-[#1d382c] px-6 py-4 text-sm font-medium text-white disabled:opacity-60">{{ state === 'sending' ? 'Sending…' : 'Send trip request ↗' }}</button>
      <p v-if="state === 'sent'" class="mt-4 text-sm text-green-800" role="status">Request sent. We’ll be in touch to confirm your trip.</p>
      <p v-if="state === 'error'" class="mt-4 text-sm text-red-700" role="alert">{{ errorMessage }}</p>
      <p class="mt-4 text-xs leading-5 text-[#798079]">No payment is collected through this form.</p>
    </form>
  </section>
</template>
