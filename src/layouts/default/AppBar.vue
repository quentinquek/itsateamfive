<template>
  <v-app-bar :elevation="0" style="background-color: transparent">
    <v-app-bar-title>
      <v-img
        @click="returnHomepage"
        width="100"
        :aspect-ratio="1"
        class="cursor-pointer"
        src="@/assets/ascenda-white-logo.png"
      ></v-img>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const returnHomepage = () => {
  router.push('/'); // Replace '/' with the actual route to your homepage
};
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>





