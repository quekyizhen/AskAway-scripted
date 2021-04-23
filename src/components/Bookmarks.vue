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
            <p class="qn">Who is Taylor Swift?</p> <p class="date">Asked on 1/3/2021</p>
          </div>
        <p></p>
        <span class="ans">
          <span class="ansTitle"> Answer: </span>
          <span class="ansText">
              American country singer-songwriter
          </span> </span>
          
          <span class="ans">
          <div class="ansTitle"> Context:</div>
          <div class="ansText" style="display:inline">
            Speak Now is the third studio album by <span class="highlightedText">American country singer-songwriter</span> Taylor Swift. 
            It was released on October 25, 2010, by Big Machine Records. Production for the album took place during 
            2009 to 2010 at several recording studios, and was handled by Swift and Nathan Chapman. Written entirely by 
            Swift as the follow-up to Fearless, Speak Now expands on the country pop style of her previous work, and 
            features lyrical themes including love, romance and heartbreak.
          </div>
          </span>
          <br>

          <span class="ans">
          <span class="ansTitle"> Answer: </span>
          <span class="ansText">
              American singer-songwriter
          </span> </span>
          
          <span class="ans">
          <div class="ansTitle"> Context:</div>
          <div class="ansText" style="display:inline">
            Mine  is a song performed by <span class="highlightedText">American singer-songwriter Taylor Swift</span>. The song was written by
             Taylor Swift alone and produced by Swift along with Nathan Chapman. It was released as the lead 
             single from Swift's third studio album, Speak Now (2010) by Big Machine Records.Following an 
             unauthorized internet leak, the song was released on August 4, 2010, two weeks earlier than the 
             intended release date.Swift was inspired to write Mine after reflecting on one of her unnamed 
             crushes and explained that 
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