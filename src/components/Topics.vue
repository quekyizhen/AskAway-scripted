<template>
<div>
    <div class="navbar">
      <a href="#news">Sort by</a>
      <div class="drop">
      <button class="dropbtn">Add
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
          <!-- <img id="update-button" src="@/assets/exclamation-mark.png" width="30" height="30" @click="clearUpdate()"> -->
          <div class="qn-list">
            <p class="qn"><router-link to="/latest" exact>Who is at higher risk for serious illness from covid?</router-link></p> <p class="date">Asked on 22/4/2021</p>
          </div>
        </td>

        <td>
          <bookmark style="display:inline"></bookmark>
          <button><img src="@/assets/garbage.png" width ="30" height = "30"></button>

        </td>
    </tr>
    <tr>
        <td><input type="checkbox"></td>

        <td>
          <div class="qn-list">
            <p class="qn">How does COVID-19 spread?</p> <p class="date">Asked on 10/3/2021</p>
          </div>
        </td>
        <td width = "130"><centre>
          <bookmark style="display:inline"></bookmark>
          <button><img src="@/assets/garbage.png" width ="30" height = "30"></button></centre>
        </td>
    </tr>

     <tr>
        <td><input type="checkbox"></td>

        <td>
          <div class="qn-list">
            <p class="qn">What are the symptoms of COVID-19?</p> <p class="date">Asked on 28/2/2021</p>
          </div>
        </td>
        
        <td width = "130"><centre>
          <bookmark style="display:inline"></bookmark>
          <button><img src="@/assets/garbage.png" width ="30" height = "30"></button></centre>
        </td>
    </tr>

    <tr>
        <td><input type="checkbox"></td>

        <td>
          <div class="qn-list">
            <p class="qn">When will covid reach its peak?</p> <p class="date">Asked on 28/2/2021</p>
          </div>
        </td>
        
        <td width = "130"><centre>
          <bookmark style="display:inline"></bookmark>
          <button><img src="@/assets/garbage.png" width ="30" height = "30"></button></centre>
        </td>
    </tr>
    </table>
</div>

</template>
<script>
import Bookmark from "./BookmarkButton.vue"
export default {
  name: 'topic',

  components: {
    'bookmark':Bookmark
  }
  // methods: {
  //   bookmark(idx) {
  //     this.boxes[idx].isMarked = !this.boxes[idx].isMarked;
  //   }
  //   //  clearUpdate() {
  //   //   document.getElementById('update-button').className = "hidden"
  //   // },
  //   // myFunction() {
  //   //   document.getElementById("myDropdown").classList.toggle("show");
  //   // }
  // }
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
  font-size: 18px;
  color: black;
  text-align: center;
  padding: 10px 16px;
  text-decoration: none;  

}

.drop {
  float: right;
  overflow: hidden;
}

.drop .dropbtn {
  cursor: pointer;
  font-size: 18px;  
  border: none;
  outline: none;
  color: black;
  padding: 10px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  font-weight: bold;
}

.navbar a:hover, .drop:hover .dropbtn, .dropbtn:focus {
  background-color: #ddd;
}

.drop:hover .drop-content {display: block;}

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