<template>
  <section class="mb-5 flex justify-center items-end">
    <div v-for="i in 3" :key="i" class="w-[15%]">
      <font-awesome-icon
        icon="fa-regular fa-star "
        class="fa-1x"
        :class="{'fa-2x': i == 2}"
      />
    </div>
  </section>
</template>
