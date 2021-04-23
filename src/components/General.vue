<template>
<div>
    <div class="navbar">
      <a href="#news">Sort by</a>
      <div class="drop">
      <button class="dropbtn">Add
      </button>
      <div class="drop-content" id="myDropdown">
        <router-link to= "/topics" exact> COVID-19</router-link>
        <a href="#"> Tourism</a>
        <a href="#"> Economy</a>
      </div>
      </div> 
      <a>Bookmarks</a>
    </div>

    <table>
    
      <tr>
        <td class="check"><input type="checkbox"></td>
        <td width="10">
        <td>
            <p class="qn">Who is at higher risk for serious illness from covid?</p> <p class="date">Asked on 22/4/2021</p>

        <td width = "130"><centre>

          <bookmark style="display:inline"></bookmark>
          <button><img src="@/assets/garbage.png" width ="30" height = "30"></button></centre>

        </td>
    </tr>

    <tr>
        <td class="check"><input type="checkbox"></td>

        <td width="10">
        <span v-if="this.$store.state.qn.latest">
            <router-link to="/latest" exact><img id="update-button" src="@/assets/exclamation-mark.png" width="25" height="25" @click="clearUpdate()"></router-link>
          </span>
        </td><td>
        
            <p class="qn"><router-link to="/latest" exact>How does COVID-19 spread?</router-link></p> <p class="date">Asked on 10/3/2021</p>


        <td>
         <changing style="display:inline" ></changing>
          <button><img src="@/assets/garbage.png" width ="30" height = "30"></button>
        </td>
    </tr>

    <tr>
        <td class="check"><input type="checkbox"></td>
        <td>
        <td>

            <p class="qn">Who is Taylor Swift?</p> <p class="date">Asked on 1/3/2021</p>

        <td width = "130"><centre>

          <bookmarkRed style="display:inline"></bookmarkRed>
          <button><img src="@/assets/garbage.png" width ="30" height = "30"></button></centre>

        </td>
    </tr>
    </table>
</div>

</template>
<script>
import ChangingBookmark from "./ChangingBookmark.vue"
import Bookmark from "./BookmarkButton.vue"
import BookmarkRed from "./BookmarkButtonRed.vue"
export default {
  
  name: 'general',
  data() {
    return {
        isMarked: false, 
    }
  },
  methods: {
    change() {
      this.isMarked = !this.isMarked;
      console.log("hello");
    }, 
    clearUpdate() {
      this.$store.state.qn.latest = false;
    }
  },
  components: {
    'changing':ChangingBookmark,
    'bookmarkRed':BookmarkRed,
    'bookmark': Bookmark
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

.check {
  padding-left:20px;
  padding-right:0px
}

p{
  margin:10px
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
    text-align:left;
    margin-bottom: 136px;
    border-collapse: collapse;
}

th, td {
  padding-right: 0px;
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

.qn {
    font-size: 20px;
    text-decoration: underline;
    font-weight:bold;
    display: inline-block;
    margin-bottom: 0em ;
}

.date {
    font-size: 13px;
}

#update-button {
  padding-right: 5px;
  padding-top: 8px;
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