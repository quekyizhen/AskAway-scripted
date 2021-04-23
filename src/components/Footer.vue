<template>
  <div class="headerStyle">

    <footer>
      <p v-html="copyRtSymbol"></p>
    </footer>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyRtSymbol:'&copy; Team A <sup>2</sup>'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  padding: 30px 0px 0px;
}
p {
  font-size: 15px;
  text-align:left;
  background:#20344a;
  color:white;
  font-weight:lighter;
  font-size:15px;
  margin:0;
  padding-left:30px;
  padding-top:15px;
  padding-bottom:10px;

}
</style>