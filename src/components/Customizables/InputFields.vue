<template>
  <section class="py-5">
    <!-- Button Region -->
    <div class="px-3.5">
      <button @click="addField">Add field</button>
    </div>

    <!-- Input Region -->
    <section class="mt-5">
      <draggable v-model="fields" item-key="id">
        <template #item="{element, index}">
          <div
            class="flex items-center p-3.5 cursor-move"
            :class="{colored: index % 2 === 0}"
          >
            <input
              :type="element.type"
              v-model="element.value"
              :required="element.isRequired"
            />

            <div class="ml-4 flex items-center">
              <input
                type="checkbox"
                :id="`required ${index}`"
                v-model="element.isRequired"
              />
              <label
                class="ml-2 text-sm text-[#292b2c]"
                :for="`required ${index}`"
                >Required</label
              >
            </div>
            <div class="ml-auto">
              <img
                src="../../assets/images/delete.png"
                alt="delete"
                class="cursor-pointer h-4"
                @click="fields.splice(index, 1)"
              />
            </div>
          </div>
        </template>
      </draggable>
    </section>
  </section>
</template>

<script setup>
import useFields from "../../composables/useFields";
import draggable from "vuedraggable";
const {fields, addField, removeField} = useFields();
</script>

<style lang="scss" scoped>
button {
  @apply rounded-md bg-[#EBE8FA] text-[#7761df] px-4 text-sm py-2.5;
}

input {
  @apply h-10 border border-gray-200 rounded-md focus:outline-none px-3 text-sm;
}

.colored {
  background: #f7f6fd;
}
</style>
