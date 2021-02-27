<template>
  <div>
    <NavbarTemplates />
    <Sidebar />
    <main :class="!$store.getters.getSidebar ? 'full' : ''">
      <router-view/>
    </main>
  </div>
</template>
<script>
import NavbarTemplates from '../components/NavbarTemplates';
import Sidebar from '../components/Sidebar';

export default {
  name: 'TemplatesMainLayout',
  components: {
    NavbarTemplates, Sidebar
  },
  data:() => ({
    activeItem: 0
  }),
  mounted() {
    this.$store.commit('SET_SIDEBAR', true);
  },
}
</script>

<style lang="scss">
main {
  width: calc(100% - 240px - 32px);
  margin-left: auto;
  margin-right: 16px;
  transition: 0.3s ease-in-out;
  border-radius: 4px;
  // background-color: #fff;

  &.full {
    margin-left: 80px;
    max-width: 992px;
    width: calc(100% - 80px - 32px);
  }
}
</style>
