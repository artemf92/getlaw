<template>
  <div class="instruments-wrapper">
    <img class="instrument" src="../../public/images/editor-add.png" alt="">
    <img class="instrument" src="../../public/images/editor-trash.png" alt="">
    <img class="instrument" src="../../public/images/editor-edit.png" alt="">
    <img class="instrument" src="../../public/images/editor-note.png" alt="">
  </div>
</template>

<script>

export default {
  name: 'InstrumentsEditor',
  components: {
  },
  data() {
    return {
      
    }
  },
  methods: {
  },
};
</script>

<style lang="scss">
.instruments-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
}
.instrument {
  cursor: pointer;
  opacity: 0.4;
  transition: .3s ease-in-out;
}
.instrument:hover {
  opacity: 1;
}
</style>
