<template>
<div>
    <div class="navbar">
      <a><router-link to="/all" exact>All</router-link></a>
      <a><router-link to="/latest" exact>Latest</router-link></a>
    </div><centre>
    <div id="head">
        <div class="question"> Question:
            <span id="space"></span>
            <div class="text" style="display:inline">How does COVID-19 spread?</div>
        </div> <br>
        <div class="question">Last Update: 
            <span id ="space"></span>   
            <div class="text" style="display:inline">13/04/2021</div>
        </div><br><br>

        <div id = "answers">
            <div id = "title"> Top 4 Answers</div> <br>
                <div class="ans">
                    <div class="ansTitle"> Answer 1:
                        </div>
                        <div class="ansText" style="display:inline">
                            mainly through close contact from person-to-person
                        </div>
                        <bookmark class="mark" style="display:inline"></bookmark>
                    </div>

                <div class="ans">
                    <div class="ansTitle"> Context 1:
                        </div>
                    <div class="ansText" style="display:inline">
                             drinking water. Water treatment plants use filters and disinfectants to remove or kill germs, like the virus that causes COVID-19. 
                             The Environmental Protection Agency regulates water treatment plants to ensure that treated water is safe to drink.Currently,
                              there is no evidence that the virus that causes COVID-19 can be spread to people by drinking treated water. 
                              COVID-19 is spread <span style="background-color:#ffffd5;font-weight:bold">mainly through close contact from 
                                  person-to-person</span>. You can continue to use and drink water from your tap as usual.
                        </div>
                </div>

                <div class="ans">
                    <div class="ansTitle"> Answer 2:
                        </div>
                        <div class="ansText" style="display:inline">
                            mainly through close contact from person-to-person
                        </div>
                        <bookmark class="mark" style="display:inline"></bookmark>
                    </div>

                <div class="ans">
                    <div class="ansTitle"> Context 2:
                        </div>
                    <div class="ansText" style="display:inline">
                            drinking water. Water treatment plants use filters and disinfectants to remove or kill germs, like the virus that causes COVID-19. The Environmental Protection Agency regulates water treatment plants to ensure that treated water is safe to drink. Currently, there is no evidence that the virus that causes COVID-19 can be spread to people by drinking treated water. COVID-19 is spread <span style="background-color:#ffffd5;font-weight:bold">mainly through close contact from person-to-person</span>. You can continue to use and drink water from your tap as usual.
                        </div>
                </div>

                <div class="ans">
                    <div class="ansTitle"> Answer 3:
                        </div>
                        <div class="ansText" style="display:inline">
                            mainly from person-to-person through respiratory droplets produced when an infected person coughs, sneezes, or talks
                        </div>
                        <bookmark class="mark" style="display:inline"></bookmark>
                    </div>

                <div class="ans">
                    <div class="ansTitle"> Context 3:
                        </div>
                    <div class="ansText" style="display:inline">
                            COVID-19 is a new disease and we are still learning how it spreads. The virus that causes COVID-19 is thought to spread <span style="background-color:#ffffd5;font-weight:bold">mainly from person-to-person through respiratory droplets produced when an infected person coughs, sneezes, or talks</span>. These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs. This type of spread is not a concern after death. It may be possible that a person can get COVID-19 by touching a surface or object that has the virus 
                        </div>
                </div>

                <div class="ans">
                    <div class="ansTitle"> Answer 4:
                        </div>
                        <div class="ansText" style="display:inline">
                            through small droplets from the nose or mouth
                        </div>
                        <bookmark class="mark" style="display:inline"></bookmark>
                    </div>

                <div class="ans">
                    <div class="ansTitle"> Context 4:
                        </div>
                    <div class="ansText" style="display:inline">
                            People can catch COVID-19 from others who have the virus. The disease can spread from person   to person <span style="background-color:#ffffd5;font-weight:bold">through small droplets from the nose or mouth</span> are spread when a person with   COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person.   Other people then catch COVID-19 by touching these objects or surfaces, then touching their   eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person   with COVID-19 who coughs out
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