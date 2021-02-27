<template>
  <header class="app-header" :class="!$store.getters.getSidebar ? 'full': ''">
    <div class="app-header-wrapper">
      <div class="left-block">
        <div class="page-title">{{ current }}</div>
        <div class="header-tab" :class="tab === 1 ? 'active' : ''" @click="setTab(1)">Мои шаблоны</div>
        <div class="header-tab" :class="tab === 2 ? 'active' : ''" @click="setTab(2)">Блок для шаблонов</div>
      </div>
      <div class="right-block">
        <div class="input-search">
          <input type="text" class="search" v-model="search">
        </div>
        <button class="filter"></button>
        <button class="add-new btn__yellow"><header-add/></button>
      </div>
    </div>
  </header>
</template>

<script>
import headerAdd from '../components/icons/header-add';
import stages from '../lib/stages';

export default {
  name: 'NavbarTemplates',
  components: {
    headerAdd, 
  },
  data() {
    return {
      currentRoute: null,
      search: '',
      title: {
        '/signature' : 'Подписание',
        '/agreement' : 'Согласование',
        '/templates' : 'Шаблоны',
        '/documents' : 'Документы',
        '/news' : 'Новости',
        '/lib' : 'База знаний',
        '/faq' : 'FAQ',
        '/support' : 'Поддержка',
      },
      stage: 2,
    }
  },
  computed: {
    current() {
      let path = this.$route.path;
      return this.title[path];
    },
    tab() {
      return this.$store.getters.getTab;
    },
    btnAction() {
      return stages;
    },
  },
  watch: {
    current() {
      let path = this.$route.path;
      return this.title[path];
    },
  },
  methods: {
    setTab(num) {
      this.$store.commit('SET_TAB', num);
    }
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.btn__yellow {
  border-radius: 0px 4px 4px 0px;
}
</style>
