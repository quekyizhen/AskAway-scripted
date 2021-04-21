<template>
<div id="login">
  <div id="logo"><img src="@/assets/logo3.png" width="300" height="100" alt="logo"></div>
  <!-- <h1>Sign In</h1> -->
  <form novalidate @submit.prevent="login">

  <label for="email">Email:</label><br>
  <input type="text" v-model="email" value="email" id="email"><br>
  <label for="password">Password:</label><br>
  <input type="password" v-model="password" value="password" id="password"><br>
    <div id = "forgot"><router-link to="/forgot">Forgot Password?</router-link><br></div>
    <button type="submit"><router-link to="/" style="color:white; text-decoration:none">Log In</router-link></button>
    <ul v-if="errors.length">
      <li v-for="error in errors" :key="error">
        {{error}}
      </li>
    </ul>
  </form>
  <hr style="width:50%;text-align:left;margin-left:0"><h3>
  New to AskAway?</h3><a><router-link to="/register">Register Here</router-link></a>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: "Login",
  data() {
    return {
      email:'',
      password:'',
      errors:[],
      username:''
    }
  },
  methods: {
    toggleSignIn(user) {
      this.$emit('toggleSignIn', user)
    },
    login() {
      this.errors=[]
      firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(data => {
            this.toggleSignIn(data.user.displayName)
            this.$router.push('/')
          })
          .catch((error) => {
            this.errors.push(error.message)
          });

    },
  }
}
</script>

<style scoped>
#login {
  padding-top:30px;
  padding-left: 430px;
  padding-bottom: 0px;
}
input {
  padding:10px;
  margin:15px;
  width:50%;
}
label {
  padding:15px;
}
button {
  background-color: rgb(32,52,79);
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
  margin:15px 15px;
  cursor: pointer;
  border-radius: 8px;
}
a {
  color:#2c3e50;
  font-weight:bold;
  transition:0.5s;
  
}

a:hover {
  color: #456a9b;
  text-decoration: underline;
  transition:0.5s;
}

.login {
  color: white;
  font-weight:bold;
  transition:0.5s;
  
}

.login:hover {
  color:white;
  text-decoration: underline;
  transition:0.5s;
}

h1{
   margin-left:15px;
}

h3 {
  display: inline-block;
  margin-top: 5px;
  margin-right:10px;
  margin-bottom:0px
}

#forgot {
  margin-left:15px;
}

#logo {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left:80px;
}
</style>