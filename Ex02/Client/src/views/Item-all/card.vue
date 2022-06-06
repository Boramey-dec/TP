<template>
  <div class="dis">
    <div class="bkg-item">
      <span class="" style="padding: 3px">{{ categories.name }}</span>
    </div>

    <div class="bkg-item">
      <span class="it" style="padding: 3px">{{ categories.desc }}</span>
    </div>
    <div class="bkg-item">
      <span class="it" style="padding: 3px">{{ categories.imageUrl }}</span>
    </div>

    <div class="bkg-btn">
      <div class="btn-edit" id="editbyid" @click="Edit_category(id_c)" style="padding: 3px">
        <button>Edit</button>
      </div>

      <div
        id="deletebyid"
        class="btn-delete"
        @click="Delete_category()"
        style="padding: 3px"
      >
        <button>Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categories"],
  emits: ["value_action_C", "value_action_C1","name_1"],
  data() {
    return {
      id_c:[],
      };
  },
  methods: {
    async Delete_category() {
      document.getElementById("deletebyid").value = this.categories._id;
      var deletebyid = document.getElementById("deletebyid").value;
      console.log(document.getElementById("deletebyid").value);
      const requestOptions = {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          id: deletebyid,
        }),
      };

      const response_c = await fetch(
        "http://localhost:3001/category/delete",
        requestOptions
      );
      this.$emit("value_action_C");
    },
    async Edit_category(id) {
      document.getElementById("editbyid").value = this.categories._id;
      var editbyid = document.getElementById("editbyid").value;
     
      const requestOptions = {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          id: editbyid,
        }),
      };

      const response_c = await fetch(
        "http://localhost:3001/category/id",
        requestOptions
      );

      const data = await response_c.json();
   
      this.id_c = data.data._id;
      //console.log(this.id_c);
      //this.$emit("value_action_C1");
      this.$emit('name_1',data.data);
    },
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

.btn-edit:hover,
.bkg-btn:hover {
  cursor: click;
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
  border: #8bc9ba solid;
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
