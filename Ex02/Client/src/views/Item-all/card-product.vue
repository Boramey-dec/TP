<template>
  <div class="">
    <div class="dis">
      <div class="bkg-item">
        <span class="" style="padding: 3px"> {{ products.title }}</span>
      </div>

      <div class="bkg-item">
        <span class="it" style="padding: 3px">{{ Category_Name }}</span>
      </div>
       <div class="bkg-item">
        <span class="it" style="padding: 3px">{{ Item_Name  }}</span>
      </div>
       <div class="bkg-item">
        <span class="it" style="padding: 3px">{{ products.desc }}</span>
      </div>
      <div class="bkg-btn">
        <div class="btn-edit" style="padding: 3px">
          <button>Edit</button>
        </div>

        <div class="btn-delete" style="padding: 3px">
          <button>Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {
      Category_Name: "",
      Item_Name: "",
    };
  },
  async created() {
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ id: this.products.category }),
    };

    const response = await fetch(
      "http://localhost:3001/category/id",
      requestOptions
    );

    const data = await response.json();
    this.Category_Name = data.data.name;

    const requestOption = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ id: this.products.item }),
    };

    const response1 = await fetch(
      "http://localhost:3001/item/id",
      requestOption
    );

    const data1 = await response1.json();
    this.Item_Name = data1.data.name;
    console.log(this.Item_Name);
  },
};
</script>

<style scoped>
button {
  width: 70px;
  height: 30px;
  border-radius: 7px 7px;
  border: rgb(255, 255, 255);
  font-size: 17px;
}
.btn-delete > button {
  color: rgb(240, 240, 240);
  background-color: rgb(255, 0, 0);
}
.btn-edit > button {
  color: rgb(255, 255, 255);
  background-color: rgb(68, 0, 255);
}

.bkg-btn {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
  display: flex;
}
.dis {
  display: flex;
 
}
.bkg-item {
  width: 50%;
  display: flex;
  justify-content: flex-start;
}
.it {

  position: relative;
  top: auto;
  left: 10px;
}
.bkg-item {
  background-color: rgb(255, 255, 255);
  border:#8bc9ba solid;
  font-size: 15px;
  align-items: center;
  padding-left: 10px;
}
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
