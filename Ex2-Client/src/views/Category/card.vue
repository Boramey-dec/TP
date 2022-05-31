<template>
  <div class="card">
    <img
      class="card-img"
      src="http://via.placeholder.com/620x600
"
      alt=""
    />
    <div class="card-title">{{ products.name }}</div>
    <br />
    <div class="card-price">{{ products.desc }}</div>
  </div>
</template>

<script>
export default {
    props: ["products"]
};
</script>

<style scoped>
.card {
  width: 160px;
  height: 220px;
  border: 1px solid;
}

.card-img {
  width: 100%;
}

.card-title {
  text-align: center;
}

.card-price {
  color: red;
  font-weight: bold;
  text-align: center;
}
</style>
