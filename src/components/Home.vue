<template>
  <body>
    <h1>Welcome to AskAway!</h1>
    <img id="display-image" src="@/assets/qa_system_image.jpeg" width="700" height="350" alt="QA Image">
    
    <div id="intro"> 
      Our Question Answering system aims to answer diverse questions with precise answers as it has been
      trained on multiple Reading Comprehension datasets such as <a target="_blank" href="https://quac.ai/">QuAC</a>, 
      <a target="_blank" href="https://stanfordnlp.github.io/coqa/">CoQA</a>, <a target="_blank" href="http://nlp.cs.washington.edu/triviaqa/">TriviaQA</a> and 
      <a target="_blank" href="https://www.microsoft.com/en-us/research/project/newsqa-dataset/">NewsQA</a>.
      <p>Simply input any question below and the top 4 answers will be returned. </p>
    </div>

    <br>

    <div id="qn-box">
      <label for="qn">Ask a Question:</label><br>
      <input type="text" id="qn" name="qn" placeholder="Type question here..." v-model="inputText"><br>

      <div class="button-area">
        <button class="button" @click="showAns()">Go!</button>
        <button class="button" @click="retrieveAns()">Real System</button>
      </div>
    </div>
    <div id="real-ans">
      <strong><p> Top 4 Answers </p></strong>
      <div v-for="dict in this.answers" v-bind:key="dict">
        <div class="ans">
        Answer: {{dict.answers}} 
        <br><br>
        
        Context: <span v-html="highlight(dict.context, dict.answers)"></span>

        </div><div class="space"></div>
      </div>
    </div>
    <div id="ans-box">
      <strong><p> Top 4 Answers </p></strong>
        <div class="ans">
        Answer 1: older adults and people with underlying medical conditions
        <br><br>
        Context 1: COVID-19 is a new disease and there is limited information regarding risk factors for
         severe disease. Based on currently available information and clinical expertise, <span class="highlightedText">older adults and people
        with underlying medical conditions</span> are at higher risk for severe illness from COVID-19.
        <br><br>
        </div>
        <div class="space"></div>
        
        <div class="ans">
        Answer 2: Older people and people of all ages with severe underlying health conditions
        <br><br>
        Context 2:  on it and then touching their own mouth, nose, or possibly their eyes. 
        This is not thought to be the main way the virus spreads. People should consider not touching the 
        body of someone who has died of COVID-19. <span class="highlightedText">Older people and people of 
          all ages with severe underlying health conditions</span> are at higher risk of severe illness from 
          COVID-19. There may be less of a chance of the virus spreading from certain types of touching, 
          such as holding the hand or hugging after the body has been prepared for v
        <br><br></div>
        <div class="space"></div>

        <div class="ans">
        Answer 3: Older adults
        <br><br>
        Context 3: <span class="highlightedText">Older adults</span> people who have serious underlying
         medical conditions are at highest risk of getting sick from COVID-19. If others in your home are
          at higher risk for severe illness from COVID-19, consider extra precautions to separate your 
          child from those people. If you are unable to stay home with your child during school dismissals 
          and someone at higher risk for severe illness from COVID-19 will be providing care (older adult or 
          someone with a serious underlying medical condition), limit yo
        <br><br></div>
        <div class="space"></div>

        <div class="ans">
        Answer 4: patients with cancer
        <br><br>
        Context 4: We read the excellent Comment by Wenhua Liang and colleagues in The Lancet Oncology 
        with great interest. Of 1590 cases with confirmed coronavirus disease 2019 (COVID-19), 18 patients 
        had a history of cancer. The authors concluded that <span class="highlightedText">patients with cancer
          </span> had a higher risk of COVID-19 and with a poorer prognosis than those without cancer. First, 
          the data in the Comment by Liang and colleagues showed a higher percentage of patients with cancer in 
          the COVID-19 cohort than in the overall populati
        <br><br></div>
    

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

  </body>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      inputText : "",
      answers: []
    }
  },
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
    },
    retrieveAns() {
      const question = {'question': this.inputText};
      axios.post("http://127.0.0.1:8000/predict", question).then(response => {this.answers = response.data.answer; 
      console.log(this.answers);
      });

      var x = document.getElementById("real-ans");
      if (x.style.display === "none") {
        x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    },
    highlight(cont, ans) {
      //=> is a function with match as an argument, where match is RegExp(ans)  
      return cont.replace(new RegExp(ans), match => {
            return '<mark style="background-color: #ffffd5; font-weight:bold">' + match + '</mark>';
        });
    }
  }
}

</script>

<style scoped>

h1 {
  padding-left: 450px;
  font-size: 35px; 
}

input[type=text] {
  width: 100%;
  padding: 10px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
 a {
  color:#6495ED;
 }
a:hover {
  text-decoration: underline;   
}
#display-image {
  padding-left: 270px;
  padding-right: 300px;
}

#intro {
  padding-left: 300px;
  padding-right: 300px;
  font-weight: bold;
  font-size: 16px;
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

#real-ans {
  display: none;
  padding-left: 300px;
  padding-right: 300px;
}

.highlightedText {
  background:#ffffd5;
  font-weight:bold;
}


.ans {
  font-size: 14px;
  width: 650px;
  border: 1px solid black;
  padding: 10px;
  margin: 1px;
  border-radius: 3px;
}

.space {
  padding: 10px;

}
.button-area {
  padding-top: 20px;
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
  border: none;
  cursor: pointer;
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

