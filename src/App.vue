<template>
  <div id="app">
    <div id="header">
      <h1><router-link to="/" exact><img src="@/assets/logo_name.png" width="245" height="53" alt="logo words"></router-link></h1>
      <div v-if="signedIn" class="link"><router-link to="/profile" exact>My Profile</router-link></div>
      <div v-else><div class="link"><router-link to="/login" exact>Login</router-link></div></div>
  
      <div class="dropdown">
        <a class="link">Topics</a>
        <div class="dropdown-content">
            <router-link to="/topics" exact>COVID-19</router-link>
            <a>Tourism</a>
            <a>Economy</a>
        </div>
      </div>

      <div class="link"><router-link to="/general" exact>General</router-link></div>

    </div>
  
    <div style="width:100%">
      <router-view @toggleSignIn="toggleSignIn" @toggleSignOut="toggleSignOut" :signedIn="signedIn"></router-view>
    </div>

    <div id="copyright">&#169; Team A <sup>2</sup></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      signedIn: false,
      // username: " to SafeTrack"
    }
  },
  methods: {
    toggleSignIn(username) {
      this.signedIn = true;
      this.username = ", " + username;
      this.$router.push("/");
    },
    toggleSignOut() {
      this.signedIn = false;
      // this.username = " to SafeTrack";
    }
  },

}
</script>

<style>
#app {
  font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding:0;
}

html, body {
  margin: 0 !important;
  padding: 0 !important;
}

a {
  text-decoration: none;
  color:inherit;
}

b {
  font-weight: 600;
}

h1 {
  font-size:30px;
}


.titletext {
  font-size:80px;
  text-align:right;
  position:relative;
  left:calc(100% - 600px);
  top:20%;
  max-width:500px;
}
#header {
  width:100%;
  height:80px;
  color:black;
  background: #20344a;
  text-transform:uppercase;
  font-size:15px;
  overflow:hidden;
  position:sticky;
  top:0;
  z-index:1;
}

#header h1 {
  display:inline-block;
  margin-top:12px;
  line-height:100px;
  padding: 0 5px;
  float:left;
}

#header a {
  float:right;
  display:inline-block;
  padding:0 30px;
  font-weight: bold;
  line-height: 85px;
  transition:0.5s;
  color:white;
}

.link a:hover {
  background: #4e5e70;
  transition:0.5s;
}

#copyright {
  width:calc(100% - 100px);
  height:50px;
  padding:0 50px;
  background:#20344a;
  color:white;
  font-weight:lighter;
  font-size:15px;
  line-height:50px;
  bottom:auto;
  overflow:hidden;
  margin-top:192px;
}


#end {
  background-color: rgb(32,52,79);
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 8px 4px;
  cursor: pointer;
  border-radius: 8px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #20344a;
  min-width: 120px;
  z-index: -99;
  text-align: left;
  padding-top: 70px;
}
.dropdown:hover {
  background: #4e5e70;
}
.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown {
  position: relative;
  /* display: inline-block; */
  float: right;
  display:inline-block;
  padding:0 30px;
  font-weight: bold;
  line-height: 20px;
  transition:0.5s;
  color:black;
}

</style>

