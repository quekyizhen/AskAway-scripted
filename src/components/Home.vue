<template>
  <div>
    <center><img src="@/assets/qa_system_image.jpeg" width="800" height="400" alt="QA Image"></center>
    
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
        <button class="close-image"><img src="@/assets/folder.png"></button>
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

#qn-box {
  padding-left: 250px;
  padding-right: 300px;
}

#ans-box {
  display: none;
  padding-left: 250px;
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
  background-color: #white;
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
</style>

