<template>
  <div>
    <NavbarFull />
    <Sidebar />
    <main class="full">
      <router-view/>
    </main>
  </div>
</template>
<script>
import NavbarFull from '../components/NavbarFull';
import Sidebar from '../components/Sidebar';

export default {
  name: 'ViewDocLayout',
  components: {
    NavbarFull, Sidebar
  },
  data:() => ({
  }),
  mounted() {
    this.$store.commit('SET_SIDEBAR', false);
  },
}
</script>

<style lang="scss" scoped>
main {
  width: calc(100% - 240px);
  margin-left: auto;
  transition: 0.3s ease-in-out;
  background-color: none;

  &.full {
    margin-left: 96px;
    width: auto;
    max-width: 100%;
    // width: calc(100% - 80px);
  }
}
</style>
