<template>
  <section class="flex p-9">
    <aside class="w-1/2">
      <SideBar />
    </aside>

    <div class="flex-grow w-full ml-20">
      <section>
        <AppHeader />
      </section>

      <section class="mt-6 w-full">
        <Popup />
      </section>
    </div>
  </section>
</template>

<script setup>
import SideBar from "./components/Partials/SideBar.vue";
import AppHeader from "./components/Partials/AppHeader.vue";
import Popup from "./components/Popup.vue";
</script>
