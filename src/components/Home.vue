<template>
  <div>
    <img id="display-image" src="@/assets/qa_system_image.jpeg" width="800" height="400" alt="QA Image">
    
    <div id="intro"> 
      Our Question Answering system aims to answer diverse questions with short, precise answers as it has been
      trained on multiple Reading Comprehension datasets. 
      Simply input any question and the top 4 answers will be returned. Ask away!
    </div>

    <br>

    <div id="qn-box">
      <label for="qn">Ask a Question:</label><br>
      <input type="text" id="qn" name="qn" placeholder="Type question here..."><br>

      <div class="button-area">
        <button class="button" @click="showAns()">Go!</button>
      </div>
    </div>

    <div id="ans-box">
      <p> Top 4 Answers </p>
      <p>
        Answer: 
        <br>
        Context:
        <br><br>
        Answer: 
        <br>
        Context:
        <br><br>
        Answer: 
        <br>
        Context:
        <br><br>
        Answer: 
        <br>
        Context:
        <br><br>
      </p>

      <div class="button-area">
        <button class="close-image"><img src="@/assets/add.png"></button>

        <div class="divider"></div>

        <div class="drop">
          <button class="close-image" @click="dropdownList()"><img src="@/assets/folder.png"></button>

          <div id="dropdown" class="drop-content">
            <a>COVID-19</a>
            <a>Tourism</a>
            <a>Economy</a>
            <a>Create new...</a>
          </div>
        </div>
      </div>
      
    </div>  

  </div>
</template>

<script>

export default {
  methods: {
    showAns() {
      var x = document.getElementById("ans-box");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    dropdownList() {
      document.getElementById("dropdown").classList.toggle("show");
    }
  }
}

</script>

<style scoped>
input[type=text] {
  width: 100%;
  padding: 10px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

#display-image {
  padding-left: 220px;
  padding-right: 300px;
}

#intro {
  padding-left: 300px;
  padding-right: 300px;
  font-weight: bold;
}

#qn-box {
  padding-left: 300px;
  padding-right: 300px;
}
#ans-box {
  display: none;
  padding-left: 300px;
  padding-right: 300px;
}
.button-area {
  text-align: right;
}
.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #66CDAA;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 12px;
  padding: 10px;
  width: 80px;
  cursor: pointer;
  margin: 5px;
}
.close-image {
  background-color: white;
  border-color: #F5F5F5;
}
.close-image img {
  display: block;
  height: 30px;  
  width: 30px;
}
.divider{
    width:10px;
    height:auto;
    display:inline-block;
}
.drop{
  position: relative;
  display: inline-block;
}
.drop-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 999;
}
.drop-content a {
  color: black;
  padding: 10px 12px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.drop a:hover {background-color: #ddd;}
.show {display: block;}
</style>

