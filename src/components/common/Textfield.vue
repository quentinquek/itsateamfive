<template>
  <v-text-field
    :variant="variant"
    density="compact"
    :label="label"
    :placeholder="placeholder"
    :type="visible ? 'text' : 'password'"
    hide-details="true"
  >
    <template v-slot:prepend-inner>
      <slot name="prepend-inner"></slot>
    </template>
    <template v-slot:append-inner>
      <slot name="append-inner"></slot>
    </template>
  </v-text-field>
</template>

<script>
export default {
  props: {
    label: String,
    variant: String,
    placeholder: String,
    visible: Boolean,
  },
};
</script>
