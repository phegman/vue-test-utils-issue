<template>
  <div id="app">
    <div>Home {{ homePressed }}</div>
    <div>End {{ endPressed }}</div>
    <div>Up {{ upPressed }}</div>
    <div>Down {{ downPressed }}</div>
    <div>Page Up {{ pageUpPressed }}</div>
    <div>Page Down {{ pageDownPressed }}</div>
    <hr />
    <div
      tabindex="0"
      class="keys"
      @keydown.prevent.home="onHomeDown"
      @keydown.prevent.end="onEndDown"
      @keydown.prevent.up="onUpDown"
      @keydown.prevent.down="onDownDown"
      @keydown.prevent.pageup="onPageUpDown"
      @keydown.prevent.pagedown="onPageDownDown"
    >
      Keys
    </div>
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      homePressed: false,
      endPressed: false,
      upPressed: false,
      downPressed: false,
      pageUpPressed: false,
      pageDownPressed: false,
    };
  },

  methods: {
    onHomeDown() {
      this.homePressed = true;
    },

    onEndDown() {
      this.endPressed = true;
    },

    onUpDown() {
      this.upPressed = true;
    },

    onDownDown() {
      this.downPressed = true;
    },

    onPageUpDown() {
      this.pageUpPressed = true;
    },

    onPageDownDown() {
      this.pageDownPressed = true;
    },
  },
};
</script>
