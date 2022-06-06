


<template>
  <section class="u-clearfix u-section-1" id="sec-3b39">
    <div class="u-clearfix u-sheet u-sheet-1">
      <div
        class="u-align-center u-clearfix u-group-elements u-group-elements-1"
      >
        <h2 class="u-align-right u-text u-text-default u-text-1">លេខមួយ.com</h2>
        <h3 class="u-text u-text-default u-text-2">Admin dashboard</h3>
      </div>
      <h5 class="u-text u-text-default u-text-3">Admin</h5>
      <div class="u-border-1 u-border-grey-75 u-form u-radius-11 u-form-1">
        <form
          action="#"
          class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
          style="padding: 10px"
        >
          <div class="u-form-email u-form-group">
            <label for="email-cc14" class="u-label">Email</label>
            <input
              type="email"
              placeholder="Enter a valid email address"
              id="email-cc14"
              name="email"
              class="
                u-border-1
                u-border-grey-30
                u-input
                u-input-rectangle
                u-radius-10
                u-white
                u-input-1
              "
              v-model="email"
              required=""
            />
          </div>
          <div class="u-form-group u-form-name">
            <label for="name-cc14" class="u-label">Password</label>
            <input
              v-model="password"
              type="password"
              placeholder="Enter your Password"
              id="name-cc14"
              name="password"
              class="
                u-border-1
                u-border-grey-30
                u-input
                u-input-rectangle
                u-radius-10
                u-white
                u-input-2
              "
              required=""
            />
          </div>
          <div class="u-align-center u-form-group u-form-submit">
            <a
               @click="created()"
              href="#"
              class="
                u-border-none
                u-btn
                u-btn-round
                u-btn-submit
                u-button-style
                u-palette-1-base
                u-radius-50
                u-btn-1
              "
              >Submit</a
            >
            <input value="submit" class="u-form-control-hidden" />
          </div>
          <div class="u-form-send-message u-form-send-success">
            Thank you! Your message has been sent.
          </div>
          <div class="u-form-send-error u-form-send-message">
            Unable to send your message. Please fix errors then try again.
          </div>
          <input type="hidden" value="" name="recaptchaResponse" />
        </form>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      email: "",
      password: "",
      msg: "",
      input_color: "",
    };
  },
  methods: {

    async created() {
      if (this.email == "" && this.password == 0) {
        var element = document.getElementById("err");
        element.innerHTML = `<h2>Your information incorrect</h2>`;
      } else {
        // POST request using fetch with async/await
        const requestOptions = {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify({ email: this.email, password: this.password }),
        };

        //post data to api
        const response = await fetch(
          "http://localhost:3001/auth/login",
          requestOptions
        );
        const data = await response.json();
        console.log(data);

        if (data.success == true) {
          this.$router.push({ name: "homeform", hash: "#HOME" });
        } else {
        }
      }
    },
  },
};
</script>

<style scoped>


h3 {
     background-color: rgba(255, 255, 255, 0.8);
    }

form[data-v-3155ac83] {
  box-shadow: none;
  padding: 10px;
}

</style>
  