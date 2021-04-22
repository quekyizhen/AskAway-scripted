<template>
<div>

    <div class="navbar">
      <a><router-link to="/all" exact>All</router-link></a>
      <a><router-link to="/latest" exact>Latest</router-link></a>
    </div>
    <div id ="table">
    <centre>
    <div id="head">
        <div class="question"> Question:
            <span id="space"></span>
            <div class="text" style="display:inline">How does COVID-19 spread?</div>
            </div></div></centre>
         <br>

    <table>
        <tr>
            <th style ="width: 50px">Date</th>
            <th colspan="2">Answers</th>
            </tr>
        <tr>
            <td>
                <p class="date"> 13/04/2021</p></td>
            <td> 
                <div class="qn-list">
                <p class="qn"><router-link to="/latest" exact>mainly through close contact from person-to-person</router-link></p>
                </div> 
            </td>
                <td style ="width: 30px">
                  <bookmark class="mark" style="display:inline"></bookmark>
                </td>
            
        </tr>
        

        <tr>
            <td>
                <p class="date"> 30/03/2021</p>
            </td>
            <td>
                <div class="qn-list">
                <p class="qn">mainly from person-to-person 
                  through respiratory droplets produced when an infected person coughs, sneezes, or talks</p>
                </div>
                </td>

                <td style ="width: 30px">
                  <bookmark class="mark" style="display:inline"></bookmark>
                  </td>
        </tr>

        <tr>
            <td>
                <p class="date"> 30/03/2021</p>
            </td>
            <td>
                <div class="qn-list">
                <p class="qn">through small droplets from the nose or mouth</p>
                </div>
                </td>

                <td style ="width: 30px">
                  <bookmark class="mark" style="display:inline"></bookmark>
                  </td>
        </tr>

    </table>
</div>
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
    padding-left:10px;
    padding-right:10px;
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
    padding-left:90px;
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
    margin-left:180px;
    border: 1px solid #ddd;
    border-collapse: collapse;
    width: 900px;
    table-layout:auto;
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
  text-align: left;
  font-size:18px;
  padding-left: 10px;
  border: 1px solid #ddd;
  overflow: visible;
  border-right:transparent
}

td:last-child {
  border-left:transparent;
}

.mark {
  padding-right:20px;
}

#table {
  margin-left: 20px;
}

</style>