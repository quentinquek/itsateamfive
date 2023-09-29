<template>
  <v-btn size="large" class="text-none text-subtitle-2">
    <template v-slot:prepend>
      <slot name="preprend"></slot>
    </template>
    {{ label }}
    <template v-slot:append>
      <slot name="append"></slot>
    </template>
  </v-btn>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>
