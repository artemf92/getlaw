<template>
  <header class="app-header" :class="!$store.getters.getSidebar ? 'full': ''">
    <div class="app-header-wrapper">
      <div class="left-block">
        <div class="page-title">{{ current }}</div>
        <div class="header-tab" :class="tab === 1 ? 'active' : ''" @click="setTab(1)">В процессе</div>
        <div class="header-tab" :class="tab === 2 ? 'active' : ''" @click="setTab(2)">Подписание</div>
      </div>
      <div class="right-block">
        <div class="input-search" v-if="$store.getters.getNavbarSearch">
          <input type="text" class="search" v-model="search">
        </div>
        <button class="filter" v-if="$store.getters.getNavbarFilter"></button>
        <button class="add-new btn__yellow" v-if="stage === 0"><header-add/></button>
        <button class="btn__save btn__yellow" v-if="stage === 1"><enter />{{btnAction[stage]}}</button>
        <button class="btn__send btn__yellow" v-else-if="stage === 2"><enter />{{btnAction[stage]}}</button>
        <button class="btn__send btn__yellow" v-else-if="stage === 3"><enter />{{btnAction[stage]}}</button>
      </div>
    </div>
  </header>
</template>

<script>
import headerAdd from '../components/icons/header-add';
import enter from './icons/enter';
import stages from '../lib/stages';

export default {
  name: 'Navbar',
  components: {
    headerAdd, enter
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

<style lang="scss">
.app-header {
  width: calc(100% - 240px - 16px - 16px);
  margin-left: auto;
  margin: 16px 16px 16px auto;
  transition: 0.3s ease-in-out;
  background-color: #fff;
  border-radius: 4px;
  &.full {
    width: calc(100% - 80px - 32px);
  }
}
.app-header-wrapper {
  display: flex;
  // margin: 16px 12px;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  box-shadow: 0px 0px 32px rgba(11, 47, 106, 0.08);
  padding-left: 20px;
}
.left-block {
  width: auto;
  display: flex;
  justify-content: space-around;
  & a {
    color: #29303A;

  }
  .page-title {
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    margin-right: 24px;
  }
  .header-tab {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 26px;
    padding: 0;
    position: relative;
    &.active:before {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      left: 0px;
      bottom: -18px;
      background: #058BD9;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
}
.add-new{
  width: 60px;
  // width: 86px;
  height: 60px;
  background: #FFBA08;
  margin-left: 16px;
}
.app-header-wrapper .btn__send {
  border-radius: 0px 4px 4px 0px !important;
}
.btn__send {
  padding: 18px;
  margin: 0;
  width: 100%;
  height: 60px;
  border-radius: 0px 4px 4px 0px;
}
.btn__save {
  border-radius: 0px 4px 4px 0px;
  padding: 18px;
  margin: 0;
  width: 100%;
  height: 60px;
  color: #fff;
}
.right-block {
  display: flex;
  justify-content: center;
  align-items: center;
}
input.search {
  width: 176px !important;
  height: 40px !important;
  background: #F7F7F7 !important;
  border-radius: 4px !important;
  box-shadow: none !important;
  border: none !important;
  padding: 0 12px !important;
  margin: 0 !important;
}
.input-search {
  position: relative;
  &:after {
    content: '';
    width: 12px;
    height: 12px;
    display: block;
    position: absolute;
    background-image: url('../assets/svg/search.svg');
    top: 13.75px;
    right: 13.85px;
  }
}
.filter {
  width: 40px;
  height: 40px;
  border: 1px solid #EFEFEF;
  box-sizing: border-box;
  border-radius: 4px;
  margin-left: 8px;
  background-image: url('../../public/images/Filter.png');
  background-position: 50%;
  background-repeat: no-repeat;
}
</style>
