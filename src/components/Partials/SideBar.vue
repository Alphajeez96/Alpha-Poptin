<template>
  <div class="holder">
    <!-- Logo Here -->
    <div class="flex justify-center mb-3">
      <img src="../../assets/images/logo.svg" alt="logo" />
    </div>

    <accordion>
      <accordion-item v-for="option in options" :key="option">
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3 class="text-[aliceblue] text-left text-[0.938rem]">
            {{ option.name }}
          </h3>
        </template>

        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <component v-if="option" :is="option.component" />
        </template>
      </accordion-item>
    </accordion>
  </div>
</template>

<script>
import Accordion from "../Accordion/Accordion.vue";
import AccordionItem from "../Accordion/AccordionItem.vue";
import Settings from "../Customizables/Settings.vue";
import Elements from "../Customizables/Elements.vue";
import InputFields from "../Customizables/InputFields.vue";

export default {
  components: {
    Accordion,
    AccordionItem,
    Elements,
    Settings,
    InputFields,
  },

  data: () => ({
    options: [
      {
        name: "General settings",
        component: "Settings",
      },
      {
        name: "Add elements",
        component: "Elements",
      },
      {
        name: "Input fields",
        component: "InputFields",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.holder {
  @apply bg-primary-grey rounded-20 px-8 py-10 w-1/3 h-full fixed overflow-auto;
}
</style>
