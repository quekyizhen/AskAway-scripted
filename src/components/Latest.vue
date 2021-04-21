<template>
<div>
    <div class="navbar">
      <a><router-link to="/all" exact>All</router-link></a>
      <a><router-link to="/latest" exact>Latest</router-link></a>
    </div><centre>
    <div id="head">
        <div class="question"> Question:
            <span id="space"></span>
            <div class="text" style="display:inline">Who is Obama?</div>
        </div> <br>
        <div class="question">Last Update: 
            <span id ="space"></span>   
            <div class="text" style="display:inline">01/04/2021</div>
        </div><br><br>

        <div id = "answers">
            <div id = "title"> Top 4 Answers</div> <br>
                <div class="ans">
                    <div class="ansTitle"> Answer 1:
                        </div>
                        <div class="ansText" style="display:inline">
                            44th president of the United States
                        </div>
                        <bookmark class="mark" style="display:inline"></bookmark>
                    </div>

                <div class="ans">
                    <div class="ansTitle"> Context 1:
                        </div>
                    <div class="ansText" style="display:inline">
                            Barack Hussein Obama II is an American politician and attorney 
                            who served as the <span style="background-color:#ffffd5;font-weight:bold">44th president of the United States </span> from 2009 to 2017.
                            A member of the Democratic Party, Obama was the first African-American president 
                            of the United States.
                        </div>
                </div>

                <div class="ans">
                    <div class="ansTitle"> Answer 2:
                        </div>
                        <div class="ansText" style="display:inline">
                            ...
                        </div>
                        <bookmark class="mark" style="display:inline"></bookmark>
                    </div>

                <div class="ans">
                    <div class="ansTitle"> Context 2:
                        </div>
                    <div class="ansText" style="display:inline">
                            ...
                        </div>
                </div>

                <div class="ans">
                    <div class="ansTitle"> Answer 3:
                        </div>
                        <div class="ansText" style="display:inline">
                            ...
                        </div>
                        <bookmark class="mark" style="display:inline"></bookmark>
                    </div>

                <div class="ans">
                    <div class="ansTitle"> Context 3:
                        </div>
                    <div class="ansText" style="display:inline">
                            ...
                        </div>
                </div>

                <div class="ans">
                    <div class="ansTitle"> Answer 4:
                        </div>
                        <div class="ansText" style="display:inline">
                            ...
                        </div>
                        <bookmark class="mark" style="display:inline"></bookmark>
                    </div>

                <div class="ans">
                    <div class="ansTitle"> Context 4:
                        </div>
                    <div class="ansText" style="display:inline">
                            ...
                        </div>
                </div>
        </div>
    </div>
    </centre>
</div>

</template>
<script>
import Bookmark from "./BookmarkButton.vue"
export default {
  name: 'Latest',
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
.question {
    font-size: 18px;
    font-weight:bold;
    padding-right:100px
}
.question .text {
    font-size: 18px;
    font-weight:normal;
    white-space:pre
}
.ans{
     border-radius: 10px;
     border: 1px solid #b4bfd6;
     color: #020202;
     background-color: white;
     width:800px;
     height:fit-content;
     padding-left: 10px;
     display: flex;
     text-align: center;
     line-height: 40px;
     margin-bottom: 20px;
     align-content: center;
    }
.ansTitle {
    font-size: 17px;
    font-weight:bold;
    padding-right:20px;
    padding-left: 10px;
    text-align:left;
    white-space: nowrap
}
.ansText {
    font-size: 17px;
    font-weight:normal;
    margin-left:10px;
    text-align: left;
    padding-top: 0px;
    line-height: 40px;
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
    padding-left:100px;
    padding-right:40px;
    background-color: #f8f8ff;
    align-content: center;
    padding-top:15px;
    padding-bottom:15px;
    margin-bottom:0px;
}

#title {
    font-size: 19px;
    font-weight:bolder;
}

.ans .mark {
  margin: 0px;
  padding-top:4px; 
  padding-left:340px;
  line-height:20px;
  position: absolute;
  left:500px;
}

</style>