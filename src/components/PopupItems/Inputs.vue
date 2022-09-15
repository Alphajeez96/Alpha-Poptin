<template>
  <section>
    <!-- <draggable v-model="fields" item-key="id"> -->
    <!-- <template #item="{element}"> -->
    <div v-for="(fields, i) in fields" :key="i">
      <input
        :type="fields.type"
        :placeholder="fields.value"
        :required="fields.isRequired"
        readonly
      />
    </div>
    <!-- </template> -->
    <!-- </draggable> -->
  </section>
</template>

<script setup>
import useFields from "../../composables/useFields";
const {fields, customSettings} = useFields();
</script>

<style lang="scss" scoped>
input {
  @apply mt-5 h-[42px] rounded-[10px] border-[1px] border-white px-4 focus:outline-none w-full cursor-move;
}
</style>
