<template>
  <main>
    <div class="bg-gray-100 py-2 text-center text-lg relative">
      TopOne.com

      <div
        class="
          absolute
          text-white
          right-2
          top-2
          bg-gray-400
          px-2
          rounded-md
          cursor-pointer
        "
      >
        <router-link to="/dashboard"><div class="">Dashboard</div></router-link>
      </div>
    </div>
    <h1>You're in Home Page</h1>

    <div class="wrapper">
      <div class="side-bar">
        <ul>
          <li v-for="category in categories" :key="category._id">
            <h4 class="pointer" v-on:click="showItem(category._id)">
              {{ category.name }}
            </h4>
            <ul>
              <li v-for="p in category.items" :key="p._id">
                <span class="item">-{{ p.name }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="products">
        <ProductCard
          v-for="p in products"
          :key="p._id"
          :products="p"
        ></ProductCard>
      </div>
    </div>
  </main>
</template>

<script >
import category from "../libs/apis/category.js";
import ProductCard from "./Dashboard/card.vue";
export default {
  components: { ProductCard },
  data() {
    return {
      products: [],
      products1: [],
      categories: [],
    };
  },
  async mounted() {
    const requestOptions = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(),
    };

    const response_item = await fetch(
      "http://localhost:3001/item/all",
      requestOptions
    );

    const data_items = await response_item.json();

    console.log("data_items: ", data_items);
    this.products1 = data_items;

    //post data to api
    const response = await fetch(
      "http://localhost:3001/category/categorized-items",
      requestOptions
    );

    const data_all = await response.json();
    this.categories = data_all;
    console.log("categorized-items: ", data_all);

    const response_product_item = await fetch(
      "http://localhost:3001/product/all",
      requestOptions
    );
    const data_response_product_item = await response_product_item.json();
    console.log("data1: ", data_response_product_item);
    this.products = data_response_product_item;
    // console.log("data1: ", data_response_product_item.);
  },
  methods: {
    categoryClicked: function (idCategory) {
      products = category.getCategory(idCategory);
      console.log("products123: ", products)
    },
  },
};
</script>



<style scoped>
.wrapper {
  display: flex;
  position: relative;
}

.side-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  border: 1px solid;
  width: 200px;
}

.products {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  margin-left: 220px;
  border: 1px solid;
  height: 100vh;
  display: grid;
  width: 100%;
  overflow-y: auto;
  justify-items: center;
}

.pointer {
  cursor: pointer;
}
.item {
  padding: 10px;
}

@media (min-width: 768px) {
  .products {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
}
</style>