<script>
import { RouterLink, RouterView } from "vue-router";
import "@/assets/css/jquery.js";
import "@/assets/css/nicepage.js";
import "@/assets/dist/css/bootstrap.min.css";


</script>

<template>
  <RouterView />
</template>

<style>

@import "@/assets/css/Page-1.css";
@import "@/assets/css/Admin-dashbord.css";
@import "@/assets/css/nicepage.css";
@import url("https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i");





#app {
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}



@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    width: 100%;
    padding: 0 2rem;
  }
}
</style>
