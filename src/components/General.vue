<template>
<div>
    <div class="tab">
        <button class="tablinks">Sort By</button>
        <button class="tablinks">Add</button>
        <button class="tablinks">Bookmarks</button>
    </div>

    <table>
    <tr>
        <td><input type="checkbox"></td>
        <td>
          <!-- <button class="close-image"><img src="@/assets/exclamation-mark.png"></button> -->
          <!-- <router-link style="text-decoration: none;" to="/topics"> -->
            <img id="update-button" src="@/assets/exclamation-mark.png" width="30" height="30" @click="clearUpdate()">
          <!-- </router-link> -->
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
    }
  }
}
</script>

<style>
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
  font-weight: bold;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

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

.show {display:inLine !important;}
</style>