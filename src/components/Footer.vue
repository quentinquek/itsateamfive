<template>
  <v-footer class="bg-transparent" height="70px" app>
    <v-row justify="center">
      <Button
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        :label="link"
      >
      </Button>
    </v-row>
  </v-footer>
</template>

<script>
import Button from "./common/Button.vue";

export default {
  components: {
    Button,
  },

  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),
};
</script>
