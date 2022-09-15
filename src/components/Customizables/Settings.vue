<template>
  <!-- Size here -->
  <section class="text-primary-black py-5 border-b">
    <div class="px-3.5">
      <p class="font-semibold pb-4 text-[#7761df]">Popup Size</p>

      <section class="flex justify-between w-full">
        <!-- Width Here -->
        <div class="flex items-center">
          <label for="width">Width:</label>
          <input id="width" type="number" v-model="customSettings.width" />
          <p class="ml-1 text-sm">px</p>
        </div>

        <!-- Height Here -->
        <div class="flex items-center ml-auto">
          <label for="height">Height:</label>
          <input id="height" type="number" v-model="customSettings.height" />
          <p class="ml-1 text-sm">px</p>
        </div>
      </section>
    </div>
  </section>

  <!-- Background Here -->
  <section class="py-5">
    <div class="px-3.5">
      <p class="font-semibold pb-4 text-[#7761df]">Background Design</p>
      <ColorPicker
        :visible-formats="['hex']"
        default-format="hex"
        alpha-channel="hide"
        :color="customSettings.backgroundColor"
        @color-change="(data) => updateColor(data.cssColor)"
      />
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";
import {ColorPicker} from "vue-accessible-color-picker";
import useFields from "../../composables/useFields";
const {customSettings, updateColor} = useFields();
</script>

<style lang="scss" scoped>
label {
  @apply text-sm mr-2;
}

input {
  @apply focus:outline-none h-10 border border-primary-black rounded-md pl-4 pr-1 w-2/5 text-sm;
}
</style>
