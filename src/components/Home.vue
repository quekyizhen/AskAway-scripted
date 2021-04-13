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

        <div class="dropdown">
          <button class="close-image" @click="dropdownList()"><img src="@/assets/folder.png"></button>

          <div id="dropdown" class="dropdown-content">
            <a href="#home">Sports</a>
            <a href="#about">Politics</a>
            <a href="#contact">Create new...</a>
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

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 10px 12px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown a:hover {background-color: #ddd;}

.show {display: block;}
</style>

