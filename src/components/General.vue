<template>
<div>
    <div class="navbar">
      <a href="#news">Sort by</a>
      <div class="drop">
      <button class="dropbtn" @click="myFunction()">Add
      </button>
      <div class="drop-content" id="myDropdown">
        <a href="#"> COVID-19</a>
        <a href="#"> Tourism</a>
        <a href="#"> Economy</a>
      </div>
      </div> 
      <router-link to="/bookmarks" exact>Bookmarks</router-link>
    </div>

    <table>
    <tr>
        <td><input type="checkbox"></td>

        <td>
          <!-- <button class="close-image"><img src="@/assets/exclamation-mark.png"></button> -->
          <!-- <router-link style="text-decoration: none;" to="/topics"> -->
            <router-link to="/latest"><img id="update-button" src="@/assets/exclamation-mark.png" width="30" height="30" @click="clearUpdate()"></router-link>
          <div class="qn-list">
            <p class="qn"><router-link to="/latest" exact>Who is Obama?</router-link></p> <p class="date">Asked on 10/3/2021</p>
          </div>
        <td>
         <bookmark></bookmark>
        </td>
    </tr>
    <tr>
        <td><input type="checkbox"></td>
        <td>
          <div class="qn-list">
            <p class="qn">Who is Donald Trump?</p> <p class="date">Asked on 1/3/2021</p>
          </div>
        <td width = "130"><centre>
          <button  @click="bookmark(1)" v-show="!this.boxes[1].isMarked"><img src="@/assets/bookmark.png" width ="30" height = "30"></button>
          <button  @click="bookmark(1)" v-show="this.boxes[1].isMarked"><img src="@/assets/bookmark_red.png" width ="30" height = "30"></button>
          <button><img src="@/assets/garbage.png" width ="30" height = "30"></button></centre>

        </td>
    </tr>
    </table>
</div>

</template>
<script>
import Bookmark from "./Bookmark.vue"
export default {
  
  name: 'button',
  data() {
    return {
      boxes:
      [
        {isMarked: false},
        {isMarked: false}
      ]
  }
  },
  methods: {
    bookmark(idx) {
      this.boxes[idx].isMarked = !this.boxes[idx].isMarked;
    },
     clearUpdate() {
      document.getElementById('update-button').className = "hidden"
    },
    myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
  },
  components: {
    'bookmark':Bookmark
  }
}
</script>

<style scoped>

button{
  border: none;
  background: none;
  cursor: pointer;
  padding-left: 25px
}

/* Style the tab */
.tab {
  overflow: hidden;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: right;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
  font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;

}


table {
    width:100%;
    /* padding-left: 300px; */
    text-align:left;
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
    font-weight:bold;
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

.drop {
  float: right;
  overflow: hidden;
}

.drop .dropbtn {
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

.navbar a:hover, .drop:hover .dropbtn, .dropbtn:focus {
  background-color: #ddd;
}

.drop-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.drop-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.drop-content a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}
</style>