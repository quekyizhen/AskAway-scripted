<template>
<div>
          <button @click="bookmark()" v-show="!this.isMarked"><img src="@/assets/bookmark.png" width ="30" height = "30"></button>
          <button @click="bookmark()" v-show="this.isMarked"><img src="@/assets/bookmark_red.png" width ="30" height = "30"></button>

</div>

</template>
<script>

export default {
  name: 'button',
  data() {
    return {
        isMarked: this.$store.getters.getMarked
  }
  },
  methods: {
    bookmark() {
      this.$store.commit("bookmark");
      this.isMarked = this.$store.getters.getMarked;
      console.log(this.isMarked);
    }
  }
}
</script>

<style scoped>

button{
  border: none;
  background: none;
  cursor: pointer;
  padding-left: 25px;
  padding-bottom: 0px;
}

</style>