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
              >Verify Your Email</span
            >
          </div>
        </template>
        <template v-slot:subtitle>
          <div class="text-center mt-2">
            <span class="text-subtitle-2 text-white text-wrap">
              A verification code has been sent to your email
            </span>
          </div>
        </template>
        <template v-slot:text>
          <VOtpInput v-model="otp" variant="solo" placeholder="-"></VOtpInput>
          <Button
            @click="verifyOTP"
            :disabled="isOTPDisabled"
            class="mt-5"
            label="Submit"
            block
          >
          </Button>
          <div class="d-flex mt-4 justify-center">
            <span class="text-white text-subtitle-2"
              >Didn't receive the code?</span
            >
            <Button
              class="pa-0 text-decoration-underline"
              size="x-small"
              variant="text"
              color="white"
              label="Resend"
            >
            </Button>
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
import { VOtpInput } from "vuetify/labs/VOtpInput";

export default {
  components: {
    Textfield,
    Card,
    Button,
    VOtpInput,
  },

  data() {
    return {
      showPassword: false,
      otp: "",
    };
  },

  computed: {
    isOTPDisabled() {
      return this.otp.length !== 6;
    },
  },

  methods: {
    verifyOTP() {
      // OTP Verification
      if (this.otp.length === 6) {
        // Valid condition
        this.$router.push("/password");
      }
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
