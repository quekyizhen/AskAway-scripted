<template>
<div>
    <!-- <div class="tab">
        <button class="tablinks">Sort By</button>
        <button class="tablinks">Add</button> 
        <div class="dropdown">
          <button class="tablinks" @click="dropdownList()">Add</button>
          <div id="dropdown" class="dropdown-content">
            <a href="#home">COVID</a>
            <a href="#about">Tourism</a>
            <a href="#about">Economy</a>
          </div>
        </div>

        <button class="tablinks">Bookmarks</button>
    </div> -->

    <div class="navbar">
      <a href="#news">Sort by</a>
      <div class="dropdown">
      <button class="dropbtn" @click="myFunction()">Add
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content" id="myDropdown">
        <a href="#"> COVID</a>
        <a href="#"> Tourism</a>
        <a href="#"> Economy</a>
      </div>
      </div> 
      <a href="#home">Bookmarks</a>
    </div>

    <table>
    <tr>
        <td><input type="checkbox"></td>
        <td>
          <!-- <button class="close-image"><img src="@/assets/exclamation-mark.png"></button> -->
          <!-- <router-link style="text-decoration: none;" to="/topics"> -->
            <img id="update-button" src="@/assets/exclamation-mark.png" width="30" height="30" @click="clearUpdate()">
          <!-- x -->
          <div class="qn-list">
            <p class="qn">Who is Obama?</p> <p class="date">Asked on 10/3/2021</p>
          </div>
        </td>
    </tr>
    <tr>
        <td><input type="checkbox"></td>
        <td>
          <div class="qn-list">
            <p class="qn">Who is Donald Trump?</p> <p class="date">Asked on 1/3/2021</p>
          </div>
        </td>
    </tr>
    </table>
</div>
</template>

<script>
export default {
  methods: {
    clearUpdate() {
      document.getElementById('update-button').className = "hidden"
    },
    myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
  }
}
</script>

<style scoped>

table {
    width:100%;
    /* padding-left: 300px; */
    text-align: left;
}
th, td {
  padding-left: 20px;
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f8f8ff;
}
tr:nth-child(odd) {
 background-color: #fff;
}

input[type=checkbox] {
    width: 15px;
    height: 15px;
}

.qn-list {
  display: inline-block;
  padding-left: 30px;
}

.qn {
    font-size: 20px;
    text-decoration: underline;
}

.date {
    font-size: 13px;
}

#update-button {
  padding-bottom: 10px;
}

.hidden {display:none;}

.navbar {
  overflow: hidden;
  background-color: white;
  font-weight: bold;
}

.navbar a {
  float: right;
  font-size: 16px;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;  

}

.dropdown {
  float: right;
  overflow: hidden;
}

.dropdown .dropbtn {
  cursor: pointer;
  font-size: 16px;  
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  font-weight: bold;
}

.navbar a:hover, .dropdown:hover .dropbtn, .dropbtn:focus {
  background-color: #ddd;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}
</style>