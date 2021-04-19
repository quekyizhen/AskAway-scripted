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
    </tr>
    <tr>
        <td><input type="checkbox"><button class="close-image"><img src="@/assets/exclamation-mark.png"></button></td>
        <td><p class="qn">Who is Donald Trump?</p> <p class="date">Asked on 1/3/2021</p></td>
    </tr>
    </table>
</div>
</template>

<script>

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
    paddin-right: 50px;
}
.qn {
    font-size: 20px;
    text-decoration: underline;
}

.date {
    font-size: 13px;
}
.button {
  display: inline-block;
  border-radius: 4px;
  border: none;
  color: #f8f8ff;
  text-align: center;
  font-size: 12px;
  padding: 10px;
  width: 80px;
  margin: 5px;
}
.close-image {
  background-color: #f8f8ff;
  border-color: #f8f8ff;
}
.close-image img {
  display: block;
  height: 30px;  
  width: 30px;
}
</style>