
<template>
<div>  
  <form >
    <div class="container">
      <div align="center">
        <img class="pic" src="../assets/p1.png" alt="" width="72" height="57" />
      </div>
      <div>
        <label>Email</label>
        <div>
          <input type="text" id="email" placeholder="Enter email" v-model="email" />
        </div>

        <label>Password</label>
        <div>
          <input type="password" id="pwd" placeholder="Enter password" v-model="password" />
        </div>

       
      </div>
     
      <div class="redcolor" id="err"></div>
    </div>
  </form>
   <div>
        <button type="submit" class="loginbtn" @click="created()" >Login</button>
   </div>
    <a href="http://localhost:3000/register"
        >
        <label
          style="
            display: flex;
            justify-content: flex-end;
            padding: 20px;
            color: #41b883;
          "
        >
          Create new account here.
        </label>
      </a>
</div>
</template>

<script>
  export default {
    data() {
      return {
        email:"",
        password: "",
        msg: "",
        input_color:"",
      };
    },
    methods: {

      async created(){
        if (this.email == "" && this.password == 0) {

          var element = document.getElementById("err");
          element.innerHTMl = `<h3> Your Information is incorrect !!</h3>`
        }
        else {
          console.log("dddd")
          // Post request using fetch with async/await 
          const requestOptions = {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type" : "application/json",
            "Acess-Control-Allow-Credentials": true,},
            body: JSON.stringify ({ email: this.email, password: this.password}),
          };

          //post data to API 
          const response = await fetch( 
            "http://localhost:3001/login",
            requestOptions
          );
          const data = await response.json();
          console.log(data)

        if (data.suscess == true) {
       
          this.$router.push({ name: "homepage", hash: "#HOME" });
        } else {
       
        } 
         }
      }
    }
  }
</script>

<style>
form {
  box-shadow: 0 0 4px #ccc;
  padding: 10px;
}
.redcolor{
  color:red;
}
.container {
  padding: 20px;
}
.pic {
  height: 200px;
  width: 200px;
  padding: 12px;
}

input[type="text"],
input[type="password"],
input[type="email"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
.loginbtn {
  border: none;
  width: 100%;
  padding: 15px;
  color: #f1f1f1;
  background: rgb(37, 170, 108);
}
</style>
