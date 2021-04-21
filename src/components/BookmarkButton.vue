<template>
<div>
          <button @click="bookmark(0)" v-show="!this.boxes[0].isMarked"><img src="@/assets/bookmark.png" width ="30" height = "30"></button>
          <button @click="bookmark(0)" v-show="this.boxes[0].isMarked"><img src="@/assets/bookmark_red.png" width ="30" height = "30"></button>

</div>

</template>
<script>

export default {
  name: 'button',
  data() {
    return {
      boxes:
      [
        {isMarked: false},
        {isMarked: false}
      ]
  }
  },
  methods: {
    bookmark(idx) {
      this.boxes[idx].isMarked = !this.boxes[idx].isMarked;
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