<template>
  <div>
    <main>
      <div><h1>You're in Home Page</h1></div>
      
      <!-- <button @onclick="created"> Back to Login</button> -->

      <label v-if="data1 != null"> Username : {{ data1.username }}</label
      ><br />
      <label v-if="data1 != null"> Firstname: {{ data1.firstName }}</label
      ><br />
      <label v-if="data1 != null"> Lastname : {{ data1.lastName }}</label
      ><br />
      <label v-if="data1 != null"> Email : {{ data1.email }}</label
      ><br /><br /><br /><br /><br />

      <button
        class="w-100 btn btn-lg btn-primary"
        type="submit"
        @click="created"
      >
        Log out
      </button>
    </main>

    <section class="u-clearfix u-section-1" id="sec-9cc2">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="Btn-all">
                <button @click="category()">CATEGORY</button>
                <button @click="items()">ITEM</button>
                <button @click="product()">PRODUCT</button>
              </div>
              <div class="">
                <div class="" style="padding-bottom: 0px">
                  <div class="title-type">
                    <div>
                      <h4 class="" id="select-text"></h4>
                    </div>
                    
                  </div>

                  <div class="all-item" style="padding-left: 9px">
                    <div class="Categories">
                      <!-- <div v-if="categories !== ''" class="header-data">
                        <div>Name</div>
                        <div>Dec</div>
                      </div> -->
                      <AddCategory
                        v-if="type === 'category'"
                        :key="id_edit._id"
                        :id_edit="id_edit"
                        @value_action_C="category"
                      >
                      </AddCategory>
                      
                      <AddItem v-if="type === 'item'"> </AddItem>

                      <CategoryCard
                        @value_action_C="category"
                        @name_1="category_act"
                        id="categories"
                        v-for="c in categories"
                        :key="c._id"
                        :categories="c"
                      ></CategoryCard>
                    </div>

                    <div class="Items">
                      <ItemCard
                        v-for="i in item"
                        :key="i._id"
                        :item="i"
                      ></ItemCard>
                    </div>

                    <div class="Products">
                      <ProductsCard
                        v-for="i in products"
                        :key="i._id"
                        :products="i"
                      ></ProductsCard>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import CategoryCard from "./Item-all/card.vue";
import ItemCard from "./Item-all/card-item.vue";
import ProductsCard from "./Item-all/card-product.vue";
import AddCategory from "./Item-all/Add-New/add-new.vue";
import AddItem from "./Item-all/Add-New/add-new-item.vue";

export default {
  components: { CategoryCard, ItemCard, ProductsCard, AddCategory, AddItem },

  data() {
    return {
      value: [{ name: "null", category: "null", desc: "null" }],
      item: [],
      data1: null,
      products: [],
      categories: [],
      id_edit: [],
      type: "",
    };
  },
  props: ["value_action_c", "id_c", "data"],
  emits: ["category_act_edit"],

  async mounted() {
    const requestOptions = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(),
      // session: {"jwt": "document.cookie"}
    };

    console.log(requestOptions);
    //post data to api
    const response = await fetch(
      "http://localhost:3001/auth/me",
      requestOptions
    );

    const data = await response.json();
    console.log("data: ", data);
    this.data1 = data;

    //post data to api
  },

  methods: {
    async category_act(value) {
      //this.data;
      this.$emit("category_act_edit");
      this.id_edit = value;
      console.log("value: ", value);
    },
    async addnew() {
      console.log(this.value_action_c);
      if (this.type == "") {
        alert(this.type);
      } else if (this.type == "category") {
        //category();
      } else if (this.type == "item") {
        alert(this.type);
      } else if (this.type == "product") {
        alert(this.type);
      }
    },

    async category() {
      this.type = "category";
      this.item = [];
      this.categories = [];
      this.products = [];

      document.getElementById("select-text").innerHTML = "Category";
      const requestOptions = {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(),
        // session: {"jwt": "document.cookie"}
      };

      const response1 = await fetch(
        "http://localhost:3001/category/all",
        requestOptions
      );

      const data1 = await response1.json();
      this.categories = data1;
    },
    async items() {
      this.type = "item";
      this.item = [];
      this.categories = [];
      this.products = [];
      document.getElementById("select-text").innerHTML = "Item";

      const requestOptions = {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(),
        // session: {"jwt": "document.cookie"}
      };

      const response_item = await fetch(
        "http://localhost:3001/item/all",
        requestOptions
      );

      const data_items = await response_item.json();
      //console.log("data_items: ", data_items);
      this.item = data_items;
    },
    async product() {
      this.type = "product";
      this.item = [];
      this.categories = [];
      this.products = [];

      document.getElementById("select-text").innerHTML = "Product";

      const requestOptions = {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(),
        // session: {"jwt": "document.cookie"}
      };

      const response_item = await fetch(
        "http://localhost:3001/product/all",
        requestOptions
      );

      const data_product = await response_item.json();
      //console.log("data_product: ", data_product);
      this.products = data_product;
    },

    async created() {
      const request = {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(),
      };

      const response = await fetch(
        "http://localhost:3001/auth/logout",
        request
      );

      const data = await response.json();
      console.log("data: ", data);

      this.$router.push({ name: "login", hash: "" });
    },
  },
};
</script>


<style>
.all-item {
  width: 900px;
  height: 800px;
}

.Btn-all {
  display: flex;
  flex-direction: column;
  font-size: 17px;
}
.Btn-all > Button {
  width: 150px;
  height: 50px;
}
.Btn-all Button:hover {
  background-color: rgba(255, 204, 0, 0.95);
}

.header-data {
  display: flex;
  width: 49%;
  justify-content: space-between;
  text-align: center;
  padding-left: 20px;
  font-size: 28px;
  border: #0066a2;
  background: #fff;
}
.title-type {
  padding-left: 10px;
  display: flex;
  width: 98%;

  justify-content: space-between;
  align-items: center;
}
button {
  border: 1px solid #fff;
  background-color: #fff;
}

.btn-add {
  padding-top: 4px;
  text-align: center;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  width: 130px;
  margin: auto;
  height: 40px;
  border-radius: 3px;
  border: rgb(255, 255, 255);
  background-color: rgb(13, 0, 255);
}

.u-section-1 .u-text-1 {
  margin-top: -33px;
  font-size: 1.5rem;
  margin: -42px auto 0 10px;
}
header {
  display: none;
}
h3 {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 20px;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#btn_logout {
  cursor: pointer;
  background-color: rgba(239, 54, 54);
  color: white;
  border-style: outset;
  border-color: #0066a2;
  height: 2rem;
  width: 4rem;
  font: sans-serif;
  text-shadow: none;
  margin-top: 0.645rem;
  border-radius: 0.165rem;
  margin: 0.5rem 0 0.67rem 0;
}
</style>
