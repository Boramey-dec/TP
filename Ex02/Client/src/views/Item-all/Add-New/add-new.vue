<template>
  <div class="input_category" id="input_category">
    <div class="name_c">
      <input type="text" id="name_C" value="" placeholder="name" />
    </div>
    <br />
    <div class="desc_c">
      <input type="text" id="desc_C" value="" placeholder="desc" />
    </div>
    <div class="imgUrl_C">
      <input type="text" id="imgUrl_C" value="" placeholder="imgUrl" />
    </div>

    <div class="btn-save1" @click="save_c()">
      <div class="btn-save" style="padding: 3px">
        <button class="button-save btn-sc">save</button>
      </div>
    </div>

    <!-- <div class="btn-save1" @click="edit_c()">
      <div class="btn-cancle" style="padding: 3px">
        <button class="button-cancle btn-sc">cancle</button>
      </div>
    </div> -->

    <div class="btn-save1" @click="update_c()">
      <div class="btn-update" style="padding: 3px">
        <button class="button-update btn-sc">update</button>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryCard from "../card.vue";

export default {
  components: { CategoryCard },
  emits: ["value_action_C", "value_action_C1"],
  props: ["id_c", "id_edit"],
  data() {
    return {
      value_action_c: [true, false],
      id_edit_1: [],
    };
  },

  async mounted() {
    console.log(this.id_edit_1);
    if(this.id_edit == ""){

    }else{
       this.id_edit_1 = this.id_edit;
    }
   
  },
  watch: {
    id_edit_1() {
      this.edit_c();
    },
  },
  methods: {
    async update_c() {
      var name_C = document.getElementById("name_C").value;
      var desc_C = document.getElementById("desc_C").value;
      var imgUrl_C = document.getElementById("imgUrl_C").value;
      console.log(name_C, desc_C, imgUrl_C);

      if (this.id_edit_1 == "") {
        
        document.getElementById("name_C").placeholder = "name";
        document.getElementById("desc_C").placeholder = "desc";
        document.getElementById("imgUrl_C").placeholder = "imgUrl";
      } else {
        const requestOptions = {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify({
            id: this.id_edit_1._id,
            name: name_C,
            desc: desc_C,
            imageUrl: imgUrl_C,
          }),
        };

        const response_c = await fetch(
          "http://localhost:3001/category/update",
          requestOptions
        );
        var data_u = await response_c.json();
        this.$emit("value_action_C");
        console.log(data_u);
        if (data_u.success == true) {
          document.getElementById("name_C").value = "";
          document.getElementById("desc_C").value = "";
          document.getElementById("imgUrl_C").value = "";
          alert("Update success!");
          document.getElementById("name_C").placeholder = "name";
          document.getElementById("desc_C").placeholder = "desc";
          document.getElementById("imgUrl_C").placeholder = "imgUrl";
        } else if (data_u.success == false) {
          alert("Update Unsuccessfull!");
        }
      }
    },

    async edit_c() {
      document.getElementById("name_C").value = this.id_edit_1.name;
      document.getElementById("desc_C").value = this.id_edit_1.desc;
      document.getElementById("imgUrl_C").value = this.id_edit_1.imageUrl;
      console.log(this.id_edit_1);
    },
    async save_c() {
      console.log(this.id_edit);

      var name_C = document.getElementById("name_C").value;
      var desc_C = document.getElementById("desc_C").value;
      var imgUrl_C = document.getElementById("imgUrl_C").value;
      if (name_C != "" || desc_C != "" || imgUrl_C != "") {
        const requestOptions = {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify({
            name: name_C,
            desc: desc_C,
            imageUrl: imgUrl_C,
          }),
        };

        const response_c = await fetch(
          "http://localhost:3001/category/create",
          requestOptions
        );
        if (window.confirm("Do you want to create a new category?")) {
          document.getElementById("name_C").value = "";
          document.getElementById("desc_C").value = "";
          document.getElementById("imgUrl_C").value = "";

          document.getElementById("name_C").placeholder = "name";
          document.getElementById("desc_C").placeholder = "desc";
          document.getElementById("imgUrl_C").placeholder = "imgUrl";

          const data = await response_c.json();
          console.log(data._id);

          if (data._id) {
            console.log(data._id);
            this.value_action_c.true = "1";
            console.log(this.value_action_c.true);

            this.$emit("value_action_C");

            // document.getElementById("input_category").innerHTML= ``
          }
        } else {
          alert("Add category Unsuccessfull");
        }
      } else {
        alert("please input all infomation");
      }
    },
  },
};
</script>


<style>
.button-save,
.button-cancle,
.button-update {
  width: 70px;
  height: 30px;
  border-radius: 7px 7px;
  border: rgb(255, 255, 255);
  font-size: 17px;
}
.btn-save > button,
.btn-cancle > button,
.btn-update > button {
  color: rgb(255, 255, 255);

  text-align: center;
}

.btn-save > button {
  background-color: rgb(0, 217, 255);
}

.btn-cancle > button {
  background-color: rgb(255, 0, 0);
}
.btn-update > button {
  background-color: rgb(0, 255, 34);
}

.btn-sc:hover {
  background-color: rgb(220, 169, 169);
}
.btn-add:hover {
  background-color: rgb(220, 169, 169);
}

.btn-save1 {
  padding-top: 6px;
}
.name_c > input,
.desc_c > input,
.imgUrl_C > input {
  width: 90%;
  height: 47px;
  font-size: 16px;
  border: 1px solid #8bc9ba;
  border-radius: 10px;
  text-indent: 5px;
  transition: 1s;
  -webkit-transition: 1s;
}

input[type="text"]:hover {
  box-shadow: 0 0 5pt 0.5pt #d3d3d3;
}
input[type="text"]:focus {
  box-shadow: 0 0 5pt 2pt #d3d3d3;
  outline-width: 0px;
}
.input_category {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
}
</style>