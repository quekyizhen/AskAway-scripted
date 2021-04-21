<template>
<div>

    <div class="navbar">
      <a><router-link to="/all" exact>All</router-link></a>
      <a><router-link to="/latest" exact>Latest</router-link></a>
    </div>
    <centre>
    <div id="head">
        <div class="question"> Question:
            <span id="space"></span>
            <div class="text" style="display:inline">Who is Obama?</div>
            </div></div></centre>
         <br>

    <table>
        <tr>
            <th style ="width: 50px">Date</th>
            <th>Answers</th>
            </tr>
        <tr>
            <td>
                <p class="date"> 01/04/2021</p></td>
            <td>
                <div class="qn-list">
                <p class="qn"><router-link to="/latest" exact>44th president of the United States</router-link></p>
                </div> 
                <bookmark class="mark" style="display:inline"></bookmark>
            </td>
        </tr>

        <tr>
            <td>
                <p class="date"> 30/03/2021</p>
            </td>
            <td>
                <div class="qn-list">
                <p class="qn">Ex president of the United States</p>
                </div> 
                <bookmark class="mark" style="display:inline"></bookmark>
            </td>
        </tr>

    </table>
</div>

</template>

<script>
import Bookmark from "./BookmarkButton.vue"
export default {
  name: 'All',
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
.date {
    font-size: 18px;
}

.qn-list {
  display: inline-block;
  padding-left: 30px;
}

.qn {
    font-size: 18px;
    text-decoration: underline;
}
.question {
    font-size: 20px;
    font-weight:bold;
    padding-left:130px;
}
.question .text {
    font-size: 18px;
    font-weight:normal;
    white-space:pre
}

.navbar {
  overflow: visible;
  background-color: white;
  font-weight: bold;
}

.navbar a {
  float: right;
  font-size: 18px;
  color: black;
  text-align: center;
  padding: 5px 16px;
  text-decoration: none;  
}

.navbar a:hover, .dropdown:hover .dropbtn, .dropbtn:focus {
  background-color: #ddd;
}

#space:before{
    content:"       "; 
    display:inline-block; 
    width:20px;
}

#head {
    padding-left:90px;
    padding-right:40px;
    align-content: center;
    padding-top:80px;
    padding-bottom:15px;
    margin-bottom:0px;
}

table {
    /* padding-left: 300px; */
    text-align:left;
    margin-left:220px;
    border: 1px solid #ddd;
    border-collapse: collapse;
}

th {
    background-color: #F0F8FF;
    text-align: center;
    font-size:18px;
    padding: 8px;
    border: 1px solid #ddd;
}

tr:nth-child(odd){background-color: #f8f8ff}

td {
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  font-size:18px;
  padding: 8px;
  border: 1px solid #ddd;
}

.mark {
  /* margin: 0px;
  padding-top:20px;  */
  padding-left:340px;
  top: 5px;
  left:20px;
  /* line-height:20px; */
  position: sticky;
  /* left:800px; */
}

</style>