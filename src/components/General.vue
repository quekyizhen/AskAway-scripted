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
        <td><p class="qn">Who is Obama?</p> <p class="date">Asked on 10/3/2021</p></td>
        <td>
          <button @click="bookmark(0)" v-show="!this.boxes[0].isMarked"><img src="@/assets/bookmark.png" width ="30" height = "30"></button>
          <button @click="bookmark(0)" v-show="this.boxes[0].isMarked"><img src="@/assets/bookmark_red.png" width ="30" height = "30"></button>
          <button><img src="@/assets/garbage.png" width ="30" height = "30"></button>
        </td>
    </tr>
    <tr>
        <td><input type="checkbox"></td>
        <td><p class="qn">Who is Donald Trump?</p> <p class="date">Asked on 1/3/2021</p></td>
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
    }
  }
}
</script>

<style>
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

.qn {
    font-size: 20px;
    text-decoration: underline;
}

.date {
    font-size: 13px;
}

/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>

