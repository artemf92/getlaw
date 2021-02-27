<template>
  <div>
    <NavbarFullTpl />
    <Sidebar />
    <main class="full">
      <router-view/>
    </main>
  </div>
</template>
<script>
import NavbarFullTpl from '../components/NavbarFullTpl';
import Sidebar from '../components/Sidebar';

export default {
  name: 'ViewDocTplLayout',
  components: {
    NavbarFullTpl, Sidebar
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
