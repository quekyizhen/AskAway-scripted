<template>
<div>
    <div class="navbar">
      <a href="#news">Sort by</a>
      <div class="drop">
      <button class="dropbtn">Add
      </button>
      <div class="drop-content" id="myDropdown">
        <a href="#"> COVID-19</a>
        <a href="#"> Tourism</a>
        <a href="#"> Economy</a>
      </div>
      </div> 
      <a href="#home">Bookmarks</a>
    </div>

    <table>
    <tr>
        <td><input type="checkbox"></td>

        <td>

        <!-- <img id="update-button" src="@/assets/exclamation-mark.png" width="30" height="30" @click="clearUpdate()"> -->
        <div class="qn-list">
            <p class="qn"><router-link to="/latest" exact>How does COVID-19 spread?</router-link></p> <p class="date">Asked on 10/3/2021</p>
        </div>
        <p></p>

        <span class="ans">
          <span class="ansTitle"> Answer: </span>
          <span class="ansText">
              mainly through close contact from person-to-person
          </span> </span>
          
          <span class="ans">
          <div class="ansTitle"> Context:</div>
          <div class="ansText" style="display:inline">
                  drinking water. Water treatment plants use filters and disinfectants to remove or kill germs, like the virus that causes COVID-19. 
                  The Environmental Protection Agency regulates water treatment plants to ensure that treated water is safe to drink.Currently,
                  there is no evidence that the virus that causes COVID-19 can be spread to people by drinking treated water. 
                  COVID-19 is spread <span class="highlightedText">mainly through close contact from 
                  person-to-person</span>. You can continue to use and drink water from your tap as usual.

          </div>
          </span>

        <td>
          <bookmarkRed style="display:inline"></bookmarkRed>
          <button><img src="@/assets/garbage.png" width ="30" height = "30"></button>

        </td>
    </tr>
    <tr>
        <td><input type="checkbox"></td>

        <td>
          <div class="qn-list">
            <p class="qn">When will covid reach its peak?</p> <p class="date">Asked on 28/2/2021</p>
          </div>
        <p></p>
        <span class="ans">
          <span class="ansTitle"> Answer: </span>
          <span class="ansText">
              June
          </span> </span>
          
          <span class="ans">
          <div class="ansTitle"> Context:</div>
          <div class="ansText" style="display:inline">
            tart of person-to-person transmission in England and Wales in the absence of controls, 
            assuming biological parameters remain unchanged. Therefore, if person-to-person transmission persists 
            from February, we predict the epidemic peak would occur in <span class="highlightedText">June</span>. The starting location has minimal 
            impact on peak timing, and model stochasticity varies peak timing by 10 days. Incorporating realistic 
            parameter uncertainty leads to estimates of peak time ranging from 78 days to 241 days after 
            person-to-person 
          </div>
          </span>
          <br>

          <span class="ans">
          <span class="ansTitle"> Answer: </span>
          <span class="ansText">
              between February 20 and 22, 2020
          </span> </span>
          
          <span class="ans">
          <div class="ansTitle"> Context:</div>
          <div class="ansText" style="display:inline">
            ontrol measures implemented since January 23, which include cutting off Wuhan and many other cities 
            and towns, a great public awareness and high level of self isolation at home, have contributed to a 
            substantial decline in the reproductivity of the COVID-19 in China. We predict that Hubei province 
            will reach its peak between <span class="highlightedText">February 20 and 22, 2020</span>, and if the removal rate can be increased to 0.1, 
            the epidemic outside Hubei province will end in May 2020, and inside Hubei in early June.
          </div>
          </span>
        </td>
        <td width = "130"><centre>
          <bookmarkRed style="display:inline"></bookmarkRed>
          <button><img src="@/assets/garbage.png" width ="30" height = "30"></button></centre>
          <div id="space"></div>
          <centre>
          <bookmarkRed style="display:inline"></bookmarkRed>
          <button><img src="@/assets/garbage.png" width ="30" height = "30"></button></centre>

        </td>
    </tr>
    </table>
</div>

</template>
<script>
import BookmarkRed from "./BookmarkButtonRed.vue"
export default {
  name: 'Bookmarks',
  components: {
    'bookmarkRed': BookmarkRed
  }
}

</script>

<style scoped>

button{
  border: none;
  background: none;
  cursor: pointer;
  padding-left: 25px;
}

p{
  margin:5px
}
/* Style the tab */
.tab {
  overflow: hidden;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: right;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
  font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;

}

table {
    width:100%;
    /* padding-left: 300px; */
    text-align:left;
}
th, td {
  padding-left: 20px;
  text-align: left;
  align-content: center;
}

tr:nth-child(even) {
  background-color: #f8f8ff;
}
tr:nth-child(odd) {
 background-color: #fff;
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

.date {
    font-size: 13px;
}
.ans{
    color: #020202;
    /* width:900px; */
    height:fit-content;
    padding-left: 20px;
    display: flex;
    text-align: center;
    line-height: 30px;
    margin: 0px;
    padding-right:10px;
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
    line-height: 35px;
}

.highlightedText {
  background-color:#ffffd5;
  font-weight:bold;
}
#update-button {
  padding-bottom: 10px;
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
  padding: 10px 16px;
  text-decoration: none;  

}

.drop {
  float: right;
  overflow: hidden;
}

.drop .dropbtn {
  cursor: pointer;
  font-size: 18px;  
  border: none;
  outline: none;
  color: black;
  padding: 10px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  font-weight: bold;
}

.navbar a:hover, .drop:hover .dropbtn, .dropbtn:focus {
  background-color: #ddd;
}

.drop:hover .drop-content {display: block;}

.drop-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.drop-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.drop-content a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}

#space {
  padding-bottom: 200px;
}
</style>