<template>
  <div id="forgot">
    <h1>Reset Password</h1>
    <form novalidate @submit.prevent="forgotPassword">
      <label for="email">Email:</label>
      <input type="text" v-model="email" value="email" id="email" style="padding:7px; margin:10px"><br><br>
      <button class="end" type="submit">Send Link to Reset Password</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "ForgotPassword",
  data() {
    return {
      email:''
    }
  },
  methods: {
    forgotPassword() {
        firebase
            .auth()
            .sendPasswordResetEmail(this.email)
            .then(() => {
              alert('Check your Registered Email to Reset Password!')
            }).catch((error) => {
          alert(error)
        })
    }
  }
}
</script>

<style scoped>
#forgot {
  padding-top:20px;
  padding-left:80px;
  padding-bottom:60px;
}
button {
  background-color: rgb(32,52,79);
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
  margin:15px 15px;
  cursor: pointer;
  border-radius: 8px;
}
</style>