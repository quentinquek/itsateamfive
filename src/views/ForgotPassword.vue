<template>
  <div class="video-background">
    <video autoplay muted loop>
      <source src="../assets/home.mp4" type="video/mp4" />
    </video>
    <div class="overlay"></div>
  </div>
  <v-container class="fill-height">
    <v-row class="justify-center">
      <Card width="400" class="pa-5 card-opacity">
        <template v-slot:title>
          <div class="text-center">
            <span class="text-h4 font-weight-bold text-white"
              >Forgot Password</span
            >
          </div>
        </template>
        <template v-slot:subtitle>
          <div class="text-center mt-2">
            <span class="text-subtitle-2 text-white">
              Please provide your email
            </span>
          </div>
        </template>
        <template v-slot:text>
          <v-form v-model="form" @submit.prevent="onSubmit">
            <Textfield
              v-model="email"
              :readonly="loading"
              :rules="[required]"
              placeholder="Email"
              :visible="true"
              class="mb-3"
              color="white"
              variant="solo"
            />
            <Button
              :disabled="!form"
              :loading="loading"
              type="submit"
              class="mt-5"
              label="Send reset link"
              block
            >
            </Button>
          </v-form>
          <div class="mt-4 text-center text-subtitle-2">
            <router-link to="/" class="text-white text-decoration-none">
              <v-icon icon="mdi-arrow-left-thin"></v-icon>
              <span>Back to log in</span>
            </router-link>
          </div>
        </template>
      </Card>
    </v-row>
  </v-container>
</template>

<script>
import Card from "@/components/common/Card.vue";
import Textfield from "@/components/common/Textfield.vue";
import Button from "@/components/common/Button.vue";

export default {
  components: {
    Textfield,
    Card,
    Button,
  },

  data() {
    return {
      showPassword: false,
      email: null,
    };
  },

  methods: {
    onSubmit() {
      if (!this.form) return;

      // Authentication logic

      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>

<style>
.card-opacity {
  background-color: rgba(0, 0, 0, 0.5);
}

.thin-border-button {
  border-width: 1px;
  border-color: rgb(178, 178, 178);
}

.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.3
  ); /* Adjust the alpha (opacity) value as needed */
}

video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
