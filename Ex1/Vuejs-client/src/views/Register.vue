
<template>
  <div class="about">
    <form>
      <div class="container">
        <h1>Sign up</h1>
        <p>please fill in this form to create an account.</p>
        <hr />
        <div>
          <label>Email</label>
          <div>
            <input type="email" id="email" placeholder="Enter Email" v-model="email" />
          </div>
          <label>Username</label>
          <div>
            <input type="text" id="username" placeholder="Username" v-model="username" />
          </div>
          <label>First name</label>
          <div>
            <input type="text" id="fname" placeholder="First Name"  v-model="firstname" />
          </div>
          <label>Last name</label>
          <div>
            <input type="text" id="lname" placeholder="Last Name" v-model="lastname" />
          </div>
          <label>Password</label>
          <div>
            <input type="password" id="pwd" placeholder="Create your password" v-model="password" />
          </div>
          <label>Repeat password</label>
          <div>
            <input type="password" id="r_pwd" placeholder="Repeat your password" v-model="repeat_password" />
          </div>
          <label  style="display: flex; justify-content: flex-start; padding: 20px">
            By creating an account you agree to our
            <span href="#" style="color: #4285f4"> &nbsp Terms & Privacy.</span>
          </label>
          <div >
            <button type="submit" class="signupbtn" @click="created" >Sign Up</button>
          </div>
        </div>
      </div>
    </form>
     <a href="http://localhost:3000/"
        ><label
          style="
            display: flex;
            justify-content: center;
            padding: 20px;
            color: #41b883;
          "
        >
          Back To Login 
        </label>
      </a>
       <div class="redcolor" id="err"></div>

  </div>
</template>

<style>
@media (min-width: 1024vh) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
form {
  box-shadow: 0 0 4px #ccc;
  padding: 10px;
}
.container {
  padding: 20px;
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
.signupbtn {
  border: none;
  width: 100%;
  padding: 15px;
  color: #f1f1f1;
  background: rgb(37, 170, 108);
}

.redcolor{
color: red;}
</style>

<script>
export default {
  data() {
    return {
      email: "",
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      repeat_password: "",
      msg: "",
      input_color: "",
    };
  },
  methods: {
    async created() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email,
          username: this.username,
          firstname: this.firstname,
          lastname: this.lastname,
          password: this.password,
          repeat_password: this.repeat_password
        }),
      };
      const response = await fetch("http://localhost:3001/register", requestOptions);
      const data = await response.json();
      console.log("data: ", data);

      //check if user is not existed
      if(data.success == false) {
        var element = document.getElementById("err");
         element.innerHTML = `<h2>Please complete information </h2>`
      }
      else {
        // this.msg = data.message;
        // this.input_color = "rgba(106,168,79,.8)";

        //clear input value
        this.email = "";
        this.username = "";
        this.lastname = "";
        this.firstname = "";
        this.password = "";

        this.$router.push({name:"login" ,hash:"#login"});

      } 
    },
  },
};
</script>