<template>
<div>
          <button @click="bookmark(); change()" v-show="!this.red"><img src="@/assets/bookmark.png" width ="30" height = "30"></button>
          <button @click="bookmark()" v-show="this.red"><img src="@/assets/bookmark_red.png" width ="30" height = "30"></button>

</div>

</template>
<script>

export default {
  name: 'button',
  data() {
    return {
        isMarked: false
  }
  },
  methods: {
    bookmark() {
      this.isMarked = !this.isMarked;
    },
    change() {
        this.red = !this.red
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