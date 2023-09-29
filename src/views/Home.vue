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
              >Welcome Back</span
            >
          </div>
        </template>
        <template v-slot:subtitle>
          <div class="text-center mt-2">
            <span class="text-subtitle-2 text-white">
              Log into your account
            </span>
          </div>
        </template>
        <template v-slot:text>
          <Button
            class="thin-border-button"
            variant="tonal"
            label="Continue with SSO"
            block
            color="white"
          >
            <template v-slot:preprend>
              <v-icon icon="mdi-key"></v-icon>
            </template>
          </Button>
          <v-row class="text-center align-center my-1">
            <v-col sm="5" md="5">
              <v-divider class="border-opacity-100 text-white"> </v-divider>
            </v-col>
            <v-col
              sm="2"
              md="2
          "
            >
              <span class="text-white">OR</span>
            </v-col>
            <v-col sm="5" md="5">
              <v-divider class="border-opacity-100 text-white"></v-divider>
            </v-col>
          </v-row>
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
            <Textfield
              v-model="password"
              :readonly="loading"
              :rules="[required]"
              placeholder="Password"
              :visible="showPassword"
              color="white"
              variant="solo"
            >
              <template v-slot:append-inner>
                <v-icon @click="showPassword = !showPassword">
                  {{ showPassword ? "mdi-eye" : "mdi-eye-off" }}</v-icon
                >
              </template>
            </Textfield>
            <div class="mt-2">
              <router-link
                to="/forgotpassword"
                class="text-caption text-decoration-none text-white"
              >
                <span>Forgot password?</span>
              </router-link>
            </div>
            <Button
              :disabled="!form"
              :loading="loading"
              type="submit"
              class="mt-5"
              label="Sign in"
              block
            >
            </Button>
          </v-form>

          <div class="mt-4 text-center text-subtitle-2">
            <span class="text-white">Don't have an account? </span>
            <router-link to="/signup" class="text-white">
              <span>Sign up</span>
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
import router from "@/router";

export default {
  components: {
    Textfield,
    Card,
    Button,
  },

  data() {
    return {
      showPassword: false,
      form: false,
      email: null,
      password: null,
      loading: false,
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
