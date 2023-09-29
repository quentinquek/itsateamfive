<template>
  <v-card min-width="400">
    <template v-slot:title>
      <slot name="title"></slot>
    </template>

    <template v-slot:subtitle>
      <slot name="subtitle"></slot>
    </template>

    <template v-slot:text>
      <slot name="text"></slot>
    </template>
  </v-card>
</template>
