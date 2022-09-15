import {ref} from "vue";

const fields = ref([
  {
    type: "email",
    isRequired: false,
    value: "Email:",
  },
]);

const customSettings = ref({
  width: 450,
  height: 450,
  backgroundColor: "#E85E5B",
});

export default function useFields() {
  const addField = () => {
    const field = {
      type: "text",
      isRequired: false,
      value: "Text field:",
    };

    fields.value.push(field);
  };

  const removeField = (index) => {
    fields.splice(index, 1);
  };

  const updateColor = (color) => {
    customSettings.value.backgroundColor = color;
  };

  const saveChanges = () => {
    localStorage.setItem("fields", JSON.stringify(fields.value));
  };

  return {
    fields,
    addField,
    removeField,
    customSettings,
    updateColor,
    saveChanges,
  };
}
