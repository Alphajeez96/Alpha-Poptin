<template>
  <section class="py-5 px-3.5">
    <p class="font-medium text-[#7761df] pb-4">Upgrade to add elements</p>

    <div class="flex flex-wrap">
      <div
        class="holder flex items-center mb-6 mr-3 justify-end w-[30%]"
        v-for="i in 8"
        :key="i"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    elements: ["Text", "Button"],
  }),
};
</script>

<style lang="scss" scoped>
.holder {
  @apply bg-[#F9F9F9] shadow-md h-20 cursor-not-allowed;
}
</style>
