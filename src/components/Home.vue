<template>
  <div>
    <center><img src="@/assets/qa_system_image.jpeg" width="800" height="400" alt="QA Image"></center>
    <div id="qn-box">
      <label for="qn">Ask a Question:</label><br>
      <input type="text" id="qn" name="qn"><br>

      <button class="button" @click="showAns()">Go!</button>
    </div>

    <div id="ans-box">
      <p> Top 4 Answers </p>
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
  width: 75%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

#qn-box {
  padding-left: 200px;
}

#ans-box {
  display: none;
  padding-left: 200px;
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
</style>

