<template>
<div>
    <div class="navbar">
      <a>All</a>
      <a>Latest</a>
    </div><centre>
    <div id="head">
        <div class="question"> Question:
            <span></span>
            <div class="text" style="display:inline">Who is Obama?</div>
        </div> <br>
        <div class="question">Last Update: 
            <span></span>   
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
                    </div>

                <div class="ans">
                    <div class="ansTitle"> Context 1:
                        </div>
                    <div class="ansText" style="display:inline">
                            Barack Hussein Obama II is an American politician and attorney 
                            who served as the 44th president of the United States from 2009 to 2017.
                            A member of the Democratic Party, Obama was the first African-American president 
                            of the United States.
                        </div>
                </div>
        </div>
    </div>
    </centre>
</div>

</template>
<script>

export default {
  name: 'Latest',
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
     margin-bottom: 20px
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
}

.hidden {display:none;}

.navbar {
  overflow: hidden;
  background-color: white;
  font-weight: bold;
}

.navbar a {
  float: right;
  font-size: 20px;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;  

}

.navbar a:hover, .dropdown:hover .dropbtn, .dropbtn:focus {
  background-color: #ddd;
}

span:before{
    content:"       "; 
    display:inline-block; 
    width:20px;
}

#head {
    margin-left:0px;
    margin-right:0px;
    padding-left:100px;
    padding-right:40px;
    background-color: #f8f8ff;
    align-content: center;
}

#title {
    font-size: 19px;
    font-weight:bolder;
}


</style>