<template>
  <div class="holder">
    <div class="save-region bg-white h-12">
      <div class="flex items-center justify-end mx-5">
        <button @click="saveChanges">Save Changes</button>
      </div>
    </div>

    <div class="p-8 flex justify-center">
      <!-- Popup Here -->

      <div
        class="mt-10 rounded-full flex justify-center p-3"
        :style="`background-color: ${customSettings.backgroundColor}; height: ${customSettings.height}px; width: ${customSettings.width}px`"
      >
        <div
          class="flex flex-col justify-start pt-8 items-center border-white border-[3px] rounded-full px-8 w-full"
        >
          <!-- Content Here -->
          <draggable v-model="components" item-key="id">
            <template #item="{element}">
              <div class="m-auto w-[75%] text-center">
                <component :is="element" class="cursor-move" />
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useFields from "../composables/useFields";
import {ref} from "vue";
import draggable from "vuedraggable";
import Rating from "./PopupItems/Rating.vue";
import HeaderText from "./PopupItems/HeaderText.vue";
import Inputs from "./PopupItems/Inputs.vue";
import CtaButton from "./PopupItems/CtaButton.vue";
import FooterText from "./PopupItems/FooterText.vue";

const {customSettings, saveChanges} = useFields();
const components = ref([Rating, HeaderText, Inputs, CtaButton, FooterText]);
</script>

<style lang="scss" scoped>
.holder {
  @apply bg-[#F9F9F9] rounded-lg shadow-md  fixed w-[60%] h-[91%] overflow-y-auto;
}

button {
  @apply rounded-md bg-[#7761DF] text-[#F0F8FF] px-4 text-sm py-2.5;
}
</style>
